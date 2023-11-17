<script setup>
import { ref, onMounted } from 'vue'
import ProductService from '@/services/ProductService'

const props = defineProps({
  id: {
    required: true
  },
})

const product = ref(null)

onMounted(() => {
  ProductService.getProduct(props.id)
    .then((response) => {
      product.value = response.data


    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div v-if='product'>
    <h1>{{ product.title }}</h1>
    <p>{{ product.description }}</p>
    <div class="product-images">
      <img v-for="image in product.images" :key="image" :src="image" alt="Product Image" class='image' />
    </div>
  </div>
</template>

<style scoped>
  .product-images {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image {
    margin: 5px;
  }
</style>