import { test, expect } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useProductStore } from '@/stores/ProductStore'
import axios from 'axios'

test('addToSettings', () => {
  setActivePinia(createPinia())

  const productStore = useProductStore()
  productStore.addToSettings(1, 'active', true)
  productStore.addToSettings(1, 'linked', true)
  productStore.addToSettings(1, 'selectedColor', 'blue')
  expect(productStore.productSettings).toEqual([
    { id: 1, active: true, linked: true, selectedColor: 'blue' }
  ])
})

test('updateSetting', () => {
  setActivePinia(createPinia())

  const productStore = useProductStore()

  productStore.productSettings = [
    { id: 1, active: false, linked: true, selectedColor: 'blue' },
    { id: 2, active: true, linked: false, selectedColor: 'green' }
  ]

  productStore.updateSetting(1, 'active', true, true)
  productStore.updateSetting(2, 'selectedColor', 'black')
  expect(productStore.productSettings).toEqual([
    { id: 1, active: true, linked: true, selectedColor: 'blue' },
    { id: 2, active: false, linked: false, selectedColor: 'black' }
  ])
})

test('fetchProductStore', async () => {
  setActivePinia(createPinia())

  const productStore = useProductStore()

  await productStore.fetchProducts()
  const products = (await axios.get('https://api.mocki.io/v2/016d11e8/product-widgets')).data
  expect(productStore.products).toEqual(
    products
  )

})
