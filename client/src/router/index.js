import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import SignUp from '@/components/signUp/SignUp'
import SignIn from '@/components/signIn/SignIn'
import Timeline from '@/components/timeline/Timeline'

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
    },
    {
      path: '/timeline',
      name: 'Timeline',
      component: Timeline
    }
  ]
})
