
<script setup>
import { RouterView } from 'vue-router';
import { ref, watch } from 'vue'

const Destinations = [
    {
        id: 1,
        name: "moon",
        to: "/moon"
    },
    {
        id: 2,
        name: "mars",
        to: "/mars"
    },
    {
        id: 3,
        name: "europa",
        to: "/europa"
    },
    {
        id: 4,
        name: "titan",
        to: "/titan"
    }
]

const URL = window.location.href;
const URLpart = URL.split("/").slice(-1);
const URLpartTwo = URLpart
console.log(URLpart)
const ChangingImg = `../assets/destination/image-${URLpart}.png`;



</script>


<template>
    <main>
        <div class="destination">
            <div class="wrapper centered">
                <div class="flex centered">
                    <p class="num">01</p>
                    <p class="pick">Pick your destination</p>
                </div>
                <img alt="moon" v-if="URLpart == 'moon'" class="planet" src="@/assets/destination/moon.png" />
                <img v-else-if="URLpart == 'europa'" class="planet" src="@/assets/destination/europa.png" />
                <img v-else-if="URLpart == 'titan'" class="planet" src="@/assets/destination/titan.png" />
                <img v-else class="planet" src="@/assets/destination/mars.png" />
                <RouterLink class="link" v-for="planets in Destinations" :to="planets.to" :key="planets.id">{{planets.name}}</RouterLink><br/>
                <div class="centered">
                    <RouterView :key="$route.fullPath" />
                </div>
            </div>
        </div>
    </main>
</template>


<style scoped>
    .destination{
        background-image: url('../assets/destination/background-destination-mobile.jpg') ;
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
    .link{
        color: white;
        padding: 0 1rem;
        text-decoration: none;
        font-family: var(--BarlowC);
        font-size: 1rem;
        text-transform: uppercase;
        color: var(--inactiveColor);
        font-weight: 300;
        letter-spacing: 0.2rem;
    }
    .active-link{
        color: white;
        border-bottom: 3px solid rgb(255, 255, 255);
        padding: 0 0.2rem 0.5rem 0.2rem;
    }
    .planet{
        width: 50%;
        margin: 1rem 0;
    }

    :deep(.title){
        font-size: 3.5rem;
        text-transform: capitalize;
        text-transform: uppercase;
        font-family: var(--Bellfair);
        font-weight: 500;
        margin: 1.5rem 0rem -1rem 0rem;
    }
    :deep(.km){
        font-family: var(--Bellfair);
        font-size: 2rem;
        text-transform: uppercase;
        margin-top: 1rem;
    }
    :deep(.days){
        font-family: var(--Bellfair);
        font-size: 2rem;
        text-transform: uppercase;
        margin-top: 1rem;
    }
    :deep(.description){
        font-family: var(--Barlow);
        font-weight: 300;
        line-height: 1.7rem;
        margin-bottom: 2rem;
        color: var(--inactiveColor);
    }
    :deep(.distance){
        font-weight: 500;
        color: var(--inactiveColor);
        font-family: var(--BarlowC);
        font-size: 1rem;
        letter-spacing: 0.2rem;
        font-weight: 300;
        text-transform: uppercase;
    }
    :deep(.travel){
        font-weight: 500;
        color: var(--inactiveColor);
        font-family: var(--BarlowC);
        font-size: 1rem;
        letter-spacing: 0.2rem;
        font-weight: 300;
        text-transform: uppercase;
    }
</style>