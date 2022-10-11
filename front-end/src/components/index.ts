/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-09-30 13:25:19
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-10-11 14:31:48
 * @FilePath: \front-end\src\components\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import CardComp from "./articleCard/ArticleCardComp.vue"
import EditComp from "./edit/EditComp.vue"
import UserNavBarComp from "./userNavBar/UserNavBarComp.vue"
import HeaderComp from "./header/HeaderComp.vue"
import TagComp from "./tag/TagComp.vue"
export default {
  install(app: any) {
    // 此处形参为main.js文件中use()方法自动传进来的Vue实例
    app.component("card-comp", CardComp)
    app.component("edit-comp", EditComp)
    app.component("user-nav-bar-comp", UserNavBarComp)
    app.component("header-comp", HeaderComp)
    app.component("tag-comp", TagComp)
  },
}
export * from "./articleCard"
