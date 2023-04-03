import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicLayout from '../components/common/BasicLayout'

import { getToken } from '@/utils/token'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import("@/views/user/Login.vue")
  },
  {
    path: '/',
    name: 'basicLayout',
    component: BasicLayout,
    meta: {
      requireAuth: true
    },
    children: [
      // 设置菜单列表的路由
      {
        path: '',
        name: 'dashboard',
        component: () => import("@/views/dashboard/Index.vue"),
        meta: {
          requireAuth: true
        }
      },
      {
        path: '/systemUser',
        name: 'systemUser',
        component: () => import("@/views/admin/systemUser/Index.vue")
      },
      {
        path: '/systemRole',
        name: 'systemRole',
        component: () => import("@/views/admin/systemRole/Index.vue")
      },
      {
        path: '/systemMenu',
        name: 'systemMenu',
        component: () => import("@/views/admin/systemMenu/Index.vue")
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: () => import("@/views/exception/404.vue")
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next) => {
  if(to.matched.some(r => r.meta.requireAuth)) {
    if(!JSON.parse(getToken('tokenInfo'))) {
      next({
        name: 'login',
        query: {
          redirect: to.fullPath
        }
      })
      return
    }
  }
  next()
})
export default router
