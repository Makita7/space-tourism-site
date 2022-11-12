
<script setup>
    import { RouterLink } from "vue-router";
    import { onMounted, ref, watch } from "vue";
import NavBarBig from "./NavBarBig.vue";

const navbarData = [
    {
        name: "home",
        id: 1,
        to: "/"
    },
    {
        name: "destination",
        id: 2,
        to: "/destination"
    },
    {
        name: "crew",
        id: 3,
        to: "/crew"
    },
    {
        name: "technology",
        id: 4,
        to: "/technology"
    }
]

const OpenNav = ref(false);

const ToggleNavCel = () => {
    OpenNav.value = !OpenNav.value;
}

</script>


<template>
    <header class="">
        <RouterLink to="/">
            <img class="logo OnlyCel" alt="logo" src='../assets/shared/logo.svg' />
        </RouterLink>
        <div  class="OnlyCel">
            <button @click="ToggleNavCel">
                <img alt="menu icon" src='../assets/shared/icon-hamburger.svg'  />
            </button>
            <nav v-if="OpenNav" class="navCel">
                <button class="close" v-on:click="ToggleNavCel" >
                    <img alt="close button" src="../assets/shared/icon-close.svg" @click="!OpenNav" />
                </button>
                <div class="navW">
                    <RouterLink @click="ToggleNavCel" v-for="data of navbarData" :key="data.id" :to="data.to"><b>0{{data.id}}</b> {{data.name}}</RouterLink>
                </div>
            </nav>
        </div>
        <NavBarBig/>
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
        margin-top: -2rem;
        float: right;
    }
    .logo{
        margin-left: 1.5rem;
    }

    .navCel {
        height: 100vh;
        width: 65%;
        background-color: rgb(255 255 255 / 4%);
        backdrop-filter: blur(25px);
        position: fixed;
        top: 0;
        right: 0;
        float: right;
        z-index: +6;
    }
    .navW{
        display: grid;
        margin: 2rem;
        margin-top: 6rem;
    }
    .navCel a{
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

    .OnlyCel{
        content-visibility: hidden;
    }

    @media(max-width: 800px){
        .OnlyCel{
        content-visibility: visible;
        }
    }

</style>