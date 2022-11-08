/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-08 09:50:05
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-08 10:33:48
 * @FilePath: \front-end\src\pages\creator\comment\comment.interface.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface IComment {
  id: string
  logoUrl: string
  username: string
  time: string
  content: string
  agreeNum: number
  disAgreeNum: number
  loveNum: number
  children?: IComment[]
}
