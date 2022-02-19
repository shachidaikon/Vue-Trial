import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/data',
    name: 'Data',
    component: () => import(/* webpackChunkName: "data" */ '../views/Data.vue'),
  },
  {
    path: '/method',
    name: 'Method',
    component: () => import(/* webpackChunkName: "method" */ '../views/Method.vue'),
  },
  {
    path: '/v-if',
    name: 'V-if',
    component: () => import(/* webpackChunkName: "v-if" */ '../views/V-if.vue'),
  },
  {
    path: '/v-for',
    name: 'V-for',
    component: () => import(/* webpackChunkName: "v-for" */ '../views/V-for.vue'),
  },
  {
    path: '/computed',
    name: 'Computed',
    component: () => import(/* webpackChunkName: "computed" */ '../views/Computed.vue'),
  },
  {
    path: '/class-binding',
    name: 'ClassBinding',
    component: () => import(/* webpackChunkName: "class-binding" */ '../views/ClassBinding.vue'),
  },
  {
    path: '/style-binding',
    name: 'StyleBinding',
    component: () => import(/* webpackChunkName: "style-binding" */ '../views/StyleBinding.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
