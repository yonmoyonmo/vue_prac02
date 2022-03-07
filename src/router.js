import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () => import("@/components/MainDashBoard.vue"),
  },
  {
    path: "/photo",
    name: "photo",
    component: () => import("@/components/Photo.vue"),
  },
  {
    path: "/charts",
    name: "charts",
    component: () => import("@/components/Charts.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
