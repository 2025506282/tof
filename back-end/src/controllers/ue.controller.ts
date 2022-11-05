/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-06-22 16:16:29
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-09-20 15:54:06
 * @FilePath: \back-end\src\controllers\pdf.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/users/usersController.ts
import { Body, Controller, Post, Route, Request } from "tsoa";
import { IFile } from "../models";
import express from "express";

import { Inject } from "typescript-ioc";
import { FileService } from "../services/file.service";
@Route("ue")
export class UEController extends Controller {
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
  @Inject private fileService: FileService;

  @Post("upload")
  public async uploadFile(@Request() req: express.Request): Promise<boolean> {
    // const uploadPromise = limit(() => this.fileService.uploadFile(req));
    const result = await this.fileService.uploadFile(req);
    return true;
    // this.fileService.uploadFile(req);
    // return true;
  }
  @Post("merge")
  public async mergeFileChunk(@Body() requestBody: IFile): Promise<boolean> {
    const res = await this.fileService.createFile(requestBody);
    return res;
  }
}
