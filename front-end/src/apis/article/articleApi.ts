/*
 * @Description:表格数据接口
 * @Autor: scy😊
 * @Date: 2021-01-12 11:31:47
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-12-08 11:11:39
 */
import { get, deleteA, post } from "@/utils/https"
import { RootObject } from "@/apis/rootObject"
import {
  IArticle,
  IArticleDTO,
  IArticleSearchForm,
  IComment,
  ICommentForm,
} from "./article.model"
import { articleListSerialize, articleSerialize } from "./article.serizlise"
import { articleDeserialize } from "./article.deserizlise"

export const getArticleListAPI = async (
  params: IArticleSearchForm,
): Promise<IArticle[]> => {
  const { data } = await get<RootObject<IArticleDTO[]>>("api/articles", params)
  return articleListSerialize(data)
}
export const deleteArticleAPI = async (id: string) => {
  const { data } = await deleteA<RootObject<IArticle>>(`api/articles/${id}`)
  return data
}
export const createArticleAPI = async (params: IArticle) => {
  const { data } = await post<RootObject<IArticle>>("api/articles", params)
  console.log("data:", data)
  return articleSerialize(data)
}
export const updateArticleAPI = async (params: IArticle) => {
  if (params._id) {
    const { data } = await post<RootObject<IArticle>>(
      "api/articles/update",
      articleDeserialize(params),
    )
    return articleSerialize(data)
  }
  return await createArticleAPI(articleDeserialize(params))
}
export const getArticleAPI = async (id: string): Promise<IArticle> => {
  const { data } = await get<RootObject<IArticleDTO>>(`api/articles/${id}`)
  return articleSerialize(data)
}

// 发布评论
export const createCommentAPI = async (
  form: ICommentForm,
): Promise<RootObject<boolean>> => {
  return await post<RootObject<boolean>>("api/comment/upload", form)
}

// 获取评论列表
export const getCommentListByArticleAPI = async (
  id: string,
): Promise<RootObject<IComment>> => {
  return await get<RootObject<IComment>>(`comment/${id}`)
}
