/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-06-22 15:58:08
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-25 15:30:38
 * @FilePath: \back-end\src\controllers\user.controller.ts
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
} from "tsoa";
import { IUser, User } from "../models/user.model";
import { UsersService } from "../services/user.service";
import { failResponse, IGolbalResponse, succesResponse } from "../utils";

@Route("users")
export class UsersController extends Controller {
  @Post("login")
  public async createUser(
    @Body() requestBody: IUser
  ): Promise<IGolbalResponse<boolean>> {
    try {
      const result = await new UsersService().login(requestBody);
      return succesResponse(result);
    } catch (err) {
      return failResponse("失败", err);
    }
  }
}
