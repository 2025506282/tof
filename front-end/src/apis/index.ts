/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-09-05 16:00:47
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-09-07 09:45:36
 * @FilePath: \front-end\src\apis\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export * from "./file"
export function f1(a: number) {
  const f2 = (b: number) => {
    const f3 = (c: number) => {
      return a + b + c
    }
    return f3
  }
  return f2
}
