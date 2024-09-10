<template>
  <main>
    <section>
      <HeroBanner />
    </section>
    <section id="gallery" class="py-20">
      <div class="mx-6 sm:mx-10 md:mx-[88px] mb-6">
        <h4 class="font-subtitle text-base sm:text-[22px] leading-[32px] text-blue">Prezentacja firmy</h4>
        <h2 class="font-title text-3xl sm:text-[40px] leading-[1.2]">Zobacz naszą Galerię zdjęć</h2>
      </div>
      <OfferGallery />
    </section>
    <section class="bg-black px-6 sm:px-10 lg:px-[120px] py-[88px] text-super-white">
      <InfoBlock />
    </section>
  </main>
</template>

<script setup lang="ts">
  import HeroBanner from '@/components/HeroBanner.vue';
  import OfferGallery from '@/components/OfferGallery.vue';
  import InfoBlock from '@/components/InfoBlock.vue';
</script>
