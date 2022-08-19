<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-08-10 16:11:08
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-08-10 16:12:19
 * @FilePath: \front-end\src\pages\vue-ue-sdk\UEPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div style="width: 100%; height: 100%">
    <div id="cesiumContainer" style="width: 100%; height: 100%"></div>
    <video id="video" muted autoplay loop crossorigin="anonymous" controls>
      <source src="@/assets/test.mp4" type="video/mp4" />
      Your browser does not support the <code>video</code> element.
    </video>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue"
export default defineComponent({
  setup() {
    const dataBaseUrl = appGlobalConfig.mapServerUrl
    // XbsjEarthUI.create('cesiumContainer').
    //   console.log(XbsjEarthUI)

    return {
      username: "123",
    }
  },
})
</script>
