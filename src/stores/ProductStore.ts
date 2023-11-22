import { defineStore } from "pinia";
import axios from 'axios';
import { useLocalStorage } from '@vueuse/core';

export const productColors = ["blue", "green", "beige", "white", "black"] as const
export interface Product {
  id: number;
  type: "carbon"| "plastic bottles" | "trees";
  amount: number;
  action: "collects" | "plants" | "offsets";
  active: boolean;
  linked: boolean;
  selectedColor: typeof productColors[number];
}
export interface ProductStoreState {
  id: number;
  active?: boolean;
  linked?: boolean;
  selectedColor?: typeof productColors[number];
}

export type SettingValue = boolean | typeof productColors[number];

export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      products: [] as Product[],
      productSettings: useLocalStorage("ProductStore:productSettings", [] as ProductStoreState[]),
    };
  },
  actions: {
    async fetchProducts() {
      this.products = (await axios.get('https://api.mocki.io/v2/016d11e8/product-widgets')).data;
      this.products.forEach((product) => {
        const productSettings = this.productSettings.find((item) => item.id === product.id);
        if(!productSettings) {
          this.addToSettings(product.id, "active", product.active);
          this.addToSettings(product.id, "linked", product.linked);
          this.addToSettings(product.id, "selectedColor", product.selectedColor);
        }
      })
    },
    addToSettings(id: number, property: keyof ProductStoreState, value: SettingValue) {
      const item : ProductStoreState | undefined = this.productSettings.find((item) => item.id === id);
      item === undefined ? this.productSettings.push({id, [property]: value }) : Object.assign(item, {[property]: value});
    },
    updateSetting(id: number, property: keyof ProductStoreState, value: SettingValue,  uniquePropriety: boolean = false) {
      
      if(uniquePropriety && value === true) {
        const currentItem = this.productSettings.find((item) => item[property] === value);
        
        if(currentItem && currentItem.id !== id) {
          
          this.addToSettings(currentItem.id, property, false);
        } 
        
      }
      
      this.addToSettings(id, property, value);
      
    }
  },
  // getters
});