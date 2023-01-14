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
    path: '/models',
    name: 'models',
    component: () => import('../views/Model_S.vue')
  },
  {
    path: '/model3',
    name: 'model3',
    component: () => import('../views/Model_3.vue')
  },
  {
    path: '/modelx',
    name: 'modelx',
    component: () => import('../views/Model_X.vue')
  },
  {
    path: '/modely',
    name: 'modely',
    component: () => import('../views/Model_Y.vue')
  },
  {
    path: '/powerwall',
    name: 'powerwall',
    component: () => import('../views/PowerwallView.vue')
  },
  {
    path: '/charging',
    name: 'charging',
    component: () => import('../views/RicaricaView.vue')
  },
  {
    path: '/support',
    name: 'support',
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