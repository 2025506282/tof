/*
 * @Description:表格数据接口
 * @Autor: scy😊
 * @Date: 2021-01-12 11:31:47
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-11 13:25:10
 */
import { post, get } from "@/utils/request"
import { RootObject } from "@/model/rootObject"
import { ContentType, Method } from "axios-mapper"
import { ArticleModel } from "@/model/articleModel"
import { ArticleList } from "@/model/articleList"
import { Form } from "ant-design-vue"

export interface IFile {
  chunk: string
  hash: string
  suffix: string
}
export const uploadFile = (form: IFile) => {
  const url = `/ue/upload`
  const formData = new FormData()
  formData.append("file", form.chunk)
  formData.append("hash", form.hash)
  formData.append("suffix", form.suffix)
  return post<void>(url, formData, { "Content-Type": "multipart/form-data" })
}

export const mergeFile = (fileHash: string, suffix: string, size: number) => {
  const url = `/ue/merge`
  return post<void>(url, { fileHash, suffix, size })
}
