/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-15 15:24:03
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-22 09:39:11
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
import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";
import { IForm, IArticle } from "../models";
import { ArticleService } from "../services/article.service";
import { failResponse, IGolbalResponse, succesResponse } from "../utils";

@Route("articles")
export class ArticleController extends Controller {
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
      return succesResponse(result);
    } catch (err) {
      return failResponse("失败", err);
    }
  }
  @Get("{articleId}")
  public async getArticle(
    @Path() articleId: string
  ): Promise<IGolbalResponse<IArticle | null>> {
    try {
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
