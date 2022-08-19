/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-06-30 09:11:59
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-08-19 14:12:28
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
    path: "/pdf",
    name: "pdf",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/pdf/PdfPage.vue"),
  },
  {
    path: "/cesium",
    name: "cesium",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/cesium/CesiumPage.vue"),
  },
  {
    path: "/three",
    name: "three",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/three/TestPage.vue"),
  },
  {
    path: "/animate-word",
    name: "word",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/animate/WordPage.vue"),
  },
  {
    path: "/healthy",
    name: "healthy",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../pages/healthy/HealthyPage.vue"
      ),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
