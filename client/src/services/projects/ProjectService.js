
import Http from '../client'

export const listProjects = () => {
  return Http.get('/projetos')
    .then(res => res.data)
}
