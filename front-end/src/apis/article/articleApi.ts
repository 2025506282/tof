/*
 * @Description:表格数据接口
 * @Autor: scy😊
 * @Date: 2021-01-12 11:31:47
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-18 16:20:26
 */
import { get, deleteA, post } from "@/utils/https"
import { RootObject } from "@/model/rootObject"
import { ContentType, Method } from "axios-mapper"
import { ArticleModel } from "@/model/articleModel"
import { ArticleList } from "@/model/articleList"
import { IArticle, IArticleDTO, IArticleSearchForm } from "./article.model"
import { articleListSerialize, articleSerialize } from "./article.serizlise"
import { articleDeserialize } from "./article.deserizlise"

export const getArticleListAPI = async (
  params: IArticleSearchForm,
): Promise<IArticle[]> => {
  const { data } = await get<RootObject<IArticleDTO[]>>("articles/list", params)
  return articleListSerialize(data)
}
export const deleteArticleAPI = async (id: string) => {
  const { data } = await deleteA<RootObject<ArticleModel>>(`articles/${id}`)
  return data
}
export const createArticleAPI = async (params: IArticle) => {
  const { data } = await post<RootObject<ArticleModel>>(
    "articles/upload",
    params,
  )
  return data
}
export const updateArticleAPI = async (params: IArticle) => {
  if (params._id) {
    const { data } = await post<RootObject<ArticleModel>>(
      "articles/update",
      articleDeserialize(params),
    )
    return data
  }
  return createArticleAPI(articleDeserialize(params))
}
export const getArticleAPI = async (id: string): Promise<IArticle> => {
  const { data } = await get<RootObject<IArticleDTO>>(`articles/${id}`)
  return articleSerialize(data)
}
