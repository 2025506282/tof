/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare const XE: any
declare const XbsjEarthUI: any
declare const Cesium: any
declare const appGlobalConfig
declare const webkitRequestAnimationFrame