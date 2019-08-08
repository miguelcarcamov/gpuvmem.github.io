import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('./views/Index')
        },
        {
            path: '/support-us',
            beforeEnter() {
                window.location = "https://www.patreon.com/bePatron?u=22507086"
            }
        },
        {
            path: '/docs',
            name: 'documentation',
            component: () => import('./views/Documentation')
        }
    ]
});