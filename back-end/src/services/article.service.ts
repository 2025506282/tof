/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-02 13:30:41
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-22 10:08:59
 * @FilePath: \back-end\src\services\article.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-09-26 09:59:14
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-14 17:15:50
 * @FilePath: \back-end\src\services\excel.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/users/usersService.ts
import { IArticle, Article, IForm } from "../models";
import { rebuildParams } from "../utils";

// A post request should not contain an id.

export class ArticleService {
  public async create(article: IArticle): Promise<IArticle> {
    const newArticle = new Article(article);
    const result = await newArticle.save();
    return article;
    // return Article.create(article);
  }
  public async update(article: IArticle): Promise<IArticle> {
    const result = await Article.findByIdAndUpdate(article._id, article);
    return article;
    // return Article.create(article);
  }
  public async getList(form: IForm): Promise<IArticle[]> {
    const { keyWord = "", pageIndex = 1, pageSize = 20, status } = form;
    const newParams = rebuildParams({
      status: status,
      isDelete: false,
    });
    console.log("---------------result---------------:", newParams);
    return Article.find(newParams)
      .sort({ publishTime: -1 })
      .skip((pageIndex - 1) * pageSize)
      .limit(pageSize) as unknown as Promise<IArticle[]>;
  }
  public async get(id: string): Promise<IArticle | null> {
    return Article.findById(id);
  }
  public async delete(id: string): Promise<boolean> {
    const result = await Article.findByIdAndUpdate(id, {
      isDelete: true,
    });
    return true;
  }
}
