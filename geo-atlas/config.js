// 地圖集設定檔：用記事本打開就能修改，存檔後重新整理 index.html 即可生效。
window.ATLAS_CONFIG = {
  title: '地理地圖集',     // 瀏覽器分頁上的名稱
  showTitle: false,       // 想在畫面上顯示標題時改成 true
  subtitle: '',           // 小標題，例如班級名稱；只有 showTitle 為 true 時才會顯示

  // 藏寶圖清單。每一張藏寶圖有自己的背景圖和一組透明按鈕。
  // 按鈕的 x、y 是位置（從左邊、從上面算起的百分比），r 是半徑（佔畫面寬度的百分比）。
  // href 是點下去進入的頁面；goto 是點下去移動到另一張藏寶圖（填那張圖的 id）。
  // 不用手動改數字：在地圖集畫面按 E 鍵進入「校準模式」，拖曳圓圈、用滾輪調大小，
  // 按「複製設定」，再貼回來取代那一張圖的 buttons 整段即可。
  maps: [
    {
      id: 'map1',
      image: 'assets/map',        // 程式會自動使用 map-1920.jpg 或 map-2560.jpg
      buttons: [
        { id: 'general',    name: '通論島',     href: 'islands/compass-island.html',    x: 21.0, y: 37.0, r: 4.4 },
        { id: 'terrain',    name: '地形島',     href: 'islands/terrain-island.html',    x: 43.0, y: 26.0, r: 4.4 },
        { id: 'climate',    name: '氣候島',     href: 'islands/climate-island.html',    x: 77.0, y: 10.0, r: 4.4 },
        { id: 'hydro',      name: '水文島',     href: 'islands/hydro-island.html',      x: 54.0, y: 31.0, r: 4.4 },
        { id: 'population', name: '人口島',     href: 'islands/population-island.html', x: 45.5, y: 40.0, r: 4.4 },
        { id: 'industry',   name: '產業島',     href: 'islands/industry-island.html',   x: 36.0, y: 55.0, r: 4.4 },
        { id: 'transport',  name: '交通聚落島', href: 'islands/transport-island.html',  x: 60.0, y: 50.0, r: 4.4 },
        { id: 'regional',   name: '區域發展島', href: 'islands/regional-island.html',   x: 52.0, y: 70.0, r: 4.4 },
        { id: 'trial',      name: '試煉島',     href: 'islands/trial-island.html',      x: 82.0, y: 45.0, r: 4.4 },
        { id: 'voyage1',    name: '遠航',       goto: 'map2',                           x: 36.5, y: 69.0, r: 5.0 }
      ]
    },
    {
      id: 'map2',
      image: 'assets/map2',        // 程式會自動使用 map2-1920.jpg 或 map2-2560.jpg
      buttons: [
        { id: 'voyage2',    name: '遠航',       goto: 'map1',                           x: 12.0, y: 41.5, r: 5.0 }
      ]
    }
  ]
};
