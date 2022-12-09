/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-02 13:30:41
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-12-09 11:03:33
 * @FilePath: \back-end\src\services\article.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-09-26 09:59:14
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-14 17:15:50
 * @FilePath: \back-end\src\services\excel.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/users/usersService.ts
import { Inject } from "tsoa";
import { IMessage, Message, IForm } from "../models";
import { rebuildParams } from "../utils";

// A post request should not contain an id.

export class MessageService {
  public async getList(form: IForm): Promise<IMessage[]> {
    const { keyWord = "", pageIndex = 1, pageSize = 20, status } = form;
    const newParams = rebuildParams({
      status: status,
      isDelete: false,
    });
    return Message.find(newParams)
      .sort({ publishTime: -1 })
      .skip((pageIndex - 1) * pageSize)
      .limit(pageSize) as unknown as Promise<IMessage[]>;
  }
  public async create(message: IMessage): Promise<IMessage> {
    const result = Message.create(message);
    return result;
  }
  public async cretatePasswordMessage(userId: string): Promise<IMessage> {
    const findOne = Message.findOne({
      userId,
      type: "password",
    });
    if (!findOne) {
      const result = Message.create({
        userId,
        type: "password",
        content: `还没有设置密码，是否前往设置<a href="https://www.baidu.com"></a>`,
        isDelete: false,
      });
      return result;
    }
    return findOne;
  }
}
