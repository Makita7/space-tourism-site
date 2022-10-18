
<script setup>
    import { RouterLink } from "vue-router";
    import { ref } from 'vue'

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
                <RouterLink @click="ToggleNav" to="/"><b>00</b> Home</RouterLink>
                <RouterLink @click="ToggleNav" to="/destination"><b>01</b> destination</RouterLink>
                <RouterLink @click="ToggleNav" to="/crew"><b>02</b> crew</RouterLink>
                <RouterLink @click="ToggleNav" to="/technology" ><b>04</b> Technology</RouterLink>
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
</style>