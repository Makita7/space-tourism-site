
<script setup>
import CrewCard from './CrewCard.vue';
import CommanderImg from '../../assets/crew/image-douglas-hurley.png';

</script>

<template>
    <CrewCard
        name="Douglas Hurley"
        position="Commander"
        :img="CommanderImg"
        description='Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
    />
</template>