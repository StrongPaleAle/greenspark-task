import { defineStore } from "pinia";
import axios from 'axios';
import { useLocalStorage } from '@vueuse/core';

interface Product {
  id: number;
  type: "carbon"| "plastic bottles" | "trees";
  amount: number;
  action: "collects" | "plants" | "offsets";
  active: boolean;
  linked: boolean;
  selectedColor: "white" | "black" | "blue" | "green" | "beige";
}

export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      products: useLocalStorage("ProductStore:products", [] as Product[]),
    };
  },
  actions: {
    async fetchProducts() {
      this.products = (await axios.get('https://api.mocki.io/v2/016d11e8/product-widgets')).data;
    },
  },
  // getters
});