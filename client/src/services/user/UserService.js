import Http from '../client'

export const createUser = usuario => {
  return Http.post('/user', usuario)
    .then(res => res.data)
}

export const consultUser = dadosUsuario => {
  return Http.post('/login', dadosUsuario)
    .then(res => res.data)
}
