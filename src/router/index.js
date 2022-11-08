import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/message-board",
    },
    {
      path: "/message-board",
      name: "MessageBoard",
      component: () => import("../views/message-board.vue"),
    },
  ],
});

export default router;
