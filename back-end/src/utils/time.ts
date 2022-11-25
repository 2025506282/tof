/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-25 16:26:57
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-25 16:36:23
 * @FilePath: \back-end\src\utils\time.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const time = [
  "2022-08-20 15:19:00",
  "2022-08-20 13:19:00",
  "2022-08-20 16:19:22",
]; //比较两个时间相差的小时
import { config } from "../config/default";
export function compareTime(
  time1: string,
  time2: string,
  expires = config.email.expires
) {
  //转换为Date
  let date1: Date = new Date(time1);
  let date2: Date = new Date(time2);
  console.log(date1);
  console.log(date2); //计算时间差的毫秒数
  let diff: number = date2.getTime() - date1.getTime(); //如果为负数，。则转为正数
  if (diff < 0) {
    diff = -diff;
  } //计算出相差小时
  let hours: number = Math.floor(diff / 3600000);
  return hours;
}
