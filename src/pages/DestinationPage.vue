
<script setup>


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
</script>


<template>
    <main>
        <div class="destination">
            <div class="wrapper">
                <RouterLink class="link" v-for="planets in Destinations" :to="planets.to" :key="planets.id">{{planets.name}}</RouterLink><br/>
                destination
                <RouterView/>
            </div>
        </div>
    </main>
</template>


<style scoped>
    .destination{
        background-image: url('../assets/destination/background-destination-mobile.jpg') ;
        background-repeat: no-repeat !important;
        background-size: cover;
        height: 105vh;
        color: white;
    }
    .wrapper{
        padding-top: 8rem;
        padding-left: 2rem;
    }
    .link{
        color: white;
    }
</style>