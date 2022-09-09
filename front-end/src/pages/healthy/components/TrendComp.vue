<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-08-19 14:30:34
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-08-29 10:31:00
 * @FilePath: \front-end\src\pages\healthy\components\trend.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="trend"></div>
</template>

<script lang="ts">
interface DataItem {
  name: string;
  value: [string, number];
}
import { defineComponent, onMounted } from "vue"
import * as echarts from "echarts/core"
export default defineComponent({
  components: {},

  setup() {

    onMounted(() => {
      var chartDom = document.getElementById("trend")
      var myChart = echarts.init(chartDom as HTMLElement, "dark")
      var option;

      option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
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
