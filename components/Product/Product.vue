<template>
    <div class="product" @mouseover="show_default = false" @mouseleave="show_default = true">
        <a>
            <router-link :to="(generateLink())">
                <div class="gridPhoto">
                    <div class="category-name">
                        <p>{{product.category}}</p>
                    </div>
                    <div class="grid-images" v-if="(product.typ != 'video')">
                        <picture class="style-image">
                            <img v-bind:src="product.src_link_default" class="style-image" width="326" height="489">
                        </picture>


                        <picture class="style-image_hover" v-if="!show_default" @mouseleave="show_default = true;">
                            <img v-bind:src="product.src_link_second" class="style-image_hover" loading="eager">
                        </picture>
                    </div>
                    <div class="grid-images" v-else>
                        <div class="vsc-controller"></div>
                        <video class="style_gridVideo__1G7y7 style-image" 
                            autoplay="true" loop="true" muted="true" playsinline="true"
                            title="Video of K100743-025">
                            <source :src="product.src_link_default" type="video/webm">
                        </video>
                    </div>

                    <div class="sizes" v-if="sizes">
                        <span class="size_number size_number_available">39</span>
                        <span class="size_number size_number_available">40</span>
                        <span class="size_number size_number_available">41</span>
                        <span class="size_number size_number_available">42</span>
                        <span class="size_number size_number_available">43</span>
                        <span class="size_number size_number_available">44</span>
                        <span class="size_number size_number_available">45</span>
                        <span class="size_number size_number_not_available">46</span>
                    </div>
                </div>
                <div class="grid-content">
                    <p class="name">{{ product.title }}</p>
                    <p class="price">₺{{ product.price }}</p>
                    <p class="item-info" v-if="sizes">4 RENK</p>
                </div>
            </router-link>
        </a>
    </div>
</template>
<script setup lang="ts">
    const show_default  = ref(true)
    const props = defineProps({
        sizes:Boolean,
        product:{
            required: true,
            type: Object,
            typ: String,
            id: String,
            title: String,
            price: String,
            src_link_default: String,
            src_link_second: String,
            category: String
        }
    })
    function generateLink(){
        return "/product-details/" + props.product.id 
    }
</script>
<style scoped>
.product {
    display: block;
    position: relative;
}

video{
    position: absolute;
}
.sizes {
    align-self: end;
    display: grid;
    font-size: .875em;
    grid-gap: 8px 18px;
    grid-template-columns: repeat(auto-fill, minmax(20px, 1fr));
    margin: 24px;
    grid-column: 1;
    grid-row: 1;
    z-index: -1;
    visibility: hidden;
}

.product:hover .sizes {
    visibility: visible;
    z-index: 2;
}
.category-name{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
}
.category-name > p{
    font-size: .8em;
    padding: 20px;
    text-transform: uppercase;
    margin-bottom: 0;
}
.size_number {
    padding: 2% 5%;
}

.size_number_not_available {
    color: #919191;
    background: url(@/assets/del-line-2.svg) 50% no-repeat;
}

.size_number_available:hover {
    text-decoration: underline;
}

.gridPhoto {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
}

.grid-images {
    display: grid;
    grid-column: 1;
    grid-row: 1;
    overflow: hidden;
    background-color: #e8e7ea;
    padding-bottom: 150%;
}

.grid-images>picture {
    position: absolute;
    overflow: hidden;
}

.style-image {
    height: auto;
    min-height: auto;
    width: 100%;
    opacity: 1;
    transition: opacity .3s ease-in;
}


.style-image_hover {
    min-width: auto;
    width: 100%;
}

.grid-content {
    width: 100%;
    padding: 16px 16px 40px;
    position: relative;
}

.name,
.price {
    color: black;
    font-weight: 400;
    font-size: .875em;
}

.item-info {
    color: black;
    font-size: .5em;
    margin-top: 14px;
    text-transform: uppercase;
}
</style>
