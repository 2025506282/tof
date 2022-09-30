<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-08-19 14:30:34
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-09-30 16:06:00
 * @FilePath: \front-end\src\pages\healthy\components\trend.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="tab-bar">
    <div v-for="(item, index) in tabList" :key="item.value">
      {{ item.label }}{{ index }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { DEFAULT_VALUE } from "./tabBar.const"
import { ITabBar } from "./tabBar.interface"
export default defineComponent({
  props: {
    tabList: {
      type: Object as PropType<ITabBar[]>,
      default: () => DEFAULT_VALUE,
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
<style lang="scss" scope></style>
