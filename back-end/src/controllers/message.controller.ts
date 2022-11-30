/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-06-22 16:16:29
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-30 14:37:20
 * @FilePath: \back-end\src\controllers\pdf.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/users/usersController.ts
import { Body, Controller, Post, Route, Request } from "tsoa";

import { Inject } from "typescript-ioc";
import { failResponse, IGolbalResponse, succesResponse } from "../utils";
import { MessageService } from "../services/message.service";
import { IForm, IMessage } from "../models";
import { Get, Query } from "tsoa";
@Route("message")
export class MessageController extends Controller {
  @Inject private messageService: MessageService;

  @Get("list")
  public async sendMessage(
    @Query() keyWord?: string,
    @Query() pageSize?: number,
    @Query() pageIndex?: number,
    @Query() status?: number
  ): Promise<IGolbalResponse<IMessage[]>> {
    try {
      const result = await this.messageService.getList({
        keyWord,
        pageIndex,
        pageSize,
        status,
      });
      return succesResponse(result);
    } catch (err) {
      return failResponse("错误", err);
    }
  }
}
