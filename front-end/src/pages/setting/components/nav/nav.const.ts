/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-04 09:29:35
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-08 09:29:41
 * @FilePath: \front-end\src\pages\creator\components\nav\nav.const.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { IItem } from "./nav.interface"
import {
  ProfileOutlined,
  SettingOutlined,
  BellOutlined,
  AudioMutedOutlined,
} from "@ant-design/icons-vue"
export const NAV: IItem[] = [
  {
    label: "个人资料",
    value: "/setting/profile",
    icon: ProfileOutlined,
  },
  {
    label: "账号设置",
    value: "/setting/account",
    icon: SettingOutlined,
  },
  {
    label: "消息设置",
    value: "/setting/message",
    icon: BellOutlined,
  },
  // {
  //   label: "屏蔽管理",
  //   value: "/setting/block",
  //   icon: AudioMutedOutlined,
  // },
]
export const OPEN_KEYS = NAV.map((ele) => ele.value)
