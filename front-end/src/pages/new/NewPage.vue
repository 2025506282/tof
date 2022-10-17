<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-08-19 14:10:43
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-10-11 16:48:47
 * @FilePath: \front-end\src\pages\healthy\HealthyPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="healthy-box">
    <header>
      <a-input
        v-model:value="title"
        placeholder="请输入文章标题"
        :bordered="false"
        maxlength="100"
      />
      <div class="operation-box">
        <ul>
          <li><p>文章将自动保存至草稿箱</p></li>
          <li><a-button>草稿箱</a-button></li>
          <li><a-button type="primary">发布</a-button></li>
          <li><user-nav-bar-comp /></li>
        </ul>
      </div>
    </header>
    <main>
      <edit-comp />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  components: {},
  setup() {
    const title = ref("")
    return {
      title,
    }
  },
})
</script>
<style lang="scss" scoped>
.healthy-box {
  width: 100%;
  height: 100%;
  header {
    width: 100%;
    display: flex;
    height: 64px;
    justify-content: space-between;
    color: #c9cdd4;
    font-size: 14px;
    input {
      font-size: 24px;
    }
    input::placeholder {
      font-size: 24px;
    }
    ul {
      list-style: none;
      display: flex;
      align-items: center;
      padding-right: 20px;
      margin: 0;
      li {
        margin: 0 10px;
      }
    }
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
