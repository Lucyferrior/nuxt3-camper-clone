<template>
    <div class="shopping_bag_row_item" style="row-gap: 0px;">
        <div class="ant-col">
            <NuxtLink to="product-details">
                <picture>
                    <img :src="src_link" class="item-thumbnail">
                </picture>
            </NuxtLink>
        </div>
        <div class="ürün-genel">
            <div class="yazı-genel">
                <p class="name">{{title}}</p>
                <p class="kod">{{subtitle}}</p>
                <div class="bilgi">
                    <div>
                        <span class="size">Size</span>
                        <button type="button" class="beden">
                            <span>{{size}}</span>
                            <svg height="6" viewBox="0 0 18 9" width="11">
                                <path d="m4-4 3.67495264 3.67495264 4.32504736 4.32504736-8 8" fill="none" stroke="#000"
                                    stroke-linecap="square" transform="matrix(0 1 -1 0 12.96 -3.141463)"></path>
                            </svg>
                        </button>
                    </div>
                    <span class="price">
                        <span data-ge-basket-productsaleprice="data-ge-basket-productsaleprice">₺{{price}}
                        </span>
                    </span>
                </div>
            </div>
        </div>
        <div class="carpi-icon">
            <div>
                <span class="carpi">
                    <svg height="12" viewBox="0 0 10 12" width="10">
                        <path d="m9.79049 9.789734-9.79049-9.78965m9.79049-.000084-9.79049 9.78965" fill="none"
                            stroke="#000" transform="translate(0 1)"></path>
                    </svg>
                </span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    const props = defineProps({
        title: String,
            subtitle: String,
            size: String,
            price: String,
            src_link: String
    })
</script>
<style>
.beden::before{
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    z-index: 1;
    display: none;
    background: #fff;
    border-radius: inherit;
    opacity: .35;
    transition: opacity .2s;
    content: "";
    pointer-events: none;
}
.shopping_bag_row_item {
    row-gap: 0px;
    border-bottom: 1px solid #d9d9d9;
    padding: 10px 0;
    flex-flow: nowrap;
    min-height: 141px;
    display: flex;
}

@media screen and (min-width: 768px) {
    .ürün-genel {
        display: flex;
        justify-content: flex-start;
    }
}

.ürün-genel {
    flex: auto;
    position: relative;
    max-width: 100%;
    min-height: 1px;
}

.ant-col {
    flex: 0 0 120px;
    position: relative;
    max-width: 100%;
    min-height: 1px;
}


.item-thumbnail {
    max-width: 100%;
    width: 120px;
    height: 120px;
    object-fit: cover;
    object-position: bottom;
    vertical-align: middle;
    border-style: none;

}

.kod {
    font-size: .6em;
    color: gray;
    margin-bottom: 0;
}

.name {
    font-size: var(--title-size);
    margin-bottom: 0;
}

.yazı-genel {
    margin-left: 1em;
}

.size {
    font-size: var(--description-size);
}

.bilgi {
    margin-top: 1em;
    text-transform: uppercase;
}

.beden>svg:not(:root) {
    overflow: hidden;
}

.beden>svg {
    margin-left: 8px;
}

.beden>span {
    font-size: var(--description-size);
    display: inline-block;
}

.beden,
input {
    overflow: visible;
}

.beden,
select {
    text-transform: none;
}

.beden {
    padding: 0 5px;
    margin-right: 2em;
    color: black;
    background: transparent;
    border-color: transparent;
    box-shadow: none;
    height: 24px;
    font-size: 16px;
    line-height: 1.5715;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    cursor: pointer;
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    user-select: none;
    touch-action: manipulation;
    color: black;
    border: 1px solid #d9d9d9;
}

.price {
    display: inline-block;
    font-size: var(--title-size);
}

.carpi>svg:not(:root) {
    overflow: hidden;
}

.carpi {
    color: var(--color-text-secondary);
    cursor: pointer;
}

.carpi-icon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 1rem;
    position: relative;
    max-width: 100%;
    min-height: 1px;
}
</style>