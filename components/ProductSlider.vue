<template>
    <div class="slick-slider">
        <button type="button" class="slick-arrow slick-prev" style="display: block;" @click="saga_cek()">
            Previous
        </button>
        <div class="slick-list">
            <div id="slider-recommended" class="slick-track" v-bind:style="getLeft()">
                <Product class="product" v-for="item in items" v-bind:key="item.id" :product="item"/>
            </div>
        </div>
        <button type="button" class="slick-arrow slick-next" style="display: block;" @click="sola_cek()">
            Next
        </button>
    </div>
</template>
<style scoped>
.product {
    display: block;
    width: 450px;
}

.slick-track {
    display: flex;
    position: relative;
    max-width: none;
    transition: left 500ms ease-in;
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

.slick-next {
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
            _left_value: 0,
        }
    },
    methods: {
        hareket_hesapla() {
            var kaydir = document.querySelector(".product").offsetWidth
            return kaydir;
        },
        sola_cek(event) {
            this._left_value -= this.hareket_hesapla();
        },
        saga_cek(event) {
            var kaydir = this.hareket_hesapla();
            if(this._left_value < 0){
                this._left_value += this.hareket_hesapla();
            }else{
                this._left_value = 0
            }
        },
        getLeft() {
            return "left:" + this._left_value + "px;";
        }
    },
    props: {
        sizes: true,
        items:[]
    }
}
</script>