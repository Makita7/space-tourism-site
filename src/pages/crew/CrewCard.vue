<script setup>
    import CrewNav from '../../components/CrewNav.vue';

    defineProps({
        name: String,
        position: String,
        description: String,
        img: String,
    })

</script>

<template>
    <div>
        <img :alt="name" :src="img" />
        <hr/>
        <CrewNav/>
        <p class="position">{{position}}</p>
        <p class="name">{{name}}</p>
        <p class="description">{{description}}</p>
    </div>
</template>

<style scoped>
    img{
        z-index: +1;
        width: 60%;
        margin-top: 2rem;
    }
    hr{
        margin-top: -0.3rem;
        z-index: +5;
        position: relative;
    }
    .description{
        font-family: var(--Barlow);
        font-weight: 300;
        line-height: 1.7rem;
        margin-bottom: 2rem;
        color: var(--inactiveColor);
        margin-bottom: 9rem !important;
    }
    .name{
        font-family: var(--Bellfair);
        font-size: 1.7rem;
        text-transform: uppercase;
        margin-top: 0.5rem;
    }
    .position{
        text-transform: uppercase;
        margin-top: 1rem;
        margin-bottom: 0.2rem;
        opacity: 0.5;
        font-family: var(--Bellfair);
        font-weight: 200;
        font-size: 1.3rem;
    }
</style>