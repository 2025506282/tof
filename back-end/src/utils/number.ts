/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-24 15:17:48
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-24 15:17:53
 * @FilePath: \back-end\src\utils\number.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export function getRandomCode() {
  let newarr = "";
  let arr = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  for (var i = 0; i < 4; i++) {
    //获取随机的下标。
    var index = getrandom(0, 35);
    newarr += arr[index];
  }
  return newarr;
}
// 生成随机数的函数
function getrandom(n: number, m: number) {
  return Math.floor(Math.random() * (m + 1 - n) + n);
}
