<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-07-18 15:25:16
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-09-30 16:48:33
 * @FilePath: \front-end\src\pages\animate\WordPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="box">
    <edit-comp></edit-comp>
    <!-- <canvas id="three"></canvas> -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
// import * as THREE from "three"
interface IData {
  str: string
}
export default defineComponent({
  data(): IData {
    return {
      str: "大家好，我是阿吉，这是我减肥的第三周，接下来让我们看看具体的数据分析吧",
    }
  },
  methods: {},
  mounted() {
    //
  },
  destory() {
    //
  },
})
</script>

<style lang="scss" scoped></style>
