<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-04 13:43:36
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-04 16:59:39
 * @FilePath: \front-end\src\pages\creator\center\components\nav\NavComp.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="overview-box">
    <ul>
      <li v-for="item in overviewList" :key="item.lable">
        <div>
          <h3>{{ item.lable }}</h3>
          <h2>{{ item.char }}</h2>
          <p>今日{{ item.increase }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue"
import { OVERVIEW_LIST } from "./overview.const"
import { useRoute } from "vue-router"
export default defineComponent({
  components: {},
  setup() {
    const selectedKeys = computed(() => {
      const route = useRoute()
      return [route.path]
    })
    return {
      overviewList: OVERVIEW_LIST,
    }
  },
})
</script>
<style lang="scss" scoped>
.overview-box {
  width: 100%;
  overflow: hidden;
  background: #fff;
  ul {
    list-style: none;
    display: flex;
    padding-top: 30px;
    padding-left: 0;
    li {
      width: 25%;
      height: 126px;
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 10px;
      & > div {
        border-radius: 5px;
        height: 100%;
        padding: 16px 20px;
        background: rgba(133, 144, 166, 0.05);
        h2,
        p,
        h3 {
          margin: 0;
        }
      }
    }
  }
}
</style>
