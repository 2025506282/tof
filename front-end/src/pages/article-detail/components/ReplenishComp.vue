<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-08-19 14:30:34
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-10-28 10:45:14
 * @FilePath: \front-end\src\pages\healthy\components\trend.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="replenish-box">
    <!-- <h3>更新文章</h3> -->
    <div>
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="分类"
          name="type"
          :rules="[{ required: true, message: '请选择分类!' }]"
        >
          <!-- <a-input v-model:value="formState.type" /> -->
          <a-radio-group v-model:value="formState.type">
            <a-radio-button
              :value="item.value"
              v-for="item in typeList"
              :key="item.value"
              >{{ item.label }}</a-radio-button
            >
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="添加标签"
          name="tags"
          :rules="[{ required: true, message: '请选择标签!' }]"
        >
          <a-input v-model:value="formState.tags" />
        </a-form-item>

        <a-form-item label="文章封面" name="cover">
          <a-input v-model:value="formState.cover" />
        </a-form-item>
        <a-form-item
          label="编辑摘要"
          name="abstract"
          :rules="[{ required: true, message: '请旋转标签' }]"
        >
          <a-input v-model:value="formState.tags" />
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">确定并更新</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"

import * as echarts from "echarts/core"
import { IForm } from "./replenish.interface"
import { TYPE_LIST } from "./replenish.const"
// defineProps({
//   chartData: IChart
// })
export default defineComponent({
  components: {},
  props: ["chartData"],
  //   setup(props: IChart) {
  //     const { x = [], y = [] } = props?.chartData || {}
  //     console.log(" props : ", props, x, y)
  //     onMounted(() => {
  //       var chartDom = document.getElementById("trend")
  //       var myChart = echarts.init(chartDom as HTMLElement, "dark")
  //       var option

  //       option = {
  //         animationDuration: 3000,
  //         xAxis: {
  //           type: "category",
  //           data: x,
  //         },
  //         yAxis: {
  //           type: "value",
  //         },
  //         series: [
  //           {
  //             data: y,
  //             type: "line",
  //             smooth: true,
  //           },
  //         ],
  //       }

  //       option && myChart.setOption(option)
  //     })
  //   },
  setup() {
    const formState = reactive<IForm>({
      type: "",
      tags: [""],
      cover: "",
      abstract: "",
    })
    const onFinish = (values: any) => {
      console.log("Success:", values)
    }

    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo)
    }
    return {
      typeList: TYPE_LIST,
      formState,
      onFinish,
      onFinishFailed,
    }
  },
})
</script>
<style lang="scss">
.replenish-box {
  width: 530px;
  white-space: nowrap;
  color: #909090;
  // background-color: #fff;
  // border: 1px solid #ddd;
  border-radius: 2px;
  // -webkit-box-shadow: 0 1px 2px #f1f1f1;
  // box-shadow: 0 1px 2px #f1f1f1;
  cursor: default;
  .ant-radio-group {
    white-space: pre-wrap;
  }

  .ant-radio-group {
    label {
      margin-right: 10px;
      margin-bottom: 10px;
      width: 88px;
      height: 28px;
      padding: 0;
      line-height: 28px;
      text-align: center;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
