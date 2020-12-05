import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Line from "@/views/Line/index.vue";
import Siri from "@/views/Siri/index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/line",
    name: "Line",
    component: Line,
  },
  {
    path: "/siri",
    name: "Siri",
    component: Siri,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
