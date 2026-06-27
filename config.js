/**
 * 舊 iPad 專用資訊看板 - 用戶自訂設定檔
 * 嚴格半角英文標點校正版
 */
const DASHBOARD_CONFIG = {
  topNoticeText: "提醒：出門前請記得帶銀包、鎖匙，注意交通安全！",
  busRoutes: [
    { route: "268C", stopId: "B86A9E27A23E3A6C", label: "往 觀塘碼頭" },
    { route: "968",  stopId: "85B04889C5D65A4B", label: "往 銅鑼灣 (天后)" },
    { route: "68X",  stopId: "9F5D33A12E8B4C7D", label: "往 旺角柏景灣" },
    { route: "64K",  stopId: "A1B2C3D4E5F60123", label: "往 大埔墟站" }
  ],
  updateIntervalMs: 60000
};
