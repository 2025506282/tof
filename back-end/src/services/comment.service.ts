/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-02 13:30:41
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-12-08 10:36:48
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
import { IComment, Comment, IForm, ICommentForm } from "../models";
import { rebuildParams } from "../utils";

// A post request should not contain an id.

export class CommentService {
  public async create(article: IComment): Promise<IComment> {
    const newComment = new Comment(article);
    const result = await newComment.save();
    return result as unknown as IComment;
    // return Comment.create(article);
  }
  public async getList(form: ICommentForm): Promise<IComment[]> {
    const { pageIndex = 1, pageSize = 20, articleId } = form;
    const newParams = rebuildParams({
      isDelete: false,
      articleId,
    });
    return Comment.find(newParams)
      .sort({ publishTime: -1 })
      .skip((pageIndex - 1) * pageSize)
      .limit(pageSize) as unknown as Promise<IComment[]>;
  }
}
