/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-06-22 16:16:29
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-15 16:45:05
 * @FilePath: \back-end\src\controllers\pdf.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/users/usersController.ts
import { Body, Controller, Post, Route, Request } from "tsoa";
import { IFile } from "../models";
import express from "express";

import { Inject } from "typescript-ioc";
import { ImageService } from "../services/image.service";
import { failResponse, IGolbalResponse, succesResponse } from "../utils";
@Route("image")
export class ImageController extends Controller {
  @Inject private imageService: ImageService;

  @Post("upload")
  public async uploadImage(
    @Request() req: express.Request
  ): Promise<IGolbalResponse<string>> {
    try {
      const result = await this.imageService.uploadImage(req);
      return succesResponse(result);
    } catch (err) {
      return failResponse("错误", err);
    }
  }
}
