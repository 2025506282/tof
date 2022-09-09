/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-09-02 15:02:11
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-09-05 10:02:55
 * @FilePath: \front-end\src\pages\file\utils\work.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default class WorkerBuilder extends Worker {
  constructor(worker) {
    const code = worker.toString();
    const blob = new Blob([`(${code})()`]);
    return new Worker(URL.createObjectURL(blob));
  }
}