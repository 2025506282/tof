/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-15 15:24:03
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-12-08 10:58:48
 * @FilePath: \back-end\src\controllers\article.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// /*
//  * @Author: sunji 2025506282@qq.com
//  * @Date: 2022-11-11 13:34:11
//  * @LastEditors: sunji 2025506282@qq.com
//  * @LastEditTime: 2022-11-14 17:15:37
//  * @FilePath: \back-end\src\controllers\article.controller.ts
//  * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
//  */
// /*
//  * @Author: sunji 2025506282@qq.com
//  * @Date: 2022-06-22 15:58:08
//  * @LastEditors: sunji 2025506282@qq.com
//  * @LastEditTime: 2022-09-02 10:33:47
//  * @FilePath: \back-end\src\controllers\user.controller.ts
//  * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
//  */
// // src/users/usersController.ts
import path from "path";
import { Path } from "tsoa";
import { Delete } from "tsoa";
import { Body, Controller, Post, Get, Route, Query } from "tsoa";
import { IForm, IComment } from "../models";
import { CommentService } from "../services/comment.service";
import { failResponse, IGolbalResponse, succesResponse } from "../utils";

@Route("comment")
export class CommentController extends Controller {
  @Post("upload")
  public async creatComment(
    @Body() requestBody: IComment
  ): Promise<IGolbalResponse<IComment>> {
    try {
      const result = await new CommentService().create(requestBody);
      return succesResponse(result);
    } catch (err) {
      return failResponse("失败", err);
    }
  }
  @Get("{articleId}")
  public async get(
    @Path() articleId: string,
    @Query() pageSize: number = 20,
    @Query() pageIndex: number = 1
  ): Promise<IGolbalResponse<IComment[]>> {
    try {
      const result = await new CommentService().getList({
        pageIndex,
        pageSize,
        articleId,
      });
      return succesResponse(result);
    } catch (err) {
      return failResponse("失败", err);
    }
  }
}
