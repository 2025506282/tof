/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-15 15:24:03
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-12-09 17:02:28
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
import { Delete } from "tsoa";
import { Body, Controller, Get, Path, Post, Query, Route, Request } from "tsoa";
import { IForm, IArticle } from "../models";
import { ArticleService } from "../services/article.service";
import { failResponse, IGolbalResponse, succesResponse } from "../utils";

@Route("articles")
export class ArticleController extends Controller {
  @Get("test")
  public async test(@Request() req: any): Promise<any> {
    const session = req.session;
    console.log("req.session:", session, session.cookie);
    if (req.session.user) {
      req.session.user = req.session.user + 1;
      return req.session.user + 1;
    } else {
      console.log("req.session:      111");
      req.session.user = 1;
      return req.session.user;
    }
  }
  @Post("upload")
  public async creatArticle(
    @Body() requestBody: IArticle
  ): Promise<IGolbalResponse<IArticle>> {
    try {
      const result = await new ArticleService().create(requestBody);
      return succesResponse(result);
    } catch (err) {
      return failResponse("失败", err);
    }
  }
  @Post("update")
  public async updateArticle(
    @Body() requestBody: IArticle
  ): Promise<IGolbalResponse<IArticle>> {
    try {
      const result = await new ArticleService().update(requestBody);
      return succesResponse(result);
    } catch (err) {
      return failResponse("失败", err);
    }
  }
  @Get("list")
  public async getList(
    @Request() req: any,
    @Query() keyWord: string,
    @Query() pageSize: number,
    @Query() pageIndex: number,
    @Query() status?: number
  ): Promise<IGolbalResponse<IArticle[]>> {
    try {
      const result = await new ArticleService().getList({
        keyWord,
        pageIndex,
        pageSize,
        status,
      });
      console.log("getList:", req.session);
      req.session.user = "123";
      return succesResponse(result);
    } catch (err) {
      return failResponse("失败", err);
    }
  }
  @Get("{articleId}")
  public async getArticle(
    @Request() req: any,
    @Path() articleId: string
  ): Promise<IGolbalResponse<IArticle | null>> {
    try {
      console.log("req.session.user:", req.session, req.session.user);
      const result = await new ArticleService().get(articleId);
      return succesResponse(result);
    } catch (err) {
      return failResponse("失败", err);
    }
  }
  @Delete("{articleId}")
  public async deleteArticle(
    @Path() articleId: string
  ): Promise<IGolbalResponse<boolean>> {
    try {
      const result = await new ArticleService().delete(articleId);
      return succesResponse(result);
    } catch (err) {
      return failResponse("失败", err);
    }
  }
}
