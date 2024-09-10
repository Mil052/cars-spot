<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <ExpandedArticle v-for="(article, index) in articlesData" :key="index" :title="article.title" :paragraph="article.paragraph"/>
    </div>
</template>

<script setup lang="ts">
  import articlesData from '@/assets/articles.json';
  import ExpandedArticle from '@/components/ui-components/ExpandedArticle.vue';
</script>