<template>

    <div class="slick-slider">
        <button type="button" class="slick-arrow slick-prev" style="display: block;">
            Previous
        </button>
        <div class="slick-list">
            <div class="slick-track" style="">
                    <Product class="product" :product="productSample" />
                    <Product class="product" :product="productSample" />
                    <Product class="product" :product="productSample" />
                    <Product class="product" :product="productSample" />
                    <Product class="product" :product="productSample" />
                    <Product class="product" :product="productSample" />
                    <Product class="product" :product="productSample" />
                    <Product class="product" :product="productSample" />
            </div>
        </div>
        <button type="button" class="slick-arrow slick-next" style="display: block;">
            Next
        </button>
    </div>
</template>
<style>
.product {
    display: block;
    flex: 0 0 20%;
}

.slick-track {
    display: flex;
    position: relative;
    width: 100%;
}


.slick-slider .slick-arrow {
    cursor: pointer;
    position: absolute;
    font-size: 0;
    line-height: 0;
    border: none;
    top: calc(50% - 48px);
    color: transparent;
    box-shadow: 0 2px 4px rgb(0 0 0/50%);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border-width: 0;
}

.slick-prev {
    left: 25px;
    transform: rotate(90deg);
}
.slick-next{
    right: 25px;
    transform: rotate(-90deg);
}
.slick-arrow {
    z-index: 200;
    display: block;
    background-color: white;
    background-repeat: no-repeat;
    background-position: 50%;
    background-image: url(@/assets/chevron.svg);
}

.slick-slider,
.slick-list {
    position: relative;
    display: flex;
}

.slick-list {
    overflow: hidden;
    width: 100%;
}
</style>
<script>
export default {
    data() {
        return {
            productSample:
            {
                id: 1,
                title: "Twins",
                price: 2499,
                src_link_default: "https://cloud.camper.com/is/image/JGxvY2F0b3IzJA==/K100743-025_LF.jpg",
                src_link_second: "https://cloud.camper.com/is/image/JGxvY2F0b3IzJA==/K100743-025_CF.jpg"
            },
        }
    }
}
</script>