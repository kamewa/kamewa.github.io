/* =========================================================
   雙語切換（繁中 / English）
   - 語言記在瀏覽器裡；網址加 ?lang=en 或 ?lang=zh 可直接指定（方便分享給學生）
   - 英文名稱對照在 js/site-data.en.js；英文課程內容在 lessons/en/課程代號.js
   - 某一課還沒有英文版時，會自動顯示中文並提示
   ========================================================= */
(function () {
  'use strict';
  const KEY = 'geo-lang';
  let lang = 'zh';
  try { lang = localStorage.getItem(KEY) || 'zh'; } catch (e) { /* 無法讀取時用中文 */ }
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'en' || q === 'zh') { lang = q; try { localStorage.setItem(KEY, q); } catch (e) { /* 略過 */ } }
  if (lang !== 'en') lang = 'zh';

  window.GEO_LANG = lang;
  window.L = (zh, en) => (lang === 'en' && en !== undefined ? en : zh);
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-Hant';
  document.documentElement.classList.toggle('lang-en', lang === 'en');

  /* 冊次自動轉英文：一上 第1章 → Grade 7 · Sem. 1 · Ch. 1 */
  function bookEn(b) {
    if (!b) return b;
    const G = { '一': 7, '二': 8, '三': 9 }, S = { '上': 1, '下': 2 };
    return b.replace(/([一二三])([上下])/g, (m, g, s) => `Grade ${G[g]} · Sem. ${S[s]}`)
      .replace(/第\s*(\d+)\s*[～~]\s*(\d+)\s*[章課]/g, '· Ch. $1–$2')
      .replace(/第\s*(\d+)\s*[章課]/g, '· Ch. $1')
      .replace(/課後閱讀/g, 'Reading').replace(/\s+/g, ' ').trim();
  }

  /* 把英文名稱套到 SITE 上（中文設定檔完全不用改） */
  window.GEO_applyLang = function (SITE) {
    if (lang !== 'en' || !window.SITE_EN) return;
    const E = window.SITE_EN, lab = E.labels || {};
    const tr = (s) => (s in lab ? lab[s] : s);
    if (E.intro) SITE.world.intro = E.intro;
    SITE.continents.forEach((c) => {
      const ce = (E.continents || {})[c.id];
      if (ce) { if (ce.name) c.name = ce.name; if (ce.sub) c.en = ce.sub; }
      else if (c.en) c.name = c.en;
      (c.spots || []).forEach((s) => { s.label = tr(s.label); });
      (c.buttons || []).forEach((b) => { b.label = tr(b.label); });
    });
    SITE.lessons.forEach((l) => {
      const le = (E.lessons || {})[l.id];
      if (le) l.name = le;
      l.book = bookEn(l.book);
      l.fileEn = 'lessons/en/' + l.id + '.js';
    });
  };

  /* 首頁的切換按鈕 */
  window.GEO_setLang = function (to) {
    try { localStorage.setItem(KEY, to); } catch (e) { /* 略過 */ }
    const u = new URL(location.href); u.searchParams.delete('lang');
    if (u.href === location.href) location.reload(); else location.replace(u.href);
  };

  /* index.html 上固定文字：有 data-en 的元素換成英文 */
  function applyStatic() {
    if (lang !== 'en') return;
    document.querySelectorAll('[data-en]').forEach((el) => { el.textContent = el.dataset.en; });
    document.querySelectorAll('[data-en-title]').forEach((el) => { el.title = el.dataset.enTitle; });
    document.querySelectorAll('[data-en-label]').forEach((el) => { el.setAttribute('aria-label', el.dataset.enLabel); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', applyStatic); else applyStatic();
})();
