import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import TechVehicle from '@/pages/tech/TechLaunchVehicle.vue';

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
          path: "",
          name: "moonMain",
          component: () => import( /* webpackChunkName: "moon" */ '@/pages/destinations/DestinationMoon.vue'),
        },
        {
          path: "/destination/moon",
          name: "moon",
          component: () => import( /* webpackChunkName: "moon" */ '@/pages/destinations/DestinationMoon.vue'),
        },
        {
          path: "/destination/mars",
          name: "mars",
          component: () => import( /* webpackChunkName: "mars" */ '@/pages/destinations/DestinationMars.vue'),
        },
        {
          path: "/destination/europa",
          name: "europa",
          component: () => import( /* webpackChunkName: "europa" */ '@/pages/destinations/DestinationEuropa.vue'),
        },
        {
          path: "/destination/titan",
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
          path: '',
          name: 'commanderMain',
          component: () => import(/* webpackChunkName: "commander" */ '@/pages/crew/TheCommander.vue')
        },
        {
          path: '/crew/commander',
          name: 'commander',
          component: () => import(/* webpackChunkName: "commander" */ '@/pages/crew/TheCommander.vue')
        },
        {
          path: '/crew/missionspecialist',
          name: 'missionspecialist',
          component: () => import(/* webpackChunkName: "missionspecialist" */ '@/pages/crew/TheMissionSpecialist.vue')
        },
        {
          path: '/crew/pilot',
          name: 'pilot',
          component: () => import(/* webpackChunkName: "pilot" */ '@/pages/crew/ThePilot.vue')
        },
        {
          path: '/crew/flightengineer',
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
          path: '',
          name: 'launch_vehicleMain',
          component: () => import( /* webpackChunkName: "vehicle" */ '@/pages/tech/TechLaunchVehicle.vue'),
        },
        {
          path: '/technology/launch',
          name: 'launch_vehicle',
          component: () => import( /* webpackChunkName: "vehicle" */ '@/pages/tech/TechLaunchVehicle.vue'),
        },
        {
          path: '/technology/spacecapsule',
          name: 'space_capsule',
          component: () => import( /* webpackChunkName: "capsule" */ '@/pages/tech/TechSpaceCapsule.vue'),
        },
        {
          path: '/technology/spaceport',
          name: 'space_port',
          component: () => import( /* webpackChunkName: "port" */ '@/pages/tech/TechSpaceport.vue'),
        },
      ]
    },
  ],
  linkActiveClass: 'active-link',
});

export default router;
