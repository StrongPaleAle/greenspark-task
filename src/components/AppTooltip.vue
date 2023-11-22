<template>
    <div class="app-tooltip">
        <span class="app-tooltip__icon" @click.prevent="(event) => console.log('no check')">
            <slot name="app-tooltip__icon"></slot>
        </span>
        <div class="app-tooltip__content">
            <slot></slot>
        </div>
    </div>
</template>
<style lang="scss">
.app-tooltip{
    position: relative;
    display: inline-block;
    cursor: pointer;
    &__icon{
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        line-height: 0;
        display: inline;
        color: currentColor;
        
    }
    &__content{
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        padding: 1.5rem 1rem;
        background-color: var(--color-white);
        color: var(--color-black);
        text-align: center;
        border-radius: 4px;
        display: inline-flex;
        width: 248px;
        padding: 24px 16px;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        
        box-shadow: 
            0px 0.77778px 2.99074px 0px rgba(0, 0, 0, 0.01), 
            0px 3.42222px 6.19259px 0px rgba(0, 0, 0, 0.02), 
            0px 8.4px 12.35px 0px rgba(0, 0, 0, 0.03), 
            0px 16.17778px 24.20741px 0px rgba(0, 0, 0, 0.03), 
            0px 27.22222px 44.50926px 0px rgba(0, 0, 0, 0.04), 
            0px 42px 76px 0px rgba(0, 0, 0, 0.05);
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
        transition-delay: 0.2s;
        z-index: 1;
        pointer-events: none;
        a{
            color: var(--color-green);
            text-decoration: none;
            font-weight: 700;
            letter-spacing: -0.28px;

        }
       
    }
    &:hover{
        .app-tooltip__content{
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            transition-delay: 0s;
        }
    }
}
</style>