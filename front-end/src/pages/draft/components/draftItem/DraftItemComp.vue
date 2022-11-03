<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-08-19 14:30:34
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-03 09:56:41
 * @FilePath: \front-end\src\pages\healthy\components\trend.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="draft-item">
    <h3><a href="">无标题</a></h3>
    <div>
      <span class="time">2022 年 10 月 20 日 15:03</span>

      <a-dropdown>
        <EllipsisOutlined style="font-size: 22px" />
        <template #overlay>
          <a-menu>
            <a-menu-item> 编辑 </a-menu-item>
            <a-menu-item> 删除 </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { EllipsisOutlined } from "@ant-design/icons-vue"
import { defineComponent, PropType } from "vue"
import { DEFAULT_VALUE, Time, Tab, TIME_LIST } from "./draftItem.const"
import { IITem } from "./draftItem.interface"
export default defineComponent({
  components: {
    EllipsisOutlined,
  },
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
.draft-item {
  padding: 24px 12px;
  height: 108px;
  box-sizing: border-box;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  h3 {
    text-align: left;
    font-size: 16px;
    font-weight: 700;
    line-height: 2;
    text-decoration: none;
    color: #333;
    overflow: hidden; //超出的文本隐藏
    text-overflow: ellipsis; //溢出用省略号显示
    white-space: nowrap; //溢出不换行
    word-break: break-all;
    a:hover {
      color: #007fff;
    }
  }
  & > div {
    display: flex;
    align-items: center;
    margin: 5px 0;
    font-size: 14px;
    color: #909090;
    cursor: default;

    .time {
      margin-right: 20px;
    }
  }
}
</style>
