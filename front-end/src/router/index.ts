/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-06-30 09:11:59
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-10-11 15:41:55
 * @FilePath: \front-end\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import HomeView from "../views/HomeView.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../pages/home/HomePage.vue"),
  },
  {
    path: "/new",
    name: "new",
    component: () => import("../pages/new/NewPage.vue"),
  },
  {
    path: "/file",
    name: "file",
    component: () => import("../pages/file/FilePage.vue"),
  },
  {
    path: "/pdf",
    name: "pdf",
    component: () => import("../pages/pdf/PdfPage.vue"),
  },
  {
    path: "/ue",
    name: "ue",
    component: () => import("../pages/ue/UEPage.vue"),
  },
  {
    path: "/cesium",
    name: "cesium",
    component: () => import("../pages/cesium/CesiumPage.vue"),
  },
  {
    path: "/three",
    name: "three",
    component: () => import("../pages/three/TestPage.vue"),
  },
  {
    path: "/animate-word",
    name: "word",
    component: () => import("../pages/animate/WordPage.vue"),
  },
  {
    path: "/healthy",
    name: "healthy",
    component: () => import("../pages/healthy/HealthyPage.vue"),
  },
  {
    path: "/excel",
    name: "excel",
    component: () => import("../pages/excel/ExcelPage.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
