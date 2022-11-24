/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-24 14:52:41
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-24 15:29:25
 * @FilePath: \back-end\src\services\email.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// src/users/usersService.ts
import { IEmail, IFile } from "../models";
import path from "path";
import nodemailer from "nodemailer";
import fse from "fs-extra";
import multiparty from "multiparty";
import { Request } from "tsoa";
import express from "express";
import multer from "multer";
import { getServerIPAdress } from "../utils";
import { getRandomCode } from "../utils/number";

// A post request should not contain an id.
const UPLOAD_FILES_DIR = path.resolve(__dirname, "../public/images");
export class EmailService {
  public async sendMail(info: IEmail): Promise<void> {
    let user = "2025506282@qq.com"; // 自己的邮箱
    let pass = "vogofatciivgddde"; // qq邮箱授权码
    let to = info.email; // 对方的邮箱
    let transporter = nodemailer.createTransport({
      host: "smtp.qq.com",
      port: 587,
      secure: false,
      auth: {
        user: user, // 用户账号
        pass: pass, //授权码,通过QQ获取
      },
    });
    const code = getRandomCode();
    let result = await transporter.sendMail({
      from: `node发送邮箱<${user}>验证码`, // sender address
      to: `验证码<${to}>`, // list of receivers
      subject: "验证码", // Subject line
      text: code, // plain text body
    });
    return;

    // return Article.create(article);
  }
}
