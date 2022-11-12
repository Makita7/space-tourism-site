
<script setup>
import { RouterView } from 'vue-router';


</script>


<template>
    <div class="tech">
        <div class="wrapper centered">
        <div class="flex centered uncenter padTablet">
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
    @media(min-width: 800px){
        .tech{
            background-image: url('../assets/technology/background-technology-tablet.jpg');
        }
        .uncenter{
            justify-content: left;
        }
        .padTablet{
            margin-top: 3rem;
            margin-left: 1rem;
            margin-bottom: 1rem;
        }
    }
    @media(min-width: 1200px){
        .tech{
            background-image: url('../assets/technology/background-technology-desktop.jpg');
        }
        .num{
            font-size: 1.6rem;
        }
        .pick{
            font-size: 1.6rem;
            letter-spacing: 3px;
        }
        .padTablet{
            margin-top: 4rem;
            margin-left: 8rem;
        }
    }
</style>
