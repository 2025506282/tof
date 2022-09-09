/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-06-22 16:16:29
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-09-07 16:01:57
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
import { writeFile } from "node:fs";
import { IFile } from "../models";
import path from "path";
import fse from "fs-extra";
const UPLOAD_FILES_DIR = path.resolve(__dirname, "./filelist");
const pipeStream = (path: string, writeStream: string) =>
  new Promise<void>((resolve) => {
    const readStream = fse.createReadStream(path);
    readStream.on("end", () => {
      fse.unlinkSync(path);
      resolve();
    });
    readStream.pipe(writeStream);
  });

const mergeFileChunk = async (
  filePath: string,
  fileHash: string,
  size: number
) => {
  const chunksDir = path.resolve(UPLOAD_FILES_DIR, fileHash);
  const chunkPaths = await fse.readdir(chunksDir);
  chunkPaths.sort(
    (a: string, b: string) => Number(a.split("-")[1]) - Number(b.split("-")[1])
  );
  console.log("指定位置创建可写流", filePath);
  await Promise.all(
    chunkPaths.map((chunkPath: string, index: number) =>
      pipeStream(
        path.resolve(chunksDir, chunkPath),
        // 指定位置创建可写流
        fse.createWriteStream(filePath, {
          start: index * size,
          end: (index + 1) * size,
        })
      )
    )
  );
  // 合并后删除保存切片的目录
  fse.rmdirSync(chunksDir);
};

@Route("ue")
export class UEController extends Controller {
  @Post("upload")
  public async createUe(@UploadedFile() file: any): Promise<boolean> {
    console.log("fil234e:", file, writeFile);
    writeFile("test2.zip", file.buffer, (err) => {
      if (err) {
        console.log("err:", err);
      }
      console.log("The file has been saved!");
    });
    return false;
  }
  @Post("merge")
  public async merge(form: IFile): Promise<boolean> {
    console.log("fil234e:", file, writeFile);
    writeFile("test2.zip", file.buffer, (err) => {
      if (err) {
        console.log("err:", err);
      }
      console.log("The file has been saved!");
    });
    return false;
  }
}
