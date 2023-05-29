// import axios, {
//   AxiosInstance,
//   AxiosResponse,
//   AxiosError,
//   InternalAxiosRequestConfig,
// } from 'axios'
// import { ElMessage } from 'element-plus'
// import { getHttpStatusMessage } from './helper/getHttpStatusMessage'

// class HttpClient {
//   private instance: AxiosInstance

//   constructor() {
//     // 创建 Axios 实例
//     this.instance = axios.create({
//       // 设置基础 URL(自动根据环境配置不同的BASE_URL)-BASE_URL请查看对应的环境配置
//       baseURL: import.meta.env.VITE_APP_BASE_API,
//       // 设置超时时间
//       timeout: 5000,
//     })

//     // 请求拦截器
//     this.instance.interceptors.request.use(
//       (config: InternalAxiosRequestConfig) => {
//         // 在发送请求之前做一些处理
//         const token = localStorage.getItem('token') || null
//         if (token) {
//           config.headers['Authorization'] = `Bearer ${token}`
//         }
//         return config
//       },
//       (error: AxiosError) => {
//         // 请求错误处理
//         return Promise.reject(error)
//       }
//     )

//     // 响应拦截器
//     this.instance.interceptors.response.use(
//       (response: AxiosResponse) => {
//         // 对响应数据做一些处理
//         return response
//       },
//       (error: AxiosError<any>) => {
//         // 响应错误处理
//         if (error.response) {
//           // 响应已接收，但状态码不在 2xx 范围内
//           const { status, data } = error.response
//           const errorMessage =
//             data && data.message ? data.message : getHttpStatusMessage(status)
//           ElMessage.error(`错误代码：${status}，错误信息：${errorMessage}`)
//         } else {
//           // 请求未发出或未收到响应
//           ElMessage.error('请求失败，请检查网络连接')
//         }
//         return Promise.reject(error)
//       }
//     )
//   }

//   get<T = any>(url: string, config?: InternalAxiosRequestConfig): Promise<T> {
//     // 发送 GET 请求，并返回 Promise
//     return this.instance.get<T>(url, config).then((response) => response.data)
//   }

//   post<T = any>(
//     url: string,
//     data?: any,
//     config?: InternalAxiosRequestConfig
//   ): Promise<T> {
//     // 发送 POST 请求，并返回 Promise
//     return this.instance
//       .post<T>(url, data, config)
//       .then((response) => response.data)
//   }

//   put<T = any>(
//     url: string,
//     data?: any,
//     config?: InternalAxiosRequestConfig
//   ): Promise<T> {
//     // 发送 PUT 请求，并返回 Promise
//     return this.instance
//       .put<T>(url, data, config)
//       .then((response) => response.data)
//   }

//   delete<T = any>(
//     url: string,
//     config?: InternalAxiosRequestConfig
//   ): Promise<T> {
//     // 发送 DELETE 请求，并返回 Promise
//     return this.instance
//       .delete<T>(url, config)
//       .then((response) => response.data)
//   }
// }

// export default HttpClient
