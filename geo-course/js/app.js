/* =========================================================
   地理課程網站｜主程式
   三層導覽：#/world → #/c/洲代號 → #/l/課程代號/洲代號
   一般情況下老師不需要修改這個檔案
   ========================================================= */
(function () {
  'use strict';

  const SITE = window.SITE;
  if (window.GEO_applyLang) window.GEO_applyLang(SITE);   // 英文模式：套用英文名稱（js/site-data.en.js）
  const L = window.L || ((zh) => zh);
  const EN = window.GEO_LANG === 'en';
  const $ = (s, el = document) => el.querySelector(s);
  const app = $('#app');
  const LESSON_CONTENT = {};
  const state = { mode: 'review', slides: [], index: 0, lesson: null, notesOpen: false };

  /* 課程內容檔呼叫這個函式登記內容 */
  window.registerLesson = function (data) { LESSON_CONTENT[data.id] = data; };

  /* ---------- 小工具 ---------- */
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const mdBase = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  // 英文模式：英文後面附的中文名詞（例：monsoon（季風））用較淡的顏色，方便閱讀
  const md = (s) => (window.GEO_LANG === 'en' ? mdBase(s).replace(/（([^（）<>]*[\u4e00-\u9fff][^（）<>]*)）/g, '<span class="zh-gloss">（$1）</span>') : mdBase(s));
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* 無法儲存時略過 */ } }
  };
  const continentById = (id) => SITE.continents.find((c) => c.id === id);
  const lessonById = (id) => SITE.lessons.find((l) => l.id === id);
  const lessonsOn = (cid) => SITE.lessons.filter((l) => l.on && l.on[cid]);
  // 世界地圖計數用：也算進這一洲底下分區地圖（例如亞洲 → 台灣、中國）的課程
  const lessonsOnTree = (cid) => { const ids = [cid, ...SITE.continents.filter((c) => c.parent === cid).map((c) => c.id)]; return SITE.lessons.filter((l) => l.on && ids.some((k) => l.on[k])); };
  const isOpen = (l) => l.status === 'open';
  const openLessons = () => SITE.lessons.filter(isOpen);

  let toastTimer;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
  }

  function setHeaderHeight() {
    const h = $('.toy-header').offsetHeight;
    document.documentElement.style.setProperty('--header-h', h + 'px');
  }

  /* ---------- 麵包屑 ---------- */
  function setCrumbs(items) {
    $('#crumbs').innerHTML = items.map((it, i) => {
      const sep = i ? '<span class="crumb-sep">›</span>' : '';
      return it.href
        ? `${sep}<a class="crumb" href="${it.href}">${it.label}</a>`
        : `${sep}<span class="crumb current" aria-current="page">${it.label}</span>`;
    }).join('');
    const cur = $('#crumbs .current');
    if (cur) cur.scrollIntoView({ block: 'nearest', inline: 'end' });
  }

  /* ---------- 地圖與按鈕 ---------- */
  /* 太陽光暈式按鈕：透明圓形＋呼吸金光點，滑鼠接近時發光、慢慢浮現文字 */
  function sunPin(p, size, i) {
    return `<button class="sun-pin ${p.open ? 'open' : 'locked'} ${p.kind === 'switch' ? 'switch-pin' : ''}" style="left:${p.x}%;top:${p.y}%;width:${size}%"
              data-href="${p.href}" data-open="1" data-name="${esc(p.name)}"
              aria-label="${esc(p.name)}${p.open ? '' : L('（尚未開放）', ' (coming soon)')}">
        <span class="sun-glow"></span>
        <span class="sun-dot"><span class="sun-fly"></span></span>
        ${p.kind === 'switch' ? '<span class="switch-ring"></span>' : ''}
        <span class="sun-label">${p.icon ? `<i>${p.icon}</i>` : ''}<b>${esc(p.name)}</b>${p.open ? '' : `<small>${L('尚未開放', 'Coming soon')}</small>`}</span>
      </button>`;
  }

  function mapStage(mapSrc, pins, hint, opts = {}) {
    if (opts.style === 'sun') {
      return `<div class="map-stage sun-stage ${opts.glow ? 'glow-' + opts.glow : ''}">
        <div class="map-zoomer">
          <img class="map-img" src="${esc(mapSrc)}" alt="" draggable="false">
          ${pins.map((p, i) => sunPin(p, opts.size || 6, i)).join('')}
        </div>
        ${hint ? `<div class="map-hint toy-pill c-yellow">${hint}</div>` : ''}
      </div>`;
    }
    return `<div class="map-stage ${opts.cls || ''}">
      <div class="map-zoomer">
        <img class="map-img" src="${esc(mapSrc)}" alt="" draggable="false">
        ${(opts.spots || []).map((p) => `
          <button class="map-pin entry-pin c-${p.color} ${p.open ? 'open' : 'locked'}" style="left:${p.x}%;top:${p.y}%"
                  data-href="${p.href}" data-open="${p.open ? 1 : 0}" data-name="${esc(p.name)}"
                  aria-label="${L('進入' + esc(p.name) + '地圖', 'Open the ' + esc(p.name) + ' map')}${p.open ? '' : L('（尚未開放）', ' (coming soon)')}">
            <span class="pin-label"><span class="entry-icon">${p.icon}</span><span class="entry-name">${esc(p.name)}</span><span class="entry-go">${p.open ? '›' : '🔒'}</span></span>
          </button>`).join('')}
        ${pins.map((p) => `
          <button class="map-pin c-${p.color} ${p.open ? 'open' : 'locked'}" style="left:${p.x}%;top:${p.y}%"
                  data-href="${p.href}" data-open="${p.open ? 1 : 0}" data-name="${esc(p.name)}"
                  aria-label="${esc(p.name)}${p.open ? '' : L('（尚未開放）', ' (coming soon)')}">
            <span class="pin-label"><span class="pin-dot"></span>${esc(p.name)}${p.open ? '' : ' 🔒'}</span>
          </button>`).join('')}
      </div>
      ${hint ? `<div class="map-hint toy-pill c-yellow">${hint}</div>` : ''}
    </div>`;
  }

  function bindPins(lockedMsg) {
    app.querySelectorAll('.map-pin, .sun-pin, .pick-card').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const open = el.dataset.open === '1';
        const name = el.dataset.name;
        if (!open && lockedMsg === 'block') { toast(L(`「${name}」尚未開放，敬請期待！`, `“${name}” is coming soon!`)); return; }
        const href = el.dataset.href;
        if (el.classList.contains('sun-pin')) {
          if (!href) { toast(L(`「${name}」還沒有設定連結`, `“${name}” has no link yet.`)); return; }
          if (!href.startsWith('#')) { window.open(href, '_blank', 'noopener'); return; }   // 工具或外部網頁：新分頁
        }
        if (el.classList.contains('map-pin') || el.classList.contains('sun-pin')) zoomTo(el, href);
        else location.hash = el.dataset.href;
      });
    });
  }

  /* 滑鼠越接近按鈕，光越暖（--near 0~1）；進入圓形範圍時完整發光並浮現文字 */
  function bindSunProximity() {
    const stage = app.querySelector('.map-stage');
    if (!stage) return;
    const pins = [...stage.querySelectorAll('.sun-pin')];
    if (!pins.length) return;
    let raf = 0, mx = 0, my = 0;
    const update = () => {
      raf = 0;
      pins.forEach((pin) => {
        const r = pin.getBoundingClientRect();
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2, rad = r.width / 2;
        const dist = Math.hypot(mx - cx, my - cy);
        const near = Math.max(0, Math.min(1, 1 - (dist - rad) / (rad * 2.2)));
        pin.style.setProperty('--near', near.toFixed(3));
        pin.classList.toggle('active', dist <= rad);
      });
    };
    stage.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; if (!raf) raf = requestAnimationFrame(update); });
    stage.addEventListener('mouseleave', () => pins.forEach((pin) => { pin.style.setProperty('--near', 0); pin.classList.remove('active'); }));
    pins.forEach((pin) => firefly(pin.querySelector('.sun-fly')));
  }

  /* 螢火蟲光點：每一顆各自隨機地慢慢亮、慢慢暗，亮度與節奏都不固定 */
  function firefly(el) {
    if (!el || !el.animate) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.style.opacity = .75; return; }
    const rnd = (a, b) => a + Math.random() * (b - a);
    const cycle = () => {
      if (!el.isConnected) return; // 換頁後停止
      const peak = rnd(.55, 1), dur = rnd(2600, 6200), low = rnd(0, .12);
      const sx = rnd(-2, 2), sy = rnd(-2, 2); // 微微飄動
      el.animate([
        { opacity: low, transform: 'translate(-50%,-50%) scale(.7)' },
        { opacity: peak, transform: `translate(calc(-50% + ${sx}px), calc(-50% + ${sy}px)) scale(1)`, offset: rnd(.35, .6) },
        { opacity: low, transform: 'translate(-50%,-50%) scale(.75)' }
      ], { duration: dur, easing: 'ease-in-out', fill: 'forwards' })
        .finished.then(() => setTimeout(cycle, rnd(200, 3200))).catch(() => {});
    };
    el.style.opacity = 0;
    setTimeout(cycle, rnd(0, 2500));
  }

  function zoomTo(pin, href) {
    const zoomer = pin.closest('.map-zoomer');
    zoomer.style.transformOrigin = `${pin.style.left} ${pin.style.top}`;
    zoomer.classList.add('zooming');
    setTimeout(() => { location.hash = href; }, 460);
  }

  /* 語言切換按鈕（繁中 / English） */
  function langSwitch(where) {
    const cur = window.GEO_LANG || 'zh';
    return `<div class="lang-toggle ${where === 'header' ? 'in-header' : 'in-page'}" ${where === 'header' ? 'id="langToggle"' : ''} role="group" aria-label="Language">
      <button type="button" data-setlang="zh" class="${cur === 'zh' ? 'on' : ''}">繁中</button><button type="button" data-setlang="en" class="${cur === 'en' ? 'on' : ''}">English</button></div>`;
  }

  /* ---------- 第 1 層：世界地圖 ---------- */
  function renderWorld() {
    setCrumbs([{ label: L('🌏 世界地圖', '🌏 World Map') }]);
    document.title = SITE.title;
    const shown = SITE.continents.filter((c) => !c.hidden && !c.parent);
    const pins = shown.map((c) => ({
      name: c.name, color: c.color, x: c.pos.x, y: c.pos.y,
      href: `#/c/${c.id}`, open: lessonsOnTree(c.id).some(isOpen)
    }));
    app.innerHTML = `<div class="view">
      <section class="page-header-box c-teal">
        <div class="ph-icon">🌏</div>
        <div>
          <div class="ph-badges"><span class="toy-pill c-teal">${L('第 1 層｜世界地圖', 'Level 1 | World Map')}</span><span class="toy-pill c-yellow">${L(`共 ${shown.length} 區`, `${shown.length} areas`)}</span></div>
          <h1 class="page-title">${esc(SITE.world.intro)}</h1>
          <p class="page-desc">${L('點地圖上的洲名進入各洲地圖；用手機的話，下方也有清單可以點。', 'Tap a continent on the map to open it. On a phone, you can also use the list below.')}</p>
        </div>
      </section>
      ${mapStage(SITE.world.map, pins, L('👆 點一個洲', '👆 Tap a continent'), { style: SITE.world.pinStyle, size: SITE.world.pinSize })}
      <div class="list-head"><h2>${L('🗂️ 各洲與地區清單', '🗂️ Continents and Areas')}</h2><span class="muted">${L('🔒 表示該區課程尚未開放，仍可進入看地圖', '🔒 = lessons coming soon (you can still open the map)')}</span></div>
      <div class="grid-4">
        ${shown.map((c) => {
          const ls = lessonsOnTree(c.id); const n = ls.filter(isOpen).length; const open = n > 0;
          return `<a class="toy-card lift pick-card c-${c.color} ${open ? '' : 'locked'}" href="#/c/${c.id}" data-href="#/c/${c.id}" data-open="1" data-name="${esc(c.name)}">
            <span class="pick-icon">${c.icon}</span>
            <span><h3>${esc(c.name)}${open ? '' : ' 🔒'}</h3><span class="pick-meta">${esc(c.en)}・${ls.length ? L(`已開放 ${n} / ${ls.length} 課`, `${n} / ${ls.length} lessons open`) : L('尚無課程', 'No lessons yet')}</span></span>
            <span class="pick-go">›</span></a>`;
        }).join('')}
      </div>
    </div>`;
    bindPins('allow'); // 未開放的洲仍可進入看地圖
    bindSunProximity();
    addSecretPins();
  }

  /* 隱藏按鈕：完全透明、無光點、游標不變、無法用 Tab 選到；點到時粉紅閃光後進入 */
  function addSecretPins() {
    const zoomer = app.querySelector('.map-zoomer');
    if (!zoomer) return;
    SITE.continents.filter((c) => c.hidden).forEach((c) => {
      const b = document.createElement('div');
      b.className = 'secret-pin';
      b.setAttribute('aria-hidden', 'true');
      b.style.left = c.pos.x + '%';
      b.style.top = c.pos.y + '%';
      b.style.width = (c.size || 3) + '%';
      b.addEventListener('click', (e) => { e.stopPropagation(); secretWarp(e.clientX, e.clientY, `#/c/${c.id}`); });
      zoomer.appendChild(b);
    });
  }

  function secretWarp(x, y, href) {
    const fx = document.createElement('div');
    fx.className = 'secret-flash';
    fx.style.setProperty('--fx', x + 'px');
    fx.style.setProperty('--fy', y + 'px');
    for (let i = 0; i < 18; i++) {
      const s = document.createElement('span');
      const a = (i / 18) * Math.PI * 2, d = 90 + Math.random() * 160;
      s.style.setProperty('--dx', Math.cos(a) * d + 'px');
      s.style.setProperty('--dy', Math.sin(a) * d + 'px');
      s.style.animationDelay = (Math.random() * 0.15) + 's';
      s.textContent = ['✦', '♥', '✧', '❀'][i % 4];
      fx.appendChild(s);
    }
    document.body.appendChild(fx);
    document.body.classList.add('secret-entering');
    setTimeout(() => { location.hash = href; }, 650);
    setTimeout(() => { fx.remove(); document.body.classList.remove('secret-entering'); }, 1600);
  }

  /* ---------- 第 2 層：各洲地圖 ---------- */
  function renderContinent(cid) {
    const c = continentById(cid);
    if (!c) return renderNotFound();
    if (c.hidden) return renderSecret(c);
    if (c.parent || c.buttons) return renderSub(c);   // 有 buttons 的洲（如非洲）也用圓形按鈕地圖
    setCrumbs([{ label: L('🌏 世界地圖', '🌏 World Map'), href: '#/world' }, { label: `${c.icon} ${esc(c.name)}` }]);
    document.title = `${c.name}｜${SITE.title}`;
    const ls = lessonsOn(cid);
    const pins = ls.filter((l) => !l.on[cid].hidden).map((l) => ({   // hidden：只列在下方清單，地圖上不放按鈕
      name: l.name, color: c.color, x: l.on[cid].x, y: l.on[cid].y,
      href: `#/l/${l.id}/${cid}`, open: isOpen(l)
    }));
    app.innerHTML = `<div class="view c-${c.color}">
      <section class="page-header-box c-${c.color}">
        <div class="ph-icon">${c.icon}</div>
        <div>
          <div class="ph-badges"><span class="toy-pill c-${c.color}">${L('第 2 層｜', 'Level 2 | ')}${esc(c.name)}</span><span class="toy-pill c-yellow">${esc(c.en)}</span></div>
          <h1 class="page-title">${esc(c.name)}</h1>
          <p class="page-desc">${ls.length ? L(`這裡有 ${ls.length} 課，點地圖上的分區進入課程。`, `There are ${ls.length} lessons here. Tap an area on the map to start.`) : L('這裡目前還沒有安排課程。', 'There are no lessons here yet.')}</p>
        </div>
      </section>
      ${mapStage(c.map, pins, ls.length ? L('👆 點一個分區', '👆 Tap an area') : '', { spots: spotPins(c), spotSize: c.spotSize, cls: 'map-' + cid })}
      ${spotCards(c)}
      <div class="list-head"><h2>📚 ${L(esc(c.name) + '的課程', 'Lessons in ' + esc(c.name))}</h2><span class="muted">${L('🔒 表示尚未開放', '🔒 = coming soon')}</span></div>
      ${ls.length ? `<div class="grid-3">
        ${ls.map((l) => `<a class="toy-card lift pick-card c-${c.color} ${isOpen(l) ? '' : 'locked'}" href="#/l/${l.id}/${cid}" data-href="#/l/${l.id}/${cid}" data-open="${isOpen(l) ? 1 : 0}" data-name="${esc(l.name)}">
            <span class="pick-icon">${isOpen(l) ? '📖' : '🔒'}</span>
            <span><h3>${esc(l.name)}</h3><span class="pick-meta">${esc(l.book || L('冊次未設定', ''))}${Object.keys(l.on).length > 1 ? L('・跨洲課程', ' · Cross-continent') : ''}</span></span>
            <span class="pick-go">›</span></a>`).join('')}
      </div>` : `<div class="toy-card"><p>${L('還沒有課程，之後新增後會自動出現在這裡。', 'No lessons yet. New lessons will show up here.')}</p></div>`}
      <div class="lesson-nav"><a class="toy-btn toy-btn-ghost" href="#/world">${L('← 回到世界地圖', '← Back to World Map')}</a></div>
    </div>`;
    bindPins('block');
    bindSunProximity();
  }

  /* 各洲地圖上的分區入口：膠囊按鈕（左邊是分區圖示、右邊是「›」），和課程按鈕區分；沒設定連結的顯示 🔒 */
  const spotIcon = (s) => { const m = /^#\/c\/([\w-]+)/.exec(s.href || ''); const t = m && continentById(m[1]); return (t && t.icon) || '🧭'; };
  const spotPins = (c) => (c.spots || []).map((s) => ({ name: s.label, x: s.x, y: s.y, href: s.href || '', open: !!s.href, icon: spotIcon(s), color: c.color }));
  const spotCards = (c) => (c.spots || []).length ? `
      <div class="list-head"><h2>${L('🧭 分區入口', '🧭 Areas')}</h2><span class="muted">${L('點進去是下一層的分區地圖；🔒 表示尚未開放', 'Opens a closer map of the area. 🔒 = coming soon')}</span></div>
      <div class="grid-4">${c.spots.map((s) => `<a class="toy-card lift pick-card entry-card c-${c.color} ${s.href ? '' : 'locked'}" href="${esc(s.href || '#')}" data-href="${esc(s.href || '')}" data-open="${s.href ? 1 : 0}" data-name="${esc(s.label)}">
          <span class="pick-icon">${spotIcon(s)}</span><span><h3>${esc(s.label)}${s.href ? '' : ' 🔒'}</h3><span class="pick-meta">${/^#\/l\//.test(s.href || '') ? L('課程', 'Lesson') : L('分區地圖', 'Area map')}</span></span><span class="pick-go">›</span></a>`).join('')}</div>` : '';

  /* 分區地圖（例如亞洲 → 台灣）：圓形呼吸發光按鈕＋這一區的課程 */
  function renderSub(c) {
    const par = c.parent ? continentById(c.parent) : null;
    setCrumbs(par ? [{ label: L('🌏 世界地圖', '🌏 World Map'), href: '#/world' }, { label: `${par.icon} ${esc(par.name)}`, href: `#/c/${par.id}` }, { label: `${c.icon} ${esc(c.name)}` }]
                  : [{ label: L('🌏 世界地圖', '🌏 World Map'), href: '#/world' }, { label: `${c.icon} ${esc(c.name)}` }]);
    document.title = `${c.name}｜${SITE.title}`;
    const btns = (c.buttons || []).map((b) => ({ name: b.label, x: b.x, y: b.y, href: b.href || '', open: true, kind: b.kind, icon: b.icon }));
    const ls = lessonsOn(c.id);
    const pins = ls.map((l) => ({ name: l.name, x: l.on[c.id].x, y: l.on[c.id].y, href: `#/l/${l.id}/${c.id}`, open: isOpen(l) }));
    app.innerHTML = `<div class="view c-${c.color}">
      <section class="page-header-box c-${c.color}">
        <div class="ph-icon">${c.icon}</div>
        <div>
          <div class="ph-badges"><span class="toy-pill c-${c.color}">${par ? esc(par.name) + L('｜分區地圖', ' | Area map') : L('第 2 層｜', 'Level 2 | ') + esc(c.name)}</span><span class="toy-pill c-yellow">${esc(c.en || '')}</span></div>
          <h1 class="page-title">${esc(c.name)}</h1>
          <p class="page-desc">${L('點地圖上發光的圓點進入。', 'Tap a glowing dot on the map.')}</p>
        </div>
      </section>
      ${mapStage(c.map, btns, '', { style: 'sun', size: c.pinSize || SITE.world.pinSize, glow: c.glow })}
      ${ls.length ? `<div class="list-head"><h2>📚 ${L(esc(c.name) + '的課程', 'Lessons in ' + esc(c.name))}</h2></div><div class="grid-3">
        ${ls.map((l) => `<a class="toy-card lift pick-card c-${c.color} ${isOpen(l) ? '' : 'locked'}" href="#/l/${l.id}/${c.id}" data-href="#/l/${l.id}/${c.id}" data-open="${isOpen(l) ? 1 : 0}" data-name="${esc(l.name)}">
            <span class="pick-icon">${isOpen(l) ? '📖' : '🔒'}</span><span><h3>${esc(l.name)}</h3></span><span class="pick-go">›</span></a>`).join('')}</div>` : ''}
      <div class="lesson-nav"><a class="toy-btn toy-btn-ghost" href="${par ? `#/c/${par.id}` : '#/world'}">${L('← 回到', '← Back to ')}${par ? esc(par.name) : L('世界地圖', 'World Map')}</a></div>
    </div>`;
    bindPins('block');
    bindSunProximity();
  }

  /* 隱藏區：不顯示名稱，只有地圖（之後可在 lessons 的 on 裡加入 x7 放課程按鈕） */
  function renderSecret(c) {
    setCrumbs([{ label: L('🌏 世界地圖', '🌏 World Map'), href: '#/world' }, { label: '✦' }]);
    document.title = SITE.title;
    const btns = (c.buttons || []).map((b, i) => ({ name: b.label, color: c.color, x: b.x, y: b.y, href: b.href || '', open: true, i }));
    app.innerHTML = `<div class="view secret-view">
      ${mapStage(c.map, btns, '', { style: 'sun', size: SITE.world.pinSize })}
      <div class="lesson-nav"><a class="toy-btn toy-btn-ghost" href="#/world">${L('← 回到世界地圖', '← Back to World Map')}</a></div>
    </div>`;
    app.querySelectorAll('.sun-pin').forEach((el) => el.addEventListener('click', (e) => {
      e.preventDefault();
      const href = el.dataset.href;
      if (!href) { toast(L(`「${el.dataset.name}」還沒有設定連結`, `“${el.dataset.name}” has no link yet.`)); return; }
      window.open(href, '_blank', 'noopener');   // 工具程式在新分頁開啟
    }));
    bindSunProximity();
  }

  /* ---------- 第 3 層：課程頁 ---------- */
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src + '?v=' + (SITE.version || '');   // 加版本號，避免瀏覽器讀到舊的暫存
      s.onload = resolve;
      s.onerror = () => reject(new Error(L('找不到內容檔：', 'File not found: ') + src));
      document.body.appendChild(s);
    });
  }
  /* 英文模式先讀 lessons/en/ 的英文版；沒有英文版就讀中文版（_fallback 標記） */
  async function loadLessonContent(l) {
    if (LESSON_CONTENT[l.id]) return LESSON_CONTENT[l.id];
    if (EN && l.fileEn) {
      try { await loadScript(l.fileEn); if (LESSON_CONTENT[l.id]) return LESSON_CONTENT[l.id]; } catch (e) { /* 沒有英文版 */ }
    }
    await loadScript(l.file);
    if (!LESSON_CONTENT[l.id]) throw new Error(L('內容檔沒有呼叫 registerLesson', 'The lesson file did not call registerLesson'));
    if (EN) LESSON_CONTENT[l.id]._fallback = true;
    return LESSON_CONTENT[l.id];
  }

  /* ---------- 課程內容元件（複習模式與簡報共用） ---------- */
  const imgFig = (im, cls = '') => `<figure class="lesson-fig ${cls}"><img src="${esc(im.src)}" alt="${esc(im.caption || '')}" loading="lazy">
      ${im.caption || im.credit ? `<figcaption>${esc(im.caption || '')}${im.credit ? `<small>${esc(im.credit)}</small>` : ''}</figcaption>` : ''}</figure>`;
  const miniGrid = (g, cls = '') => `<div class="mini-grid ${cls} n${g.length}">${g.map((x) => `
      <div class="mini-card"><div class="mini-top"><span class="mini-icon">${x.icon || '•'}</span><b>${esc(x.title)}</b></div>
      <p>${md(x.text)}</p>${x.tag ? (x.chart
        ? `<button type="button" class="chart-btn" data-chart="${regChart(x.chart)}" onclick="window.GEO_openChart(+this.dataset.chart)" title="${L('點我看氣候圖', 'Open the climate chart')}"><span class="chart-btn-icon">📊</span><span><small>${L('看氣候圖', 'Climate chart')}</small>${esc(x.tag)}</span></button>`
        : `<span class="mini-tag">📍 ${esc(x.tag)}</span>`) : ''}</div>`).join('')}</div>`;

  /* ---------- 城市氣候圖：點圖釘 → 彈出老師氣候圖工具的展示模式 ---------- */
  const CHARTS = [];
  function regChart(c) { CHARTS.push(c); return CHARTS.length - 1; }
  function encodeChart(obj) {
    const bytes = new TextEncoder().encode(JSON.stringify(obj));
    let bin = ''; bytes.forEach((b) => { bin += String.fromCharCode(b); });
    return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }
  function openChart(i) {
    const c = CHARTS[i]; if (!c) return;
    const data = Object.assign({ tempPeaks: [], precipPeaks: [] }, c, EN ? { lang: 'en' } : {});
    delete data.source;
    const src = 'tools/climate/index.html?v=' + (SITE.version || '') + '#d=' + encodeChart(data);   // 加版本號，避免讀到舊版工具
    let m = $('#chartModal');
    if (!m) {
      m = document.createElement('div'); m.id = 'chartModal'; m.className = 'chart-modal';
      m.innerHTML = `<div class="chart-box"><button class="chart-x" aria-label="${L('關閉', 'Close')}">✕</button><iframe title="${L('氣候圖', 'Climate chart')}"></iframe><p class="chart-src"></p></div>`;
      document.body.appendChild(m);
      m.addEventListener('click', (e) => { if (e.target === m || e.target.closest('.chart-x')) closeChart(); });
    }
    m.querySelector('iframe').src = src;
    m.querySelector('.chart-src').textContent = c.source ? L('資料來源：', 'Source: ') + c.source : '';
    m.classList.add('open');
  }
  function closeChart() { const m = $('#chartModal'); if (m) { m.classList.remove('open'); m.querySelector('iframe').src = 'about:blank'; } }
  window.GEO_openChart = openChart;   // 按鈕直接呼叫
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && $('#chartModal.open')) { e.stopImmediatePropagation(); closeChart(); } }, true);
  // 3D 地形模型按鈕：開啟「地形觀察」並自動載入對應模型
  const terrainBtns = (k, cls = '') => k.models?.length ? `<div class="terrain-row ${cls}">${k.models.map((m) =>
      `<a class="terrain-btn" href="tools/terrain/index.html#model=${encodeURIComponent(m.id)}${m.mode ? '&mode=' + encodeURIComponent(m.mode) : ''}${m.wind ? '&wind=' + encodeURIComponent(m.wind) : ''}${EN ? '&lang=en' : ''}" target="_blank" rel="noopener" title="${L('在新分頁開啟 3D 地形模型', 'Open the 3D terrain model in a new tab')}"><span class="terrain-btn-icon">${m.icon || '🏔️'}</span><span><small>${esc(m.small || L('開啟 3D 地形', 'Open 3D terrain'))}</small>${esc(m.label)}</span></a>`).join('')}</div>` : '';
  const conceptInner = (k) => `
      <p class="concept-text">${md(k.text)}</p>
      ${k.points?.length ? `<ul class="dot-list">${k.points.map((p) => `<li>${md(p)}</li>`).join('')}</ul>` : ''}
      ${k.grid?.length ? miniGrid(k.grid) : ''}
      ${k.image ? imgFig(k.image) : ''}
      ${k.images?.length ? `<div class="fig-row">${k.images.map((im) => imgFig(im)).join('')}</div>` : ''}
      ${terrainBtns(k)}`;
  const conceptCard = (k) => `
      <article class="toy-card lift top-color concept-card c-${k.color || 'teal'} ${((k.grid?.length || 0) >= 3 || k.image || k.images?.length) ? 'wide' : ''}">
        <div class="concept-top"><span class="concept-icon">${k.icon || '📌'}</span><h3>${esc(k.title)}</h3></div>
        ${conceptInner(k)}
      </article>`;
  const thinkCard = (t) => `
      <details class="toy-card think-card"><summary><span class="think-badge">${L('🤔 想一想', '🤔 Think')}</span><span class="think-q">${md(t.q)}</span><span class="think-open">${L('看答案', 'Answer')}</span></summary>
        <div class="think-a">💡 ${md(t.a)}</div></details>`;
  const LETTERS = 'ABCD';
  const quizCard = (q, key) => `
      <div class="toy-card quiz-card" data-quiz="${key}" data-answer="${q.answer}">
        <div class="quiz-head"><span class="toy-pill c-red">${L('📝 學習 check', '📝 Check')}</span></div>
        <p class="quiz-q">${md(q.q)}</p>
        <div class="quiz-opts">${q.options.map((o, i) => `<button class="quiz-opt" data-i="${i}"><b>${LETTERS[i]}</b><span>${md(o)}</span></button>`).join('')}</div>
        <div class="quiz-explain"><b class="quiz-result"></b> ${md(q.explain || '')}</div>
      </div>`;

  async function renderLesson(lid, fromCid) {
    const l = lessonById(lid);
    if (!l) return renderNotFound();
    const cid = (fromCid && l.on[fromCid]) ? fromCid : Object.keys(l.on)[0];
    const c = continentById(cid);
    const par = c.parent ? continentById(c.parent) : null;   // 分區地圖（如台灣）多顯示上一層
    setCrumbs([{ label: L('🌏 世界地圖', '🌏 World Map'), href: '#/world' }, ...(par ? [{ label: `${par.icon} ${esc(par.name)}`, href: `#/c/${par.id}` }] : []),
      { label: `${c.icon} ${esc(c.name)}`, href: `#/c/${cid}` }, { label: `📖 ${esc(l.name)}` }]);
    document.title = `${l.name}｜${SITE.title}`;

    if (!isOpen(l)) {
      app.innerHTML = `<div class="view"><section class="page-header-box c-${c.color}"><div class="ph-icon">🔒</div><div>
        <h1 class="page-title">${L(`「${esc(l.name)}」尚未開放`, `“${esc(l.name)}” is coming soon`)}</h1><p class="page-desc">${L('這一課還在準備中，敬請期待！', 'This lesson is still being prepared.')}</p></div></section>
        <div class="lesson-nav"><a class="toy-btn toy-btn-ghost" href="#/c/${cid}">${L(`← 回到${esc(c.name)}地圖`, `← Back to the ${esc(c.name)} map`)}</a></div></div>`;
      return;
    }

    let d;
    try { d = await loadLessonContent(l); }
    catch (err) {
      app.innerHTML = `<div class="view"><div class="toy-card"><h2>${L('⚠️ 課程內容讀取失敗', '⚠️ Could not load this lesson')}</h2><p class="page-desc">${esc(err.message)}</p></div></div>`;
      return;
    }
    state.lesson = { meta: l, data: d, cid, c };
    $('#modeToggle').hidden = false;

    const conts = Object.keys(l.on).map((k) => continentById(k));
    const allOpen = openLessons();
    const pos = allOpen.findIndex((x) => x.id === l.id);
    const prev = allOpen[pos - 1], next = allOpen[pos + 1];
    const doneSet = new Set(store.get('geo-check-' + l.id, []));

    app.innerHTML = `<div class="view c-${c.color}">
      <section class="page-header-box c-${c.color}">
        <div class="ph-icon">${d.cover || c.icon}</div>
        <div style="flex:1">
          <div class="ph-badges">
            ${conts.map((x) => `<span class="toy-pill c-${x.color}">${x.icon} ${esc(x.name)}</span>`).join('')}
            ${l.book ? `<span class="toy-pill c-yellow">${esc(l.book)}</span>` : ''}
            ${d.periods ? `<span class="toy-pill c-teal">⏱ ${esc(d.periods)}</span>` : ''}
          </div>
          <h1 class="page-title">${esc(d.title)}</h1>
          ${d.subtitle ? `<p class="page-desc">${esc(d.subtitle)}</p>` : ''}
        </div>
        <button class="toy-btn c-teal" data-goto-slides style="position:relative;z-index:1">${L('📺 用簡報模式上課', '📺 Slide mode')}</button>
      </section>
      ${d._fallback ? `<div class="toy-card lang-note">🌐 English version coming soon — this lesson is shown in Chinese for now.</div>` : ''}

      ${d.sections?.length ? `<nav class="section-jump">${d.sections.map((sec, i) => `<a class="toy-pill c-${sec.color || 'teal'}" href="#sec-${i}" data-jump="sec-${i}">${sec.icon || ''} ${esc(sec.code)} ${esc(sec.title)}</a>`).join('')}</nav>` : ''}

      ${d.intro ? `<section class="section"><div class="toy-card intro-card">
        <div class="concept-top"><span class="concept-icon">${d.intro.icon || '💭'}</span><h2>${esc(d.intro.title)}</h2></div>
        <p class="concept-text">${md(d.intro.text)}</p>${d.intro.image ? `<div class="fig-row">${imgFig(d.intro.image)}</div>` : ''}${d.intro.think ? thinkCard(d.intro.think) : ''}</div></section>` : ''}

      ${d.goals?.length ? `<section class="section"><div class="section-head"><span class="section-icon">🎯</span><h2>${d.sections?.length ? L('學習課題', 'Learning Topics') : L('學習目標', 'Learning Goals')}</h2></div>
        <div class="goal-list">${d.goals.map((g, i) => `<div class="toy-card goal-item"><span class="goal-num">${i + 1}</span><p>${md(g)}</p></div>`).join('')}</div></section>` : ''}

      ${(d.sections || []).map((sec, si) => `<section class="section lesson-sec c-${sec.color || 'teal'}" id="sec-${si}">
        <div class="sec-band"><span class="sec-code">${esc(sec.code)}</span><h2>${sec.icon || ''} ${esc(sec.title)}</h2></div>
        <div class="grid-2">${(sec.concepts || []).map(conceptCard).join('')}</div>
        ${sec.think?.length ? `<div class="think-list">${sec.think.map(thinkCard).join('')}</div>` : ''}
        ${sec.quiz?.length ? `<div class="quiz-list">${sec.quiz.map((q, qi) => quizCard(q, si + '-' + qi)).join('')}</div>` : ''}
        ${sec.can ? `<div class="can-do">🙋 ${md(sec.can)}</div>` : ''}
      </section>`).join('')}

      ${d.concepts?.length ? `<section class="section"><div class="section-head"><span class="section-icon">💡</span><h2>${L('重點概念', 'Key Ideas')}</h2><span class="toy-pill c-yellow">${L(`${d.concepts.length} 個觀念`, `${d.concepts.length} ideas`)}</span></div>
        <div class="grid-2">${d.concepts.map(conceptCard).join('')}</div></section>` : ''}

      ${d.myths?.length ? `<section class="section"><div class="section-head"><span class="section-icon">🧐</span><h2>${L('常見迷思', 'Common Mistakes')}</h2><span class="toy-pill c-red">${L('容易搞錯的地方', 'Easy to get wrong')}</span></div>
        <div style="display:grid;gap:18px">${d.myths.map((m) => `
          <div class="toy-card myth-card">
            <div class="myth-side myth-wrong"><div class="myth-tag">${L('❌ 錯誤想法', '❌ Wrong idea')}</div><p>${md(m.wrong)}</p></div>
            <div class="myth-side myth-right"><div class="myth-tag">${L('✅ 正確觀念', '✅ Right idea')}</div><p>${md(m.right)}</p></div>
          </div>`).join('')}</div></section>` : ''}

      ${d.explore?.length ? `<section class="section"><div class="section-head"><span class="section-icon">🔬</span><h2>${L('動手探索', 'Explore')}</h2></div>
        <div class="grid-3">${d.explore.map((x) => `
          <div class="toy-card lift explore-card"><span class="explore-icon">${x.icon || '🧪'}</span><h3>${esc(x.title)}</h3><p>${md(x.desc)}</p>
            ${x.href ? `<a class="toy-btn c-yellow" href="${esc(x.href)}" target="_blank" rel="noopener">${/youtu/.test(x.href) ? L('▶ 觀看影片', '▶ Watch video') : L('開啟工具', 'Open tool')} ↗</a>`
                     : `<button class="toy-btn toy-btn-ghost" disabled>${L('🔗 連結待設定', '🔗 Link coming soon')}</button>`}
          </div>`).join('')}</div></section>` : ''}

      ${d.checklist?.length ? `<section class="section"><div class="section-head"><span class="section-icon">✅</span><h2>${L('自我檢核', 'Self-Check')}</h2><span class="toy-pill c-teal">${L('點一下就能打勾', 'Tap to check')}</span></div>
        <div class="toy-card check-wrap">
          <div class="check-progress"><div class="check-bar"><span id="checkBar"></span></div><span class="check-count" id="checkCount"></span></div>
          ${d.checklist.map((t, i) => `<button class="check-item ${doneSet.has(i) ? 'done' : ''}" data-i="${i}"><span class="check-box">✓</span><span>${md(t)}</span></button>`).join('')}
        </div></section>` : ''}

      <nav class="lesson-nav">
        ${prev ? `<a class="toy-btn toy-btn-ghost" href="#/l/${prev.id}">${L('← 上一課：', '← Previous: ')}${esc(prev.name)}</a>` : `<a class="toy-btn toy-btn-ghost" href="#/c/${cid}">${L(`← 回到${esc(c.name)}地圖`, `← Back to the ${esc(c.name)} map`)}</a>`}
        ${next ? `<a class="toy-btn c-red" href="#/l/${next.id}">${L('下一課：', 'Next: ')}${esc(next.name)} →</a>` : `<a class="toy-btn c-teal" href="#/world">${L('🌏 回到世界地圖', '🌏 Back to World Map')}</a>`}
      </nav>
    </div>`;

    // 自我檢核
    const updateCheck = () => {
      const total = d.checklist?.length || 0; if (!total) return;
      $('#checkBar').style.width = (doneSet.size / total * 100) + '%';
      $('#checkCount').textContent = doneSet.size === total ? L('🎉 全部完成！', '🎉 All done!') : L(`已完成 ${doneSet.size} / ${total}`, `${doneSet.size} / ${total} done`);
    };
    app.querySelectorAll('.check-item').forEach((b) => b.addEventListener('click', () => {
      const i = +b.dataset.i;
      doneSet.has(i) ? doneSet.delete(i) : doneSet.add(i);
      b.classList.toggle('done');
      store.set('geo-check-' + l.id, [...doneSet]);
      updateCheck();
    }));
    updateCheck();
    bindQuizzes(app);
    app.querySelectorAll('[data-jump]').forEach((a) => a.addEventListener('click', (e) => {
      e.preventDefault(); document.getElementById(a.dataset.jump)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }));
    $('[data-goto-slides]').addEventListener('click', () => setMode('slides'));

    buildSlides(d, l, c, next);
    if (state.mode === 'slides') { state.index = 0; showSlide(0); }
  }

  function bindQuizzes(root) {
    root.querySelectorAll('.quiz-card').forEach((card) => {
      const ans = +card.dataset.answer;
      card.querySelectorAll('.quiz-opt').forEach((b) => b.addEventListener('click', () => {
        if (card.classList.contains('answered')) return;
        const pick = +b.dataset.i;
        card.classList.add('answered');
        card.querySelectorAll('.quiz-opt').forEach((o) => {
          if (+o.dataset.i === ans) o.classList.add('right');
          else if (o === b) o.classList.add('wrong');
        });
        card.querySelector('.quiz-result').textContent = pick === ans ? L('🎉 答對了！', '🎉 Correct!') : L(`答案是 ${LETTERS[ans]}。`, `The answer is ${LETTERS[ans]}.`);
      }));
    });
  }

  function renderNotFound() {
    setCrumbs([{ label: L('🌏 世界地圖', '🌏 World Map'), href: '#/world' }, { label: L('找不到頁面', 'Page not found') }]);
    app.innerHTML = `<div class="view"><div class="toy-card"><h2>${L('🧭 找不到這個頁面', '🧭 Page not found')}</h2><p class="page-desc">${L('可能是網址打錯了。', 'The address may be wrong.')}</p><br><a class="toy-btn c-teal" href="#/world">${L('回到世界地圖', 'Back to World Map')}</a></div></div>`;
  }

  /* ---------- 簡報：由課程內容自動產生 ---------- */
  function buildSlides(d, l, c, next) {
    const S = [];
    const color = c.color;
    S.push({ cat: L('課程開場', 'Start'), color, title: d.title, note: d.coverNote || '',
      html: `<div class="slide-body slide-cover c-${color}"><div class="cover-icon">${d.cover || c.icon}</div>
        <div><h1 class="slide-title">${esc(d.title)}</h1>${d.subtitle ? `<p class="slide-sub">${esc(d.subtitle)}</p>` : ''}
        <p class="slide-sub" style="font-size:1.2rem;margin-top:22px">${Object.keys(l.on).map((k) => continentById(k).icon + ' ' + continentById(k).name).join('　')}${l.book ? '　｜　' + esc(l.book) : ''}</p></div></div>` });
    const conceptSlide = (k, cat) => {
      const hasMedia = k.image || k.images?.length;
      const body = k.grid?.length
        ? `<p class="slide-lead">${md(k.text)}</p>${miniGrid(k.grid, 'slide-mini')}`
        : hasMedia
          ? `<div class="slide-split"><div><p>${md(k.text)}</p>${k.points?.length ? `<ul class="dot-list">${k.points.map((p) => `<li>${md(p)}</li>`).join('')}</ul>` : ''}</div>
             ${k.image ? imgFig(k.image, 'slide-fig') : `<div class="fig-row">${k.images.map((im) => imgFig(im, 'slide-fig')).join('')}</div>`}</div>`
          : `<p>${md(k.text)}</p>${k.points?.length ? `<ul class="dot-list">${k.points.map((p) => `<li>${md(p)}</li>`).join('')}</ul>` : ''}`;
      const wideMedia = k.images?.length;
      return { cat, color: k.color || 'teal', title: k.title, note: k.note || '',
        html: `<div class="slide-concept-head c-${k.color || 'teal'}"><span class="concept-icon">${k.icon || '📌'}</span><h2 class="slide-title">${esc(k.title)}</h2>${terrainBtns(k, 'in-slide')}</div>
          <div class="slide-body c-${k.color || 'teal'} ${wideMedia ? 'media-wide' : ''}">${body}</div>` };
    };
    const thinkSlide = (t, cat, color) => ({ cat, color: color || 'yellow', title: L('想一想', 'Think'), note: t.note || L('按「下一張」先顯示答案', 'Press “Next” to show the answer first'), reveal: true,
      html: `<h2 class="slide-title">${L('🤔 想一想', '🤔 Think')}</h2><div class="slide-body"><p class="slide-question">${md(t.q)}</p>
        <div class="reveal-box"><button class="reveal-btn" data-reveal>${L('👀 顯示答案', '👀 Show answer')}</button><div class="reveal-content">💡 ${md(t.a)}</div></div></div>` });
    const quizSlide = (q, cat) => ({ cat, color: 'red', title: L('學習 check', 'Check'), note: q.note || L('按「下一張」先顯示答案', 'Press “Next” to show the answer first'), reveal: true,
      html: `<h2 class="slide-title">${L('📝 學習 check', '📝 Check')}</h2><div class="slide-body"><p class="slide-question">${md(q.q)}</p>
        <div class="slide-opts">${q.options.map((o, i) => `<div class="slide-opt ${i === q.answer ? 'is-answer' : ''}"><b>${LETTERS[i]}</b><span>${md(o)}</span></div>`).join('')}</div>
        <div class="reveal-box"><button class="reveal-btn" data-reveal>${L('👀 顯示答案', '👀 Show answer')}</button><div class="reveal-content">${L('✅ 答案：', '✅ Answer: ')}<b>${LETTERS[q.answer]}</b>　${md(q.explain || '')}</div></div></div>` });

    if (d.intro) {
      S.push({ cat: L('課程開場', 'Start'), color: 'yellow', title: d.intro.title, note: d.intro.note || '',
        html: `<div class="slide-concept-head"><span class="concept-icon">${d.intro.icon || '💭'}</span><h2 class="slide-title">${esc(d.intro.title)}</h2></div><div class="slide-body">${d.intro.image ? `<div class="slide-split"><div><p>${md(d.intro.text)}</p></div>${imgFig(d.intro.image, 'slide-fig')}</div>` : `<p>${md(d.intro.text)}</p>`}</div>` });
      if (d.intro.think) S.push(thinkSlide(d.intro.think, L('課程開場', 'Start'), 'yellow'));
    }
    if (d.goals?.length) S.push({ cat: d.sections?.length ? L('學習課題', 'Learning Topics') : L('學習目標', 'Learning Goals'), color: 'teal', title: L('今天要學會', 'Today we will learn'), note: d.goalsNote || '',
      html: `<h2 class="slide-title">${L('🎯 今天要學會', '🎯 Today we will learn')}</h2><div class="slide-body"><div class="slide-goal-grid">${d.goals.map((g, i) => `<div class="toy-card goal-item"><span class="goal-num">${i + 1}</span><p>${md(g)}</p></div>`).join('')}</div></div>` });
    (d.sections || []).forEach((sec) => {
      const sc = sec.color || 'teal', tag = `${sec.code} ${sec.title}`;
      S.push({ cat: L('章節', 'Section'), color: sc, title: tag, note: sec.note || '',
        html: `<div class="slide-body slide-section c-${sc}"><div class="sec-big-code">${esc(sec.code)}</div><h1 class="slide-title">${sec.icon || ''} ${esc(sec.title)}</h1>
          ${sec.can ? `<p class="slide-sub">🙋 ${md(sec.can)}</p>` : ''}</div>` });
      (sec.concepts || []).forEach((k) => {
        // 小卡＋圖片、或條列很多又有圖片的概念：圖片另外放一張投影片，避免擠在一起
        const splitImg = k.image && (k.grid?.length || (k.points?.length || 0) >= 3);
        const splitImgs = (k.images?.length || 0) >= 1 && (((k.images.length >= 3) && (k.points?.length || 0) >= 1) || (k.grid?.length || 0) >= 1);
        S.push(conceptSlide(splitImg ? { ...k, image: null } : splitImgs ? { ...k, images: null } : k, tag));
        if (splitImgs) S.push({ cat: tag, color: k.color || 'teal', title: k.title + L('（照片）', ' (photos)'), note: k.note || '',
          html: `<div class="slide-concept-head c-${k.color || 'teal'}"><span class="concept-icon">${k.icon || '📌'}</span><h2 class="slide-title">${esc(k.title)}</h2></div>
            <div class="slide-body c-${k.color || 'teal'} slide-photos"><div class="fig-row n${k.images.length}">${k.images.map((im) => imgFig(im, 'slide-fig')).join('')}</div></div>` });
        if (splitImg) S.push({ cat: tag, color: k.color || 'teal', title: k.title + L('（圖）', ' (figure)'), note: k.note || '',
          html: `<div class="slide-concept-head c-${k.color || 'teal'}"><span class="concept-icon">${k.icon || '📌'}</span><h2 class="slide-title">${esc(k.title)}</h2></div>
            <div class="slide-body c-${k.color || 'teal'} slide-imgonly">${imgFig(k.image, 'slide-fig')}</div>` });
      });
      (sec.think || []).forEach((t) => S.push(thinkSlide(t, tag, sc)));
      (sec.quiz || []).forEach((q) => S.push(quizSlide(q, tag)));
    });
    (d.concepts || []).forEach((k, i, a) => S.push(conceptSlide(k, L(`重點概念 ${i + 1} / ${a.length}`, `Key idea ${i + 1} / ${a.length}`))));
    (d.myths || []).forEach((m, i, a) => S.push({ cat: L(`常見迷思 ${i + 1} / ${a.length}`, `Common mistake ${i + 1} / ${a.length}`), color: 'red', title: L('迷思：', 'Myth: ') + m.wrong.slice(0, EN ? 30 : 14), note: m.note || '',
      html: `<h2 class="slide-title">${L('🧐 這樣想對嗎？', '🧐 Is this right?')}</h2><div class="slide-body"><div class="slide-myth">
        <div class="myth-side myth-wrong"><div class="myth-tag">${L('❌ 錯誤想法', '❌ Wrong idea')}</div><p>${md(m.wrong)}</p></div>
        <div class="myth-side myth-right"><div class="myth-tag">${L('✅ 正確觀念', '✅ Right idea')}</div><p>${md(m.right)}</p></div></div></div>` }));
    if (d.explore?.length) S.push({ cat: L('動手探索', 'Explore'), color: 'yellow', title: L('動手探索', 'Explore'), note: d.exploreNote || '',
      html: `<h2 class="slide-title">${L('🔬 動手探索', '🔬 Explore')}</h2><div class="slide-body"><div class="slide-explore ${d.explore.length > 4 ? 'many' : ''} ${d.explore.length > 6 ? 'lots' : ''}">${d.explore.map((x) => `<div class="toy-card"><span style="font-size:2.6rem">${x.icon || '🧪'}</span><h3>${esc(x.title)}</h3><p>${md(x.desc)}</p></div>`).join('')}</div></div>` });
    if (d.checklist?.length) S.push({ cat: L('課堂回顧', 'Review'), color: 'teal', title: L('我學會了嗎？', 'Did I learn it?'), note: d.checklistNote || '',
      html: `<h2 class="slide-title">${L('✅ 我學會了嗎？', '✅ Did I learn it?')}</h2><div class="slide-body"><div class="slide-check">${d.checklist.map((t) => `<div>${md(t)}</div>`).join('')}</div></div>` });
    S.push({ cat: L('下課囉', 'The End'), color, title: L('下一站', 'Next stop'), note: '',
      html: `<div class="slide-body center" style="align-items:center;text-align:center"><div style="font-size:6rem">👋</div>
        <h2 class="slide-title">${L('今天的旅程到這裡', 'That’s the end of today’s trip')}</h2><p class="slide-sub">${next ? `${L('下一站：', 'Next stop: ')}<strong>${esc(next.name)}</strong>` : L('回到世界地圖，選擇下一個目的地！', 'Go back to the World Map and pick your next stop!')}</p>
        <p class="slide-sub" style="font-size:1.15rem">${L('回家可以用「📖 複習模式」再看一次重點', 'At home, use “📖 Review” to go over the key points again')}</p></div>` });
    state.slides = S;
    $('#tocGrid').innerHTML = S.map((s, i) => `<button class="toc-item" data-i="${i}"><b>${i + 1}</b><span>${esc(s.cat)}｜${esc(s.title)}</span></button>`).join('');
  }

  function showSlide(i, dir = 0) {
    const S = state.slides; if (!S.length) return;
    state.index = Math.max(0, Math.min(S.length - 1, i));
    const s = S[state.index];
    $('#slideScaler').innerHTML = `<div class="slide-frame ${dir ? 'anim' : ''}" style="--dir:${dir * 40}px">
      <div class="slide-meta"><span class="toy-pill c-${s.color}">${esc(s.cat)}</span><span class="slide-counter">${state.index + 1} / ${S.length}</span></div>
      ${s.html}</div>`;
    $('#dockCount').textContent = `${state.index + 1} / ${S.length}`;
    $('#slideProgress').style.width = ((state.index + 1) / S.length * 100) + '%';
    $('#notesText').textContent = s.note || L('（這一張沒有備忘）', '(No notes for this slide)');
    document.querySelectorAll('.toc-item').forEach((b) => b.classList.toggle('current', +b.dataset.i === state.index));
    fitSlide();
    fitSlideText();
    $('#slideScaler').querySelectorAll('img').forEach((im) => { if (!im.complete) im.addEventListener('load', fitSlideText, { once: true }); });
  }

  /* 內容超出投影片底部時自動縮小（英文通常比中文長）；沒有超出的投影片完全不變 */
  function fitSlideText() {
    const f = $('.slide-frame'); if (!f) return;
    const body = f.querySelector('.slide-body'); if (!body) return;
    const over = () => { const fb = f.getBoundingClientRect(); return [...f.querySelectorAll('*')].some((e) => { const b = e.getBoundingClientRect(); return b.width && b.height && b.bottom > fb.bottom - 6; }); };
    let z = 1; body.style.zoom = '';
    while (over() && z > 0.62) { z -= 0.04; body.style.zoom = z.toFixed(2); }
  }

  function fitSlide() {
    if (state.mode !== 'slides') return;
    setHeaderHeight();
    const head = document.body.classList.contains('is-fullscreen') ? 0 : $('.toy-header').offsetHeight;
    const dockH = 86;
    const w = window.innerWidth - 32, h = window.innerHeight - head - dockH - 24;
    const s = Math.max(0.2, Math.min(w / 1280, h / 720));
    $('#slideScaler').style.transform = `scale(${s})`;
  }

  function setMode(m) {
    state.mode = m;
    document.body.classList.toggle('mode-slides', m === 'slides');
    document.querySelectorAll('.mode-btn').forEach((b) => b.classList.toggle('active', b.dataset.mode === m));
    if (m === 'slides') { showSlide(state.index); window.scrollTo(0, 0); }
    else {
      closePanels();
      if (document.fullscreenElement) document.exitFullscreen?.();
    }
  }

  function closePanels() {
    $('#tocOverlay').classList.remove('open');
    $('#notesDrawer').classList.remove('open');
    state.notesOpen = false;
    $('[data-act="notes"].dock-btn').classList.remove('on');
  }

  function act(a) {
    switch (a) {
      case 'first': showSlide(0, -1); break;
      case 'prev': if (state.index > 0) showSlide(state.index - 1, -1); break;
      case 'next': {
        const fr = $('.slide-frame');
        if (state.slides[state.index]?.reveal && fr && !fr.classList.contains('revealed')) { fr.classList.add('revealed'); fitSlideText(); break; }
        if (state.index < state.slides.length - 1) showSlide(state.index + 1, 1); else toast(L('已經是最後一張了', 'This is the last slide')); break;
      }
      case 'last': showSlide(state.slides.length - 1, 1); break;
      case 'toc': $('#tocOverlay').classList.toggle('open'); break;
      case 'notes':
        state.notesOpen = !state.notesOpen;
        $('#notesDrawer').classList.toggle('open', state.notesOpen);
        $('[data-act="notes"].dock-btn').classList.toggle('on', state.notesOpen); break;
      case 'fullscreen':
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen?.().catch(() => toast(L('這個瀏覽器不支援全螢幕', 'This browser does not support full screen')));
        break;
      case 'exit': setMode('review'); break;
    }
  }

  /* ---------- 事件 ---------- */
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-act]');
    if (b) { act(b.dataset.act); return; }
    if (e.target.closest('[data-reveal]')) { $('.slide-frame')?.classList.add('revealed'); fitSlideText(); return; }
    const t = e.target.closest('.toc-item');
    if (t) { showSlide(+t.dataset.i, 1); $('#tocOverlay').classList.remove('open'); return; }
    if (e.target.id === 'tocOverlay') $('#tocOverlay').classList.remove('open');
  });
  document.querySelectorAll('.mode-btn').forEach((b) => b.addEventListener('click', () => setMode(b.dataset.mode)));

  document.addEventListener('keydown', (e) => {
    if (state.mode !== 'slides' || e.altKey || e.ctrlKey || e.metaKey) return;
    const k = e.key;
    if (['ArrowRight', 'PageDown', ' ', 'Enter', 'ArrowDown'].includes(k)) { e.preventDefault(); act('next'); }
    else if (['ArrowLeft', 'PageUp', 'Backspace', 'ArrowUp'].includes(k)) { e.preventDefault(); act('prev'); }
    else if (k === 'Home') act('first');
    else if (k === 'End') act('last');
    else if (k === 'f' || k === 'F') act('fullscreen');
    else if (k === 'n' || k === 'N') act('notes');
    else if (k === 't' || k === 'T') act('toc');
    else if (k === 'Escape') closePanels();
  });

  let touchX = null;
  $('#slidesWrap').addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  $('#slidesWrap').addEventListener('touchend', (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX; touchX = null;
    if (Math.abs(dx) > 50) act(dx < 0 ? 'next' : 'prev');
  });

  document.addEventListener('fullscreenchange', () => {
    document.body.classList.toggle('is-fullscreen', !!document.fullscreenElement);
    fitSlide();
  });
  window.addEventListener('resize', () => { setHeaderHeight(); fitSlide(); fitSlideText(); });

  /* ---------- 路由 ---------- */
  function route() {
    const parts = (location.hash.replace(/^#\/?/, '') || 'world').split('/');
    $('#modeToggle').hidden = true;
    if (parts[0] !== 'l') { setMode('review'); state.index = 0; state.slides = []; }
    else state.index = 0;
    window.scrollTo(0, 0);
    if (parts[0] === 'c') renderContinent(parts[1]);
    else if (parts[0] === 'l') renderLesson(parts[1], parts[2]);
    else renderWorld();
    setHeaderHeight();
  }

  /* ---------- 啟動 ---------- */
  if (SITE.brandLines) {   // 網站名稱分兩行顯示，高度對齊左邊的印章
    $('#brandTitle').innerHTML = SITE.brandLines.map((line) => `<span>${(Array.isArray(line) ? line : [[line]]).map(([t, c]) => `<b class="bt-${c || 'brown'}">${esc(t)}</b>`).join('')}</span>`).join('');
    $('#brandTitle').classList.add('two-line');
    $('#brandSubtitle').hidden = true;
  } else {
    $('#brandTitle').textContent = SITE.title;
    $('#brandSubtitle').textContent = SITE.subtitle;
  }
  // 網站主視覺：有設定 logoImage 就顯示圖片印章，否則顯示文字
  if (SITE.logoImage) $('#brandLogo').innerHTML = `<img src="${esc(SITE.logoImage)}" alt="${esc(SITE.logo || '')}" width="46" height="46">`;
  else { $('#brandLogo').classList.remove('has-img'); $('#brandLogo').textContent = SITE.logo || '地'; }
  $('#footer').textContent = `${SITE.title}・${new Date().getFullYear()}`;
  // 語言切換（繁中 / English）：放在網站右上角，每一頁都看得到
  const hdr = $('.header-inner');
  if (hdr && !$('#langToggle')) { const w = document.createElement('div'); w.innerHTML = langSwitch('header'); hdr.appendChild(w.firstElementChild); }
  document.addEventListener('click', (e) => { const b = e.target.closest('[data-setlang]'); if (b && b.dataset.setlang !== window.GEO_LANG) window.GEO_setLang(b.dataset.setlang); });
  window.addEventListener('hashchange', route);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', route);
  else route();
})();
