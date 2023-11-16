import * as VueRouter from "vue-router";

const routes = [
    {
        name: 'user.login',
        path: '/login',
        component: () => import('./components/Pages/User/Login.vue')
    },
    {
        name: 'user.registration',
        path: '/registration',
        component: () => import('./components/Pages/User/Registration.vue')
    },
    {
        name: 'user.personal',
        path: '/personal',
        component: () => import('./components/Pages/User/Personal.vue')
    },
    {
        name: 'get',
        path: '/get',
        component: () => import('./components/Pages/Get.vue')
    },
    {
        name: '404',
        path: '/:catchAll(.*)',
        component: () => import('./components/Pages/Error/404.vue')
    }
];

const router = new VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    linkActiveClass: 'active',
    routes: routes
})

router.beforeEach((to,from, next) => {
    const token = localStorage.getItem('x_xsrf_token')

    if (!token) {
        if (to.name === 'user.login' || to.name === 'user.registration') {
            return next()
        } else {
            return next({ name: 'user.login' })
        }
    } else {
        if (to.name === 'user.login' || to.name === 'user.registration') {
            return next({ name: 'user.personal' })
        }
    }

    next()
})

export default router
