import { IITem } from "./draftItem.interface"

/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-09-30 16:01:19
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-03 09:49:07
 * @FilePath: \front-end\src\components\tabBar\tabBar.const.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const DEFAULT_VALUE: IITem[] = [
  {
    label: "推荐",
    value: "1",
  },
  {
    label: "最新",
    value: "2",
  },
  {
    label: "视频",
    value: "4",
  },
  {
    label: "热榜",
    value: "3",
  },
]
export enum Tab {
  Recommend = "1",
  Hot = "3",
}

export enum Time {
  Three = "1",
}
export const TIME_LIST: IITem[] = [
  {
    label: "3天内",
    value: Time.Three,
  },
  {
    label: "7天内",
    value: "2",
  },
  {
    label: "30天内",
    value: "3",
  },
  {
    label: "全部",
    value: "4",
  },
]
