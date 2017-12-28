
import Http from '../client'

export const listInvestments = () => {
  return Http.get('/investment')
    .then(res => res.data)
}

export const createInvestment = investment => {
  return Http.post('/investment', investment)
    .then(res => res.data)
}
