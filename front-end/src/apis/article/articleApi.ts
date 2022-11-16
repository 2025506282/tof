/*
 * @Description:表格数据接口
 * @Autor: scy😊
 * @Date: 2021-01-12 11:31:47
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-16 15:44:38
 */
import { get, https, post } from "@/utils/https"
import { RootObject } from "@/model/rootObject"
import { ContentType, Method } from "axios-mapper"
import { ArticleModel } from "@/model/articleModel"
import { ArticleList } from "@/model/articleList"
import { IArticle, IArticleDTO, IArticleSearchForm } from "./article.model"
import { articleListSerialize } from "./article.serizlise"

export const getArticleListAPI = async (
  params: IArticleSearchForm,
): Promise<IArticle[]> => {
  const { data } = await get<RootObject<IArticleDTO[]>>("articles/list", params)
  return articleListSerialize(data)
}
export const createArticleAPI = async (params: IArticle) => {
  const { data } = await post<RootObject<ArticleModel>>(
    "articles/upload",
    params,
  )
  return data
}
export const getArticleAPI = async (id: string): Promise<IArticle> => {
  const { data } = await get<RootObject<IArticleDTO>>(`articles/${id}`)
  return data
}
