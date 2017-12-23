
import Http from '../client'

export const listProjects = () => {
  console.log('hey')
  return Http.get('/project/')
    .then(res => res.data)
}

export const createProject = project => {
  console.log(project)
  // return Http.post('/project/', project)
  //   .then(res => res.data)
}
