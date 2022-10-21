<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-09-30 16:41:31
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-10-21 15:06:02
 * @FilePath: \front-end\src\components\edit\EditComp.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <editor
      api-key="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
      @onClick="handleClcikEdit"
      :init="init"
      v-model="content"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, defineExpose, onMounted, ref } from "vue"
import Editor from "@tinymce/tinymce-vue"
// import "tinymce/plugins/image"
// import "tinymce/plugins/image" // 插入上传图片插件
// import "tinymce/plugins/media" // 插入视频插件
// import "tinymce/plugins/wordcount" // 字数统计插件

export default defineComponent({
  name: "editComp",
  components: {
    editor: Editor,
  },
  setup() {
    onMounted(() => {
      // tinymce.init()
    })
    const handleClcikEdit = () => {
      //``
      console.log("123")
    }
    return {
      content: "请开始你的表演",
      handleClcikEdit,
      init: {
        height: 500,
        menubar: false,
        skin_url: "/tinymce/skins/ui/oxide", // skin路径
        language_url: "/tinymce/langs/zh-Hans.js", //引入语言包文件
        language: "zh-Hans", //语言类型
        plugins: [
          "image",
          "media",
          "preview",
          "save",
          "imagetools",
          "a11ychecker",
          // "advlist",
          // "advcode",
          // "advtable",
          // "autolink",
          // "checklist",
          // "export",
          // "lists",
          // "link",
          // "image",
          // "charmap",
          // "preview",
          // "anchor",
          // "searchreplace",
          // "visualblocks",
          // "powerpaste",
          // "fullscreen",
          // "formatpainter",
          // "insertdatetime",
          // "media",
          // "table",
          // "help",
          // "wordcount",
          // "export",
          // "emoticons",
        ],
        toolbar:
          // "undo redo | casechange blocks | bold italic backcolor | \
          //   alignleft aligncenter alignright  | \
          //   bullist numlst checklist    | code |  export |  emoticons | table | Image  | media  | preview  | fullscreen",
          "image  | imagetools | media  | preview  | fullscreen",
      },
    }
  },
})
</script>
<style>
.tox-notifications-container {
  display: none !important;
}
.tox-statusbar {
  display: none !important;
}
</style>
