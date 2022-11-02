/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-10-26 10:40:32
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-02 14:33:58
 * @FilePath: \front-end\src\pages\new\components\replenish.interface.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface IForm {
  type: string // 文章类型
  tags: string[] // 文章标签
  cover?: string // 文章封面
  abstract: string // 文章摘要
}
