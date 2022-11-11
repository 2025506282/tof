/*
 * @Description:表格数据接口
 * @Autor: scy😊
 * @Date: 2021-01-12 11:31:47
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-11 13:35:39
 */
import { https, post } from "@/utils/https"
import { RootObject } from "@/model/rootObject"
import { ContentType, Method } from "axios-mapper"
import { ArticleModel } from "@/model/articleModel"
import { ArticleList } from "@/model/articleList"
import { IArticle } from "./article.model"

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

export const getArticles = (params: any) => {
  return https().request<RootObject<ArticleList<ArticleModel>>>(
    "article/articles",
    Method.POST,
    params,
    ContentType.json,
  )
}

export const getArticle = (params: any) => {
  return https().request<RootObject<ArticleModel>>(
    "article/articleInfo",
    Method.GET,
    params,
    ContentType.form,
  )
}

export const createArticleAPI = (data: IArticle) => {
  return post<RootObject<ArticleModel>>("article/createArticle", data)
}

export const updateArticle = (params: IArticle) => {
  return https().request<RootObject<ArticleModel>>(
    "article/updateArticle",
    Method.POST,
    params,
    ContentType.json,
  )
}

export const deleteArticle = (id: number) => {
  return https().request<RootObject<ArticleModel>>(
    `articles/${id}`,
    Method.POST,
    undefined,
    ContentType.json,
  )
}

export interface Pageviews {
  pageviews: any
}

export const getPageviews = (params: any) => {
  return https().request<RootObject<Pageviews>>(
    "pageviews",
    Method.GET,
    params,
    ContentType.json,
  )
}
