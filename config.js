/**
 * 舊 iPad 專用資訊看板 - 用戶自訂設定檔
 * 生產環境配置標準
 */
const DASHBOARD_CONFIG = {
  // 區塊 A：頂部自訂提示文字
  topNoticeText: "提醒：出門前請記得帶銀包、鎖匙，注意交通安全！",

  // 區塊 B：4 條指定的九巴路線及對應的巴士站 ID (Stop ID)
  // 提示：Stop ID 可於九巴開放數據集或網頁查詢（為 16 位元十六進制字串，如 "B86A9E27A23E3A6C"）
  // 附加的 label 欄位可用作自訂目的地顯示名稱
  busRoutes: [
    { route: "268C", stopId: "B86A9E27A23E3A6C", label: "往 觀塘碼頭" },
    { route: "968",  stopId: "85B04889C5D65A4B", label: "往 銅鑼灣 (天后)" },
    { route: "68X",  stopId: "9F5D33A12E8B4C7D", label: "往 旺角柏景灣" },
    { route: "64K",  stopId: "A1B2C3D4E5F60123", label: "往 大埔墟站" }
  ],

  // 數據自動更新週期（毫秒），1 分鐘 = 60000 毫秒
  updateIntervalMs: 60000
};