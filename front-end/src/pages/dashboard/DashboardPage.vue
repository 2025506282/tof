<template>
  <div id="box">
    <button @click="handlePrint">打印</button>
    <vue-office-docx
      :src="docx"
      style="height: 100vh"
      @rendered="renderedHandler"
      @error="errorHandler"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import VueOfficeDocx from "@vue-office/docx"
//引入相关样式
import "@vue-office/docx/lib/index.css"
import JsPdfImg from "html2pdf-2img"

export default defineComponent({
  components: {
    VueOfficeDocx,
  },
  setup() {
    let strWindowFeatures = `
    location=no,
`
    const handlePrint = () => {
      // window.open("./print")
      new JsPdfImg("#box", "导出的pdf名称", {
        pageBreak: [".title", "#area", "li", "h3"], // 当导出pdf时候，这个参数必填
        pageStartOffset: 20, // 每个页头的留空距离
        watermarkOption: {
          watermark_txt: "水印配置",
          z_index: 97,
          watermark_x: 0,
          watermark_y: 0,
          watermark_x_space: 160,
          watermark_y_space: 160,
          watermark_width: 180,
        },
      }).outPdf(() => {
        console.log("结束")
      })
      // if (myWindow) {
      //   myWindow.document.title = "\u200E"
      //   myWindow.document.write("<p>这是'我的窗口222'</p>")
      //   myWindow.print()
      // }

      // myWindow.focus();
    }
    const renderedHandler = () => {
      console.log("渲染完成")
    }
    const errorHandler = () => {
      console.log("渲染失败")
    }
    return {
      docx: "http://static.shanhuxueyuan.com/test6.docx",
      handlePrint,
      renderedHandler,
      errorHandler,
    }
  },
})
</script>
<style lang="scss" scoped></style>
