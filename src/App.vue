<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <header>
    <NavBar/>
  </header>
  <RouterView />
</template>

<style scoped>

</style>

<!-- how to make background image change depending on resolution -->