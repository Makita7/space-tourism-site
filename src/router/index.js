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
      children: [
        {
          path: '/commander',
          name: 'commander',
          component: () => import(/* webpackChunkName: "commander" */ '@/pages/crew/TheCommander.vue')
        },
        {
          path: '/missionspecialist',
          name: 'missionspecialist',
          component: () => import(/* webpackChunkName: "missionspecialist" */ '@/pages/crew/TheMissionSpecialist.vue')
        },
        {
          path: '/pilot',
          name: 'pilot',
          component: () => import(/* webpackChunkName: "pilot" */ '@/pages/crew/ThePilot.vue')
        },
        {
          path: '/flightengineer',
          name: 'flightengineer',
          component: () => import(/* webpackChunkName: "flight-engineer" */ '@/pages/crew/TheFlightEngineer.vue')
        },
      ]
    },
    {
      path: "/technology",
      name: "technology",
      component: () => import( /* webpackChunkName: "tech" */ '@/pages/TechnologyPage.vue'),
      children: [
        {
          path: '/launch_vehicle',
          name: 'launch_vehicle',
          component: () => import( /* webpackChunkName: "launch" */ '@/pages/tech/TechLaunchVehicle.vue' )
        },
        {
          path: '/space_capsule',
          name: 'space_capsule',
          component: () => import( /* webpackChunkName: "capsule" */ '@pages/tech/TechSpaceCapsule.vue' )
        },
        {
          path: '/space_port',
          name: 'space_port',
          component: () => import( /* webpackChunkName: "port" */ '@pages/tech/TechSpaceport.vue' )
        },
      ]
    },
  ],
  linkActiveClass: 'active-link',
});

export default router;
