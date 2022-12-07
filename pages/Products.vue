<template>
    <div>
        <div id="product_container">
            <Product v-for="item in products" v-bind:key="item.id" :product="item" :sizes="true" />
        </div>
    </div>
</template>
<style scoped>
#product_container {
    display: flex;
    row-gap: 0;
    overflow: hidden;
    flex-flow: row wrap;
}
.product{
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
</style>
<script>
export default {
    name: "product-vue",
    data() {
        return {
            products: [
                {
                    id: 1,
                    title: "Twins",
                    price: 2499,
                    src_link_default: "https://cloud.camper.com/is/image/JGxvY2F0b3IzJA==/K100743-025_LF.jpg",
                    src_link_second: "https://cloud.camper.com/is/image/JGxvY2F0b3IzJA==/K100743-025_CF.jpg"
                },
                {
                    id: 2,
                    title: "Runner K21",
                    price: 2499,
                    src_link_default: "https://cloud.camper.com/is/image/JGxvY2F0b3IzJA==/K100743-006_LF.jpg",
                    src_link_second: "https://cloud.camper.com/is/image/JGxvY2F0b3IzJA==/K100743-006_CF.jpg"
                },
                {
                    id: 3,
                    title: "Runner",
                    price: 2499,
                    src_link_default: "https://cloud.camper.com/is/image/JGxvY2F0b3IzJA==/K100226-052_LF.jpg",
                    src_link_second: "https://cloud.camper.com/is/image/JGxvY2F0b3IzJA==/K100226-052_CF.jpg"
                },
                {
                    id: 3,
                    title: "Runner",
                    price: 2499,
                    src_link_default: "https://cloud.camper.com/is/image/JGxvY2F0b3IzJA==/K100226-052_LF.jpg",
                    src_link_second: "https://cloud.camper.com/is/image/JGxvY2F0b3IzJA==/K100226-052_CF.jpg"
                },
                {
                    id: 3,
                    title: "Runner",
                    price: 2499,
                    src_link_default: "https://cloud.camper.com/is/image/JGxvY2F0b3IzJA==/K100226-052_LF.jpg",
                    src_link_second: "https://cloud.camper.com/is/image/JGxvY2F0b3IzJA==/K100226-052_CF.jpg"
                },
            ]
        };
    },
}
</script>