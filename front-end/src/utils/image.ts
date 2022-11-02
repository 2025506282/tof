/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-02 10:24:15
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-02 15:02:29
 * @FilePath: \front-end\src\utils\image.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export function getBase64(img: Blob, callback: (base64Url: string) => void) {
  const reader = new FileReader()
  reader.addEventListener("load", () => callback(reader.result as string))
  reader.readAsDataURL(img)
}
export function getBase64Result(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}
