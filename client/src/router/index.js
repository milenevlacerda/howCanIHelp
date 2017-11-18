import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import SignUp from '@/components/signUp/SignUp'
import SignIn from '@/components/signIn/SignIn'
import Timeline from '@/components/timeline/Timeline'
import GeneralData from '@/components/generalData/GeneralData'
import Project from '@/components/project/Project'
import Profile from '@/components/profile/Profile'

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
    },
    {
      path: '/general',
      name: 'GeneralData',
      component: GeneralData
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
