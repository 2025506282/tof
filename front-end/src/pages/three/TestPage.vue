<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-07-18 15:25:16
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-07-27 09:59:45
 * @FilePath: \front-end\src\pages\animate\WordPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="box">
    <UEPlayer></UEPlayer>
    <!-- <canvas id="three"></canvas> -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
// import * as THREE from "three"
import { app_load } from "vue-ue-sdk"
interface IData {
  str: string
}
export default defineComponent({
  components: {},
  data(): IData {
    return {
      str: "大家好，我是阿吉，这是我减肥的第三周，接下来让我们看看具体的数据分析吧",
    }
  },
  methods: {},
  mounted() {
    app_load("101.133.137.147:776", () => {
      console.log(
        "----------------------------------ok----------------------------------          ",
      )
    })
    // const scene = new THREE.Scene()
    // scene.background = new THREE.Color("#eee")
    // const canvas = document.querySelector("#three") as HTMLCanvasElement
    // const renderer = new THREE.WebGL1Renderer({ canvas, antialias: true })
    // const camera = new THREE.PerspectiveCamera(
    //   50,
    //   window.innerWidth / window.innerHeight,
    //   0.1,
    //   1000,
    // )
    // camera.position.z = 10
    // function animate() {
    //   renderer.render(scene, camera)
    //   requestAnimationFrame(animate)
    // }
    // animate()
  },
  destory() {
    //
  },
})
</script>

<style lang="scss" scoped></style>
