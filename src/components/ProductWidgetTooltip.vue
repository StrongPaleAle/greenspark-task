<script setup lang="ts">
import IconInfo from '@/components/icons/IconInfo.vue'
</script>
<template>
  <AppTooltip>
    <template #app-tooltip__icon>
      <IconInfo />
    </template>
    <p>
      This widget links directly to your public profile so that you can easily share your impact
      with your customers. Turn it off here if you do not want the badge to link to it.
    </p>
    <a href="#" target="_blank">View Public Profile</a>
  </AppTooltip>
</template>
