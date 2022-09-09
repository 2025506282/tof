/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-09-05 10:03:04
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-09-05 10:25:05
 * @FilePath: \front-end\src\pages\file\utils\worker.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const hashWorker = () => {
  self.importScripts(`${location.origin}/spark-md5.min.js`)
  self.onmessage = (e) => {
    const { chunkList } = e.data
    const spark = new self.SparkMD5.ArrayBuffer()
    let percentage = 0
    let count = 0
    const loadNext = (index: number) => {
      const reader = new FileReader()
      reader.readAsArrayBuffer(chunkList[index].chunk)
      reader.onload = (event) => {
        if (!event || !event.target || !event.target.result) {
          alert("文件读取失败")
          return
        }
        count++
        spark.append(event.target.result)
        if (count === chunkList.length) {
          self.postMessage({
            percentage: 100,
            hash: spark.end(),
          })
          self.close()
        } else {
          percentage += 100 / chunkList.length
          self.postMessage({
            percentage,
          })
          loadNext(count)
        }
      }
    }
    loadNext(count)
  }
}
