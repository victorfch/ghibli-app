import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
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
    },
    {
      path: '/pelicula/:id',
      name: 'Pelicula',
      component: () => import('@/components/Pelicula.vue'),
      props: true
    }
  ]
})
