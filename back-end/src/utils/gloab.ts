/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-11 13:40:53
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-14 16:58:51
 * @FilePath: \back-end\src\utils\gloab.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
interface IRes<T> {
  code: number;
  msg: string;
  data: T;
}

export function succesResponse<T>(data: T): IRes<T> {
  return {
    code: 200,
    msg: "成功",
    data,
  };
}
export function failResponse(tips: string): IRes<string> {
  return {
    code: 500,
    msg: tips,
    data: "",
  };
}
export type IGolbalResponse<T> = IRes<T> | IRes<string>;
