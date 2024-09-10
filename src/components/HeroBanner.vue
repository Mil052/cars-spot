<template>
  <div class="hero-banner">
    <div class="flex flex-col gap-12 items-start my-20 sm:my-[120px] mx-6 sm:mx-10 lg:mx-[120px]">
      <h1 class="font-title text-6xl sm:text-[76px] leading-[1.1]">SPRZEDAJEMY SAMOCHODY<br>Z EUROPY</h1>
      <p>Kup komfortowy pojazd, aby każda podróż<br>była wyjątkowym przeżyciem.</p>
      <div class="flex gap-6 flex-col sm:flex-row">
        <ButtonStyledLink :to="{name: 'home', hash: '#gallery'}" ui="primary" class="hover:scale-105">Zobacz zdjęcia</ButtonStyledLink>
        <ButtonStyledLink to="tel:+48000111222" ui="secondary" class="hover:scale-105">Zadzwoń do nas</ButtonStyledLink>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
  import ButtonStyledLink from '@/components/ui-components/ButtonStyledLink.vue';
</script>

<style scoped>
  .hero-banner {
    @apply
      h-[50rem] sm:h-[905px]
      pt-20
      mt-[-80px]
      bg-[url('/hero/hero.webp'),_url('/hero/splines.svg')]
      bg-no-repeat
      bg-[length:90%,_auto_688px] sm:bg-[length:85%,_auto_688px] xl:bg-[length:1064px,_auto_688px]
      bg-[position:right_bottom_48px,_left_30vw_top] sm:bg-[position:right_bottom_92px,_left_40vw_top] xl:bg-[position:right_bottom_92px,_right_72px_top]
  }

</style>
<!-- bg-[length:75%,_auto_74%] -->