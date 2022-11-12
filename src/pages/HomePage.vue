<script setup>

</script>

<template>
  <main class="home">
    <div class="wrapper CompWrap">
      <div class="dividerOne">
        <p class="topP">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h1>space</h1>
        <p class="description">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </p>
      </div>
      <div class="dividerTwo">
          <RouterLink to="/destination/moon">
            <button class="AFadeIn">
                Explore
            </button>
        </RouterLink>
      </div>
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
    font-weight: 300;
  }
  .topP{
    font-family: var(--BarlowC);
    font-size: 1.3rem;
    font-weight: 300;
    margin-bottom: 0;
    color: #D0D6F9;
  }
  .description{
    padding: 0 1.8rem;
    font-family: var(--Barlow);
    margin-bottom: 3rem;
    color: #D0D6F9;
  }


  @media(min-width: 800px) {
    .description{
      padding: 0 9.8rem;
      line-height: 2rem;
      font-size: 1.2rem;
    }
    h1{
      font-size: 10rem;
      font-weight: 300;
    }
    button{
      margin-top: 6rem;
      padding: 6rem 2.5rem;
      font-size: 2.3rem;
    }
    .home{
      background-image: url('../assets/home/background-home-tablet.jpg') ;
    }
    .topP{
      padding-top: 2rem;
    }
  }
  @media(min-width: 1200px) {
    .home{
      background-image: url('../assets/home/background-home-desktop.jpg') ;
    }
    .CompWrap{
      display: flex;
    }
    .dividerOne{
      width: 60%;
      text-align: left;
      padding-left: 8rem;
      box-sizing: border-box;
    }
    .description{
      padding: 0 10rem 0 0;
      font-size: 1rem;
    }
    .topP{
      padding-top: 10rem;
      font-weight: 300;
      font-size: 2rem;
      letter-spacing: 3px;
      padding-left: 1rem;
    }
    h1{
      font-size: 9rem;
    }
    .description{
      margin-top: 0;
    }
    button{
      margin-top: 18rem;
      padding: 5.5rem 3rem;
      font-size: 1.6rem;
      margin-left: 8rem;
    }
    @media(min-width: 1800px) {
      .description{
        padding: 0 18rem 0 0;
      }
      button{
        margin-top: 26rem;
      }
      .dividerOne{
        padding-left: 12rem;
      }
    }
  }
</style>