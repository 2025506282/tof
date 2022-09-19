/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-06-21 16:41:05
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-09-19 10:45:55
 * @FilePath: \front-end\src\shims-vue.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module "vue-matrix-digit-rain"
declare module "vue-ue-sdk"
declare module "vue3-ue-sdk"
declare module "vue-cesium"
declare module "vue-cesium/lang/zh-hans"
declare module "self"
declare module "fs-extra"
// declare module "three"
declare const window: any

declare const XE: any
declare const XbsjEarthUI: any
declare const Cesium: any
declare const appGlobalConfig
declare const webkitRequestAnimationFrame
declare interface Window {
  importScripts: any
  SparkMD5: any
}
