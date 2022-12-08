/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-11 13:27:47
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-12-08 11:11:26
 * @FilePath: \front-end\src\apis\article\article.interface.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface IArticleDTO {
  _id?: string
  status?: number // 文章的状态，已发布还是草稿
  type: string // 文章类型
  tags: string[] // 文章标签
  cover?: string // 文章封面
  abstract: string // 文章摘要
  title: string // 标题
  content: string // 内容
  publishTime?: number
  collectNum?: number
  commentNum?: number
  watchNum?: number
  likeNum?: number
}

export interface IArticle extends IArticleDTO {
  publishTimeStr?: string
  nickName?: string
  isDraft?: boolean
}

export interface IArticleSearchForm {
  pageSize: number
  pageIndex: number
  keyWord: string
  status?: number
}

export interface ICommentForm {
  userId?: string
  articleId: string
  content?: string
  parentId?: string
}

export interface IComment {
  userId: string
  articleId: string
  content: string
  parentId?: string
  likeUsers?: string[]
  dislikeUsers?: string[]
  collectUsers?: string[]
  children?: IComment[]
}
