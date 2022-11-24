/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-23 10:59:40
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-23 13:19:00
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
  func: Function,
  delay: number,
  immediate: boolean = false
): Function {
  let timer: any;

  return function (...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(args);
    }, delay);
  };
};
