<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-08-19 14:30:34
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-09-22 13:38:18
 * @FilePath: \front-end\src\pages\healthy\components\trend.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="trend"></div>
</template>

<script lang="ts">
interface IChart {
  chartData: {
    x: string[],
    y: number[]
  }
}
import { defineComponent, defineProps, onMounted } from "vue"
import * as echarts from "echarts/core"
// defineProps({
//   chartData: IChart
// })
export default defineComponent({
  components: {},
  props: ['chartData'],
  setup(props: IChart) {
    const { x = [], y = [] } = props?.chartData || {};
    console.log(' props : ', props, x, y)
    onMounted(() => {
      var chartDom = document.getElementById("trend")
      var myChart = echarts.init(chartDom as HTMLElement, "dark")
      var option;

      option = {
        animationDuration: 3000,
        xAxis: {
          type: 'category',
          data: x
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: y,
            type: 'line',
            smooth: true
          }
        ]
      };

      option && myChart.setOption(option)
    })
  }
})
</script>
<style lang="scss">
#trend {
  width: 400px;
  height: 400px;
}
</style>
