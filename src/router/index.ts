import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GreetingsView from "../views/GreetingsView.vue";
import AuthView from "../auth/primary/view/AuthView.vue";
import LoginView from "../auth/primary/view/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/welcome",
      name: "welcome",
      component: GreetingsView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/auth",
      name: "auth",
      component: AuthView,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
