import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/DefaultView.vue'),
    },
    {
      path: '/:year/:month/:day',
      component: () => import('../views/CustomView.vue'),
    },
  ],
})
