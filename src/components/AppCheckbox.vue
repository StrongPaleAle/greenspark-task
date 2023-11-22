<script setup lang="ts">
import { computed, defineEmits } from "vue";
import IconCheck from "@/components/icons/IconCheck.vue";
const props = defineProps({
  modelValue: { type: Boolean },
  value: { type: Boolean },
  name: { type: String },
  checkType: { type: String, default: "check" }
});
const emit = defineEmits(["update:modelValue"]);
const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

</script>

<template>
    <label class="input checkbox" :data-type="checkType">
        <span class="input__label">
          <slot></slot>
        </span>
        <input
            :name="name"
            :id="name"
            type="checkbox" 
            v-model="model" 
            :value="value"
         />
        <span class="checkbox__check">
            <IconCheck v-if="checkType === 'check'"/>
            <span v-else></span>
        </span>
        
    </label>
</template>

<style lang="scss">
.input.checkbox{
  input{
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
  &[data-type="check"]{
    .checkbox__check{
      --border-width: 1px;
      --total-width: 18px;
      --box-width : calc(var(--total-width) - var(--border-width) * 2);
      position: relative;
      display: inline-block;
      width: var(--total-width);
      height: var(--total-width);
      border-radius: 2px;
      color: var(--color-white);
      outline: var(--border-width) solid var(--color-black);
      outline-offset: calc(-1 * var(--border-width));
      svg{
        position: absolute;
        inset: 0;
        margin: auto;
        width: calc(var(--box-width) - var(--border-width) * 4);
        
        opacity: 0;
        transform: rotate(180deg);
        transition: opacity 0.2s ease-in-out, transform 0.1s ease-in-out 0.1s;
      }
      &::after{
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 2px;
        background-color: var(--color-green);
        opacity: 0;
        
        scale: 0;
        transition: opacity 0.2s ease-in-out, scale 0.2s ease-in-out;
      }
      &::before{
        content: "";
        position: absolute;
        
        inset: calc(-1 * (var(--total-width) / 2));
        
        background-color: var(--color-light-green);
        border-radius: 50%;
        opacity: 0;
        scale: 0.5;
        transition: opacity 0.3s ease-in-out, scale 0.2s ease-in-out;
      }
      &:hover{
        &::before{
          opacity: 0.5;
          scale: 1;
        }
      }
      

    }
    input:focus-visible + .checkbox__check{
      
        &::before{
          opacity: 1;
          scale: 1;
        }
      
    }
    input:checked + .checkbox__check{
     
      svg{
        opacity: 1;
        transform: rotate(0deg);
        z-index: 2;
      }
      &::after{
        opacity: 1;
        scale: 1;
      }
      
    }
    
  }
  &[data-type="toggle"]{
    .checkbox__check{
      --border-width: 1px;
      --total-width: 40px;
      --half-width: calc(var(--total-width) / 2);
      --border-color: var(--color-light-green);
      position: relative;
      width: var(--total-width);
      height: var(--half-width);
      border-radius: 100vh;
      // outline: var(--border-width) solid var(--color-light-green);
      box-shadow: 0px 0.88467px 5.8978px 0px rgba(0, 0, 0, 0.15) inset, 0px 0px 0px var(--border-width) var(--border-color);
      background-color: var(--color-alabaster);
      transition: all 0.2s ease-in-out;
      span{
        --border-color: var(--color-beige);
        content: "";
        position: absolute;
        inset: 0;
        
        height: var(--half-width);
        width: var(--half-width);
        border-radius: 50%;
        box-shadow: 0px 0px 0px var(--border-width) var(--border-color);
        background-color: var(--color-white);
        transform: translate(0, 0);
        transition: all 0.2s ease-in-out;
        z-index: 0;
        &::before{
          content: "";
          position: absolute;
          z-index: -1;
          inset: -25%;
          
          background-color: var(--color-light-green);
          border-radius: 50%;
          opacity: 0;
          scale: 0.5;
          transition: opacity 0.3s ease-in-out, scale 0.2s ease-in-out;
        }
        &::after{
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background-color: var(--color-white);
          z-index: -1;
        }      
      }
      &:hover{
        span{
          &::before{
            opacity: 0.5;
            scale: 1;
          }
        }
      }
       
    }
    input:focus-visible + .checkbox__check{
      
      span{
        &::before{
          opacity: 0.5;
          scale: 1;
        }
        
      }
    
  }
    input:checked + .checkbox__check{
      background-color: var(--color-green);
      --border-color: var(--color-gray);
      span{
        --border-color: var(--color-green);
        transform: translate(calc(100%), 0);
        
      }
    }
  }
  
}
</style>