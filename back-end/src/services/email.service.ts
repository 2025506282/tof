/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-24 14:52:41
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-25 14:05:45
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
  private transporter;
  constructor() {
    // let pass = "qzvnksxnlegwcgff"; // qq邮箱授权码
    let user = "sj_2025506282@163.com"; // 自己的邮箱
    let pass = "KCPWSDIHVMGTGBSG"; // 163邮箱授权码
    this.transporter = nodemailer.createTransport({
      // host: "smtp.qq.com",
      // port: 587,
      // secure: false,
      host: "smtp.163.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: user, // 用户账号
        pass: pass, //授权码,通过QQ获取
      },
    });
  }
  public async sendMail(info: IEmail): Promise<boolean> {
    // // let pass = "qzvnksxnlegwcgff"; // qq邮箱授权码
    // let to = info.email; // 对方的邮箱
    // let transporter = nodemailer.createTransport({
    //   // host: "smtp.qq.com",
    //   // port: 587,
    //   // secure: false,
    //   host: "smtp.163.com",
    //   port: 465,
    //   secure: true, // true for 465, false for other ports
    //   auth: {
    //     user: user, // 用户账号
    //     pass: pass, //授权码,通过QQ获取
    //   },
    // });
    let user = "sj_2025506282@163.com"; // 自己的邮箱
    let to = info.email; // 对方的邮箱
    const code = getRandomCode();
    let result = await this.transporter.sendMail({
      from: `${user}`, // sender address
      to: `${to}`, // list of receivers
      subject: "验证码", // Subject line
      text: `您的验证码是${code}`,
    });
    console.table({
      result,
    });
    return result;

    // return Article.create(article);
  }
}
