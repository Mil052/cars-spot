<template>
    <div :class="{menuLayout: true, open: open, close: !open}">
      <button @click="$emit('close')" class="self-end">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5.61523" y="39.5562" width="48" height="4" transform="rotate(-45 5.61523 39.5562)" fill="black"/>
          <rect x="8.4436" y="5.61523" width="48" height="4" transform="rotate(45 8.4436 5.61523)" fill="black"/>
        </svg>
      </button>
      <ul class="space-y-8 font-interactive">
        <li @click="$emit('close')"><RouterLink to="/">Home</RouterLink></li>
        <li @click="$emit('close')"><RouterLink :to="{name: 'home', hash: '#gallery'}">Galeria zdjęć</RouterLink></li>
        <li @click="$emit('close')"><RouterLink to="/faq">FAQ</RouterLink></li>
      </ul>
      <ButtonStyledLink to="tel:+48000111222" ui="primary" class="mt-auto">Zadzwoń do nas</ButtonStyledLink>
    </div>
</template>

<script setup lang="ts">
  import ButtonStyledLink from '@/components/ui-components/ButtonStyledLink.vue';
  defineProps<{
    open: boolean
  }>();

  defineEmits<{
    close: []
  }>()
</script>

<style scoped>
  .menuLayout {
    @apply bg-white absolute z-20 w-[75vw] h-full top-0 p-10 flex flex-col gap-28 transition-[left] duration-500;
  }
  .open {
    @apply left-0;
  }
  .close {
    @apply left-[-75vw];
  }
</style>