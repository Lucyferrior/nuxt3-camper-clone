<template>
    <div class="koMYYi">
        <div class="kZdCIz">
            <div class="bMmwdY">
                <div class="fZqon"><NuxtLink class="trackable " to="products">
                        <picture v-if="pht.typ === 'img'">
                            <img :src="pht.srclink" alt="Teix" width="2000px" height="1125px" class="foto">
                        </picture>
                        <video v-else autoplay="true" loop="true" class="backgroundvideo" title="13. Sayı - Ydra" muted="true"
                            playsinline="true"
                            poster="https://www.camper.com/cms/api/assets/tiers-banners-homes/811bfaac-8bda-4170-838c-ef3f3827447c/T95-TWS-13-YDRA_Desktop.avif">
                            <source
                                type="video/webm"
                                :src="pht.srclink">
                            
                        </video>
                    </NuxtLink></div>
                <div class="yazı-content-center">
                    <h1 class="yazı-h1">{{ pht.title }}</h1>
                    <h3 class="yazı-h3">{{ pht.subtitle }}</h3>
                    <div class="sc-amiJK fLTzSD">
                        <span v-for="item in pht.btns" v-bind:key="item.id">
                            <HelperComponentsButton :classes="item.type" :text="item.text" :link="item.link"/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    pht: {
            required: true,
            title: String,
            srclink: String,
            type: Object,
            typ:String,
            btns: [
                {
                    required: true,
                    text: String,
                    link: String,
                    type: Object
                }
            ]
        }
})
</script>
<style>
.backgroundvideo{
    width: 100%;
}
.sc-amiJK {
    display: flex;
}

.koMYY {
    position: relative;
    display: grid;
}

.bMmwdY {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    position: relative;
    width: 100%;
    height: 100%;
}

.fZqon {
    text-align: center;
}

.fZqon>a {
    height: 100%;
    display: block;
}

.foto {
    width: 100%;
    height: auto;
    display: block;
}

.yazı-content-center {
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

.yazı-h1 {
    line-height: 1;
    margin: 0px;
    padding: 0px;
    white-space: normal;
    font-weight: normal;
    font-family: ModerneMedium;
    
}

@media screen and (min-width: 1440px) {
    .yazı-h1 {
        text-shadow: unset;
        color: black;
        font-size: 3.5em;
    }
}

.yazı-h3 {
    line-height: 1;
    margin: 40px 0px 0px;
    padding: 0px;
    white-space: normal;
    font-weight: normal;
    font-family: ModerneMedium;
}

@media screen and (min-width: 1440px) {
    .yazı-h3 {
        text-shadow: unset;
        color: black;
        font-size: 1em;
    }
}

</style>

<style scoped>
img {
    vertical-align: middle;
    border-style: none;
}

h1 {
    display: block;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

h3 {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
</style>
