<script setup>
    import CrewNav from '../components/CrewNav.vue';
    import Commander from '../assets/crew/image-douglas-hurley.png';
    import Pilot from '../assets/crew/image-victor-glover.png';
    import MisionSpecialist from '../assets/crew/image-mark-shuttleworth.png';
    import FlightEngineer from '../assets/crew/image-anousheh-ansari.png';
    import { ref } from 'vue';

    const CurrentIndex = ref(1)

    const GoToSlide = (index) =>{
        // CurrentIndex = index
        console.log(index)
    }

    const Slides = [
        {
            id: 1 ,
            name: "Douglas Hurley",
            position: "Commander",
            img: Commander,
            description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
        },
        {
            id: 2 ,
            name: "MARK SHUTTLEWORTH",
            position: "Mission Specialist ",
            img: MisionSpecialist,
            description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
        },
        {
            id: 3 ,
            name: "Victor Glover",
            position: "PILOT",
            img: Pilot,
            description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. '
        },
        {
            id: 4 ,
            name: "Anousheh Ansari",
            position: "Flight Engineer",
            img: FlightEngineer,
            description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. '
        },
    ];



</script>

<template>
    <div class="crew">
        <div class="wrapper centered">
            <div class="flex centered">
                <p class="num">02</p>
                <p class="pick">Meet your crew</p>
            </div>
            <div class="slides">
                <div
                    v-for="slide in Slides"
                    :key="slide.id"
                >
                    <img :alt="slide.name" :src="slide.img" />
                    <hr/>
                    <CrewNav GoToSlide={GoToSlide} />
                    <p class="position">{{slide.position}}</p>
                    <p class="name">{{slide.name}}</p>
                    <p class="description">{{slide.description}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .crew{
        background-image: url('../assets/crew/background-crew-mobile.jpg') ;
        background-repeat: repeat-y !important;
        background-size: cover;
        min-height: 105vh;
        color: white;
    }
    .wrapper{
        padding-top: 5rem;
        padding-left: 2rem;
        padding-right: 2rem;
        padding-bottom: 1rem;
    }
    .centered{
        text-align: center !important;
        justify-content: center;
    }
    img{
        z-index: +1;
        width: 60%;
        margin-top: 2rem;
    }
    hr{
        margin-top: -0.4rem;
        z-index: +5;
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