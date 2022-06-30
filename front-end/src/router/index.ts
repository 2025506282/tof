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
