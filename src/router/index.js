import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/components/About.vue')
  },
  {
    path: '/peliculas',
    name: 'Peliculas',
    component: () => import('@/components/Peliculas.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
