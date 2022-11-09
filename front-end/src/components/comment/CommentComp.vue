<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-07-18 15:25:16
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-09 11:24:37
 * @FilePath: \front-end\src\pages\animate\WordPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="comment-box">
    <div v-for="item in commentList" :key="item.id">
      <comment-item-comp :commnetItem="item"></comment-item-comp>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { COMMENT_LIST } from "./components"
import CommentItemComp from "./components/CommentItemComp.vue"
export default defineComponent({
  components: {
    "comment-item-comp": CommentItemComp,
  },
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
  padding: 20px;
}
</style>
