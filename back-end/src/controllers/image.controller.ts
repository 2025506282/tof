/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-06-22 16:16:29
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-15 15:26:21
 * @FilePath: \back-end\src\controllers\pdf.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/users/usersController.ts
import { Body, Controller, Post, Route, Request } from "tsoa";
import { IFile } from "../models";
import express from "express";

import { Inject } from "typescript-ioc";
import { ImageService } from "../services/image.service";
@Route("image")
export class ImageController extends Controller {
  // @Post("upload")
  // public async uploadFile(
  //   @FormField() hash: string,
  //   @UploadedFile() file: Express.Multer.File
  // ): Promise<boolean> {
  //   const chunksDir = path.resolve(UPLOAD_FILES_DIR, hash.split("_")[0]);
  //   console.log("chunksDir file::", chunksDir, file);
  //   if (!fse.existsSync(chunksDir)) {
  //     await fse.mkdirs(chunksDir);
  //   }
  //   await fse.move(file.path, chunksDir + "/" + hash);
  //   return true;
  // }
  @Inject private imageService: ImageService;

  @Post("upload")
  public async uploadImage(@Request() req: express.Request): Promise<any> {
    // const uploadPromise = limit(() => this.fileService.uploadFile(req));
    const result = await this.imageService.uploadImage(req);
    return {
      code: 200,
      data: result,
    };
    // this.fileService.uploadFile(req);
    // return true;
  }
}
