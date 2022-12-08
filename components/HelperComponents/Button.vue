<template>
    <NuxtLink v-bind:to="link">
        <span class="button" v-bind:class="classes">
            {{ text }}
        </span>
    </NuxtLink>

</template>
<style>
.button {
    cursor: pointer;
    min-width: 140px;
    font-family: ModerneLight;
    margin: 15px 4px 4px;
    display: block;
    text-align: center;
    padding: 10px 20px;
}
.reverse{
    background-color: white;
    color: black;
}
.reverse:hover{
    background-color: black;
    color:white;
}
.button {
    color: white;
    background-color: black;
}

.button:hover {
    color: black;
    background-color: white;
    border: 1px solid black;
}


</style>
<script>
export default {
    props: {
        text: String,
        link: String,
        classes: String
    }
}
</script>