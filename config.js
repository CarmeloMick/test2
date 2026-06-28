// config.js - 企業級設定
window.DASHBOARD_CONFIG = (function() {
  return {
    // 建議生產環境改為 60 秒，避免過度頻繁發送請求
    updateIntervalMs: 30000,
    topNoticeText: '🚀 生產環境穩定運行中 (改良版)',

    // 定義欲追蹤的路線
    busRoutes: [
      { route: '1A', stopId: '1A-MING-TAK', label: '往 尖沙咀碼頭' },
      { route: '968', stopId: '968-CENTRAL', label: '往 銅鑼灣 (天后)' },
      { route: 'B1', stopId: 'B1-LOK-MA', label: '往 落馬洲站' }
    ]
  };
})();
