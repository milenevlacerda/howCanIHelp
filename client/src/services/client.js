import axios from 'axios'

const token = window.localStorage.getItem('token')

const client = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token
  }
})

export default client
