<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-08-19 14:30:34
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-10-11 14:51:15
 * @FilePath: \front-end\src\pages\healthy\components\trend.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <nav class="nav">
    <div class="content">
      <div class="tag-list">
        <div v-for="tag in tagList" :key="tag.value">
          <a-tag-item @click="$emit('handleClickTag', tag)" class="tag-item">
            <span>{{ tag.label }}</span>
          </a-tag-item>
        </div>
      </div>
      <div class="tag-operation">
        <a-tag-item class="tag-item">标签管理</a-tag-item>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { DEFAULT_VALUE } from "./tag.const"
import { IITem } from "./tag.interface"
export default defineComponent({
  props: {
    tagList: {
      type: Object as PropType<IITem[]>,
      default: () => DEFAULT_VALUE,
    },
  },
  // setup() {
  //   const handleClickMenu = (item: IITem): void => {
  //     this.$emit()
  //   }
  //   return {
  //     handleClickMenu,
  //   }
  // },
})
</script>
<style lang="scss" scoped>
.nav {
  background: #fff;
  padding: 0;
  .content {
    width: 960px;
    margin: 0 auto;
    background: #fff;
    display: flex;
    justify-content: space-between;
    height: 45px;
    align-items: center;
  }
  .tag-list {
    display: flex;
    height: 100%;
    align-items: center;
  }
  .tag-item {
    margin-right: 20px;
    cursor: pointer;
    font-size: 14px;
    color: #71777c;
    &:hover {
      color: #007fff;
    }
  }
}
</style>
