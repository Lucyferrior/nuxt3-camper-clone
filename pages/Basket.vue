<template>
    <div class="shopping_bag_wrapper">
        <div>
            <h2 class="bag_title">Alisveris SEPETİNİZDE</h2>
            <div class="bag_subtitle">
                <p>Sepetinizde 2 ürünler var.</p>
                <a>Alışverişe devam et
                    <svg viewBox="0 0 17 17" class="shopping-icon">
                        <g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"
                            transform="translate(1 1)">
                            <path d="m7.499631 12v-9" stroke="#000"></path>
                            <path d="m11.99941 7.5h-8.999558" stroke="#000"></path>
                            <path
                                d="m14.9992622 7.5c0 4.1421545-3.3578456 7.5-7.50000003 7.5-4.14141662 0-7.49926217-3.3578455-7.49926217-7.5 0-4.14215445 3.35784555-7.5 7.49926217-7.5 4.14215443 0 7.50000003 3.35784555 7.50000003 7.5z"
                                stroke="#1d1d1b"></path>
                        </g>
                    </svg>
                </a>
            </div>
            <div class="loading">
                <button @click="refresh()">refresh</button>
                <div class="container">
                    <BasketProduct title="Runner K21" subtitle="27205-247" price="2049" size="39"
                        src_link="https://cloud.camper.com/is/image/JGxvY2F0b3IzJA==/K100743-006_LF.jpg" />
                    <BasketProduct title="Runner K21" subtitle="27205-247" price="2049" size="39"
                        src_link="https://cloud.camper.com/is/image/JGxvY2F0b3IzJA==/K100743-006_LF.jpg" />
                    <BasketProduct title="Runner K21" subtitle="27205-247" price="2049" size="39"
                        src_link="https://cloud.camper.com/is/image/JGxvY2F0b3IzJA==/K100743-006_LF.jpg" />
                    <BasketProduct v-for="item in sepettekiUrunler" title="title" subtitle="asdasd4" price="222"
                        :size="11" />
                </div>
            </div>
            <div class="related">
                <div class="related_content">
                    <div class="related_header">
                        <h2 class="related_title">Tercihe bağlı ekstralar ve aksesuarlar</h2>
                        <ul class="related_nav">
                            <li class="related_nav_item related_nav_item_active">En çok tercih edilenler
                            </li>
                            <li class="related_nav_item">Bagciklar</li>
                            <li class="related_nav_item">Kıyafetler</li>
                        </ul>
                    </div>
                    <div id="articleListRecomendation">
                        <ProductSlider :items="products" />
                    </div>
                </div>
            </div>
        </div>
        <BasketSepetOnay />
    </div>
</template>
<script setup >
const degerler = ref([])
const sepettekiUrunler = async() => {
        let formData = new FormData();
        
        formData.append('Product_ID', form.Product_ID);
        formData.append('Basket_ID', form.Basket_ID);
        formData.append('Size', form.Size);

        await BrewMethodsAPI.store( formData )
    }


const products = ref([
    {
        id: 1,
        title: "Twins",
        price: 2499,
        src_link_default: "https://cloud.camper.com/is/image/JGVzaG9wMDNiYWdncmV5JA==/L8103-001_L.jpg",
    },
    {
        id: 2,
        title: "Runner K21",
        price: 2499,
        src_link_default: "https://cloud.camper.com/is/image/JGVzaG9wMDNiYWdncmV5JA==/L8103-001_L.jpg",
    },
    {
        id: 3,
        title: "Runner",
        price: 2499,
        src_link_default: "https://cloud.camper.com/is/image/JGVzaG9wMDNiYWdncmV5JA==/L8103-001_L.jpg",
    },
    {
        id: 3,
        title: "Runner",
        price: 2499,
        src_link_default: "https://cloud.camper.com/is/image/JGVzaG9wMDNiYWdncmV5JA==/L8103-001_L.jpg",
    },
    {
        id: 3,
        title: "Runner",
        price: 2499,
        src_link_default: "https://cloud.camper.com/is/image/JGVzaG9wMDNiYWdncmV5JA==/L8103-001_L.jpg",
    },
])
</script>
<style>
.related_nav_item_active {
    text-decoration: underline;
}

.related_nav_item {
    list-style: none;
    margin: 6px;
}

.product {
    flex: 0 0 10%;
}

.related_nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 18px;
    margin-bottom: 1em;
}

.related {
    margin: 40px auto 0;
}

.related_header {
    text-align: center;
}

.related_title {
    font-size: 1.5em;
}

.shopping_bag_wrapper {
    margin: 28px auto 0;
    max-width: 75%;
}

.shopping_bag_wrapper {
    grid-template-columns: 785px 300px;
    padding: 0 24px;
    grid-gap: 74px;
    display: grid;
}

.container {
    position: relative;
    transition: opacity .3s;
}

.loading {
    position: relative;
}

.gclass {
    fill: none;
    fill-rule: evenodd;
    stroke-linecap: round;
    stroke-linejoin: round;
    transform: translate(1, 1);
}

.shopping-icon {
    margin-left: 5px;
    height: 17px;
    width: 17px;

}

.shopping-icon:not(:root) {

    overflow: hidden;
}

.bag_title {
    font-size: 1.5em;
    font-weight: 400;
}

.bag_subtitle {
    text-transform: uppercase;
    font-size: 10px;
    border-bottom: 1px solid #d9d9d9;
    line-height: 1em;
    text-anchor: middle;
    align-items: center;
    display: flex;
    justify-content: space-between;
}

.bag_subtitle p {
    padding-top: 9px;
    align-items: center;
    display: flex;
}

.bag_subtitle a {
    align-items: center;
    display: flex;
}

@media screen and (min-width: 1280px) {
    .related {
        margin: 80px auto 0;
    }

    .related_nav_item {
        font-size: .75em;
    }

    .shopping_bag_wrapper {
        grid-gap: 90px;
    }
}
</style>
<style scoped>
p {
    margin-bottom: 1em;
}
</style>
