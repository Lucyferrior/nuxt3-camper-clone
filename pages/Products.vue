<template>
    <div>
        <div id="product_container">
            <Product v-for="item in 3"/>
        </div>
    </div>
</template>
<style>
#product_container {
    display: flex;
    row-gap: 0;
    overflow: hidden;
    flex-flow: row wrap;
}
</style>
<script>
export default {
    name: "product-vue"
}
</script>