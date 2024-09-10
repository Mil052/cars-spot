<template>
  <a v-if="isExternalLink" :href="to as string" :class="classObject">
    <slot />
  </a>
  <RouterLink v-else :to="to" :class="classObject">
    <slot />
  </RouterLink>
</template>

<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import type { RouteLocationAsRelativeGeneric, RouteLocationAsPathGeneric } from 'vue-router';

  const props = defineProps<{to: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric, ui: "primary"|"secondary"}>();

  const isExternalLink = typeof props.to === 'string' && (props.to.startsWith('http') || props.to.startsWith('tel:'));

  const classObject = {
    styledButton: true,
    primary: props.ui === 'primary',
    secondary: props.ui === 'secondary'
  };
</script>

<style scoped>
  .styledButton {
    @apply py-[11px] px-[23px] border rounded-lg font-interactive text-center;
  }
  .primary {
    @apply bg-blue border-blue text-white;
  }
  .secondary {
    @apply text-blue border-blue
  }
</style>