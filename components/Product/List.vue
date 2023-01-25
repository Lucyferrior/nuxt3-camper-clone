<template>
    <div id="product_container">

        <Product v-for="item in products" :product="item" />

    </div>

</template>
<script setup lang="ts">
const props = defineProps({products: Object})
</script>
<style scoped>
#product_container {
    width: 100%;
    display: flex;
    row-gap: 0;
    overflow: hidden;
    flex-flow: row wrap;
}
.product {
    flex: 0 0 50%;
    max-width: 50%;
}

@media screen and (min-width: 768px) {
    .product {
        flex: 0 0 33.33333%;
        max-width: 33.33333%;
    }
}

@media screen and (min-width: 1200px) {
    .product {
        flex: 0 0 25%;
        max-width: 25%;
    }
}

@media screen and (min-width: 1440px) {
    .filters-row span {
        font-size: 10px;
    }
}
</style>

