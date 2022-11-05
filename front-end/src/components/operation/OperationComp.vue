<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-08-19 14:30:34
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-01 10:13:38
 * @FilePath: \front-end\src\pages\healthy\components\trend.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <aside class="operation-box">
    <ul>
      <li>
        <like-filled />
        <div class="num-box">5</div>
      </li>
      <li>
        <message-filled />
        <div class="num-box">5</div>
      </li>
      <li>
        <star-filled />
        <div class="num-box">5</div>
      </li>
      <!-- <li><star-filled /></li> -->
    </ul>
  </aside>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { IArticle } from "./operation.interface"
import { MOCK_ARTICLE_LIST } from "./operation.const"
export default defineComponent({
  props: {
    articleList: {
      type: Object as PropType<IArticle[]>,
      default: () => MOCK_ARTICLE_LIST,
    },
  },
  //   setup(props: { article: IArticle }) {
  //     onMounted(() => {
  //       console.log("article:", props.article)
  //     })
  //     // return {
  //     //   test: article,
  //     // }
  //   },
})
</script>
<style lang="scss" scoped>
.operation-box {
  ul {
    list-style: none;
    li {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background-color: #fff;
      margin-bottom: 20px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      .num-box {
        position: absolute;
        top: -10px;
        right: -10px;
        height: 17px;
        border-radius: 30%;
        font-size: 11px;
        background-color: #c2c8d1;
        color: #fff;
      }
    }
  }
}
// #1e80ff
</style>
