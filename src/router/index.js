import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/views/LoginView.vue";
import HomeView from "@/views/HomeView.vue";
import ManagerView from "@/views/system/ManagerView.vue";
import AppView from "@/views/system/AppView.vue";
import DefaultView from "@/views/default/DefaultView.vue";
import TestView from "@/views/default/TestView.vue";
import {isAuthenticated} from "@/stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      meta:true,//布局->只有在1级数组才有效果
      component: HomeView,
      children:[
        {
          path: '/manager',
          name: '首页',
          icon: 'House',
          component: ManagerView,
        },
        {
          path: '/app',
          name: 'App管理',
          icon: 'Coin',
          component: AppView,
        },
        {
          path: '/user',
          name: '用户管理',
          icon: 'User',
          component: DefaultView,
        },
        {
          path: '/test',
          name: '组件示例',
          icon: 'Help',
          component: TestView,
        }
      ]
    },
  ]
})


// 已认证
router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !isAuthenticated()) next({ name: 'login' })
  else next()
})

export default router
