/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-09-02 14:26:30
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-09-05 10:03:20
 * @FilePath: \front-end\src\pages\file\utils\fileUtil.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const splitFile = (file: any, size = 10 * 1024 * 1024) => {
  const fileChunkList = []
  let curChunkIndex = 0
  while (curChunkIndex <= file.size) {
    const chunk = file.slice(curChunkIndex, curChunkIndex + size)
    fileChunkList.push({ chunk: chunk })
    curChunkIndex += size
  }
  return fileChunkList
}
export const getFileSuffix = (fileName: string) => {
  const arr = fileName.split(".")
  if (arr.length > 0) {
    return arr[arr.length - 1]
  }
  return ""
}
// export const calculateHash = (chunkList: any) => {
//   return new Promise((resolve) => {
//     const woker = new WorkerBuilder(hashWorker)
//     woker.postMessage({ chunkList: chunkList })
//     woker.onmessage = (e) => {
//       const { percentage, hash } = e.data
//     //   setHashPercentage(percentage)
//       if (hash) {
//         // 当hash计算完成时，执行resolve
//         resolve(hash)
//       }
//     }
//   })
// }
