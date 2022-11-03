<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-07-18 15:25:16
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-03 13:40:54
 * @FilePath: \front-end\src\pages\animate\WordPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="creator-box">article</div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
// import * as THREE from "three"

export default defineComponent({})
</script>

<style lang="scss" scoped>
.creator-box {
  background-color: #f4f5f5;
  height: 100%;

  overflow-y: scroll;
  .content {
    width: 960px;
    margin: 10px auto 0;
    background-color: #fff;
    padding: 0 12px;
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
