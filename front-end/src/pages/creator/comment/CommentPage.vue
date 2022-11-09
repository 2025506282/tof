<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-07-18 15:25:16
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-09 11:04:55
 * @FilePath: \front-end\src\pages\animate\WordPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="comment-box">
    <comment-comp></comment-comp>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
// import { MOCK_COMMENT_LIST } from "./comment.const"
export default defineComponent({
  // setup() {
  //   return {
  //     commentList: MOCK_COMMENT_LIST,
  //   }
  // },
})
</script>

<style lang="scss" scoped>
.comment-box {
  background-color: #fff;
  width: 1200px;
  margin: 20px auto;
  padding-bottom: 30px;
  .comment-item {
    display: flex;
  }
}
</style>
