import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

/* Boostrap CSS Files */
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/* Router */
import router from './router'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
