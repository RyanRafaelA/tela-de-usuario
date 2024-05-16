import vue from 'vue'
import VueRouter from 'vue-router'

import telaUsuarios from '../pages/telaUsuarios.vue'
import login from '../pages/login.vue'

vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/telaUsuarios',
        component: telaUsuarios
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router