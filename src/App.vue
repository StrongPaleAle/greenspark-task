<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import { useProductStore } from '@/stores/ProductStore';

const productStore = useProductStore();
productStore.fetchProducts();
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header> -->

  <main>
    <!-- <TheWelcome /> -->
    <div class="wrapper">
      <h1>Products</h1>
      <ul>
        <li v-for="product in productStore.products" :key="product.id">
          {{ product}}
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>

</style>
