/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-09-07 15:55:10
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-30 16:51:06
 * @FilePath: \back-end\src\models\file.model.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { model, Schema } from "mongoose";
export interface IMessage {
  content: string;
  userId: string;
  type: string;
  isDelete: boolean;
  updatedAt: string;
  createAt: string;
}
const messageSchema = new Schema(
  {
    isDelete: {
      type: String,
      default: false,
    },
    content: {
      type: String,
      required: true,
    },
    userId: {
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

export const Message = model("Message", messageSchema);
