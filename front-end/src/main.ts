/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-06-21 16:41:05
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-10-20 10:16:46
 * @FilePath: \front-end\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue, { createApp } from "vue"
import Antd from "ant-design-vue"
import App from "./App.vue"
import "ant-design-vue/dist/antd.css"
import router from "./router"
import vueUeSdk from "vue-ue-sdk"
import "@/styles/index.scss"
import VueCesium from "vue-cesium"
import components from "./components" // 引入公共组件
import "@/utils/rem"
// import Vue from 'vue'
import VueExcelEditor from 'vue-excel-editor'

// Vue.use(VueExcelEditor)
createApp(App)
  .use(components)
  .use(VueCesium)
  .use(vueUeSdk)
  .use(Antd)
  .use(router)
  .use(VueExcelEditor)
  .mount("#app")
// createApp(App).use(Antd).use(router).mount("#app")
