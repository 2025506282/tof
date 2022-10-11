import { IMenu } from "./userNavBar.interface"

/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-09-30 16:01:19
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-10-09 14:44:38
 * @FilePath: \front-end\src\components\tabBar\tabBar.const.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const DEFAULT_VALUE: IMenu[] = [
  {
    label: "写文章",
    value: "1",
  },
  {
    label: "草稿",
    value: "2",
    isSplit: true,
  },
  {
    label: "我的主页",
    value: "3",
  },
  {
    label: "我喜欢的",
    value: "4",
  },
  {
    label: "我的收藏集",
    value: "5",
  },
  {
    label: "标签管理 ",
    value: "6",
    isSplit: true,
  },
  {
    label: "设置 ",
    value: "7",
  },
  {
    label: "关于 ",
    value: "8",
    children: [
      {
        label: "下载应用",
        value: "8-1",
      },
      {
        label: "加入我们",
        value: "8-2",
      },
      {
        label: "翻译计划",
        value: "8-3",
      },
      {
        label: "合作伙伴 ",
        value: "8-4",
      },
    ],
  },
]
