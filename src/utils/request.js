import axios from 'axios'

const service = axios.create({
  baseURL: `/api`,
  timeout: 50000 // request timeout
})
// service.defaults.baseURL = "/api"
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

export default service
