/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-08 09:52:21
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-09 11:29:36
 * @FilePath: \front-end\src\pages\creator\comment\comment.const.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { IComment } from "./comment.interface"

export const COMMENT_LIST: IComment[] = [
  {
    parentId: "0",
    id: "1",
    logoUrl: "string",
    username: "灵灵招",
    time: "10分钟前",
    content: "string",
    message: "有需要投递简历的吗",
    agreeNum: 1,
    disAgreeNum: 2,
    loveNum: 1,
    children: [
      {
        parentId: "1",
        id: "2",
        logoUrl: "string2",
        username: "灵灵招2",
        time: "10分钟前2",
        content: "string2",
        message: "有需要投递简历的吗2",
        agreeNum: 1,
        disAgreeNum: 2,
        loveNum: 1,
      },
      {
        parentId: "1",
        id: "22",
        logoUrl: "string2",
        username: "灵灵招2",
        time: "10分钟前2",
        content: "string2",
        message: "有需要投递简历的吗2",
        agreeNum: 1,
        disAgreeNum: 2,
        loveNum: 1,
      },
    ],
  },
]
