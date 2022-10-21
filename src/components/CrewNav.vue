
<script>


</script>

<template>
    <div class="wrapper flex centered">
        <button @click="GoToSlide" class="active-link" index="1"></button>
        <button  @click="GoToSlide" index="2" ></button>
        <button  @click="GoToSlide" index="3" ></button>
        <button  @click="GoToSlide" index="4" ></button>
    </div>
</template>

<style scoped>
    .wrapper{
        margin-top: -2.5rem;
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
    .active-link{
        opacity: 1 !important;
    }
</style>