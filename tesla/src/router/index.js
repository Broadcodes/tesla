import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/model_s',
    name: 'model_s',
    component: () => import('../views/Model_S.vue')
  },
  {
    path: '/model_3',
    name: 'model_3',
    component: () => import('../views/Model_3.vue')
  },
  {
    path: '/model_x',
    name: 'model_x',
    component: () => import('../views/Model_X.vue')
  },
  {
    path: '/model_y',
    name: 'model_y',
    component: () => import('../views/Model_Y.vue')
  },
  {
    path: '/powerwall',
    name: 'powerwall',
    component: () => import('../views/PowerwallView.vue')
  },
  {
    path: '/ricarica',
    name: 'ricarica',
    component: () => import('../views/RicaricaView.vue')
  },
  {
    path: '/assistenza',
    name: 'assistenza',
    component: () => import('../views/AssistenzaView.vue')
  },
  {
    path: '/drive',
    name: 'drive',
    component: () => import('../views/DriveView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router