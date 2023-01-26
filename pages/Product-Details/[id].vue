<template>
  <div>
      <ProductDetail :productId="productId"/>
  </div>
</template>
<script setup lang="ts"> 
  //const foo = getAllProducts()
  const route = useRoute()

  const productId = route.params.id[0]

</script>