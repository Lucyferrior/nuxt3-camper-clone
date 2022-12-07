<template>
    <div class="div-row">
        <div class="div_column images_column">
            <div class="div-row" style="row-gap: 0px;">
                <ProductDetailPhoto v-for="item in 5" />
            </div>
        </div>
        <div class="div_column product_info_style">
            <div>
                <ProductDetailInfo />
            </div>
        </div>

        <div id="recomendor" class="">
            <h3 class="style_title__1UeK5">
                BU ÜRÜNLERLE DE İLGİLENEBİLİRSİNİZ
            </h3>
            <ProductSlider :items="products"/>
        </div>
    </div>
</template>
<style scoped>
#recomendor {
    width: 100%;
}

.div_column {
    min-height: 1px;
    position: relative;
    max-width: 100%;
}

.images_column {
    display: flex;
    flex: 0 0 100%;
    max-width: 100%;
}

.div-row {
    display: flex;
    flex-flow: row wrap;
}

.product_info_style>div {
    height: 100%;
}

.product_info_style {
    display: block;
    flex: 0 0 100%;
    max-width: 100%;
}

@media screen and (min-width: 768px) {
    .images_column {
        flex: 0 0 58.333333%;
        max-width: 58.333333%;
    }

    .product_info_style {
        flex: 0 0 41.6666667%;
        max-width: 41.6666667%;
    }
}

@media screen and (min-width: 992px) {
    .images_column {
        flex: 0 0 66.66666667%;
        max-width: 66.6666667%;
    }

    .product_info_style {
        flex: 0 0 33.3333333%;
        max-width: 33.33333333%;
    }
}

@media screen and (min-width: 768px) {
    .product_info_style {
        padding: 35px 0;
        margin: 0 auto;
        max-width: 260px;
    }
}
</style>
<script>
export default {
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
}</script>