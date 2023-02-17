import { createRouter, createWebHistory } from "vue-router";
import NotFoundPage from "../views/NotFoundPage.vue";
import LoginPage from "../views/LoginPage.vue";
import HomePage from "../views/HomePage.vue";
import ProfilePage from "../views/ProfilePage.vue";
import MapAttendancePage from "../views/MapAttendancePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfilePage,
    },
    {
      path: "/mapAttendance",
      name: "mapAttendance",
      component: MapAttendancePage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: NotFoundPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("email");
  if (to.name === "login" && isAuthenticated) next({ name: "home" });
  else if (to.name === "home" && !isAuthenticated) next({ name: "login" });
  else next();
});

export default router;
