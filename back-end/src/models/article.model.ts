/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-09-07 15:55:10
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-15 15:31:17
 * @FilePath: \back-end\src\models\file.model.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import { Document, model, Schema } from "mongoose";
export interface IArticle {
  title: string; // 文章标题
  type: string; // 文章类型
  tags: string[]; // 文章标签
  cover?: string; // 文章封面
  abstract: string; // 文章摘要
  content: string; // 文章内容
}

// const articleSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   type: {
//     type: String,
//     required: true,
//   },
//   tags: {
//     type: Array<String>,
//     required: true,
//   },
//   cover: {
//     type: String,
//   },
//   abstract: {
//     type: String,
//     required: true,
//   },
//   content: {
//     type: String,
//     required: true,
//   },
// });

// /**
//  * Mongoose Model based on TUser for TypeScript.
//  * https://mongoosejs.com/docs/models.html
//  *
//  * TUser
//  * @param email:string
//  * @param password:string
//  * @param avatar:string
//  */

// export const Article = model<IArticle>("Article", articleSchema);
