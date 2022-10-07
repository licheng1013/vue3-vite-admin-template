import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/views/LoginView.vue";
import HomeView from "@/views/HomeView.vue";
import ManagerView from "@/views/system/ManagerView.vue";
import AppView from "@/views/system/AppView.vue";
import DefaultView from "@/views/default/DefaultView.vue";

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
      component: HomeView,
      children:[
        {
          path: '/manager',
          name: 'manager',
          component: ManagerView,
        },
        {
          path: '/app',
          name: 'app',
          component: AppView,
        },
        {
          path: '/user',
          name: 'user',
          component: DefaultView,
        },
        {
          path: '/cdk',
          name: 'cdk',
          component: DefaultView,
        }
      ]
    },
  ]
})

export default router
