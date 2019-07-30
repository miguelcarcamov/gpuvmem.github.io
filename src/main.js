import Vue from 'vue'
import App from './App.vue'

/* Vuetify */
import vuetify from './plugins/vuetify';

/* Router */
import router from './router'

/* Vuex */
import store from './store/store'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
