import {createRouter, createWebHistory} from 'vue-router'
import LoginView from "@/views/LoginView.vue";
import {isAuthenticated} from "@/stores/auth";
import {defineAsyncComponent} from "vue";

const asyncComponent = (v) => { // 一个模板方法用于减少代码长度
    return defineAsyncComponent(() => {
        return v
    })
}

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
            meta: true,//布局->只有在1级数组才有效果
            component: asyncComponent(import("@/views/HomeView.vue")),
            children: [
                {
                    path: '/manager',
                    name: '首页',
                    icon: 'House',
                    component: asyncComponent(import("@/views/system/ManagerView.vue")),
                },
                {
                    path: '/app',
                    name: 'App管理',
                    icon: 'Coin',
                    component: asyncComponent(import("@/views/system/AppView.vue")),
                },
                {
                    path: '/user',
                    name: '用户管理',
                    icon: 'User',
                    component: asyncComponent(import("@/views/default/DefaultView.vue")),
                },
                {
                    path: '/test',
                    name: '组件示例',
                    icon: 'Watermelon',
                    component: asyncComponent(import("@/views/default/TestView.vue")),
                },
                {
                    path: '/help',
                    name: '项目帮助',
                    icon: 'Help',
                    component: asyncComponent(import("@/views/default/HelpView.vue")),
                }
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            name: '404',
            component: asyncComponent(import("@/views/default/DefaultView.vue")),
        },
    ]
})


// 已认证
router.beforeEach((to, from, next) => {
    if (to.name !== 'login' && !isAuthenticated()) next({name: 'login'})
    else next()
})

export default router
