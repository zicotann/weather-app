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
      children: [{
        path: 'detail/:id',
        name: 'weather-detail',
        component: WeatherDetailView
      }],
    },
    {
      path: '/profile',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProfileView.vue'),
    },
    {
      path: '/search',
      name: 'search',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WeatherSearchView.vue'),
    },
  ],
})

export default router
