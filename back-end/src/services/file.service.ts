/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-09-16 13:34:34
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-09-20 15:33:47
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
const pipeStream = (path: string, writeStream: any) =>
  new Promise<void>((resolve) => {
    // console.log("pipeStream:", path, writeStream);
    const readStream = fse.createReadStream(path);
    readStream.on("end", () => {
      fse.unlinkSync(path);
      resolve();
    });
    readStream.pipe(writeStream);
  });
// A post request should not contain an id.
const UPLOAD_FILES_DIR = path.resolve(__dirname, "./filelist");
export class FileService {
  public async createFile(file: IFile): Promise<boolean> {
    const { fileHash, size, suffix } = file;
    try {
      const filePath = path.resolve(UPLOAD_FILES_DIR, fileHash + `.${suffix}`);
      const chunksDir = path.resolve(UPLOAD_FILES_DIR, fileHash);
      const chunkPaths = await fse.readdir(chunksDir);
      chunkPaths.sort(
        (a: string, b: string) =>
          Number(a.split("___$")[1]) - Number(b.split("___$")[1])
      );
      if (!fse.existsSync(filePath)) {
        console.log(
          " --------------start------filePath----------------------",
          chunksDir,
          filePath
        );
        Promise.all(
          chunkPaths.map((chunkPath: string, index: number) =>
            pipeStream(
              path.resolve(chunksDir, chunkPath),
              // 指定位置创建可写流
              fse.createWriteStream(filePath, {
                start: index * size,
                // end: (index + 1) * size,
              })
            )
          )
        )
          .then((res) => {
            console.log("rmdirSync-----------:", chunksDir);
            fse.rmdirSync(chunksDir);
          })
          .catch((err) => {
            console.log("err----------------:", err);
          })
          .finally(() => {
            console.log("finally-------");
          });
      }
      return true;
    } catch (err) {
      console.log("err:", err);
      return false;
    }
  }
  public async uploadFile(@Request() req: express.Request): Promise<boolean> {
    const multipart = new multiparty.Form();
    multipart.parse(
      req,
      async (
        err: any,
        fields: { hash: [any]; suffix: [any] },
        files: { file: [any] }
      ) => {
        if (err) return;

        const [chunk] = files.file;
        const [hash] = fields.hash;
        // 注意这里的hash包含文件的hash和块的索引，所以需要使用split切分
        const chunksDir = path.resolve(UPLOAD_FILES_DIR, hash.split("___$")[0]);
        if (!fse.existsSync(chunksDir)) {
          await fse.mkdirs(chunksDir);
        }
        if (!fse.existsSync(chunksDir + "/" + hash)) {
          await fse.move(chunk.path, chunksDir + "/" + hash, {
            overwrite: true,
          });
        } else {
          return;
        }
      }
    );
    return true;
  }
}
