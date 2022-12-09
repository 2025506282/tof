/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-06-22 15:58:08
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-12-08 15:01:01
 * @FilePath: \back-end\src\models\user.model.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { model, Schema } from "mongoose";
import { getServerIPAdress } from "../utils";

export interface IUser {
  _id?: string;
  email: string;
  isDelete?: boolean;
  code?: string;
  password?: string;
  logo?: string;
}

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      default: getServerIPAdress() + "/static/images/config/default.png",
    },
    isDelete: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
    },
    code: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Mongoose Model based on TUser for TypeScript.
 * https://mongoosejs.com/docs/models.html
 *
 * TUser
 * @param email:string
 * @param password:string
 * @param avatar:string
 */

export const User = model("User", userSchema);
