<template>
    <div>
        <div class="bread">
            <span>
            <span class="ant-breadcrumb-link"><a
                        href="/tr_TR/">CAMPER</a>
                    
                    </span>
                    </span>
                        <span>
                            <span class="ant-breadcrumb-link">Kadın
                    Ayakkabı</span>
                </span></div>

        <div id="product_container">
            <div class="product-list">
                <h1 class="yazı">Kadın Ayakkabıları</h1>
                <h2 class="desc"></h2>
            </div>
            <div id="plp-filter-nav" class="filter" style="top: 42px;">
                <div class="filters-row" style="row-gap: 0px;">
                    <div><button type="button"
                            class="buton">
                            <div><svg height="13" viewBox="0 0 16 13" width="16">
                                    <g fill="none" fill-rule="evenodd">
                                        <path d="m0 2.5h16" stroke="#000"></path>
                                        <path d="m0 10.5h16" stroke="#000"></path>
                                        <g fill="#000">
                                            <path d="m12 0h1v5h-1z"></path>
                                            <path d="m3 7.973684h1v5h-1z"></path>
                                        </g>
                                    </g>
                                </svg> <span>Filtre </span></div>
                        </button></div>
                    <div class="style_sortsDiv__1Eee6"><span class="filter-text">97<!-- --> <!-- -->ÜRÜNLER<!-- -->
                        </span>
                        <span class="filter-text">
                            <span class="sortdivider">

                            </span>-e göre
                            sirala<!-- --> :</span>
                            <button type="button"
                            class="header-btn"><span>
                                CAMPER'IN SEÇİMİ </span><svg height="9" viewBox="0 0 18 9" width="18"
                                class="chevron">
                                <path d="m4-4 3.67495264 3.67495264 4.32504736 4.32504736-8 8" fill="none" stroke="#000"
                                    stroke-linecap="square" transform="matrix(0 1 -1 0 12.96 -3.141463)"></path>
                            </svg></button></div>
                </div>
            </div>

            <Product v-for="item in products" v-bind:key="item.id" :product="item" />

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
.chevron{
    width: 11px;
    margin-left: 5px;
    transition: transform .3s;
}
.header-btn{
    padding: 0 0 0 2px;
    margin-right: 0;
    margin-top: 1.5px;
    font-size: var(--heading-1-size);
    text-transform: uppercase;
    color: #000;
    background: transparent;
    border-color: transparent;
    box-shadow: none;
    border-radius: 0;
    height: 24px;
    line-height: 1.5715;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    cursor: pointer;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    user-select: none;
    touch-action: manipulation;
    border: 1px solid #d9d9d9;

}
.sortdivider{
    border-left: 1px solid #000;
    margin: 0 10px;
    display: inline;
    height: 16px;
}
.filter-text{
    text-transform: uppercase;
}
.filters-row>div:last-child{
    padding-bottom: 2px;
}
@media screen and (min-width: 1440px) {
    .filter-row span {
        font-size: 10px;
    }
}
svg:not(:root) {
    overflow: hidden;
}
.buton>div>svg{
    margin-right: 9px;
    margin-top: -1px;
}
.buton>div{
    display: inline-flex;
    align-items: center;
}
.buton{
    
    padding: 0 0 0 2px;
    margin-right: 0;
    margin-top: 1.5px;
    font-size: var(--heading-1-size);
    text-transform: uppercase;
    color: #000;
    background: transparent;
    border-color: transparent;
    box-shadow: none;
    height: 24px;
    border-radius: 0;
    outline: 0;
    line-height: 1.5715;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    cursor: pointer;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    user-select: none;
    touch-action: manipulation;
    border: 1px solid #d9d9d9;
    overflow: visible;
    margin: 0;
}
.filters-row>div:first-child{
    display: inline-flex;
    align-items: center;
}

.filters-row{
    row-gap: 0px;
    position: sticky;
    bottom: 0;
    padding: 8px 24px 8px 22px;
    background-color: var(--color-white);
    font-size: var(--description-size);
    align-items: center;
    justify-content: space-between;
    display: flex;
    flex-flow: row wrap;
}
.filter{
    top: 42px;
    position: sticky;
    top: 0;
    z-index: 2;
    transition: top .2s ease-in-out;
    display: block;
    flex: 0 0 100%;
    max-width: 100%;
    min-height: 1px;
}
.desc{
    padding: 0 30px;
    text-align: center;
    margin: 16px auto 0;
    line-height: 1.45;
    font-size: .75em;
    max-width: 460px;
}
.yazı{
    padding: 0 30px;
    text-align: center;
    margin: 30px auto auto;
    font-size: 1.5em;
}
.bread>span:last-child{
    color: black;
}
.bread a{
    color: rgba(0,0,0,.45);
    transition: color .3s;
    text-decoration: none;
    touch-action: manipulation;
    background-color: transparent;
    outline: none;
    cursor: pointer;
}
.product-list{
    text-align: center;
    margin-bottom: 20px;
    display: block;
    flex: 0 0 100%;
    max-width: 100%;
    position: relative;
    min-height: 1px;
}
.bread>span{
    background-color: var(--color-grey-light);
    margin: 5px 5px 5px 0;
    padding: 6px 16px;
}
.bread{
    font-size: var(--small-size);
    padding: 5px 16px;
    text-transform: uppercase;
    text-align: center;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    line-height: 1.5715;
    list-style: none;
    box-sizing: border-box;
    margin: 0;
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