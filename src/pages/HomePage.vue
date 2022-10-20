<script setup>

</script>

<template>
  <main class="home">
    <div class="wrapper">
      <p class="topP">
        SO, YOU WANT TO TRAVEL TO
      </p>
      <h1>space</h1>
      <p class="description">
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
      </p>
      <RouterLink to="/destination">
        <button>
            Explore
        </button>
    </RouterLink>
    </div>
  </main>
</template>

<style scoped>
  .home{
    background-image: url('../assets/home/background-home-mobile.jpg') ;
    background-repeat: no-repeat !important;
    background-size: cover;
    height: 105vh;
  }
  main{
    text-align: center;
    color: white;
  }
  .wrapper{
    padding-top: 8rem;
  }
  button{
    background-color: white;
    padding: 4rem 2rem;
    border-radius: 200px;
    border: 0px;
    color: black;
    font-family: var(--Bellfair);
    font-size: 1.2rem;
    text-transform: uppercase;
  }
  h1{
    font-family: 'Bellefair', serif;
    font-size: 5rem;
    text-transform: uppercase;
    margin: 2rem 0rem;
  }
  .topP{
    font-family: var(--BarlowC);
    font-size: 1.3rem;
    font-weight: 300;
    margin-bottom: 0;
  }
  .description{
    padding: 0 1.8rem;
    font-family: var(--Barlow);
    margin-bottom: 3rem;
  }
</style>