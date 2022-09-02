import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'
const routes :RouteRecordRaw[]=[
  {
    path: '/',
    redirect: '/login'
  },
  {
      path: '/login',
      component: () => import('@/view/login.vue')
  },
  {
    path: '/home',
    name:'home',
    component: () => import('@/view/home.vue'),
    props: true
  },
  {
    path: '/banner',
    name:'banner',
    component: () => import('@/view/banner.vue')
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router;