<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-07-18 15:25:16
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-08 10:38:55
 * @FilePath: \front-end\src\pages\animate\WordPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="comment-box">
    <div class="comment-item" v-for="item in commentList" :key="item.id">
      <div class="comment-left">
        <div class="user-logo">
          <img :src="item.logoUrl" />
        </div>
        <div class="user-content">
          <h5>{{ item.username }}</h5>
          <p>{{ item.time }}</p>
          <div class="operation-box"></div>
        </div>
      </div>
      <div class="comment-right"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { COMMENT_LIST } from "./commentOperation.const"
export default defineComponent({
  setup() {
    return {
      commentList: COMMENT_LIST,
    }
  },
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
