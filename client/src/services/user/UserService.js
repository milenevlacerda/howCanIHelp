import Http from '../client'

export const createUser = usuario => {
  return Http.post('/user/', usuario)
    .then(res => res.data)
}

export const consultUser = dadosUsuario => {
  return Http.get('/user/', dadosUsuario)
    .then(res => res.data)
}
