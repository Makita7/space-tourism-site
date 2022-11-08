
<script setup>
    import { RouterLink } from "vue-router";
    import { ref } from 'vue'
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
            to: "/technology"
        }
    ]

    const OpenNav = ref(false);
    const ToggleNav = () => {
        OpenNav.value = !OpenNav.value;
    }
</script>


<template>
    <header>
        <RouterLink to="/">
            <img class="logo" alt="logo" src='../assets/shared/logo.svg' />
        </RouterLink>
        <button @click="ToggleNav">
            <img alt="menu icon" src='../assets/shared/icon-hamburger.svg'  />
        </button>
        <nav v-if="OpenNav">
            <button class="close" @click="ToggleNav" >
                <img alt="close button" src="../assets/shared/icon-close.svg" @click="!OpenNav" />
            </button>
            <div class="navW">
                <RouterLink @click="ToggleNav" v-for="data of navbarData" :key="data.id" :to="data.to"><b>0{{data.id}}</b> {{data.name}}</RouterLink>
            </div>
        </nav>
    </header>
</template>


<style scoped>
    header{
        margin-top: 1.5rem;
        position: absolute;
        width: 100%;
    }
    button{
        background-color: rgba(240, 248, 255, 0);
        border: 0px;
        margin-right: 2rem;
        margin-top: 0.7rem;
        float: right;
    }
    .logo{
        margin-left: 1.5rem;
    }
    /* cellphone nav make a sub component */
    nav {
        height: 100vh;
        width: 65%;
        background-color: rgb(255 255 255 / 4%);
        backdrop-filter: blur(25px);
        position: fixed;
        top: 0;
        right: 0;
    }
    .navW{
        display: grid;
        margin: 2rem;
        margin-top: 6rem;
    }
    nav a{
        font-family: var(--BarlowC);
        color: white;
        padding-bottom: 1.5rem;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 1.3rem;
        font-weight: 300;
    }
    .close{
        margin-top: 2rem;
    }
    .active-link{
        font-weight: bold;
    }
</style>