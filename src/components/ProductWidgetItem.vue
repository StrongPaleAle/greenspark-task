<script setup lang="ts">
import { computed } from 'vue';
import { type Product } from '@/stores/ProductStore';
import IconGreensparkVue from '@/components/icons/IconGreenspark.vue';
import IconLogo from '@/components/icons/IconLogo.vue';

const props = defineProps<{
  product: Product;
    
}>();
const amountModifier = computed(() => {
  return props.product.type === 'carbon' ? 'kgs of' : '';
});
</script>

<template>
  <article class="product-widget__item" :data-color="product.selectedColor">
    <header>
        <span class="product-widget__icon">
            <IconLogo />
            <IconGreensparkVue />
            <span class="sr-only">Greenspark</span>
        </span>
        <h4>
            <small>This product {{ product.action }}</small>
            {{ product.amount }}{{ amountModifier }} {{ product.type }}
        </h4>
      
    </header>
    <div class="product-widget__options">
        <p></p>
    </div>
  </article>
</template>

<style lang="scss">
.product-widget{
    &__item{
        
        width: var(--widget-width);

        header{
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 12px;
            border-radius: 6px;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.01);
            background-color: var(--accent-color);
            color: var(--contrast-color);
            h4{
                flex: 1 1 auto;
                font-size: 1.1rem;
                font-weight: 700;
                margin: 0;
                small{
                    display: block;
                    font-size: 0.75rem;
                    font-weight: 400;
                    margin-bottom: 4px;
                    color: var(--contrast-color);
                }
            }
        }
    }
    &__icon{
        text-align: center;
        flex: 0 0 auto;
        line-height: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4px;
    }
}

</style>