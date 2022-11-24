/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-06-22 15:58:08
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-24 15:23:29
 * @FilePath: \back-end\src\models\user.model.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface User {
  id: number;
  email: string;
  name: string;
  status?: "Happy" | "Sad";
  phoneNumbers: string[];
}
export interface IUser {
  email: string;
  code?: string;
  password?: string;
}

export interface IEmail {
  email: string;
}
