import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "home",
    component: import("../pages/home/HomePage.vue"),
  },
  {
    path: "/pdf2word",
    name: "pdf2word",
    component: () => import("../pages/pdf/Pdf2WordPage.vue"),
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
