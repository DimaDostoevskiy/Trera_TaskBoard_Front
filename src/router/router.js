import { createRouter, createWebHistory } from "vue-router";

import StartPage from "@/pages/HomePage.vue";
import LogInPage from "@/pages/LogInPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: StartPage,
    },
    {
      path: "/login",
      name: "login",
      component: LogInPage,
    },
  ],
});

export default router;
