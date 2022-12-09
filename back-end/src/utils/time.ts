/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-25 16:26:57
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-12-09 13:33:27
 * @FilePath: \back-end\src\utils\time.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const time = [
  "2022-08-20 15:19:00",
  "2022-08-20 13:19:00",
  "2022-08-20 16:19:22",
]; //比较两个时间相差的小时
import { fa } from "element-plus/lib/locale";
import { config } from "../config/default";
export function isExpire(
  time1: Date | string,
  time2: Date | string,
  expires = config.email.expires
) {
  //转换为Date
  let date1: Date = typeof time1 === "object" ? time1 : new Date(time1);
  let date2: Date = typeof time2 === "object" ? time2 : new Date(time2);

  let diff: number = date2.getTime() - date1.getTime(); //如果为负数，。则转为正数
  if (diff < expires) {
    return false;
  }
  return true;
}
