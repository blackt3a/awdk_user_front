import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/views/Login.vue')
        },
        {
            path: '/',
            name: 'Main',
            component: () => import('@/views/Main.vue')
        },
        {
            path: '/rank',
            name: 'Rank',
            component: () => import('@/views/Rank.vue')
        },
        {
            path: '/bulletin',
            name: 'Bulletin',
            component: () => import('@/views/Bulletin.vue')
        },
    ]
})

router.beforeEach((to, from, next) => {
    // 路由守卫
    if(!localStorage.getItem('token') && to.name !== 'Login'){
        next({
            name: 'Login'
        })
        return
    }
    // 登录后再访问登录
    if(localStorage.getItem('token') && to.name === 'Login'){
        next({
            name: 'Main'
        })
        return
    }

    next()
})
export default router
