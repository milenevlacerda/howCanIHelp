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
import ProjectData from '@/components/projectData/ProjectData'

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
    },
    {
      path: '/donationData',
      name: 'DonationData',
      component: DonationData
    },
    {
      path: '/projectData',
      name: 'ProjectData',
      component: ProjectData
    }
  ]
})
