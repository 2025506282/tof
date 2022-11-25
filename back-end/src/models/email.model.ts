/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-09-07 15:55:10
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-25 16:24:45
 * @FilePath: \back-end\src\models\file.model.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { model, Schema } from "mongoose";
export interface IEmail {
  email: string;
  code: string;
  updatedAt: string;
  createAt: string;
}
const emailSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
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

export const Email = model("Email", emailSchema);
