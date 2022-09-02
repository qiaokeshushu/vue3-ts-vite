import axios, { AxiosRequestConfig } from 'axios'

const service = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 60000,
  headers: {
    "X-Requested-With": "XMLHttpRequest"
  }
})

service.interceptors.request.use((config:AxiosRequestConfig) => {
  return config;
}, (error) => {
  return Promise.reject(error);
})
service.interceptors.response.use(
  (Response: AxiosRequestConfig) => {
    // 可以根据项目做一些特殊code处理
  return Response.data
  },
  (error) => {
    return Promise.reject(error);
  })
  export default service