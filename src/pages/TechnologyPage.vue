
<script setup>
  import LaunchImg from '../assets/technology/image-launch-vehicle-landscape.jpg'
  import CapsuleImg from '../assets/technology/image-space-capsule-landscape.jpg'
  import SpaceportImg from '../assets/technology/image-spaceport-landscape.jpg'

  const Data = [
    {
      id: 1,
      title: 'LAUNCH VEHICLE',
      description: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!` ,
      img: LaunchImg,
    },
    {
      id: 2,
      title: 'SPACEPORT',
      description: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.` ,
      img: CapsuleImg,
    },
    {
      id: 3,
      title: 'SPACE CAPSULE',
      description: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.` ,
      img: SpaceportImg
    },
  ]
</script>


<template>
  <div class="tech">
    <div class="wrapper centered">
      <div class="flex centered">
        <p class="num">03</p>
        <p class="pick">SPACE LAUNCH 101</p>
      </div>
      <div class="card" v-for="i in Data">
        <img :alt="i.title" :src="i.img" />
        <p>buttons</p>
        <p class="term">THE TERMINOLOGY…</p>
        <p class="title">{{i.title}}</p>
        <p class="description">{{i.description}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .tech{
      background-image: url('../assets/technology/background-technology-mobile.jpg') ;
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
