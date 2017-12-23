
import Http from '../client'

export const listInvestments = () => {
  return Http.get('/investments/')
    .then(res => res.data)
}

export const createInvestment = investment => {
  console.log(investment)
  // return Http.post('/investments/', investment)
  //   .then(res => res.data)
}
