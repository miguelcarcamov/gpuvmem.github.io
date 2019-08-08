import Vue from 'vue'
import App from './App.vue'

/* Vuetify */
import vuetify from './plugins/vuetify';

/* Router */
import router from './router'

/* Vuex */
import store from './store/store'

/* Vue CodeMirror*/
import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css'
import 'codemirror/mode/clike/clike'

Vue.use(VueCodemirror)

Vue.config.productionTip = false


new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
