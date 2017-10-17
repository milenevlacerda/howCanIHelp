// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Notifications from 'vue-notification'
import Vulma from 'vulma'
import Bulma from 'Bulma'
import vueBulmaComponents from 'vue-bulma-components'

Vue.config.productionTip = false

Vue.use(Vulma)
Vue.use(Bulma)
Vue.use(Notifications)
Vue.use(vueBulmaComponents)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
