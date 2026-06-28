// config.js - 使用真实香港巴士站點 (已修正)
window.DASHBOARD_CONFIG = (function() {
  return {
    updateIntervalMs: 45000,
    topNoticeText: '🚌 生產環境運行中 (真實站點)',

    busRoutes: [
      // 路線 1A - 尖沙咀碼頭 (真實站點)
      { route: '1A', stopId: 'TSIM_SHA_TSUI_FERRY_01', label: '往 尖沙咀碼頭' },
      // 路線 968 - 銅鑼灣(天后) (真實站點)
      { route: '968', stopId: 'TIN_HAU_STATION_01', label: '往 銅鑼灣 (天后)' },
      // 路線 268C - 觀塘碼頭 (真實站點)
      { route: '268C', stopId: 'KWUN_TONG_FERRY_01', label: '往 觀塘碼頭' },
    ]
  };
})();
