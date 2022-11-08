/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-07 13:52:52
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-07 14:20:43
 * @FilePath: \front-end\src\pages\setting\profile\profile.interface.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export interface IFormState {
  username: string
  job: string
  company: string
  homepage: string
  introduce: string
}
export interface IForm {
  label: string
  char: keyof IFormState
  placehodle: string
  type?: string
  maxLength?: number
  require?: boolean
  isTextArea?: boolean
}
