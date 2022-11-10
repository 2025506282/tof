/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-09-16 13:34:34
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-10 17:04:43
 * @FilePath: \back-end\src\services\file.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/users/usersService.ts
import { IFile } from "../models";
import path from "path";
import fse from "fs-extra";
import multiparty from "multiparty";
import { Request } from "tsoa";
import express from "express";
import multer from "multer";
import { getServerIPAdress } from "../utils";

// A post request should not contain an id.
const UPLOAD_FILES_DIR = path.resolve(__dirname, "../public/images");
export class ImageService {
  public async uploadImage(@Request() req: express.Request): Promise<string> {
    let fileName = "";
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, UPLOAD_FILES_DIR);
      },
      filename: function (req, file, cb) {
        fileName = Date.now() + "-" + file.originalname;
        cb(null, fileName);
      },
    });
    const multerSingle = multer({ storage: storage }).single("file");
    return new Promise((resolve, reject) => {
      multerSingle(
        req,
        undefined as unknown as express.Response,
        async (error) => {
          if (error) {
            reject(error);
          }
          resolve(`${getServerIPAdress()}/static/images/${fileName}`);
        }
      );
    });
  }
}
