<template>
  <header class="py-4 px-6 sm:px-10 lg:px-[120px]">
    <NavigationBar />
  </header>
  <RouterView />
  <footer class="bg-black px-6 sm:px-10 lg:px-[120px] py-6 text-super-white border-t border-super-white">
    <FooterBar/>
  </footer>
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import NavigationBar from '@/components/NavigationBar.vue';
  import FooterBar from './components/FooterBar.vue';
</script>

