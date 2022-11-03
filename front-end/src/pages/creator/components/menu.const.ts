/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-03 10:37:48
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-03 11:11:10
 * @FilePath: \front-end\src\pages\creator\components\menu.const.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { IMenuItem } from "./menu.interface"

export const MENU_LIST: IMenuItem[] = [
  {
    label: "首页",
    value: "/home",
  },
  {
    label: "内容管理",
    value: "2",
    children: [
      {
        label: "文章管理",
        value: "2-1",
      },
      {
        label: "专栏管理",
        value: "2-2",
      },
      {
        label: "沸点管理",
        value: "2-3",
      },
    ],
  },
  {
    label: "数据中心",
    value: "3",
    children: [
      {
        label: "内容数据",
        value: "3-1",
      },
      {
        label: "关注者数据",
        value: "3-2",
      },
    ],
  },
  {
    label: "创作成长",
    value: "4",
    children: [
      {
        label: "创作者权益",
        value: "4-1",
      },
    ],
  },
]
