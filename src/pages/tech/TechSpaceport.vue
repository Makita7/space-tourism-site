<script setup>
    import TechCard from './TechCard.vue';
    import SpaceportImg from '../../assets/technology/image-spaceport-landscape.jpg';
    import LaunchImgBig from '../../assets/technology/image-spaceport-portrait.jpg';
</script>

<template>
    <TechCard
        title= "SPACEPORT"
        :img= "SpaceportImg"
        description= "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        :imgBig="LaunchImgBig"
    />
</template>