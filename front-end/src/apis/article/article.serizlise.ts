/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-16 14:27:10
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-23 14:58:33
 * @FilePath: \front-end\src\apis\article\article.serizlise.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { parseTime } from "@/utils/common"
import { IArticleDTO, IArticle } from "./article.model"

export const articleListSerialize = (data: IArticleDTO[]): IArticle[] => {
  return data.map((ele: IArticleDTO) => {
    return {
      ...ele,
      publishTimeStr: parseTime(ele.publishTime || Date.now()) || "",
    }
  })
}
export const articleSerialize = (data: IArticleDTO): IArticle => {
  return {
    ...data,
    isDraft: data.status === 0,
    publishTimeStr: parseTime(data.publishTime || Date.now()) || "",
  }
}
