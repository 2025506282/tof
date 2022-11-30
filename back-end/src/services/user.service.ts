/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-06-22 15:58:08
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-30 16:53:46
 * @FilePath: \back-end\src\services\user.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/users/usersService.ts
import { Inject } from "tsoa";
import { isConstructorDeclaration } from "typescript";
import { IUser, User } from "../models";
import { isExpire } from "../utils";
import { MessageService } from "./message.service";

export class UsersService {
  @Inject private messageService: MessageService;

  public async login(user: IUser): Promise<string | IUser> {
    if (user.code) {
      const result = await User.findOne({
        email: user.email,
        code: user.code,
      });
      if (!result) {
        return "验证码或邮箱错误";
      }
      if (result && !result.password) {
        await this.messageService.cretatePasswordMessage(result._id);
      }
      if (isExpire(result.updatedAt, new Date())) {
        return "验证码已过期";
      }
      return result;
    } else {
      const result = await User.findOne(
        { email: user.email },
        { password: user.password }
      );
      if (!result) {
        return "邮箱或密码错误";
      }
      if (isExpire(result.updatedAt, new Date())) {
        return "验证码已过期";
      }
      return result;
    }
  }
}
