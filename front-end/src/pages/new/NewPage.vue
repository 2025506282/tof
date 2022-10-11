<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-08-19 14:10:43
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-10-11 16:05:46
 * @FilePath: \front-end\src\pages\healthy\HealthyPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="healthy-box">
    <header>
      <a-input
        v-model:value="title2"
        placeholder="请输入文章标题"
        style="width: 200px"
      />
      <div class="operation-box">
        <p>文章将自动保存至草稿箱</p>
        <a-button>草稿箱</a-button>
        <a-button type="primary">发布</a-button>
        <user-nav-bar-comp />
      </div>
    </header>
    <main>
      <!-- <edit-comp /> -->
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  components: {},
  setup() {
    return {
      title2: "123",
    }
  },
})
</script>
<style lang="scss" scoped>
.healthy-box {
  width: 100%;
  height: 100%;
  header {
    display: flex;
    .operation-box {
      display: flex;
      align-items: center;
      p {
        white-space: nowrap;
        margin: 0;
      }
    }
  }
}
</style>
