
import Http from '../client'

export const listDonations = idUser => {
  return Http.get(`/donation/:${idUser}`)
    .then(res => res.data)
}

export const createDonation = donation => {
  console.log(donation)
  // return Http.post('/investments/', investment)
  //   .then(res => res.data)
}
