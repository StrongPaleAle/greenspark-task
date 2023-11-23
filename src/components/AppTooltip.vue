<template>
  <div class="app-tooltip">
    <span class="app-tooltip__icon" @click.prevent="(event) => console.log('no check')"> <!-- prevent the checkbox event on mobile-->
      <slot name="app-tooltip__icon"></slot>
    </span>
    <div class="app-tooltip__content card-shadow">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss">
.app-tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
  &__icon {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    line-height: 0;
    display: inline;
    color: currentColor;
  }
  &__content {
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
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.2s ease-in-out,
      visibility 0.2s ease-in-out;
    transition-delay: 0.3s;
    z-index: 1;
    pointer-events: none;
    a {
      color: var(--color-green);
      text-decoration: none;
      font-weight: 700;
      letter-spacing: -0.28px;
    }
  }
  &:hover {
    .app-tooltip__content {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      transition-delay: 0s;
    }
  }
}
</style>
