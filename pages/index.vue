<template>
    <div>
        <NuxtLink to="Products">ürünler sayfasına git</NuxtLink>
        <Photos :pht="pht1"/>
        <div class="triple_base">
            <Photos class="triple" :pht="pht2"/>
            <Photos class="triple" :pht="pht2"/>
            <Photos class="triple" :pht="pht2"/>
        </div>
        <Photos :pht="vd1"/>
    </div>
</template>
<style>
.triple_base{
    display: flex;

}
    .triple {
        flex: 0 0 33.34%;
    }
</style>
<script>
export default {
    data() {
        return {
            pht1: {
                ustTitle:"",
                title:"Teix",
                srclink:"https://www.camper.com/cms/api/assets/tiers-banners-homes/916bb380-d224-4ffd-a582-e0228d08cee9/T95-W46-TEIX-W-M_Desktop.jpg",
                subtitle:"Alışverişe Başla",
                type:"img",
                btns: [
                    {
                        text:"Kadın",
                        link:"product",
                        type:"normal"
                    },
                    {
                        text:"Erkek",
                        link:"product",
                        type:"normal"
                    }
                ],
            },
            pht2: {
                ustTitle:"",
                title:"",
                srclink:"https://www.camper.com/cms/api/assets/tiers-banners-homes/760adf0a-8720-4378-8a5e-d667659f629a/T94_W31_landings-Bonnie_mobile.avif",
                subtitle:"",
                type:"img",

                btns: [
                    {
                        text:"Kadın",
                        link:"product",
                        type:"reverse"
                    }
                ],
            },
            vd1:{
                ustTitle:"13. Sayı Ydra",
                title:"The Walking Society",
                srclink:"https://www.camper.com/cms/api/assets/tiers-banners-homes/2c76ed20-f42b-43dd-934c-c1dee951d3e6/T95-TWS-13-YDRA-VIDEO_16_9_v1.webm",
                subtitle:"Sonbahar/Kış 2022",
                type:"video",
                btns: [
                    {
                        text:"Koleksiyonu Keşfet",
                        link:"product",
                        type:"reverse"
                    }
                ],
            }
        }
    }
}
</script>