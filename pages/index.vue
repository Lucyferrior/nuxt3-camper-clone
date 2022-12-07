<template>
    <NuxtLink to="Products">ürünler sayfasına git</NuxtLink>
    <Photos :pht="pht1"/>
    <div class="triple_base">
        <Photos class="triple" :pht="pht2"/>
        <Photos class="triple" :pht="pht2"/>
        <Photos class="triple" :pht="pht2"/>
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

                btns: [
                    {
                        text:"Kadın",
                        link:"product",
                        type:"reverse"
                    }
                ],
            }
            
        }
    }
}
</script>