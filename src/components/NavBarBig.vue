

<script setup>
    import { RouterLink } from "vue-router";

    const navbarData = [
        {
            name: "home",
            id: 1,
            to: "/"
        },
        {
            name: "destination",
            id: 2,
            to: "/moon"
        },
        {
            name: "crew",
            id: 3,
            to: "/commander"
        },
        {
            name: "technology",
            id: 4,
            to: "/launchvehicle"
        }
    ]
</script>

<template>
    <div class="flex NotCel">
        <RouterLink to="/">
            <img class="logo" alt="logo" src='../assets/shared/logo.svg' />
        </RouterLink>
        <div class="wrapper">
            <RouterLink v-for="data of navbarData" :key="data.id" :to="data.to">{{data.name}}</RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .wrapper{
        background-color: rgba(255, 255, 255, 0.04);
        top: 0;
        margin-top: -2.1rem;
        margin-left: 11rem;
        width: 100%;
        margin-right: -1rem;
        padding-top: 2rem;
        text-align: right;
        padding-right: 2rem;
    }
    .wrapper a{
        color: white;
        text-decoration: none;
        padding-left: 5rem;
        margin-top: -1rem;
        font-family: 'Barlow Condensed', sans-serif;
        text-transform: uppercase;
        font-size: 1.3rem;
        font-weight: 300;
        letter-spacing: 2.6px;
    }
    .logo{
        margin-left: 2.5rem;
        width: 3.5rem;
        margin-top: -0.5rem;
        margin-bottom: 1rem;
    }
    .active-link{
        text-decoration: underline !important;
        text-underline-offset: 3rem;
    }
    .NotCel{
        content-visibility: visible;
    }
    @media(max-width: 800px){
        .NotCel{
        content-visibility: hidden;
        }
    }
</style>