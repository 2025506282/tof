import { IITem } from "./header.interface"

/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-09-30 16:01:19
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-16 14:58:42
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
    label: "Android",
    value: "5",
  },
  {
    label: "IOS",
    value: "6",
  },
  {
    label: "人工智能",
    value: "7",
  },
  {
    label: "开发工具",
    value: "8",
  },
  {
    label: "代码认识",
    value: "9",
  },
]
export const NAV_LIST = [
  {
    label: "首页",
    value: "/home",
  },
  // {
  //   label: "活动",
  //   value: "2",
  // },
]

export const CREATOR_LIST = [
  {
    label: "写文章",
    value: "/article/new",
  },
  {
    label: "发视频",
    value: "/video",
  },
  {
    label: "草稿箱",
    value: "/draft",
  },
]
