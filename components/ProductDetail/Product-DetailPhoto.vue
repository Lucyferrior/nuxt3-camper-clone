<template>
    <div class="div_column images_grid">
        <picture class="image_style">
            <img src="https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K201438-003_DF.jpg"
                class="image_style">
        </picture>
    </div>
</template>
<style scoped>
.image_style {
    height: auto;
    min-height: auto;
    width: 100%;
    vertical-align: top;
    opacity: 1;
    transition: opacity .3s ease-in;
}

@media screen and (min-width: 768px) {
    .images_grid {
        flex: 0 0 100%;
        max-width: 100%;
    }
}
@media screen and (min-width: 1440px) {
    .images_grid {
        flex: 0 0 50%;
        max-width: 50%;
    }
}
.images_grid {
    display: grid;
    overflow: hidden;
    background: #e8e7ea;
}
.images_grid>picture {
    cursor: zoom-in;
}
</style>