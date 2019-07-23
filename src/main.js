import Vue from 'vue'
import App from './App.vue'

/* Vuetify*/
import Vuetify from 'vuetify'
import './plugins/vuetify'

/* Router */
import router from './router'

/* Font Awesome*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
