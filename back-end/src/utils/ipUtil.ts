/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-10 17:02:12
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-10 17:02:28
 * @FilePath: \back-end\src\utils\ipUtil.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//获取本机ip地址
export function getServerIPAdress() {
  var interfaces = require("os").networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (
        alias.family === "IPv4" &&
        alias.address !== "127.0.0.1" &&
        !alias.internal
      ) {
        return `://${alias.address}:${process.env.PORT || 3000}`;
      }
    }
  }
}
