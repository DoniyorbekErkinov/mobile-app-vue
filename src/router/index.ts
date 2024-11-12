// @ts-check
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/main",
      component: () => import("../layouts/Layout.vue"),
      children: [
        {
          path: "/", // empty path acts as the default child route
          component: () => import("../pages/Home.vue"),
        },
      ],
    },
  ],
  linkActiveClass: "link-active",
});

export default router;
