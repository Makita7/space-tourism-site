
<script setup>
import { RouterView } from 'vue-router';


</script>


<template>
  <div class="tech">
    <div class="wrapper centered">
      <div class="flex centered">
          <p class="num">03</p>
          <p class="pick">SPACE LAUNCH 101</p>
      </div>
      <router-view  v-slot="{ Component }" >
          <transition name="route" mode="out-in">
              <component :is="Component"/>
          </transition>
      </router-view>
    </div>
  </div>
</template>

<style scoped>
  .tech{
      background-image: url('../assets/technology/background-technology-mobile.jpg') ;
      background-repeat: repeat-y !important;
      background-size: cover;
      min-height: 105vh;
      color: white;
  }
  .wrapper{
        padding-top: 5rem;
        padding-left: 2rem;
        padding-right: 2rem;
        padding-bottom: 1rem;
    }

  /* ANIMATIONS */
  .route-enter-from{
      opacity: 0;
  }

  .route-enter-active{
      transition: all 0.3s ease-out;
  }
  .route-leave-active{
      opacity: 0;
  }

  .route-leave-active{
      transition: all 0.3s ease-in;
  }
</style>
