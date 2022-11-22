<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-22 10:25:57
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-22 10:32:18
 * @FilePath: \front-end\src\components\empty\EmptyComp.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="empty-box">
    <a-empty :image="simpleImage" description="暂无数据" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { Empty } from "ant-design-vue"
export default defineComponent({
  setup() {
    return {
      simpleImage: Empty.PRESENTED_IMAGE_SIMPLE,
    }
  },
})
</script>
<style lang="scss" scoped>
.empty-box {
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
