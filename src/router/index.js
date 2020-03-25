import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/components/About.vue')
    },
    {
      path: '/peliculas',
      name: 'peliculas',
      component: () => import('@/components/Peliculas.vue')
    },
    {
      path: '/pelicula/:id',
      name: 'pelicula',
      component: () => import('@/components/Pelicula.vue'),
      props: true
    },
    {
      path: '/not-found',
      name: '404',
      component: () => import('@/components/NotFound.vue'),
      props: true
    },
    {
      path: '*',
      redirect: {
        name: '404'
      }
    }
  ]
})
