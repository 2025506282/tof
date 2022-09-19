/*
 * @Description:表格数据接口
 * @Autor: scy😊
 * @Date: 2021-01-12 11:31:47
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-09-19 15:13:14
 */
import { post, get } from "@/utils/request"
import { RootObject } from "@/model/rootObject"
import { ContentType, Method } from "axios-mapper"
import { ArticleModel } from "@/model/articleModel"
import { ArticleList } from "@/model/articleList"
import { Form } from "ant-design-vue"

export const defaultArticleModel: ArticleModel = {
  id: 0,
  status: "draft",
  title: "",
  fullContent: "",
  abstractContent: "",
  sourceURL: "",
  imageURL: "",
  timestamp: 0,
  platforms: ["a-platform"],
  disableComment: false,
  importance: 0,
  author: "",
  reviewer: "",
  type: "",
  pageviews: 0,
}
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
