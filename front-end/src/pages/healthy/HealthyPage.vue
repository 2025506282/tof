<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-08-19 14:10:43
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-09-22 13:24:18
 * @FilePath: \front-end\src\pages\healthy\HealthyPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="healthy-box">
    <header>
      <h3>健康状况一览</h3>
    </header>
    <main>
      <weight-comp></weight-comp>
      <trend-comp :chartData="trendChartData"></trend-comp>
    </main>
  </div>
</template>

<script lang="ts">
import { message, Upload } from "ant-design-vue"
import { defineComponent, ref } from "vue"

interface CustomFileItem {
  uid: string
  name?: string
  status?: string
  response?: string
  url?: string
  type?: string
}

interface FileInfo {
  file: CustomFileItem
  fileList: CustomFileItem[]
}
import networkConfig from "@/config/default/net.config"
import WeightComp from "./components/WeightComp.vue"
import TrendComp from "./components/TrendComp.vue"
import { MOCK_WEIGHT_CHARTS } from "./mock"
export default defineComponent({
  components: {
    "weight-comp": WeightComp,
    "trend-comp": TrendComp,
  },
  setup() {
    const beforeUpload = (file: CustomFileItem) => {
      const isPdf = file.type === "application/pdf"
      if (!isPdf) {
        message.error(`${file.name} 必须是pdf`)
      }
      return isPdf || Upload.LIST_IGNORE
    }
    const handleChange = (info: FileInfo) => {
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`)
      }
    }
    return {
      handleChange,
      beforeUpload,
      fileList: ref([]),
      trendChartData: MOCK_WEIGHT_CHARTS,
      serviceUrl: networkConfig.host + "/pdf/uploadFile",
    }
  },
})
</script>
<style lang="scss" scoped>
.healthy-box {
  width: 100%;
  height: 100%;
  background: url("@/assets/images/bg.jpg") 0 0 / 100% 100% no-repeat;

  header {
    height: 48px;
    background: url("@/assets/images/header.png") 0 0 / 100% 100% no-repeat;

    h3 {
      line-height: 42px;
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 400;
      color: #fff;
      margin: 0;
    }
  }
}
</style>
