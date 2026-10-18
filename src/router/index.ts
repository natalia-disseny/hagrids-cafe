import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GamesView from '@/views/GamesView.vue'
import AdminView from '@/views/AdminView.vue'
import SpecialsView from '@/views/SpecialsView.vue'
import SpecialsCreateView from '@/views/SpecialsCreateView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/admin',
      component: AdminView,
    },
    {
      path: '/specials',
      component: SpecialsView,
    },
    {
      path: '/specials/create',
      component: SpecialsCreateView,
    },
    {
      path: '/jocs-de-taula',
      component: GamesView,
    },
  ],
})

export default router
