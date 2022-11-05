<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-07-18 15:25:16
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-04 10:47:45
 * @FilePath: \front-end\src\pages\animate\WordPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <header-comp></header-comp>
  <div class="creator-box" @scroll="onScroll">
    <nav-comp></nav-comp>
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
  methods: {
    onScroll(event: any) {
      const { scrollTop, clientHeight, scrollHeight } = event.target
      // 当离底部还有200px，加载新的列表
      if (scrollTop + clientHeight + 200 > scrollHeight) {
        this.articleList = [...this.articleList, ...MOCK_ARTICLE_LIST]
      }
      console.log("scrollTop:", scrollTop, clientHeight, scrollHeight)
    },
  },
  mounted() {
    //
  },
  destory() {
    //
  },
})
</script>

<style lang="scss" scoped>
.creator-box {
  background-color: #f4f5f5;
  width: 1200px;
  margin: 20px auto;
  padding-bottom: 30px;
  .content {
    flex: 1;
    background-color: #fff;
    margin-left: 260px;
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
