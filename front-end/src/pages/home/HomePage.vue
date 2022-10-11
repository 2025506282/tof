<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-07-18 15:25:16
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-10-11 15:24:23
 * @FilePath: \front-end\src\pages\animate\WordPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="home" @scroll="onScroll">
    <header-comp></header-comp>
    <div class="content">
      <tab-bar-comp></tab-bar-comp>
      <card-comp :articleList="articleList"></card-comp>
    </div>
  </div>
</template>
<script lang="ts">
import { IArticle, MOCK_ARTICLE_LIST } from "@/components"
import { defineComponent } from "vue"
import TabBarComp from "./components/tabBar/TabBarComp.vue"
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
    "tab-bar-comp": TabBarComp,
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
.home {
  background-color: #f4f5f5;
  height: 100%;

  overflow-y: scroll;
  .content {
    width: 960px;
    margin: 10px auto 0;
  }
}
</style>
