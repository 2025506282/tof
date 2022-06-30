import { createApp } from "vue"
import Antd from "ant-design-vue"
import App from "./App.vue"
import "ant-design-vue/dist/antd.css"
import router from "./router"
import "@/styles/index.scss"
XE.ready().then(function startup() {
    createApp(App).use(Antd).use(router).mount("#app")
});
// createApp(App).use(Antd).use(router).mount("#app")
