/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-11 13:49:29
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-25 16:37:03
 * @FilePath: \back-end\src\config\default.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// module.exports = {
// 	port: parseInt(process.env.PORT, 10) || 8001,
// 	dbConfig
// 	url: 'mongodb://localhost:27017/elm',
// 	session: {
// 		name: 'SID',
// 		secret: 'SID',
// 		cookie: {
// 			httpOnly: true,
// 	    secure:   false,
// 	    maxAge:   365 * 24 * 60 * 60 * 1000,
// 		}
// 	}
// }
export const config = {
  dbConfig: {
    url: "mongodb://localhost:27017/test",
  },
  email: {
    expires: 5 * 1000 * 60, // 5分钟
    user: "sj_2025506282@163.com",
    pass: "KCPWSDIHVMGTGBSG", // // 163邮箱授权码
    options: {
      host: "smtp.163.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "sj_2025506282@163.com", // 用户账号
        pass: "KCPWSDIHVMGTGBSG", //授权码,通过QQ获取
      },
    },
  },
};
