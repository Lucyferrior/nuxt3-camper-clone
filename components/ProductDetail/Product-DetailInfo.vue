<template>
    <div>
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
        <div id="sizes_div" class="div-row">
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
        </div>
        <div id="size_list_wrapper">
            <ul id="size_list_items">
                <li class="size_list_item">
                    <span class="size_list_span">39</span>
                </li>
            </ul>
        </div>
    </div>

</template>

<style scoped>
#title_wrapper>h1 {
    font-size: 1em;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.size_list_span {
    border: 1px solid var(--color-divider);

    text-align: center;
    outline: none;
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
#size_list_wrapper::after{
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
export default {
    name: "product-info-vue"
}
</script>