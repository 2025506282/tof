<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-07-18 15:25:16
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-07-18 16:51:05
 * @FilePath: \front-end\src\pages\animate\WordPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="box">
    <VueMatrixRaindrop></VueMatrixRaindrop>
    <p>
      {{ str2 }}
    </p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import VueMatrixRaindrop from "vue-matrix-digit-rain"
interface IData {
  str: string
  i: number
  timer: any
  str2: string
}
export default defineComponent({
  components: {
    VueMatrixRaindrop,
  },
  data(): IData {
    return {
      str: "大家好，我是阿吉，这是我减肥的第三周",
      i: 0,
      timer: null,
      str2: "123",
    }
    // as {
    //   str: string
    //   id: number
    //   time: null
    //   str2: string
    // }
  },
  methods: {
    typing() {
      this.timer = setTimeout(() => {
        this.i = this.i + 1
        this.str2 = this.str.slice(0, this.i) + "_"
        console.log(this.str2)
        this.typing()
      }, 100)
    },
  },
  mounted() {
    this.typing()
  },
  destory() {
    clearTimeout(this.timer)
  },
})
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  canvas {
    width: 100%;
    height: 100%;
  }
  p {
    position: absolute;
    color: #a9d09e;
    top: 50%;
    font-size: 48px;
    width: 500px;
    left: 50%;
    transform: translate(-50%, -50%);
    text-indent: 40px;
  }
}
</style>
