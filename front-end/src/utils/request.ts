import axios from "axios"
import networkConfig from "@/config/default/net.config"
axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8"
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: networkConfig.host,
  // 超时
  timeout: 60000,
})

// // request拦截器
// service.interceptors.request.use(
//   (config) => {
//     // 是否需要设置 token
//     // 是否需要防止数据重复提交
//     return config
//   },
//   (error) => {
//     console.log(error)
//     Promise.reject(error)
//   },
// )

// // 响应拦截器
// service.interceptors.response.use(
//   (res) => {
//     // 未设置状态码则默认成功状态
//     const code = res.data.code || 200
//     // 二进制数据则直接返回
//     if (
//       res.request.responseType === "blob" ||
//       res.request.responseType === "arraybuffer"
//     ) {
//       return res.data
//     }
//     if (code === 401) {
//       return Promise.reject("无效的会话，或者会话已过期，请重新登录。")
//     } else if (code === 500) {
//       return Promise.reject(new Error("service error"))
//     } else if (code !== 200) {
//       return Promise.reject("error")
//     } else {
//       return res.data
//     }
//   },
//   (error) => {
//     console.log("err" + error)
//     let { message } = error
//     if (message == "Network Error") {
//       message = "后端接口连接异常"
//     } else if (message.includes("timeout")) {
//       message = "系统接口请求超时"
//     } else if (message.includes("Request failed with status code")) {
//       message = "系统接口" + message.substr(message.length - 3) + "异常"
//     }
//     return Promise.reject(error)
//   },
// )

export const post = <T>(url: string, data: any, headers = {}) => {
  return service.post<T>(url, data, headers)
}
export function get<T>(url: string, params: any) {
  return service.get<T>(url, params)
}
export default service
