<template>
    <div id="layoutContent" class="search">
        <main>
            <div class="arama-geniş">
                <div class="arama-boşluklu">
                    <div class="arama-kutu" @click="searchInput.focus()">
                        <div class="arama">
                            <span>
                                <input type="search" id="searchInput" autocomplete="off" autofocus="true"
                                    class="ant-select-selection-search-input" role="combobox" aria-haspopup="listbox"
                                    aria-owns="searchInput_list" aria-autocomplete="list"
                                    aria-controls="searchInput_list" aria-activedescendant="searchInput_list_0" value=""
                                    aria-expanded="false" @keyup="checkKeys">
                            </span>
                            <span class="placeholder">Burada ara</span>
                        </div>
                    </div>
                    <span class="close"><svg height="18" viewBox="0 0 18 18" width="18">
                            <g>
                                <path d="m16.664783 17.163575-15.664783-15.663441"></path>
                                <path d="m16.664783 1.5-15.664783 15.663441"></path>
                            </g>
                        </svg></span>
                </div>
            </div>
            <div class="loading">
                <div class="container">
                    <div class="arama-geniş-2"></div>
                </div>
            </div>
            <ProductList :products="products" />
            <div class="fotolar-boşluklu">
                <div class="fotolar">
                    <div class="foto-genel">
                        <div class="foto-y">
                            <div class="jYnWnh">
                                <NuxtLink to="Products">
                                    <picture>
                                        <img src="https://www.camper.com/cms/api/assets/tiers-banners-homes/0065906a-fd00-43ec-abd1-01ac3e985fe2/T95-W37-SEARCH-BANNER-NEW-COLLECTION_mobile.jpg"
                                            alt="Yeni Koleksiyon" class="foto-yazı">
                                    </picture>
                                </NuxtLink>
                            </div>
                            <div class="content-search">
                                <h1 class="yazı-yeni  ">Yeni Koleksiyon</h1>
                                <div class="fLTzSD">
                                    <NuxtLink to="Products" class="alışveriş-btn ">
                                        Alışverişe Başla</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="foto-genel">
                        <div class="foto-y">
                            <div class="jYnWnh">

                                <NuxtLink to="Products" class="jYnWnh">
                                    <picture>
                                        <img src="https://www.camper.com/cms/api/assets/tiers-banners-homes/fb9743c5-48f1-477a-82fe-310500d80f2d/T95-W37-SEARCH-BANNER-W_mobile.jpg"
                                            alt="Kadın" class="foto-yazı">
                                    </picture>
                                </NuxtLink>
                            </div>
                            <div class="foto-ortası">
                                <div class="fLTzSD">
                                    <NuxtLink to="Products" class="yazi-btn">
                                        Kadın</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="foto-genel">
                        <div class="foto-y">
                            <div class="jYnWnh">
                                <NuxtLink to="Products" class="jYnWnh">
                                    <picture>
                                        <img src="https://www.camper.com/cms/api/assets/tiers-banners-homes/c88b0fba-5520-4766-9a3f-3e590c733cda/T95-W37-SEARCH-BANNER-M_mobile.jpg"
                                            alt="Erkek" class="foto-yazı">
                                    </picture>
                                </NuxtLink>
                            </div>
                            <div class="foto-ortası">
                                <div class="fLTzSD">
                                    <NuxtLink to="Products" class="yazi-btn">
                                        Erkek</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="foto-genel">
                        <div class="foto-y">
                            <div class="jYnWnh">
                                <NuxtLink to="Products" class="jYnWnh">
                                    <picture>
                                        <img src="https://www.camper.com/cms/api/assets/tiers-banners-homes/784f6935-0d4e-4832-b977-989a118d409e/T95-W37-SEARCH-BANNER-K_mobile.jpg"
                                            alt="Çocuk" class="foto-yazı">
                                    </picture>
                                </NuxtLink>
                            </div>
                            <div class="foto-ortası">
                                <div class="fLTzSD">
                                    <NuxtLink to="Products" class="yazi-btn">
                                        Çocuk</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { db } from '@/firebase'
import { collection, getDocs, onSnapshot, addDoc, doc, deleteDoc, query, orderBy, limit, FieldValue } from 'firebase/firestore'
const productsCollectionRef = collection(db, 'Products',)
var products = ref([])
var _products: Object[] = []
var placeholder: HTMLSpanElement
var searchInput: HTMLInputElement

async function searchInTitle() {
    var deneme = getSearchInTitle(searchInput.value)
    console.log(deneme)
    products.value = deneme
}



onMounted(() => {
    placeholder = document.getElementsByClassName("placeholder")[0] as HTMLSpanElement
    searchInput = document.getElementById("searchInput") as HTMLInputElement
    takeThem()
    products.value = getAllProducts()
})

function checkKeys(event: Event) {
    if (searchInput.value.length == 0) {
        makeVisible()
        products.value = getAllProducts()
        return
    } else {
        makeHidden()

        searchInTitle()

    }




    //console.log(searchInput.value)
}
function makeHidden() {
    placeholder.setAttribute("style", "visibility:hidden")
}
function makeVisible() {
    placeholder.setAttribute("style", "visibility:visible")
}

</script>
<style scoped>
.arama-geniş,
.arama-geniş2 {
    display: flex;
    flex-flow: row wrap;
    row-gap: 0px;
}

.arama-boşluklu {
    padding: 24px;
    position: relative;
}

@media screen and (min-width: 992px) {
    .arama-boşluklu {
        margin-left: 25%;
        display: block;
        flex: 0 0 50%;
        max-width: 50%;
    }
}

.arama-kutu {
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: black;
    font-size: 16px;
    line-height: 1.5715;
    list-style: none;
    position: relative;
    display: inline-block;
    cursor: pointer;
}

.arama {
    padding: 0 16px;
    cursor: text;
    position: relative;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 0;
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    width: 100%;
    display: flex;
}

@media screen and (min-width: 1024px) {
    .arama {
        height: 74px;
    }
}

.arama span {
    left: 16px;
    right: 16px;
    position: absolute;
    top: 0;
    bottom: 0;
}

.arama input {
    position: relative;
    top: 20px;
    cursor: auto;
    margin: 0;
    padding: 0;
    background: transparent;
    border: none;
    outline: none;
    appearance: none;
    height: 30px;
    width: 100%;

}

.placeholder {
    padding: 0;
    line-height: 72px !important;
    color: var(--color-black);
    font-weight: 700;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex: 1 1;
    overflow: hidden;
}

.placeholder:after,
.arama:after {
    display: inline-block;
    width: 0;
    visibility: hidden;
    content: "\a0";
}

.search::before {
    visibility: hidden;
    opacity: 0;
    content: " ";
    position: fixed;
    top: 30px;
    width: 100%;
    height: 100%;
    box-shadow: 0 1px 2px rgb(0 0 0 / 40%);
    background-color: hsla(0, 0%, 7%, .36);
    backdrop-filter: blur(4px);
    z-index: 50;
    transition: opacity .3s, visibility 0s linear .3s;
}

.arama:after {
    line-height: 30px;

}

@media screen and (min-width: 1024px) {
    .close {
        position: absolute;
        right: 40px;
        top: 50px;
    }
}

.close svg:not(:root) {
    overflow: hidden;
}

.arama g {
    stroke: #000;
    stroke-width: 1.1;
    fill: none;
    fill-rule: evenodd;
    stroke-linecap: round;
    stroke-linejoin: round;

}

.loading {
    position: relative;
}

.container {
    position: relative;
    transition: opacity .3s;
}

.arama-geniş2 {
    overflow: hidden;
}

.container::after {
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
}

.fotolar-boşluklu {
    padding: 0 24px;
    margin-top: 50px;
}

.fotolar {
    position: relative;
    display: grid;
}

@media screen and (min-width: 768px) {
    .fotolar {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}

.foto-genel {
    max-width: 1536px;
}

.foto-y {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    position: relative;
    width: 100%;
    height: 100%;
}

.jYnWnh {
    text-align: center;
}

.jYnWnh>a {
    height: 100%;
    display: block;

}

.foto-yazı {
    width: 100%;
    display: block;
}

.foto-y>img {
    vertical-align: middle;
    border-style: none;
}

.content-search {
    z-index: 10;
    position: absolute;
    width: 100%;
    left: 50%;
    height: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
}

.yazı-yeni {
    line-height: 1;
    margin: 0px;
    padding: 0px;
    white-space: normal;
    font-weight: normal;
    font-family: ModerneMedium;
    color: rgb(255, 255, 255);
}

@media screen and (min-width: 1440px) {
    .yazı-yeni {
        font-size: 2em;
        text-shadow: unset;
    }
}

.alışveriş-btn {
    position: absolute;
    bottom: 10%;
    left: 49%;
    transform: translate(-50%, -50%);
    -webkit-box-align: center;
    -webkit-box-pack: center;
    box-sizing: border-box;
    min-width: 140px;
    font-family: ModerneRegular;
    font-weight: normal;
    width: auto;
    text-decoration: underline;
    white-space: normal;
    margin: 15px 4px 4px;
    appearance: none;
    border: none;
    display: inline-block;
    padding: 10px 20px;
    text-align: center;
    color: white;
}

.alışveriş-btn:hover {
    text-decoration: none;
}

.foto-ortası {
    z-index: 10;
    position: absolute;
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
}

.yazi-btn {
    box-sizing: border-box;
    min-width: 140px;
    font-family: ModerneRegular;
    font-weight: normal;
    width: auto;
    text-decoration: none;
    white-space: normal;
    margin: 15px 4px 4px;
    appearance: none;
    border: none;
    z-index: 500;
    display: inline-block;
    padding: 10px 20px;
    text-align: center;
}

.yazi-btn:hover {
    background-color: black;
    color: white;
}

@media screen and (min-width: 1440px) {
    .yazi-btn {
        box-shadow: unset;
        color: black;
        background-color: rgb(255, 255, 255);
        font-size: 1em;
    }
}
</style>

<style scoped>
input {
    overflow: visible;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
}
</style>




