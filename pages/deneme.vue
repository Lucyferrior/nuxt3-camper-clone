<template>
    <div>
        {{ degerler }}
        <button @click="getData()">refresh</button>
    </div>
</template>
<script setup >
import axios from 'axios';

var degerler = ref([])
const { data: sepettekiUrunler } = await useFetch('http://localhost:5000/api/v1/basket', { pick: ['Basket_ID', 'Product_ID', 'Size'] })

async function bring() {
    console.log(degerler)
    var deneme
    deneme = await fetch('http://localhost:5000/api/v1/basket').then(res => res.json())
    degerler.value = deneme
}

</script>