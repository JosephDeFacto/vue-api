<script setup>
import { ref, onMounted } from 'vue'
import ProductService from '@/services/ProductService'
import ProductCard from '@/components/ProductCard.vue'

const products = ref(Array)

onMounted(() => {
  ProductService.getProducts()
    .then((response) => {
      products.value = response.data.products
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <h1>Products</h1>
  <div class="products">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<style scoped>
.products {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>