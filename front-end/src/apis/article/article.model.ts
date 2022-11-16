/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-11 13:27:47
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-16 15:21:30
 * @FilePath: \front-end\src\apis\article\article.interface.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface IArticleDTO {
  _id?: string
  type: string // 文章类型
  tags: string[] // 文章标签
  cover?: string // 文章封面
  abstract: string // 文章摘要
  title: string // 标题
  content: string // 内容
  publishTime?: number
}

export interface IArticle extends IArticleDTO {
  publishTimeStr?: string
}

export interface IArticleSearchForm {
  pageSize: number
  pageIndex: number
  keyWord: string
}
