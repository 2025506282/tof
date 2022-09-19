<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-08-10 16:11:08
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-09-19 13:17:19
 * @FilePath: \front-end\src\pages\vue-ue-sdk\UEPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <UEPlayer />
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue"
import { app_load3 } from 'vue3-ue-sdk';
export default defineComponent({
  setup() {
    app_load3('http://222.173.109.140:9199/signallingserver', (res: any) => {
      console.log('res:', res)
    })
    const dataBaseUrl = appGlobalConfig.mapServerUrl
    // XbsjEarthUI.create('cesiumContainer').
    //   console.log(XbsjEarthUI)

    return {
      username: "123",
    }
  },
})
</script>
