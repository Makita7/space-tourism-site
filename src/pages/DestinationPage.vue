
<script setup>
import { RouterView } from 'vue-router';
import { ref } from 'vue'

const Destinations = ref([
    {
        id: 1,
        name: "moon",
        to: "/destination/moon"
    },
    {
        id: 2,
        name: "mars",
        to: "/destination/mars"
    },
    {
        id: 3,
        name: "europa",
        to: "/destination/europa"
    },
    {
        id: 4,
        name: "titan",
        to: "/destination/titan"
    }
]);

</script>


<template>
    <main>
        <div class="destination">
            <div class="wrapper centered">
                <div class="flex centered uncenter padTablet">
                    <p class="num">01</p>
                    <p class="pick">Pick your destination</p>
                </div>
                <div class="LaptopWrapper">
                    <div class="DividerOne">
                        <img alt="moon" v-if="$route.fullPath == '/destination/moon'" class="planet AFadeInTop" src="@/assets/destination/moon.png" />
                        <img v-else-if="$route.fullPath == '/destination/europa'" class="planet AFadeInTop" src="@/assets/destination/europa.png" />
                        <img v-else-if="$route.fullPath == '/destination/titan'" class="planet AFadeInTop" src="@/assets/destination/titan.png" />
                        <img v-else-if="$route.fullPath == '/destination/mars'" class="planet AFadeInTop" src="@/assets/destination/mars.png" />
                        <img alt="moon" v-else class="planet AFadeInTop" src="@/assets/destination/moon.png" />
                    </div>
                    <div class="DividerTwo">
                        <RouterLink class="link" v-for="planets in Destinations" :to="planets.to" :key="planets.id">{{planets.name}}</RouterLink>
                        <br/>
                        <div class="centered">
                            <router-view  class="AFadeIn tabletWrapper" :key="$route.fullPath" />
                        </div>
                    </div>
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
        padding: 0 0.2rem 0.5rem 0.2rem;
        margin: 0 1rem;
        transition: 0.5s ease-in-out;
    }

    .link:hover{
        color: white;
        border-bottom: 3px solid rgb(255, 255, 255);
        opacity: 0.3;
    }
    .active-link{
        color: white;
        border-bottom: 3px solid rgb(255, 255, 255);
        padding: 0 0.2rem 0.5rem 0.2rem;
    }
    .planet{
        width: 50%;
        margin: 1rem 25%;
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

    @media(min-width: 800px){
        .destination{
            background-image: url('../assets/destination/background-destination-tablet.jpg');
        }
        .uncenter{
            justify-content: left;
        }
        .padTablet{
            margin-top: 3rem;
            margin-left: 1rem;
        }
        .tabletWrapper{
            width: 80%;
            margin-left: 10%;
        }
        :deep(.description){
            padding: 0 1rem;
        }
        :deep(.BigSFlex){
            display: flex;
        }
        :deep(.InfoWrapper){
            padding: 0 5%;
        }
        :deep(.justCenter){
            justify-content: center;
        }
    }
    @media(min-width:1200px){
        .destination{
            background-image: url('../assets/destination/background-destination-desktop.jpg');
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
        .LaptopWrapper{
            display: flex;
        }
        .DividerOne{
            width: 50%;
            box-sizing: content-box;
        }
        .planet{
            width: 60%;
            margin: 4rem 20%;
        }
        .DividerTwo{
            width: 50%;
            text-align: left;
        }
        .tabletWrapper{
            margin-left: 0;
            text-align: left;
            width: 70%;
        }
        :deep(.justCenter){
            justify-content: start !important;
        }
        :deep(.InfoWrapper){
            padding: 0;
            padding-right: 10%;
        }
        :deep(.description){
            padding: 1rem 0;
        }
        :deep(.title){
            font-size: 4.5rem;
            margin: 3.5rem 0rem -1rem 0rem;
        }
    }
    @media(min-width: 1800px){
        .planet{
            width: 50%;
            margin: 4rem 25%;
        }
        .DividerTwo{
            margin-top: 5rem;
        }
        .WrapperText{
            margin-left: 11rem;
        }
    }
</style>