<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-07-18 15:25:16
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-07 16:02:43
 * @FilePath: \front-end\src\pages\animate\WordPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <header-comp></header-comp>
  <div class="setting-box">
    <nav-comp class="nav"></nav-comp>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts">
import { IArticle, MOCK_ARTICLE_LIST } from "@/components"
import { defineComponent } from "vue"
import NavComp from "./components/nav/NavComp.vue"
// import * as THREE from "three"
interface IData {
  articleList: IArticle[]
}
export default defineComponent({
  data(): IData {
    return {
      articleList: MOCK_ARTICLE_LIST,
    }
  },
  components: {
    "nav-comp": NavComp,
  },
})
</script>

<style lang="scss" scoped>
.setting-box {
  background-color: #f4f5f5;
  width: 1200px;
  margin: 20px auto;
  min-height: 600px;
  height: 500px;
  padding-bottom: 30px;
  display: flex;
  .content {
    height: 100%;
    flex: 1;
    background-color: #fff;
    margin-left: 20px;
    h5 {
      font-weight: 700;
      color: #007fff;
      text-align: left;
      padding: 12px 12px;
      font-size: 16px;
      line-height: 40px;
      margin-bottom: 0;
    }
  }
}
</style>
