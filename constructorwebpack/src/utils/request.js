import axios from 'axios'
console.dir(process.env)
const service = axios.create({
  baseURL: '/jsonp', // api 的 base_url
  timeout: 50000, // request timeout
  // headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  // withCredentials: true
})

export default service