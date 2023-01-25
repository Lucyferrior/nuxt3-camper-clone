<template>
    <div @click="arttir" v-for="item in data">
        {{ item }}
    </div>
</template>
<script setup lang="ts">
    const data = ref ([0])
    function arttir(){
        data.value.push(data.value.length)
    }
 </script>