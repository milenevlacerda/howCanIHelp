// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Notifications from 'vue-notification'
import Vulma from 'vulma'
import vueBulmaComponents from 'vue-bulma-components'
import Vuetify from 'vuetify'

import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit.min.js'
import 'uikit/dist/js/uikit-icons'

import '../node_modules/vuetify/dist/vuetify.min.css'
import './assets/css/form.css'

Vue.config.productionTip = false

Vue.use(Vulma)
Vue.use(Notifications)
Vue.use(vueBulmaComponents)
Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
