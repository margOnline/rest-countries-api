import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  {
    path: '/countries/:code',
    name: 'countries.show',
    component: () => import('@/views/CountryPage.vue'),
    props: (route) => ({ ...route.params, code: route.params.code }),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: 'NotFound',
  },
  {
    path: '/NotFound',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
