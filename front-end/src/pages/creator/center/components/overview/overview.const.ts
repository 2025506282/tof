/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-04 09:29:35
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-04 14:11:46
 * @FilePath: \front-end\src\pages\creator\components\nav\nav.const.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineAsyncComponent } from "vue"
import { IItem, IOverview } from "./overview.interface"
import {
  HomeOutlined,
  TagOutlined,
  FundViewOutlined,
  CommentOutlined,
} from "@ant-design/icons-vue"
export const NAV: IItem[] = [
  {
    label: "信息中心",
    value: "/creator",
    icon: HomeOutlined,
  },
  {
    label: "内容管理",
    value: "2",
    icon: TagOutlined,
    children: [
      {
        label: "文章管理",
        value: "/creator/article",
      },
    ],
  },
  {
    label: "数据分析",
    value: "3",
    icon: FundViewOutlined,
    children: [
      {
        label: "文章",
        value: "3-1",
      },
      {
        label: "视频",
        value: "3-2",
      },
    ],
  },
  {
    label: "评论",
    value: "4",
    icon: CommentOutlined,
  },
]
export const OPEN_KEYS = NAV.map((ele) => ele.value)
export const OVERVIEW_LIST: IOverview[] = [
  {
    lable: "近七日阅读",
    char: "string",
    description: "string",
    increase: 12,
  },
  {
    lable: "近七日赞同",
    char: "string",
    description: "string",
    increase: 12,
  },
  {
    lable: "关注者总数",
    char: "string",
    description: "string",
    increase: 12,
  },
  {
    lable: "累计收益",
    char: "string",
    description: "数据为自 2023-01-01 日起tof钱包中到账的创作收入。",
    increase: 12,
  },
]
