import { defineStore } from 'pinia'
import axios from 'axios'
import { useLocalStorage } from '@vueuse/core'
//all the possible values can be fetched eventually.
export const productColors = ['blue', 'green', 'beige', 'white', 'black'] as const
export interface Product {
  id: number
  type: 'carbon' | 'plastic bottles' | 'trees'
  amount: number
  action: 'collects' | 'plants' | 'offsets'
  active: boolean
  linked: boolean
  selectedColor: (typeof productColors)[number]
}
export interface ProductStoreState {
  id: number
  active?: boolean
  linked?: boolean
  selectedColor?: (typeof productColors)[number]
}

export type SettingValue = boolean | (typeof productColors)[number]

export const useProductStore = defineStore('ProductStore', {
  state: () => {
    return {
      products: [] as Product[], // every time get products from API and add them to the store, some values, like amount, could change
      productSettings: useLocalStorage('ProductStore:productSettings', [] as ProductStoreState[]) // get product settings from local storage or set an empty array
    }
  },
  actions: {
    async fetchProducts() {
      // get products from API, add them to the store and create a copy of the settings for each product if it doesn't exist
      this.products = (await axios.get('https://api.mocki.io/v2/016d11e8/product-widgets')).data
      this.products.forEach((product) => {
        const productSettings = this.productSettings.find((item) => item.id === product.id)
        if (!productSettings) {
          this.addToSettings(product.id, 'active', product.active)
          this.addToSettings(product.id, 'linked', product.linked)
          this.addToSettings(product.id, 'selectedColor', product.selectedColor)
        }
      })
    },
    addToSettings(id: number, property: keyof ProductStoreState, value: SettingValue) {
      // add a new setting or update an existing one. Ideally the setting should already exist, but if it doesn't, we create it
      const item: ProductStoreState | undefined = this.productSettings.find(
        (item) => item.id === id
      )
      item === undefined
        ? this.productSettings.push({ id, [property]: value })
        : Object.assign(item, { [property]: value })
    },
    updateSetting(
      id: number,
      property: keyof ProductStoreState,
      value: SettingValue,
      uniquePropriety: boolean = false
    ) {
      // update a setting and if it's a unique propriety, make sure that only one product has it set to true
      if (uniquePropriety && value === true) {
        const currentItem = this.productSettings.find((item) => item[property] === value)

        if (currentItem && currentItem.id !== id) {
          this.addToSettings(currentItem.id, property, false)
        }
      }

      this.addToSettings(id, property, value)
    }
  }
})
