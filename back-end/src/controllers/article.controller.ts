/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-11 13:34:11
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-11 13:44:28
 * @FilePath: \back-end\src\controllers\article.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-06-22 15:58:08
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-09-02 10:33:47
 * @FilePath: \back-end\src\controllers\user.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/users/usersController.ts
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
import { IRes, IArticle } from "../models";
import { ArticleService } from "../services/article.service";

@Route("articles")
export class ArticleController extends Controller {
  @Post()
  public async creatArticle(
    @Body() requestBody: IArticle
  ): Promise<IRes<boolean>> {
    return new ArticleService().create(requestBody);
  }
}
