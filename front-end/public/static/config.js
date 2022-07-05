const origin = `${location.protocol}//${location.host}/static`
// const origin = '/static、'

window.appGlobalConfig = {
  isOpenCache: false,
  isOpenDB: true,
  serverUrl: origin,
  // 数据文件地址
  mapServerUrl:
    origin + "/data/",
  onLine: navigator.onLine,
  // onLine: false,
  offLineService: {
    mapbox: origin + "mapbox/tiles/{z}/{x}/{y}.png",
    earth: origin + "新区数据底板/浦东新区/tiles/{z}/{x}/{reverseY}.png",
  },
}
