<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <body>
    <header>
      <NavBar/>
    </header>
    <RouterView />
  </body>
</template>

<style scoped>
  body{
    margin: -1rem !important;
  }
</style>
