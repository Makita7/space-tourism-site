
<script>
    export default {
        name: "crew",
        data: () => {
            slides:[
                {
                    id: 1 ,
                    name: "Douglas Hurley",
                    position: "Commander",
                    img: '../../assets/crew/image-douglas-hurley.png',
                    description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
                },
                {
                    id: 2 ,
                    name: "MARK SHUTTLEWORTH",
                    position: "Mission Specialist ",
                    img: '../../assets/crew/image-mark-shuttleworth.png',
                    description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
                },
                {
                    id: 3 ,
                    name: "PILOT",
                    position: "Victor Glover",
                    img: '../../assets/crew/image-victor-glover.png',
                    description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. '
                },
                {
                    id: 4 ,
                    name: "Anousheh Ansari",
                    position: "Flight Engineer",
                    img: '../../assets/crew/image-anousheh-ansari.png',
                    description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. '
                },
        ];
        }
    }
</script>

<template>
    <div class="slides">
        <div
            v-for="slide in slides"
            :key="slide.id"
        >
            <p class="name">{{slide.name}}</p>
        </div>
    </div>
</template>