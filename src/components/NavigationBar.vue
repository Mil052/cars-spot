<template>
  <div class="flex justify-between items-center ">
    <button @click="mobileNavOpen = !mobileNavOpen" class="sm:hidden">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="10" fill="black"/>
        <rect y="19" width="48" height="10" fill="black"/>
        <rect y="38" width="48" height="10" fill="black"/>
      </svg>
    </button>
    <LogoLink/>
    <nav class="hidden sm:block">
      <ul class="flex gap-6 font-interactive">
        <li class="group relative py-1">
          <RouterLink :to="{name: 'home', hash: '#gallery'}">Galeria zdjęć</RouterLink>
          <span class="absolute bottom-0 inset-x-full h-px bg-slate-400  group-hover:inset-x-0 transition-[inset] duration-500"></span>
        </li>
        <li class="group relative py-1">
          <RouterLink to="/faq">FAQ</RouterLink>
          <span class="absolute bottom-0 inset-x-full h-px bg-slate-400  group-hover:inset-x-0 transition-[inset] duration-500"></span>
        </li>
      </ul>
    </nav>
    <ButtonStyledLink to="tel:+48000111222" ui="primary" class="hidden sm:inline-block hover:scale-105">Zadzwoń do nas</ButtonStyledLink>
  </div>
  <div class="fixed h-full top-0 left-0 sm:hidden ">
    <div :class="{'w-screen': mobileNavOpen, mobileNavUnderlay: true}" @click="mobileNavOpen = false"></div>
    <MobileNav :open="mobileNavOpen" @close="mobileNavOpen = false"/>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'; 
  import LogoLink from '@/components/ui-components/LogoLink.vue';
  import ButtonStyledLink from '@/components/ui-components/ButtonStyledLink.vue';
  import MobileNav from '@/components/MobileNav.vue';

  const mobileNavOpen = ref(false);
  watch(mobileNavOpen, (newValue)=> console.log(newValue));
</script>

<style scoped>
.mobileNavUnderlay {
  @apply h-full bg-black opacity-70;
}
</style>