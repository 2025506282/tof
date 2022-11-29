/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-06-22 16:16:29
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-29 14:52:39
 * @FilePath: \back-end\src\controllers\pdf.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/users/usersController.ts
import { Body, Controller, Post, Route, Request } from "tsoa";
import express from "express";

import { Inject } from "typescript-ioc";
import { failResponse, IGolbalResponse, succesResponse } from "../utils";
import { EmailService } from "../services/email.service";
@Route("email")
export class EmailController extends Controller {
  @Inject private emailService: EmailService;

  @Post("send")
  public async sendEmail(
    @Body() requestBody: { email: string }
  ): Promise<IGolbalResponse<any>> {
    try {
      const result = await this.emailService.sendMail(requestBody);
      return succesResponse(result);
    } catch (err) {
      return failResponse("错误22", err);
    }
  }
}
