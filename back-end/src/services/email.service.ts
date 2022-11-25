/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-24 14:52:41
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-25 16:31:42
 * @FilePath: \back-end\src\services\email.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// src/users/usersService.ts
import { Email, IEmail, IFile } from "../models";
import path from "path";
import nodemailer from "nodemailer";
import fse from "fs-extra";
import multiparty from "multiparty";
import { Request } from "tsoa";
import express from "express";
import multer from "multer";
import { getServerIPAdress } from "../utils";
import { getRandomCode } from "../utils/number";
import { config } from "../config/default";

// A post request should not contain an id.
const UPLOAD_FILES_DIR = path.resolve(__dirname, "../public/images");
export class EmailService {
  private transporter;
  constructor() {
    this.transporter = nodemailer.createTransport(config.email.options);
  }
  public async sendMail(info: { email: string }): Promise<boolean> {
    let user = config.email.user; // 自己的邮箱
    let to = info.email; // 对方的邮箱
    const code = getRandomCode();
    let res = await this.transporter.sendMail({
      from: `${user}`, // sender address
      to: `${to}`, // list of receivers
      subject: "验证码 ", // Subject line
      text: `您的验证码是${code}`,
    });
    if (res && res.accepted) {
      const isExist = await Email.exists({ email: info.email });
      if (isExist) {
        const result = await Email.findOneAndUpdate(
          { email: info.email },
          { code: code }
        );
        return result;
      } else {
        return await Email.create({
          email: info.email,
          code: code,
        });
      }
    }

    console.table({
      res,
    });
    return res;

    // return Article.create(article);
  }
}
