/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-09-07 15:55:10
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-24 15:30:46
 * @FilePath: \back-end\src\models\file.model.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { fa } from "element-plus/es/locale";
import { Document, model, Schema } from "mongoose";
export interface IArticle {
  _id?: string;
  status?: number;
  publishTime?: number;
  title?: string; // 文章标题
  type?: string; // 文章类型
  tags?: string[]; // 文章标签
  cover?: string; // 文章封面
  abstract?: string; // 文章摘要
  content?: string; // 文章内容
  collectNum?: number;
  commentNum?: number;
  watchNum?: number;
  likeNum?: number;
}

const articleSchema = new Schema({
  nickName: {
    type: String,
    default: "无名氏",
  },
  publishTime: {
    type: Number,
    default: Date.now(),
  },
  commentNum: {
    type: Number,
    default: 0,
  },
  isDelete: {
    type: Boolean,
    default: false,
  },
  watchNum: {
    type: Number,
    default: 0,
  },
  likeNum: {
    type: Number,
    default: 0,
  },
  collectNum: {
    type: Number,
    default: 0,
  },
  moneyNumber: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    default: "无标题",
  },
  type: {
    type: String,
  },
  status: {
    type: Number,
    default: 1,
  },
  tags: {
    type: Array,
    default: [],
  },
  cover: {
    type: String,
  },
  abstract: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
});

/**
 * Mongoose Model based on TUser for TypeScript.
 * https://mongoosejs.com/docs/models.html
 *
 * TUser
 * @param email:string
 * @param password:string
 * @param avatar:string
 */

export const Article = model("Article", articleSchema);
