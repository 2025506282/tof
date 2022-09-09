/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-09-06 10:25:24
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-09-07 09:45:40
 * @FilePath: \front-end\src\apis\test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// function add(...args) {
//     return args.reduce((a, b) => a + b);
// }
// function curry(fn) {
//     let newArr = [];
//     return function temp(...newArgs) {
//         if (newArgs.length) {
//             newArr = [
//                 ...newArr,
//                 ...newArgs
//             ]
//             return temp;
//         } else {
//             const val = fn.apply(this, newArr)
//             newArr = []
//             return val
//         }
//     }
// }
// let addCurry = curry(add)
function addCurry(...args) {
    let arr = [];
    if (args.length) {
        arr = [
            ...arr,
            ...args
        ]
    }
}
console.log(addCurry(1)(2)(3)(4, 5))  //15