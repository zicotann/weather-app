import { createRouter, createWebHistory } from 'vue-router'
import WeatherList from '../views/WeatherListView.vue'
import WeatherDetailView from '@/views/WeatherDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'weather',
      component: WeatherList,
    },
    {
      path: '/weather-detail',
      name: 'weather-detail',
      component: WeatherDetailView
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/WeatherSearchView.vue'),
    },
  ],
})

export default router
