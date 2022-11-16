/*
 * @Description: axios 封装网络请求
 * @Author: ZY
 * @Date: 2020-12-28 14:45:32
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-16 13:45:42
 */

// import { useStore } from '@/store'
import HttpClient, { ContentType, HttpClientConfig, Method } from "axios-mapper"
import networkConfig from "@/config/default/net.config"
import axios from "axios"
export const https = () => {
  const config: HttpClientConfig = {
    baseURL: networkConfig.host,
    headers: {
      contentType: ContentType.json,
      //   token: hasToken ? useStore().state.user.token : ''
    },
  }
  return new HttpClient(config)
}
axios.defaults.baseURL = networkConfig.host

export function get<T>(url: string, params: any = {}): Promise<T> {
  return https().request<T>(
    url,
    Method.GET,
    params,
    ContentType.json,
  ) as Promise<T>
}
export function post<T>(url: string, data: any): Promise<T> {
  return https().request<T>(
    url,
    Method.POST,
    data,
    ContentType.json,
  ) as Promise<T>
}
