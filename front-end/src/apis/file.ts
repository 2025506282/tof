/*
 * @Description:表格数据接口
 * @Autor: scy😊
 * @Date: 2021-01-12 11:31:47
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-09-05 16:02:22
 */
import { post } from "@/utils/https"
import { RootObject } from "@/model/rootObject"
import { ContentType, Method } from "axios-mapper"
import { ArticleModel } from "@/model/articleModel"
import { ArticleList } from "@/model/articleList"

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
}
export const uploadFile = (form: IFile) => {
  const url = `/ue/upload`
  return post<void>(url, form)
}
