/*
 * @Author: XiuJie_Lin xiujie_lin@lebo.cn
 * @Date: 2023-05-26 15:40:05
 * @LastEditors: XiuJie_Lin xiujie_lin@lebo.cn
 * @LastEditTime: 2023-05-29 10:28:14
 * @FilePath: \lebo_admin\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useStore } from '@/store/index'

const routes: RouteRecordRaw[] = [
  // 其他路由配置
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    component: () => import('@/view/index.vue'),
    meta: {
      requiresAuth: true,
      roles: ['admin', 'user'],
      title: 'adminAndUser',
    },
  },
  {
    path: '/login',
    component: () => import('@/view/login.vue'),
    meta: { requiresAuth: true, roles: ['admin', 'user'], title: 'login' },
  },
  {
    path: '/admin1',
    component: () => import('@/view/admin/admin1.vue'),
    meta: { requiresAuth: true, roles: ['admin'], title: 'admin1' },
  },
  {
    path: '/admin2',
    component: () => import('@/view/admin/admin2.vue'),
    meta: { requiresAuth: true, roles: ['admin'], title: '管理员2' },
  },
  {
    path: '/user1',
    component: () => import('@/view/user/user1.vue'),
    meta: { requiresAuth: true, roles: ['user'], title: '用户1' },
  },
  {
    path: '/user2',
    component: () => import('@/view/user/user2.vue'),
    meta: { requiresAuth: true, roles: ['user'], title: '用户2' },
  },
  {
    path: '/403',
    component: () => import('@/view/helpPage/403.vue'),
    meta: { requiresAuth: true, roles: ['admin', 'user'], title: '403' },
  },
  // ...
  {
    path: '/404',
    component: () => import('@/view/helpPage/404.vue'),
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
// router.beforeEach((to, from, next) => {
//   next()
// })

router.beforeEach(async (to, from, next) => {
  const store = useStore()
  const isAuthenticated = store.getToken !== undefined && store.getToken !== ''
  const requiredRoles: string[] = Array.isArray(to.meta.roles)
    ? to.meta.roles
    : []

  if (to.path !== '/login' && !isAuthenticated) {
    /** 未登录重定向到登录页 */
    console.log(to, from, '未登录')
    next('/login')
  } else if (to.path === '/login' && isAuthenticated) {
    console.log(to, from, 'index')
    /** 已经登录 还要去登录 重定向到index */
    next('/index')
  } else if (to.path !== '/login' && isAuthenticated) {
    /** 权限处理 */
    console.log(to, from, '403')
    
    next('/403')
  } else {
    console.log(to, from, 'next')

    next()
  }
})

export default router
