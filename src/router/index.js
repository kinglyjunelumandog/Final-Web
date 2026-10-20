import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


import BsitView from '../views/programs/BsitView.vue'
import BscsView from '../views/programs/BscsView.vue'
import BsdmiaView from '../views/programs/BsdmiaView.vue'
import BlisView from '../views/programs/BlisView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/programs/bsit',
      name: 'bsit',
      component: BsitView
    },
    {
      path: '/programs/bscs',
      name: 'bscs',
      component: BscsView
    },
    {
      path: '/programs/bsdmia',
      name: 'bsdmia',
      component: BsdmiaView
    },
    {
      path: '/programs/blis',
      name: 'blis',
      component: BlisView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router