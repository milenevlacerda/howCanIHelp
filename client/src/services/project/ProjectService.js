
import Http from '../client'

export const listProjects = () => {
  return Http.get('/project')
    .then(res => res.data)
}

export const getProject = idProjeto => {
  return Http.get(`/project/${idProjeto}`)
    .then(res => res.data)
}

export const createProject = (project) => {
  return Http.post('/project', project)
    .then(res => res.data)
}
