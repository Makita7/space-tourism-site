<script setup>
import CrewCard from './CrewCard.vue';
import PilotImg from '../../assets/crew/image-victor-glover.png';

</script>

<template>
    <CrewCard
        name="PILOT"
        position="Victor Glover"
        :img="PilotImg"
        description='Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'
    />
</template>