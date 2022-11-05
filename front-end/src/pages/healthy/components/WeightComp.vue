<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-08-19 14:30:34
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-08-19 14:47:28
 * @FilePath: \front-end\src\pages\healthy\components\Weight.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="weight"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue"
import * as echarts from "echarts/core"
export default defineComponent({
  components: {},

  setup() {
    onMounted(() => {
      var chartDom = document.getElementById("weight")
      var myChart = echarts.init(chartDom as HTMLElement, "dark")
      var option = {
        backgroundColor: 'transparent',
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%",
        },
        series: [
          {
            name: "Pressure",
            type: "gauge",
            progress: {
              show: true,
            },
            detail: {
              valueAnimation: true,
              formatter: "{value}kg",
            },
            data: [
              {
                value: 80,
                name: "体重",
              },
            ],
          },
        ],
      }

      option && myChart.setOption(option)
    })
  }
})
</script>
<style lang="scss">
#weight {
  width: 400px;
  height: 400px;
}
</style>
