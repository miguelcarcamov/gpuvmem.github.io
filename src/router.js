import Vue from 'vue'
import VueRouter from 'vue-router'

/* Components */
import indexPage from './pages/Index/Index'
import docPage from './pages/Docs/Docs'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: indexPage
        },
        {
            path: '/docs',
            name: 'doc',
            component: docPage
        }
    ]
});