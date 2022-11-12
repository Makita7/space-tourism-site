

<script setup>
    import TechNav from './TechNav.vue';
    defineProps({
        title: String,
        img: String,
        description: String,
        imgBig: String,
    })
</script>

<template>
    <div class="card DesktopWrap">
        <img :alt="title" :src="img" class="NotLaptop" />
        <TechNav/>
        <div class="TextWrapper DividerTwo">
            <p class="term">THE TERMINOLOGY…</p>
            <p class="title">{{title}}</p>
            <p class="description">{{description}}</p>
        </div>
        <div class="OnlyLaptop DividerThree">
            <img :alt="title" :src="imgBig" class="OnlyLaptop" />
        </div>
    </div>
</template>

<style scoped>
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
    .NotLaptop{
        content-visibility: visible;
    }
    .OnlyLaptop{
        content-visibility: hidden;
    }

    @media(min-width: 800px){
        .TextWrapper{
            width: 60%;
            margin-left: 20%;
            margin-top: 1rem;
        }
        .title{
            font-size: 2.5rem;
        }
        .term{
            font-size: 1.2rem;
            margin-top: 1rem;
        }
        .description{
            font-size: 1.1rem;
            margin-top: 2rem;
        }
    }
    @media(min-width: 1200px){
        .NotLaptop{
            content-visibility: hidden;
            width: 0 !important;
        }
        .DesktopWrap{
            display: flex;
        }
        .OnlyLaptop{
            content-visibility: visible;
        }
        .TextWrapper{
            margin-left: 0%;
        }
        :deep(.DividerOne){
            width: 20%;
        }
        .DividerTwo{
            width: 50%;
        }
        .DividerThree{
            width: 30;
        }
    }
</style>