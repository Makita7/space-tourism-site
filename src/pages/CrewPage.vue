<script setup>

</script>

<template>
    <div class="crew">
        <div class="wrapper centered">
            <div class="flex centered uncenter padTablet">
                <p class="num">02</p>
                <p class="pick">Meet your crew</p>
            </div>
            <div class="slides">
                <router-view  v-slot="{ Component }" >
                    <transition name="route" mode="out-in">
                        <component :is="Component"/>
                    </transition>
                </router-view>
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

    /* ANIMATIONS */
    .route-enter-from{
        opacity: 0;
        transform: translateX(100px);
    }

    .route-enter-active{
        transition: all 0.3s ease-out;
    }
    .route-leave-active{
        opacity: 0;
        transform: translateX(-100px);
    }

    .route-leave-active{
        transition: all 0.3s ease-in;
    }

    @media(min-width: 800px){
        .crew{
            background-image: url('../assets/crew/background-crew-tablet.jpg');
        }
        .uncenter{
            justify-content: left;
        }
        .padTablet{
            margin-top: 3rem;
            margin-left: 1rem;
        }
    }
    @media(min-width: 1200px){
        .crew{
            background-image: url('../assets/crew/background-crew-desktop.jpg');
        }
        .num{
            font-size: 1.6rem;
        }
        .pick{
            font-size: 1.6rem;
            letter-spacing: 3px;
        }
        .padTablet{
            margin-top: 4rem;
            margin-left: 8rem;
        }
    }
</style>