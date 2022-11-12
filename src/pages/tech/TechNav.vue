
<script setup>
    import { RouterLink } from 'vue-router';
    import { ref } from 'vue';

    const TechNavInfo = ref([
        {
            id: 1,
            to: "/technology/launch",
        },
        {
            id: 2,
            to: "/technology/spacecapsule",
        },
        {
            id: 3,
            to: "/technology/spaceport",
        },
    ]);
</script>

<template>
    <div class="flex wrapper unFlex DividerOne">
        <RouterLink v-for="item in TechNavInfo" :key="item.id" :to="item.to">
            <button class="btn">
                {{item.id}}
            </button>
        </RouterLink>
    </div>
</template>

<style scoped>
    .wrapper{
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
    .btn{
        background-color: rgba(255, 255, 255, 0);
        border-color: rgba(255, 255, 255, 0.25);
        margin: 1rem 0.5rem;
        padding: 0.7rem 1rem;
        border-radius: 50px;
        border-width: 2px;
        color: white;
        font-family: 'Bellefair', serif;
        font-size: 1rem;
        font-weight: 600;
    }
    .active-link .btn{
        background-color: rgba(255, 255, 255, 1);
        color: black;
    }
    @media(min-width: 800px){
        .wrapper{
            margin-top: 1.5rem;
            margin-bottom: 0.5rem;
        }
        .btn{
            padding: 1rem 1.4rem;
            margin: 1rem 0.7rem;
        }
    }
    @media(min-width: 1200px){
        .unFlex{
            display: inline-grid !important;
        }
        .btn{
            padding: 1.5rem 2rem;
            font-size: 1.3rem;
        }
        .DividerOne{
            width: 10%;
            margin-left: 5rem;
            margin-right: 0;
            height: fit-content;
        }
    }
</style>