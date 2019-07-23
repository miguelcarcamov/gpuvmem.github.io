import Vue from 'vue'
import App from './App.vue'

import Vuetify from 'vuetify'
import './plugins/vuetify'

Vue.use(Vuetify)

/* Router */
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
