import { ITabBar } from "./tabBar.interface"

/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-09-30 16:01:19
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-09-30 16:04:23
 * @FilePath: \front-end\src\components\tabBar\tabBar.const.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const DEFAULT_VALUE: ITabBar[] = [
  {
    label: "推荐",
    value: "1",
  },
  {
    label: "最新",
    value: "2",
  },
  {
    label: "热榜",
    value: "3",
  },
]
