
<script>


</script>

<template>
    <div class="wrapper flex centered navLaptopFix">
        <RouterLink to="/commander" >
            <button ></button>
        </RouterLink>
        <RouterLink to="/missionspecialist">
            <button ></button>
        </RouterLink>
        <RouterLink to="/pilot" >
            <button ></button>
        </RouterLink>
        <RouterLink to="/flightengineer" >
            <button ></button>
        </RouterLink>
    </div>
</template>

<style scoped>
    .wrapper{
        margin-top: 1rem;
    }
    button{
        box-sizing: content-box;
        width: 12px;
        height: 12px;
        padding: 0;
        margin-right: 10px;
        margin-left: 3px;
        text-indent: -999px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border: 0;
        opacity: .5;
        transition: opacity .6s ease;
        border-radius: 10px !important;
    }
    .active-link button{
        opacity: 1 !important;
        color: #ffff;
    }
    @media(min-width: 800px){
            button{
            width: 15px;
            height: 15px;
        }
    }
    @media(min-width: 1200px){
        .navLaptopFix{
            justify-content: left;
            margin-top: 6rem;
        }
        button{
            width: 10px;
            height: 10px;
        }
    }
</style>