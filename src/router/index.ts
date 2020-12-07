import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Line from "@/views/Line/index.vue";
import Siri from "@/views/Siri/index.vue";
import SiriIdonKnow from "@/views/SiriIdonKnow/index.vue";
import Countdown from "@/views/Countdown/index.vue";

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
  {
    path: "/siri-i-dont-know",
    name: "SiriIdonKnow",
    component: SiriIdonKnow,
  },
  {
    path: "/countdown",
    name: "Countdown",
    component: Countdown,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
