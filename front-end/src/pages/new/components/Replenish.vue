<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-08-19 14:30:34
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-10-26 11:05:24
 * @FilePath: \front-end\src\pages\healthy\components\trend.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="box">
    <h3>更新文章</h3>
    <div>
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
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
          <a-input v-model:value="formState.type" />
        </a-form-item>

        <a-form-item
          label="添加标签"
          name="tags"
          :rules="[{ required: true, message: '请选择标签!' }]"
        >
          <a-input-password v-model:value="formState.tags" />
        </a-form-item>

        <a-form-item label="文章封面" name="cover">
          <a-input-password v-model:value="formState.cover" />
        </a-form-item>
        <a-form-item
          label="编辑摘要"
          name="abstract"
          :rules="[{ required: true, message: '请旋转标签' }]"
        >
          <a-input-password v-model:value="formState.tags" />
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">确定并更新</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, defineProps, onMounted } from "vue"

import * as echarts from "echarts/core"
import { IForm } from "./replenish.interface"
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
      type: "string",
      tags: [""],
      cover: "string",
      abstract: "string",
    })
    const onFinish = (values: any) => {
      console.log("Success:", values)
    }

    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo)
    }
    return {
      formState,
      onFinish,
      onFinishFailed,
    }
  },
})
</script>
<style lang="scss">
#trend {
  width: 400px;
  height: 400px;
}
</style>
