import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './routers/router.js'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
