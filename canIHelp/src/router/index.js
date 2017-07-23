import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import SignUp from '@/components/signUp/SignUp'
import SignIn from '@/components/signIn/SignIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/signIn',
      name: 'SignIn',
      component: SignIn
    }
  ]
})
