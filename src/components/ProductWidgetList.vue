<script setup lang="ts">

import { useProductStore } from '@/stores/ProductStore';
import ProductWidgetItem from '@/components/ProductWidgetItem.vue';

const productStore = useProductStore();
productStore.fetchProducts();

</script>
<template>
    <div class="product-widget">
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
    $colors:
        "white" "green", 
        "black" "alabaster", 
        "blue" "alabaster", 
        "green" "alabaster", 
        "beige" "green";

    @each $color, $contrast in $colors {
        [data-color="#{$color}"] {
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
        
        box-shadow: 
            0px 0.77778px 2.99074px 0px rgba(0, 0, 0, 0.01), 
            0px 3.42222px 6.19259px 0px rgba(0, 0, 0, 0.02), 
            0px 8.4px 12.35px 0px rgba(0, 0, 0, 0.03), 
            0px 16.17778px 24.20741px 0px rgba(0, 0, 0, 0.03), 
            0px 27.22222px 44.50926px 0px rgba(0, 0, 0, 0.04), 
            0px 42px 76px 0px rgba(0, 0, 0, 0.05);

        &__title{
            font-size: 30px;
            line-height: 1.4;
            font-weight: 700;
            color: var(--color-black);
            padding-bottom: 12px;
            margin-top: 0;
            margin-bottom: 20px;
            border-bottom: 2px solid var(--color-gray);

        }
        &__list{
            display: flex;
            flex-direction: column;
            gap: 12px;
            justify-content: center;
            align-items: center;
        }
        @media (min-width: 850px){
            width: 100%;
            max-width: var(--card-width);

            &__list{
                flex-direction: row;
                justify-content: space-between;
            }
        }
        
    }
</style>
