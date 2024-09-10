<template>
  <article>
    <h3 class="font-title text-lg sm:text-[25px] leading-normal mb-4">{{ title }}</h3>
    <div :class="{'min-h-0': !expanded, 'min-h-64': expanded, 'transition-[min-height]': true, 'duration-500': true}">
      <p class="font-paragraph text-sm leading-normal">{{ content }} <span v-if="!expanded">[...]</span></p>
    </div>
    <button class="flex items-center gap-1.5 text-sm leading-normal pb-1.5 border-b mt-6" @click="toggleExpanded">
      <span>{{expanded ? "Zwiń": "Rozwiń"}}</span>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" :class="{transform: true, 'rotate-180': expanded, 'transition-transform': true, 'duration-500': true, 'delay-200': true}">
        <path d="M1 7L8 14L15 7" stroke="white" stroke-width="2"/>
        <path d="M8 14C8 13.6 8 4.5 8 0" stroke="white" stroke-width="2"/>
      </svg>
    </button>
  </article>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';
  const { title, paragraph } = defineProps<{
    title: string,
    paragraph: string
  }>();

  const paragraphLength = paragraph.length;
  const paragraphShortcutLastIndex = 130;

  const expanded = ref(false);
  const content = ref(paragraph.substring(0, paragraphShortcutLastIndex));

  let writingInterval: number;

  const triggerWriting = () => {
    let currentIndex = paragraphShortcutLastIndex;
    writingInterval = setInterval(() => {
      if(currentIndex < (paragraphLength - 1)) {
        currentIndex += 30;
        content.value = (paragraph.substring(0, currentIndex));
      } else {
        clearInterval(writingInterval);
      }
    }, 50);
  };

  const resetWriting = () => {
    clearInterval(writingInterval);
    content.value = (paragraph.substring(0, paragraphShortcutLastIndex));
  };

  watch(expanded, (newValue) => {
    if (newValue) {
      triggerWriting();
    } else {
      resetWriting();
    }
  });

  const toggleExpanded = () => expanded.value = !expanded.value;

</script>