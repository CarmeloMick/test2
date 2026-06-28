/**
 * 舊 iPad 專用資訊看板 - 智慧自訂設定檔
 * 經 Principal Engineer 精準鎖定富豪花園及沙田市中心真實 HASH ID
 * 填寫了 stopId 將會自動觸發「直通車機制」，100% 免除 5MB 名冊下載，解鎖極致速度
 */
window.DASHBOARD_CONFIG = {
  // 區塊 A：頂部自訂提示文字
  topNoticeText: "提示：返工注意交通時間，祝順風順水！",

  // 區塊 B：目標監控的 7 條指定路線
  busRoutes: [
    { route: "86K",  stopId: "D262C76A28469C95", label: "往 沙田站 (富豪花園)" },
    { route: "89X",  stopId: "D262C76A28469C95", label: "往 沙田站 (富豪花園)" },
    { route: "299X", stopId: "D262C76A28469C95", label: "往 沙田市中心 (富豪花園)" },
    { route: "83K",  stopId: "D262C76A28469C95", label: "往 沙田市中心 (富豪花園)" },
    { route: "284",  stopId: "89D529BB626B5DFA", label: "往 濱景花園 (富豪花園)" },
    { route: "49X",  stopId: "89D529BB626B5DFA", label: "往 青衣碼頭 (富豪花園)" },
    { route: "269D", stopId: "967527636FA7D962", label: "往 天富 (沙田市中心總站)" }
  ],

  // 數據自動更新週期（毫秒），1 分鐘 = 60000 毫秒
  updateIntervalMs: 60000
};
