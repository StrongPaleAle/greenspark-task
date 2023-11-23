<script setup lang="ts">
import { useProductStore } from '@/stores/ProductStore'
import ProductWidgetItem from '@/components/ProductWidgetItem.vue'

const productStore = useProductStore()
productStore.fetchProducts()
</script>
<template>
  <div class="product-widget card-shadow">
    <h3 class="product-widget__title">Per product widgets</h3>

    <div class="product-widget__list">
      <ProductWidgetItem
        v-for="product in productStore.products"
        :key="`product-${product.id}`"
        :product="product"
      />
    </div>
  </div>
</template>
<style lang="scss">
// This is a map of colors and their contrast colors
$colors:
  'white' 'green',
  'black' 'alabaster',
  'blue' 'alabaster',
  'green' 'alabaster',
  'beige' 'green';

@each $color, $contrast in $colors {
  [data-color='#{$color}'] {
    --accent-color: var(--color-#{$color});
    --contrast-color: var(--color-#{$contrast});
  }
}

.product-widget {
  width: max-content;
  min-height: 420px;
  padding: var(--card-padding);
  background-color: var(--color-alabaster);
  border-radius: 8px;

  &__title {
    font-size: 1.875rem;
    line-height: 1.4;
    font-weight: 700;
    color: var(--color-black);
    padding-bottom: 0.75rem;
    margin-top: 0;
    margin-bottom: 1.25rem;
    border-bottom: 2px solid var(--color-gray);
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 26px;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 850px) {
    width: 100%;
    max-width: var(--card-width);

    &__list {
      flex-direction: row;
      justify-content: space-between;
    }
  }
}
</style>
