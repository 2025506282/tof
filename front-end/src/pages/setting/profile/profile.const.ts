/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-07 13:52:37
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-07 14:20:35
 * @FilePath: \front-end\src\pages\setting\profile\profile.const.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { IForm } from "./profile.interface"
export const FORM_LIST: IForm[] = [
  {
    label: "用户名",
    char: "username",
    placehodle: "请填写你的用户名",
    maxLength: 20,
    require: true,
  },
  {
    label: "职位",
    char: "job",
    placehodle: "请填写你的职位",
    maxLength: 50,
  },
  {
    label: "公司",
    char: "company",
    placehodle: "请填写你的用户名",
    maxLength: 50,
  },
  {
    label: "个人主页",
    char: "homepage",
    placehodle: "请填写你的个人主页",
    maxLength: 50,
  },
  {
    label: "个人介绍",
    char: "introduce",
    placehodle: "请填写你的个人介绍",
    maxLength: 100,
    isTextArea: true,
  },
]
