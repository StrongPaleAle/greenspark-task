<script setup lang="ts">
import { computed } from 'vue'
import { type Product, useProductStore, productColors } from '@/stores/ProductStore'
import ProductWidgetBadge from '@/components/ProductWidgetBadge.vue'
import ProductWidgetTooltip from '@/components/ProductWidgetTooltip.vue'

const props = defineProps<{
  product: Product
}>()

const productSettings = computed(() => {
  // If the product settings are not in the store, use the product from props
  const item = ProductStore.productSettings.find((item) => item.id === props.product.id)
  return item ? item : props.product
})
const colorOptions = [...productColors] // copy the array, because the original is readonly and cannot be used with v-for
const ProductStore = useProductStore()
</script>

<template>
  <article class="product-widget__item" :data-color="productSettings.selectedColor">
    <ProductWidgetBadge :product="product" />

    <div class="product-widget__options">
      <AppCheckbox
        :name="`linked-${productSettings.id}`"
        :modelValue="productSettings.linked"
        :value="productSettings.linked"
        :disabled="!productSettings.active"
        @update:modelValue="ProductStore.updateSetting(productSettings.id, 'linked', $event)"
      >
        Link to Public Profile <ProductWidgetTooltip />
      </AppCheckbox>
      <AppColorPicker
        :data-selected-color="productSettings.selectedColor"
        :name="`color-${productSettings.id}`"
        :modelValue="productSettings.selectedColor"
        :options="colorOptions"
        :disabled="!productSettings.active"
        @update:modelValue="ProductStore.updateSetting(productSettings.id, 'selectedColor', $event)"
      >
        Badge colour
      </AppColorPicker>
      <AppCheckbox
        :name="`active-${productSettings.id}`"
        :modelValue="productSettings.active"
        :value="productSettings.active"
        :check-type="'toggle'"
        @update:modelValue="ProductStore.updateSetting(productSettings.id, 'active', $event, true)"
      >
        Activate badge
      </AppCheckbox>
    </div>
  </article>
</template>

<style lang="scss">
.product-widget {
  &__item {
    width: var(--widget-width);
  }

  &__options {
    padding-top: 0.625rem;
    font-size: 0.825rem;
    > * {
      margin-bottom: 0.625rem;
      padding: 3px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
