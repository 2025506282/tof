import { IITem } from "./tag.interface"

/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-09-30 16:01:19
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-10-11 15:17:13
 * @FilePath: \front-end\src\components\tabBar\tabBar.const.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const DEFAULT_VALUE: IITem[] = [
  {
    label: "综合",
    value: "1",
  },
  {
    label: "关注",
    value: "2",
    isSplit: true,
  },
  {
    label: "后端",
    value: "3",
  },
  {
    label: "前端",
    value: "4",
  },
  {
    label: "IOS ",
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
