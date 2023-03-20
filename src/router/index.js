import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicLayout from '../components/common/BasicLayout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'basicLayout',
    component: BasicLayout
  }
]

const router = new VueRouter({
  routes
})

export default router
