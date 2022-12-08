<template>
    <div>
        <Product class="slider-product" v-for="item in products" v-bind:key="item.id" :product="item" :sizes="false" />
    </div>
</template>
<style>
    .slider-product{
        
    }
</style>
<script>
    export default{
        
    }
</script>