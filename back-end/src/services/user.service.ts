/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-06-22 15:58:08
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-25 16:25:04
 * @FilePath: \back-end\src\services\user.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/users/usersService.ts
import { Email } from "../models";
import { IUser, User } from "../models/user.model";

export class UsersService {
  public async login(user: IUser): Promise<boolean> {
    const email = await Email.findOne({ email: user.email });
    console.log("email");

    const result = await Email.findOneAndUpdate(
      { email: user.email },
      { code: user.code }
    );
    return true;
  }
}
