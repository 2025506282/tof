/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-10-20 10:10:58
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-10-20 10:11:04
 * @FilePath: \front-end\src\utils\rem.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function setRem() {
  // 基准大小
  const baseSize = 16 //浏览器默认字体大小16px
  const baseScale = baseSize / 1920 // 针对PC端，1920的设计图。 移动端的对应调整为750或者375
  const widthScale = window.innerWidth // 当前窗口的宽度
  // const heightScale = window.innerHeight // 当前窗口的高度
  // 尺寸换算-根据宽高比率取最小缩放比-目前不考虑高度
  // const comparedHeight = (widthScale * 1080) / 1920
  // if (heightScale < comparedHeight) {
  //   widthScale = (heightScale * 1920) / 1080
  // }
  // 计算实际的rem值,得到该宽度下的相应font-size值,并赋予给html的font-size,
  const rem = widthScale * baseScale
  document.documentElement.style.fontSize = rem + "px"
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = () => {
  setRem()
}
