const origin = `${location.protocol}//${location.host}/static`
// const origin = '/static、'

window.appGlobalConfig = {
  isOpenCache: false,
  isOpenDB: true,
  // 数据文件地址
  mapServerUrl:
    origin + "/%E6%96%B0%E5%8C%BA%E6%95%B0%E6%8D%AE%E5%BA%95%E6%9D%BF/",
  onLine: navigator.onLine,
  // onLine: false,
  offLineService: {
    mapbox: origin + "mapbox/tiles/{z}/{x}/{y}.png",
    earth: origin + "新区数据底板/浦东新区/tiles/{z}/{x}/{reverseY}.png",
  },
}
