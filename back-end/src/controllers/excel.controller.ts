/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-06-22 16:16:29
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-09-26 10:27:22
 * @FilePath: \back-end\src\controllers\pdf.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/users/usersController.ts
import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
  UploadedFile,
} from "tsoa";
import { User } from "../models/user.model";
import { Powerpoint, Word } from "pdf-officegen";

@Route("excel")
export class ExcelController extends Controller {
  @Get("people")
  public async getPeople(): Promise<boolean> {
    return false;
  }
}
