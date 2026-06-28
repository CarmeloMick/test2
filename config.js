/**
 * 舊 iPad 專用資訊看板 - 智慧自訂設定檔
 * 支援直接填寫官方中文站名，系統會自動進行本地記憶體編碼對接
 */
window.DASHBOARD_CONFIG = {
  // 區塊 A：頂部自訂提示文字
  topNoticeText: "提示：返工注意交通時間，祝順風順水！",

  // 區塊 B：目標監控的 7 條指定路線
  busRoutes: [
    { route: "86K",  stopName: "富豪花園",     label: "往 沙田站" },
    { route: "89X",  stopName: "富豪花園",     label: "往 沙田站" },
    { route: "299X", stopName: "富豪花園",     label: "往 沙田市中心" },
    { route: "83K",  stopName: "富豪花園",     label: "往 沙田市中心(循環線)" },
    { route: "284",  stopName: "富豪花園",     label: "往 濱景花園(循環線)" },
    { route: "49X",  stopName: "富豪花園",     label: "往 青衣碼頭" },
    { route: "269D", stopName: "沙田市中心總站", label: "往 天富" }
  ],

  // 數據自動更新週期（毫秒），1 分鐘 = 60000 毫秒
  updateIntervalMs: 60000
};
