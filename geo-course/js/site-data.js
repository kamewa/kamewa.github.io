/* =========================================================
   網站設定檔（老師可以自己改這個檔案）
   - 改網站名稱：改 SITE.title / SITE.subtitle
   - 換正式地圖：把圖片放進 maps 資料夾，改 map: 後面的檔名
   - 調整按鈕位置：x、y 是「百分比」，x=0 最左、100 最右；y=0 最上、100 最下
   - 開放一課：把 status 從 'soon' 改成 'open'，並在 lessons 資料夾放入該課內容檔
   ========================================================= */

window.SITE = {
  title: '地理差異化互動式學習',
  /* 左上角網站名稱：上下兩行（各 5 字）；每一段可指定顏色 brown（深咖啡）或 red（印章紅） */
  brandLines: [[['地理', 'brown'], ['差異化', 'red']],
               [['互動式', 'red'], ['學習', 'brown']]],
  subtitle: '區域地理・複習與簡報',
  logo: '和',
  logoImage: 'images/logo-he.png',   // 左上角主視覺：老師自製的「和」字印（換圖只要改這一行；刪掉這行就改回文字）
  version: '2026110330',   // 每次更新網站時改這個數字，學生的瀏覽器就會讀到新版
  // 網站放在 GitHub 上的正式網址（工具的「網頁嵌入碼」會用到）；搬家時只要改這一行
  publishedUrl: 'https://kamewa.github.io/geo-course/',

  /* ---------- 第 1 層：世界地圖 ---------- */
  world: {
    map: 'maps/world.webp',          // 老師製作的世界地圖（原圖保存在 maps/original）
    intro: '選一個洲，開始今天的地理旅程！',
    pinStyle: 'sun',                 // 'sun' = 透明圓形按鈕＋金黃光暈；'pill' = 膠囊按鈕
    pinSize: 6,                      // 圓形按鈕直徑，佔地圖寬度的百分比
    // 預留按鈕位置（老師標示的 j、l、m），尚未使用；之後要開新區時把位置複製到 continents 的 pos
    reserved: {
      j: { x: 25.8, y: 69.0 },       // 印度洋南方
      l: { x: 93.7, y: 40.1 },       // 大西洋北部（地圖右側）
      m: { x: 93.5, y: 79.5 }        // 大西洋南部（地圖右下）
    }
  },

  /* ---------- 第 2 層：七大洲 ----------
     color 可用：red / yellow / teal / blue / purple / pink / ice
     pos：這一洲的按鈕在「世界地圖」上的位置（依老師標示的 a～g 位置）                       */
  continents: [
    { id: 'asia',       name: '亞洲',   en: 'Asia',          icon: '🏯', color: 'red',    map: 'maps/asia.webp',       pos: { x: 29.9, y: 33.3 },
      /* 亞洲地圖上的分區入口（實心膠囊按鈕，和白底的課程按鈕區分）：href 填 '#/c/分區代號' 進入下一張地圖；留空＝尚未開放（顯示 🔒） */
      spotSize: 5,
      spots: [
        { label: '台灣', x: 58.2, y: 60.6, href: '#/c/taiwan' },   // 老師標示的 a
        { label: '中國', x: 51.8, y: 53.4, href: '#/c/china' },     // b
        { label: '中亞', x: 33.5, y: 38.6, href: '' },             // g
        { label: '東北亞', x: 63.0, y: 50.0, href: '#/c/northeast-asia' },  // 韓國與日本之間
        { label: '南亞', x: 38.3, y: 64.0, href: '#/c/south-asia' },         // 印度半島（原本「南亞」課程按鈕的位置）
        { label: '西亞與北非', x: 23.0, y: 53.5, href: '#/c/west-asia' }      // 阿拉伯半島（原本「西亞與北非」課程按鈕的位置）
      ] },
    { id: 'europe',     name: '歐洲',   en: 'Europe',        icon: '🏰', color: 'blue',   map: 'maps/europe.webp',     pos: { x: 12.2, y: 22.3 } },
    { id: 'africa',     name: '非洲',   en: 'Africa',        icon: '🦁', color: 'yellow', map: 'maps/africa.webp',     pos: { x: 10.6, y: 53.0 } },
    { id: 'namerica',   name: '北美洲', en: 'North America', icon: '🗽', color: 'teal',   map: 'maps/namerica.webp',   pos: { x: 73.4, y: 27.9 } },
    { id: 'samerica',   name: '南美洲', en: 'South America', icon: '🦜', color: 'purple', map: 'maps/samerica.webp',   pos: { x: 84.9, y: 61.4 } },
    { id: 'oceania',    name: '大洋洲', en: 'Oceania',       icon: '🦘', color: 'pink',   map: 'maps/oceania.webp',    pos: { x: 56.2, y: 61.9 } },
    { id: 'antarctica', name: '南極洲', en: 'Antarctica',    icon: '🐧', color: 'ice',    map: 'maps/antarctica.webp', pos: { x: 46.7, y: 91.5 } },
    { id: 'arctic',     name: '北極地區', en: 'Arctic',      icon: '🐻‍❄️', color: 'blue',   map: 'maps/arctic.svg',      pos: { x: 55.0, y: 8.0 } },   // 北極海（老師標示的 h）；地圖為暫用版
    { id: 'global',     name: '全球議題', en: 'Global Issues', icon: '🌐', color: 'teal',   map: 'maps/global.webp',     pos: { x: 71.6, y: 62.7 } },  // 太平洋東南（老師標示的 i）
    /* 分區地圖：parent 表示從哪一洲的入口按鈕進來；不會出現在世界地圖上
       buttons：圓形呼吸發光按鈕；href 填 '#/c/代號' 進入下一層、填網址或檔案路徑會在新分頁開啟、留空＝尚未設定 */
    { id: 'taiwan', parent: 'asia', name: '台灣（自然）', en: 'Taiwan · Nature', icon: '🌿', color: 'teal', map: 'maps/taiwan-nature.webp', glow: 'green', pinSize: 6.3,
      buttons: [
        { label: '位置與地圖判讀', x: 30.1, y: 23.5, href: '#/l/location-map/taiwan' },   // 1 左上（雲海）
        { label: '世界中的台灣', x: 16.1, y: 52.8, href: '#/l/taiwan-world/taiwan' },   // 2 左中（湖泊）
        { label: '台灣的地形', x: 25.0, y: 84.8, href: '#/l/taiwan-landform/taiwan' },   // 3 左下（環礁）
        { label: '水文', x: 79.2, y: 22.2, href: '#/l/hydrology/taiwan' },               // 4 右上（峽谷）
        { label: '天氣與氣候', x: 77.2, y: 58.9, href: '#/l/weather-climate/taiwan' },   // 5 右中（稻田）
        { label: '海岸與島嶼', x: 72.9, y: 84.6, href: '#/l/coast-island/taiwan' },     // 6 右下（海岸）
        { label: '人文', icon: '🏮', x: 48.4, y: 45.1, href: '#/c/taiwan-human', kind: 'switch' },   // 7 島中央：切換到人文地圖
        { label: '地名與議題', icon: '🌃', x: 54.2, y: 14.5, href: '#/c/taiwan-issues', kind: 'switch' }   // 8 島北端：切換到地名與議題地圖
      ] },
    /* 台灣人文地圖：從「台灣（自然）」的「人文」按鈕進入；1～6 之後放人文課程 */
    { id: 'taiwan-human', parent: 'asia', name: '台灣（人文）', en: 'Taiwan · Human', icon: '🏮', color: 'yellow', map: 'maps/taiwan-human.webp', glow: 'amber', pinSize: 6.3,
      buttons: [
        { label: '1', x: 27.5, y: 20.1, href: '' },   // 左上（糖廠、稻田）
        { label: '2', x: 22.5, y: 50.2, href: '' },   // 左中（茶園）
        { label: '3', x: 25.0, y: 82.9, href: '' },   // 左下（製茶）
        { label: '4', x: 78.4, y: 22.9, href: '' },   // 右上（果園）
        { label: '5', x: 83.1, y: 54.0, href: '' },   // 右中（溫室花卉）
        { label: '6', x: 68.7, y: 81.5, href: '' },   // 右下（農產品）
        { label: '自然', icon: '🌿', x: 47.8, y: 44.4, href: '#/c/taiwan', kind: 'switch' },   // 7 島中央：切換回自然地圖
        { label: '地名與議題', icon: '🌃', x: 55.5, y: 13.6, href: '#/c/taiwan-issues', kind: 'switch' }   // 8 島北端：切換到地名與議題地圖
      ] },
    /* 南亞分區地圖：從亞洲地圖的「南亞」入口進入 */
    { id: 'west-asia', parent: 'asia', name: '西亞', en: 'West Asia', icon: '🕌', color: 'yellow', map: 'maps/west-asia.webp', glow: 'amber', pinSize: 6.3,
      buttons: [
        { label: '自然', x: 42.8, y: 53.7, href: '' },                                   // 1 阿拉伯半島
        { label: '人文', x: 25.1, y: 15.9, href: '' },                                   // 2 安納托利亞高原
        { label: '亞洲', icon: '🏯', x: 92.5, y: 41.4, href: '#/c/asia', kind: 'switch' },   // 3 回到亞洲地圖
        { label: '北非', icon: '🦁', x: 10.5, y: 54.7, href: '#/c/africa', kind: 'switch' }  // 4 到非洲地圖（北非）
      ] },
    { id: 'south-asia', parent: 'asia', name: '南亞', en: 'South Asia', icon: '🛕', color: 'yellow', map: 'maps/south-asia.webp', glow: 'sky', pinSize: 6.3,
      buttons: [
        { label: '自然環境', x: 45.9, y: 61.8, href: '#/l/s-asia/south-asia' },   // 1 德干高原
        { label: '人文經濟', x: 38.8, y: 31.8, href: '' },   // 2 印度河平原
        { label: '亞洲', icon: '🏯', x: 87.5, y: 83.3, href: '#/c/asia', kind: 'switch' }   // 3 右下：回到亞洲地圖
      ] },
    /* 東北亞分區地圖：從亞洲地圖的「東北亞」入口進入 */
    { id: 'northeast-asia', parent: 'asia', name: '東北亞', en: 'Northeast Asia', icon: '🗾', color: 'blue', map: 'maps/northeast-asia.webp', glow: 'sky', pinSize: 6.3,
      buttons: [
        { label: '自然環境', x: 65.5, y: 56.3, href: '#/l/ne-asia-nature/northeast-asia' },   // 1 本州中部：東北亞的自然環境與文化
        { label: '人文經濟', x: 32.0, y: 54.5, href: '#/l/ne-asia-economy/northeast-asia' },   // 2 朝鮮半島南部：東北亞的經濟發展與挑戰
        { label: '北韓', x: 32.3, y: 23.1, href: '' },   // 3 朝鮮半島北部
        { label: '亞洲', icon: '🏯', x: 90.4, y: 86.5, href: '#/c/asia', kind: 'switch' }   // 4 右下：回到亞洲地圖
      ] },
    /* 中國分區地圖（二上課程）：從亞洲地圖的「中國」入口進入 */
    { id: 'china', parent: 'asia', name: '中國', en: 'China', icon: '🐉', color: 'red', map: 'maps/china.webp', glow: 'ember', pinSize: 6.3,
      buttons: [
        { label: '地形', x: 53.7, y: 52.2, href: '' },          // 1 中國中央
        { label: '氣候', x: 86.1, y: 23.6, href: '' },          // 2 右上（冰雪）
        { label: '人口', x: 76.7, y: 67.4, href: '' },          // 3 右下（颱風、洪水）
        { label: '經濟與議題', x: 29.0, y: 39.5, href: '' },    // 4 左上（新疆）
        { label: '亞洲', icon: '🏯', x: 12.1, y: 74.9, href: '#/c/asia', kind: 'switch' }   // 5 左下：回到亞洲地圖
      ] },
    /* 台灣地名與議題地圖（三下課程）：從自然或人文地圖的「地名與議題」按鈕進入 */
    { id: 'taiwan-issues', parent: 'asia', name: '台灣（地名與議題）', en: 'Taiwan · Places & Issues', icon: '🌃', color: 'purple', map: 'maps/taiwan-issues.webp', glow: 'neon', pinSize: 6.3,
      buttons: [
        { label: '人文', icon: '🏮', x: 50.2, y: 42.8, href: '#/c/taiwan-human', kind: 'switch' },   // 1 島中央：切換到人文地圖
        { label: '行政區域', x: 24.7, y: 26.0, href: '' },   // 2 左上（夜市人潮）
        { label: '聚落地名', x: 27.3, y: 75.7, href: '' },   // 3 左下（小吃）
        { label: '食品議題', x: 83.9, y: 23.6, href: '' },   // 4 右上（廟口夜市）
        { label: '會考', x: 81.1, y: 73.2, href: '' },       // 5 右下（港邊夜市）
        { label: '自然', icon: '🌿', x: 58.1, y: 17.1, href: '#/c/taiwan', kind: 'switch' }   // 6 島北端：切換到自然地圖
      ] },
    /* 隱藏區（老師標示的 k）：看不見、不發光、游標不變，點到才會進入；不列入清單與計數，頁面不顯示名稱
       ⚠ 只是「看不出來」不是「鎖起來」，網站公開時請勿放不能讓學生看到的資料 */
    { id: 'x7', hidden: true, name: '', en: '', icon: '', color: 'pink', map: 'maps/x7.webp', pos: { x: 4.9, y: 80.1 }, size: 3.2,
      /* 隱藏地圖上的工具按鈕：label 是顯示文字，href 填工具網址或檔案路徑（例如 'tools/xxx.html'），留空＝尚未設定 */
      buttons: [
        { label: '地形觀察', x: 32.1, y: 34.2, href: 'tools/terrain/index.html' },
        { label: '2', x: 15.2, y: 22.4, href: '' },
        { label: '3', x: 11.3, y: 49.1, href: '' },
        { label: '4', x: 40.8, y: 68.4, href: '' },
        { label: '5', x: 74.1, y: 27.7, href: '' },
        { label: '6', x: 85.5, y: 62.2, href: '' },
        { label: '7', x: 61.8, y: 89.5, href: '' },
        { label: '氣候圖製作', x: 52.7, y: 42.1, href: 'tools/climate/index.html' },
        { label: '9', x: 69.9, y: 66.6, href: '' },
        { label: '10', x: 55.2, y: 8.0, href: '' },
        { label: '11', x: 23.4, y: 70.8, href: '' },
        { label: '12', x: 93.8, y: 36.0, href: '' }
      ] }
  ],

  /* ---------- 第 3 層：課程（一課 = 一個分區） ----------
     ⚠ 以下課程名稱與冊次是暫填的，請依課本修正。
     book：冊次與課次（例如 '九上 第2課'），留空就不顯示
     on：這一課出現在哪幾洲的地圖上，以及按鈕位置。
         跨洲的課（如西亞與北非）就寫兩個洲，兩顆按鈕會通往同一課。
     status：'open' 已開放；'soon' 尚未開放（顯示小鎖）
     file：課程內容檔                                              */
  lessons: [
    { id: 'east-asia',       name: '東亞',       book: '', status: 'soon', file: 'lessons/east-asia.js',
      on: { asia: { x: 49.0, y: 44.6 } } },
    { id: 'se-asia',         name: '東南亞',     book: '', status: 'soon', file: 'lessons/se-asia.js',
      on: { asia: { x: 56.8, y: 77.0 } } },
    { id: 'w-asia-n-africa', name: '西亞與北非', book: '', status: 'soon', file: 'lessons/w-asia-n-africa.js',
      on: { africa: { x: 43.0, y: 20.0 } } },   // 亞洲地圖上改為「西亞與北非」分區入口
    { id: 'sub-saharan',     name: '漠南非洲',   book: '', status: 'soon', file: 'lessons/sub-saharan.js',
      on: { africa: { x: 54.0, y: 60.0 } } },
    { id: 'location-map',    name: '認識位置與地圖', book: '一上 第1章', status: 'open', file: 'lessons/location-map.js',
      on: { taiwan: { x: 30.1, y: 23.5 } } },
    { id: 'taiwan-world',    name: '世界中的臺灣', book: '一上 第2章', status: 'open', file: 'lessons/taiwan-world.js',
      on: { taiwan: { x: 16.1, y: 52.8 } } },
    { id: 'taiwan-landform', name: '臺灣的地形', book: '一上 第3章', status: 'open', file: 'lessons/taiwan-landform.js',
      on: { taiwan: { x: 25.0, y: 84.8 } } },
    { id: 'coast-island',    name: '海岸與島嶼', book: '一上 第4章', status: 'open', file: 'lessons/coast-island.js',
      on: { taiwan: { x: 72.9, y: 84.6 } } },
    { id: 'weather-climate', name: '天氣與氣候', book: '一上 第5章', status: 'open', file: 'lessons/weather-climate.js',
      on: { taiwan: { x: 77.2, y: 58.9 } } },
    { id: 'hydrology',       name: '水文',       book: '一上 第6章', status: 'open', file: 'lessons/hydrology.js',
      on: { taiwan: { x: 79.2, y: 22.2 } } },
    { id: 'ne-asia-nature',  name: '東北亞的自然環境與文化', book: '二上 第1章', status: 'open', file: 'lessons/ne-asia-nature.js',
      on: { 'northeast-asia': { x: 65.5, y: 56.3 } } },
    { id: 'ne-asia-economy', name: '東北亞的經濟發展與挑戰', book: '二上 第2章', status: 'open', file: 'lessons/ne-asia-economy.js',
      on: { 'northeast-asia': { x: 32.0, y: 54.5 } } },
    { id: 's-asia',          name: '南亞',       book: '二下 第2章', status: 'open', file: 'lessons/s-asia.js',
      on: { 'south-asia': { x: 45.9, y: 61.8 } } },
    { id: 'europe',          name: '歐洲概述',   book: '三上 第1章', status: 'open', file: 'lessons/europe.js',
      on: { europe: { x: 37.0, y: 59.5 } } },
    { id: 'russia',          name: '歐洲區域特色與俄羅斯', book: '三上 第2章', status: 'open', file: 'lessons/russia.js',
      on: { europe: { x: 68.8, y: 45.7 }, asia: { x: 53.8, y: 21.5 } } },
    { id: 'n-america',       name: '北美洲',     book: '三上 第3章', status: 'open', file: 'lessons/n-america.js',
      on: { namerica: { x: 47.8, y: 44.6 } } },
    { id: 'latin-america',   name: '中南美洲',   book: '三上 第4章', status: 'open', file: 'lessons/latin-america.js',
      on: { namerica: { x: 46.5, y: 86.0 }, samerica: { x: 50.8, y: 44.6 } } },
    { id: 'oceania',         name: '大洋洲',     book: '三上 第5章', status: 'open', file: 'lessons/oceania.js',
      on: { oceania: { x: 19.7, y: 60.6 } } },
    { id: 'polar',           name: '兩極地區與全球氣候變遷', book: '三上 第6章', status: 'open', file: 'lessons/polar.js',
      on: { antarctica: { x: 53.8, y: 47.8 }, arctic: { x: 50.0, y: 50.0 } } }
  ]
};
