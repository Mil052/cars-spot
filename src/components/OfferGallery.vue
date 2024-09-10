<template>
  <div class="mx-6 sm:mx-10 md:mx-[88px] space-x-8 sm:space-x-12">
    <button @click="activeCategory = 'passenger'" :class="{'category-tab': true, 'active-tab': activeCategory === 'passenger', 'tab-on-hover': activeCategory !== 'passenger'}">
      Samochody osobowe
    </button>
    <button @click="activeCategory = 'delivery'" :class="{'category-tab': true, 'active-tab': activeCategory === 'delivery', 'tab-on-hover': activeCategory !== 'delivery'}">
      Samochody dostawcze
    </button>
  </div>
  <div class="overflow-x-hidden pt-20 pb-12 touch-pan-y hover:cursor-grab active:cursor-grabbing" ref="galleryElement" @pointerdown.prevent="addPointerMove">
    <ul class="flex gap-16 px-[88px] w-fit scroll-ml-0">
      <li v-for="(image, index) in gallery" :key="index" class="flex-[0_0_360px] w-[360px] sm:flex-[0_0_600px] sm:w-[600px]">
        <img :src="`/gallery/${activeCategory}/${image}`"/>
      </li>
    </ul>
  </div>
  <div class="flex gap-[10px] justify-center py-2">
    <div v-for="i in gallery.length" :key="i" :class="{'w-2': true, 'h-2': true, 'rounded-full': true, 'bg-blue': i === (currentGalleryItemIndex + 1), 'bg-grey': i !== (currentGalleryItemIndex + 1)}"> </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref, onMounted, onUnmounted } from 'vue';
  import type { VNodeRef } from 'vue';

  const passengerCarImages = ["car-1.webp", "car-2.webp", "car-3.webp", "car-4.webp", "car-5.webp"];
  const deliveryCarImages = ["delivery-1.webp", "delivery-2.webp", "delivery-3.webp", "delivery-4.webp"];

  const activeCategory = ref<"passenger"|"delivery">("passenger");

  const gallery = computed(() => {
    if (activeCategory.value === 'passenger') {
      return passengerCarImages;
    } else {
      return deliveryCarImages;
    }
  });

  const galleryElement = ref<VNodeRef | undefined | null>(null);
  const currentGalleryItemIndex = ref(0);

  const galleryItemsGap = 64;
  const galleryPadding = 88;
  const calculatedPadding = galleryPadding - (galleryItemsGap / 2);
  let bodyWidth: number;
  let galleryItemWidth: number;
  let maxScroll: number;

  const getGalleryElementsWidth = () => {
    bodyWidth = document.body.clientWidth;
    galleryItemWidth = galleryElement.value.querySelector("li").clientWidth;
    maxScroll = galleryElement.value.firstElementChild.clientWidth - bodyWidth;
  }

  onMounted(() => {
    getGalleryElementsWidth();
    window.addEventListener('resize', getGalleryElementsWidth);
  });

  onUnmounted(() => window.removeEventListener('resize', getGalleryElementsWidth));

  const calculateCurrentGalleryItemIndex = (scrollPosition: number) => {
    if (scrollPosition <= calculatedPadding) {
      return 0; // first index
    } else if (scrollPosition >= maxScroll - calculatedPadding) {
      return gallery.value.length - 1; // last index
    } else {
      const activeItem = Math.floor((scrollPosition - calculatedPadding + bodyWidth/2) / (galleryItemWidth + galleryItemsGap)); // calculate index
      return activeItem;
    }
  };

  const pointerMoveHandler = (event: PointerEvent) => {
    const newScrollLeftPosition = galleryElement.value.scrollLeft - event.movementX;
    galleryElement.value.scrollLeft = newScrollLeftPosition;
    const newCurrentGalleryItemIndex = calculateCurrentGalleryItemIndex(newScrollLeftPosition);
    if (newCurrentGalleryItemIndex != currentGalleryItemIndex.value) currentGalleryItemIndex.value = newCurrentGalleryItemIndex;
  };
 
  const removePointerMove = () => {
    document.removeEventListener("pointermove", pointerMoveHandler);
    document.removeEventListener("pointerup", removePointerMove);
  };

  const addPointerMove = () => {
    document.addEventListener("pointermove", pointerMoveHandler);
    document.addEventListener("pointerup", removePointerMove);
  };
</script>

<style scoped>
  .category-tab {
    @apply font-interactive text-xs sm:text-[15px] leading-normal;
  }
  .tab-on-hover {
    @apply hover:text-light-blue;
  }
  .active-tab {
    @apply border-b border-blue text-blue font-semibold;
  }
</style>