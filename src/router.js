import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/about.vue')
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('./views/demo.vue')
    }

  ]
})
