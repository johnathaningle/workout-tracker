import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import App from './App.vue';

const routes = [
  {
    path: '/:params(.*)',
    name: 'Home',
    component: App,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;