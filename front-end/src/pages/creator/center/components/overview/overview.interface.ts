/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-04 13:43:36
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-04 14:01:43
 * @FilePath: \front-end\src\pages\creator\center\components\overview\overview.interface.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface IItem {
  label: string
  value: string
  icon?: any
  children?: IItem[]
}

export interface IOverview {
  lable: string
  char: string
  description: string
  increase: number
}
