<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-08-19 14:30:34
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-10-11 14:41:23
 * @FilePath: \front-end\src\pages\healthy\components\trend.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="tab-bar">
    <div
      v-for="(item, index) in tabList"
      :key="item.value"
      @click="() => handleClickTab(item)"
    >
      <a-divider type="vertical" v-if="index > 0" />
      <div class="tab-item" :class="item.value === currentTab && 'active'">
        <span> {{ item.label }}</span>
      </div>
    </div>
    <a-select
      v-if="isHot"
      class="time-select"
      ref="select"
      v-model:value="time"
      @change="handleChange"
      size="small"
    >
      <a-select-option v-for="item in timeList" :key="item.value">{{
        item.label
      }}</a-select-option>
    </a-select>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { DEFAULT_VALUE, Time, Tab, TIME_LIST } from "./tabBar.const"
import { IITem } from "./tabBar.interface"
export default defineComponent({
  props: {
    tabList: {
      type: Object as PropType<IITem[]>,
      default: () => DEFAULT_VALUE,
    },
  },
  computed: {
    isHot: function (): boolean {
      return this.currentTab === Tab.Hot
    },
  },
  methods: {
    handleChange: function (value: string) {
      console.log("value:", value)
    },
    handleClickTab: function (item: IITem) {
      this.currentTab = item.value as Tab
    },
  },
  data() {
    return {
      currentTab: Tab.Recommend,
      time: Time.Three,
      timeList: TIME_LIST,
    }
  },
})
</script>
<style lang="scss" scoped>
.tab-bar {
  background: #fff;
  display: flex;
  padding: 10px 20px;
  overflow: hidden;
  .time-select {
    width: 84px;
    height: 21px;
    margin: 0;
    padding: 0;
    margin-left: 20px;
    font-size: 12px;
    color: #909097;
    overflow: hidden;
    .ant-select-selector {
      padding: 0;
      height: 21px;
    }
    .ant-select-single.ant-select-sm:not(.ant-select-customize-input)
      .ant-select-selector {
      padding: 0;
    }
  }
  & > div {
    display: flex;
    align-items: center;
    .ant-divider-vertical {
      margin: 0 15px;
      height: 80%;
    }
  }

  .tab-item {
    text-decoration: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #909090;
    font-size: 14px;

    &:hover {
      color: #007fff;
    }
  }
  .active {
    color: #007fff;
  }
  border-bottom: 1px solid #e5e6eb;
}
</style>
