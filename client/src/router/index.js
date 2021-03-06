import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import SignUp from '@/components/signUp/SignUp'
import SignUpOng from '@/components/signUpOng/SignUpOng'
import SignIn from '@/components/signIn/SignIn'
import Timeline from '@/components/timeline/Timeline'
import Project from '@/components/project/Project'
import Profile from '@/components/profile/Profile'
import GeneralData from '@/components/generalData/GeneralData'
import DonationData from '@/components/donationData/DonationData'
import CreateProject from '@/components/createProject/CreateProject'
import Investments from '@/components/investments/Investments'
import ProjectData from '@/components/projectData/ProjectData'
import DonationHistory from '@/components/donationHistory/DonationHistory'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/createProject',
      name: 'CreateProject',
      component: CreateProject
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/signUpOng',
      name: 'SignUpOng',
      component: SignUpOng
    },
    {
      path: '/signIn',
      name: 'SignIn',
      component: SignIn
    },
    {
      // faltou coisa
      path: '/timeline',
      name: 'Timeline',
      component: Timeline
    },
    {
      // faltou coisa
      path: '/general',
      name: 'GeneralData',
      component: GeneralData
    },
    {
      path: '/project/:projectId',
      name: 'Project',
      component: Project
    },
    {
      path: '/profile/:type/:id',
      name: 'Profile',
      component: Profile
    },
    {
      // faltou coisa
      path: '/donationData',
      name: 'DonationData',
      component: DonationData
    },
    {
      // faltou coisa
      path: '/projectData',
      name: 'ProjectData',
      component: ProjectData
    },
      // faltou coisa
    {
      path: '/investments',
      name: 'Investments',
      component: Investments
    },
    {
      // faltou coisa
      path: '/donationHistory',
      name: 'DonationHistory',
      component: DonationHistory
    }
  ]
})
