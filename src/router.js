import Vue from 'vue'
import VueRouter from 'vue-router'

/* Components */
import indexPage from './views/Index'

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
            path: '/support-us',
            beforeEnter() {
                window.location = "https://www.patreon.com/bePatron?u=22507086"
            }
        }
    ]
});