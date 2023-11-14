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

// route.beforeEach((to, from, next) => {
//
//     const accessToken = localStorage.getItem('access_token')
//
//     if (!accessToken) {
//         if (to.name !== 'users.login' && to.name !== 'users.registration') {
//             return next({ name: 'users.login' })
//         }
//     } else {
//         if (to.name === 'users.login' || to.name === 'users.registration') {
//             return next({ name: 'users.personal' })
//         }
//     }
//
//     next()
// })

export default router
