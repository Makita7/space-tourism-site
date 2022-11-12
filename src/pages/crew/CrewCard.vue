<script setup>
    import CrewNav from './CrewNav.vue';

    defineProps({
        name: String,
        position: String,
        description: String,
        img: String,
    })

</script>

<template>
    <div>
        <div class="NotCel LaptopWrapper">
            <div class="WrapperText DividerTwo" >
                <p class="position">{{position}}</p>
                <p class="name">{{name}}</p>
                <p class="description">{{description}}</p>
                <CrewNav/>
            </div>
            <div class="DividerOne">
                <img :alt="name" :src="img" />
            </div>
        </div>
        <div class="OnlyCel">
            <img :alt="name" :src="img" />
            <hr/>
            <CrewNav/>
            <p class="position">{{position}}</p>
            <p class="name">{{name}}</p>
            <p class="description">{{description}}</p>
        </div>
    </div>
</template>

<style scoped>
    img{
        z-index: +1;
        width: 60%;
        margin-top: 2rem;
    }
    hr{
        margin-top: -0.3rem;
        z-index: +5;
        position: relative;
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
    .NotCel{
        content-visibility: hidden;
    }
    .OnlyCel{
        content-visibility: visible;
    }

    @media(min-width: 800px){
        .NotCel{
            content-visibility: visible;
        }
        .OnlyCel{
            content-visibility: hidden;
        }

        .WrapperText{
            width: 60%;
            margin-left: 20%;
        }
        .name{
            font-size: 2.5rem;
        }
        .description{
            margin-bottom: 2rem !important;
        }
        .position{
            font-size: 1.7rem;
        }
    }
    @media(min-width: 1200px){
        .LaptopWrapper{
            display: flex;
        }
        .WrapperText{
            margin-left: 8rem;
        }
        .DividerOne{
            width: 50%;
            box-sizing: content-box;
        }
        .DividerTwo{
            width: 50%;
            text-align: left;
        }
        .position{
            margin-top: 6rem;
        }
        .description{
            margin-bottom: 1rem !important;
            width: 80%;
        }
        img{
            width: 60%;
        }
    }
</style>