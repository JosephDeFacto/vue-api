<script setup>

defineProps({
  product: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <div if-v='product'>
    <RouterLink :to="{ name: 'product-details', params: { id: product.id } }">
      <div class="event-card">
        <h2>{{ product.title }}</h2>
      </div>
    </RouterLink>
  </div>


</template>

<style scoped>
  .event-card {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
  }
  .event-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  }
</style>
