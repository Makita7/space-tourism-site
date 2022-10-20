import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";


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
      component: () => import( /* webpackChunkName: "destinations" */ '@/pages/DestinationPage.vue'),
      children: [
        {
          path: "/moon",
          name: "moon",
          component: () => import( /* webpackChunkName: "moon" */ '@/pages/destinations/DestinationMoon.vue'),
        },
        {
          path: "/mars",
          name: "mars",
          component: () => import( /* webpackChunkName: "mars" */ '@/pages/destinations/DestinationMars.vue'),
        },
        {
          path: "/europa",
          name: "europa",
          component: () => import( /* webpackChunkName: "europa" */ '@/pages/destinations/DestinationEuropa.vue'),
        },
        {
          path: "/titan",
          name: "titan",
          component: () => import( /* webpackChunkName: "titan" */ '@/pages/destinations/DestinationTitan.vue'),
        },
      ]
    },
    {
      path: "/crew",
      name: "crew",
      component: () => import( /* webpackChunkName: "crew" */ '@/pages/CrewPage.vue'),
    },
    {
      path: "/technology",
      name: "technology",
      component: () => import( /* webpackChunkName: "tech" */ '@/pages/TechnologyPage.vue'),
    },
  ],
  linkActiveClass: 'active-link',
});

export default router;
