<script setup>
import CrewCard from './CrewCard.vue';
import FlightImg from '../../assets/crew/image-anousheh-ansari.png';

</script>

<template>
    <CrewCard
        name="Anousheh Ansari"
        position="Flight Engineer"
        :img="FlightImg"
        description='Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'
    />
</template>