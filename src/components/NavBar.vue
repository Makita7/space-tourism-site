
<script setup>
    import { RouterLink } from "vue-router";
</script>


<template>
    <header>
        <img alt="logo" src='../assets/shared/logo.svg' />
        <button>
            <img alt="logo" src='../assets/shared/icon-hamburger.svg' />
        </button>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/destination">destination</RouterLink>
            <RouterLink to="/crew">crew</RouterLink>
            <RouterLink to="/technology" >Technology</RouterLink>
        </nav>
    </header>
</template>


<style scoped>
    header{
        margin-top: 1.5rem;
        position: absolute;
    }
    button{
        background-color: rgba(240, 248, 255, 0);
        border: 0px;
    }
</style>