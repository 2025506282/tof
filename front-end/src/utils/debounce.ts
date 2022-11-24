/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-23 10:59:40
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-23 11:17:17
 * @FilePath: \back-end\src\utils\debounce.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 防抖函数
 * @param func 执行函数
 * @param delay 延迟时间 ms
 * @param immediate 是否立即执行
 */
export const debounce = function (
  // eslint-disable-next-line @typescript-eslint/ban-types
  func: Function,
  delay: number,
  immediate = false,
  // eslint-disable-next-line @typescript-eslint/ban-types
): Function {
  let timer: any

  return function (this: unknown, ...args: any[]) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this
    if (immediate) {
      func.apply(that, args) // 确保引用函数的指向正确，并且函数的参数也不变
      immediate = false
      return
    }
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(that, args)
    }, delay)
  }
}
export function debounce2(fn: (...arg: any[]) => any, duration = 300) {
  let timer = -1
  return function (this: unknown, ...args: any[]) {
    if (timer > -1) {
      clearTimeout(timer)
    }
    timer = window.setTimeout(() => {
      fn.bind(this)(...args)
      timer = -1
    }, duration)
  }
}
