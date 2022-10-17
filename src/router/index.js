import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/destination",
      name: "destination",
      component: () => import('../pages/DestinationPage.vue'),
    },
    {
      path: "/crew",
      name: "crew",
      component: () => import('../pages/CrewPage.vue'),
    },
    {
      path: "/technology",
      name: "technology",
      component: () => import('../pages/TechnologyPage.vue'),
    },
  ],
});

export default router;
