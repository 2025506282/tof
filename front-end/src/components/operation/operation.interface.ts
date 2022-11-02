/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-09-30 13:40:04
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-01 09:57:19
 * @FilePath: \front-end\src\components\card\card.interface.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface IArticle {
  nickName: string
  publishTime: string
  title: string
  content: string
  commentNum: number
  watchNum: number
  likeNum: number
  moneyNumber?: number
  tags: string[]
  imageUrl: string
}
