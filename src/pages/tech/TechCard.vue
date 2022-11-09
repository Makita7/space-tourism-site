

<script setup>

    defineProps({
        title: String,
        img: String,
        description: String,
    })
</script>

<template>
    <div class="card">
        <img :alt="title" :src="img" />
        <p>buttons</p>
        <p class="term">THE TERMINOLOGY…</p>
        <p class="title">{{title}}</p>
        <p class="description">{{description}}</p>
    </div>
</template>

<style scoped>
    img{
        width: 120% !important;
        margin-left: -2rem;
    }
    .description{
            font-family: var(--Barlow);
            font-weight: 300;
            line-height: 1.7rem;
            margin-bottom: 2rem;
            color: var(--inactiveColor);
        }
    .term{
            font-family: var(--Barlow);
            font-weight: 300;
            line-height: 1.7rem;
            color: var(--inactiveColor);
        }
    .title{
        font-size: 2rem;
        text-transform: capitalize;
        text-transform: uppercase;
        font-family: var(--Bellfair);
        font-weight: 500;
        margin: -0.5rem 0rem 1rem 0rem;
    }
    .card{
        margin-bottom: 5rem;
    }
</style>