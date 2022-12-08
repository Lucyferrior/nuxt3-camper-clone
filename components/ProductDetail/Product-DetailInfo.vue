<template>
    <div style="height: 100%;">
        <div id="title_wrapper">
            <h1>Twins</h1>
            <h2>₺2.699</h2>
            <h3>Kadın için boyasız beyaz spor ayakakbı</h3>
        </div>
        <div class="brand_product_row_container">
            <p class="brand_product_row_title">Colores<!-- -->:</p>
            <div class="brand_product_row">
                <div class="brand_product_column brand_product_column_active">
                    <a>
                        <picture class="brand_thumbnail">
                            <img src="https://cloud.camper.com/is/image/JGVzaG9wMDNiYWdncmV5JA==/K300005-023_L.jpg"
                                class="brand_thumbnail">
                        </picture>
                    </a>
                </div>
                <div class="brand_product_column">
                    <a href="">
                        <picture class="brand_thumbnail">
                            <img src="https://cloud.camper.com/is/image/JGVzaG9wMDNiYWdncmV5JA==/K300005-024_L.jpg"
                                class="brand_thumbnail">
                        </picture>
                    </a>
                </div>
            </div>
        </div>

        <div id="sizes_div" class="">
            <div id="sizes">
                <h4 class="sizesTitle">
                    <div class="top_wrapper">
                        <span class="sizes_choose">
                            Chose your
                            <b>men size</b>
                            (EU)
                        </span>
                        <div id="size_guide_icon_wrapper">
                            <img src="@/assets/sizeguide.png" width="20px" height="20px" />
                            <span id="size_guide_span">Beden Ölçü Tablosu</span>
                        </div>
                    </div>
                </h4>
            </div>
            <div id="size_list_wrapper">
                <ul id="size_list_items">
                    <li class="size_list_item"><span
                            class="size_list_span size_number_available ant-tooltip-open">40</span></li>
                    <li class="size_list_item"><span class="size_list_span size_number_not_available">41</span></li>
                    <li class="size_list_item"><span class="size_list_span size_number_limited">42</span></li>
                </ul>
            </div>
            <p id="limited_sized_label">*Az adetli</p>
        </div>
        <div class="sticky-col">
            <div id="add_to_card">
                <HelperComponentsButton  text="sepete ekle" classes="my_btn" />
                <p id="card_extra_info_labal">3,6 veya 8 taksit ile ödeme imkanı</p>
            </div>
            <div class="add_wish_list_wrapper">
                <svg height="14" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 12.579l5.922-5.553h0A3.5 3.5 0 108.73 2.36l-.729.828-.73-.828a3.5 3.5 0 10-5.193 4.666h0z"
                        fill="none" stroke="#1d1d1b"></path>
                </svg>
                <span class="add_wish_list_span">İstek Listesine Ekle</span>
            </div>
            <UrunDetay/>
        </div>
    </div>
</template>
<style>

.my_btn {
    text-transform: uppercase;
}

</style>
<style scoped>
.sticky-col{
    position: sticky;
    top: 42px;
    z-index: 49;
    transition: top .2s ease-in-out;
}
.add_wish_list_wrapper{
    margin-top: 24px;
    align-items: center;
    display: flex;
    font-size: .75em;
    text-transform: uppercase;
    cursor: pointer;
}
.add_wish_list_span{
    margin-left: 1em;
}
#card_extra_info_labal {
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 8px 0;
    text-decoration: underline;
    cursor: pointer;
    font-size: 12px;
    font-weight: 700;
}

#title_wrapper>h1 {
    font-size: 1em;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#limited_sized_label {
    color: red;
    font-size: .875em;
    margin-bottom: 16px;
    margin-top: 16px;
}

.size_number_limited:hover,
.size_number_available:hover {
    background-color: black;
    color: white;
}

.size_number_not_available {
    color: #919191;
    background: url(@/assets/del-line.svg) 50% no-repeat;
}

.size_number_limited {
    color: red;
}

.size_list_span {
    text-align: center;
    box-sizing: border-box;
    display: inline-block;
    margin-right: 8px;
    cursor: pointer;
    padding: 0 7px;
    border: 1px solid #d9d9d9;
    opacity: 1;
    transition: all .3s;
}

.size_list_item {
    display: contents;
    border-bottom: 1px solid #f0f0f0;
    padding: 12px 0;
    color: black;
}

#size_list_wrapper {
    font-size: .875em;
    position: relative;
}

#size_list_wrapper::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background: #fff;
    opacity: 0;
    transition: all .3s;
    content: "";
    pointer-events: none;
}

b {
    font-weight: bolder;
}

.sizes_choose {
    font-size: .875em;
}

#size_guide_span {
    cursor: pointer;
    text-transform: none;
    text-decoration: underline;
    text-transform: uppercase;
}

.top_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}

#size_guide_icon_wrapper {
    display: flex;
    justify-content: space-around;
}

#size_guide_icon_wrapper>img {
    margin: -.25em .5em 0 .5em;
    cursor: pointer;
}

.sizesTitle {
    margin-top: 40px;
    font-weight: 400;
    margin-bottom: 22px;
}

#title_wrapper>h2 {
    font-weight: 300;
    font-size: inherit;
    margin: 16px 0 0;
}

#title_wrapper>h3 {
    font-size: .875em;
    margin: 16px 0 0;
    font-weight: 400;
}

.brand_product_row_container {
    margin-top: 22px;
}

.brand_product_column_active::after {
    content: "";
    display: block;

    height: 2px;
    width: 100%;
    border-top: 2px solid black;
    position: relative;
    bottom: 0;
}

.brand_product_row_container>p {
    font-size: 1rem;
    margin-bottom: .5rem;
    display: none;
}

.brand_product_row {
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(auto-fill, 72px);
}

.brand_thumbnail {
    width: 60px;
    height: 60px;
    font-size: 10px;
    object-fit: cover;
    object-position: bottom;
    display: flex;
}

@media screen and (min-width: 768px) {
    .brand_product_row {
        grid-template-columns: repeat(auto-fill, 60px);
    }
}

@media screen and (min-width: 1024px) {
    #size_guide_span {
        font-size: .725em;
    }

    .size_list_span {
        font-size: .75em;
        line-height: 27px;
    }
}

@media screen and (min-width: 1440px) {
    .sizes_choose {
        font-size: .75em;
    }
}
</style>

<script>
import UrunDetay from './UrunDetay.vue';


export default {
    name: "product-info-vue",
    components: { UrunDetay }
}

</script>