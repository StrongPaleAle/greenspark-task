<script setup lang="ts">
import { computed, defineEmits } from "vue";

const props = defineProps({
    modelValue: { type: String },
    name: { type: String },
    options: { type: Array<string> },
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
    <fieldset :aria-labelledby="`${name}-label`"> 
        <div class="radio-group">
            <p :id="`${name}-label`">
                <slot></slot>
            </p>
            <div class="radio-group__radios">
                <label
                    v-for="color in options" 
                    :key="color"
                    :data-color="color"
                >
                    <span class="sr-only">{{ color }}</span>
                    
                    <input
                    
                    v-model="model"
                    type="radio" 
                    :name="name" 
                    
                    :value="color"
                    :id="`${name}-${color}`"
                    
                    >
                    <span class="radio-group__radio-color"></span>
                </label>
                
            </div>
        </div>
        
                
        
    </fieldset>
</template>

<style lang="scss">
fieldset{
    
    border: 0;
    padding: 0.01em 0 0 0;
    margin: 0;
    min-width: 0;

    display: block;
    
    .radio-group{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        &__radios{
            display: flex;
            gap: 4px;
            align-items: center;
            label{
                input{
                    position: absolute;
                    opacity: 0;
                    width: 0;
                    height: 0;
                }

            }
        }
        &__radio-color{
            display: inline-block;
            width: 16px;
            height: 16px;
            outline: 2px solid transparent;
            outline-offset: -2px;
            background-color: var(--accent-color);
            transition: transform 0.2s ease-in-out;
            transition: all 0.2s ease-in-out;
            &:hover{
                opacity: 0.8;
            }
        }
        input:checked + .radio-group__radio-color{
            
            outline-color: var(--color-gray);
        }
        
    }
}
</style>