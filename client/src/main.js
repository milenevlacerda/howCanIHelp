// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Notifications from 'vue-notification'
import Vulma from 'vulma'
import vueBulmaComponents from 'vue-bulma-components'
import Vuetify from 'vuetify'
import ElementUI from 'element-ui'
import VueChartJS from 'vue-chartjs'
import VueFormWizard from 'vue-form-wizard'
import Vuelidate from 'vuelidate'

import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit.min.js'
import 'uikit/dist/js/uikit-icons.min.js'

import 'element-ui/lib/theme-chalk/index.css'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

import '../node_modules/vuetify/dist/vuetify.min.css'
import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick.js'
import './assets/css/new-styles.css'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(Vulma)
Vue.use(Notifications)
Vue.use(vueBulmaComponents)
Vue.use(Vuetify)
Vue.use(ElementUI)
Vue.use(VueFormWizard)
Vue.use(VueChartJS)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
