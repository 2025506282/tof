/*
 * @Description: axios 封装网络请求
 * @Author: ZY
 * @Date: 2020-12-28 14:45:32
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-15 17:20:47
 */

// import { useStore } from '@/store'
import HttpClient, { ContentType, HttpClientConfig, Method } from "axios-mapper"
import networkConfig from "@/config/default/net.config"
import axios from "axios"
import { RootObject } from "@/model/rootObject"
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

export function get<T>(url: string, params: any = {}) {
  return https().request<RootObject<T>>(
    url,
    Method.GET,
    params,
    ContentType.json,
  )
}
export function post<T>(url: string, data: any) {
  return https().request<RootObject<T>>(
    url,
    Method.POST,
    data,
    ContentType.json,
  )
}
