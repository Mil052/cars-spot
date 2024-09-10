import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: HomeView},
    {path: '/privacy-policy', name: 'privacy-policy', component: () => import('../views/PrivacyPolicy.vue')},
    {path: '/faq', name: 'faq', component: () => import('../views/FrequentlyAskedQuestions.vue')}
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {el: to.hash, behavior: 'smooth'};
    } else {
      return { top: 0 }
    }
  }
});

export default router;
