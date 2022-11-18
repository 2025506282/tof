<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-09-30 16:41:31
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-18 17:04:34
 * @FilePath: \front-end\src\components\edit\EditComp.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="edit-box">
    <editor
      api-key="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
      @onClick="handleClcikEdit"
      :init="init"
      v-model="content"
    />
  </div>
</template>

<script lang="ts">
// import tinymce from "tinymce"
import { defineComponent, defineExpose, onMounted, ref } from "vue"
import Editor from "@tinymce/tinymce-vue"

// import "tinymce/plugins/image"
// import "tinymce/plugins/image" // 插入上传图片插件
// import "tinymce/plugins/media" // 插入视频插件
// import "tinymce/plugins/wordcount" // 字数统计插件

export default defineComponent({
  name: "editComp",
  props: ["articleContent"],
  components: {
    editor: Editor,
  },
  setup(props) {
    onMounted(() => {
      // tinymce.init()
    })
    const handleClcikEdit = () => {
      console.log("123")
    }
    console.log("articleContent:", props, props.articleContent)
    const content = ref(props.articleContent)
    return {
      content,
      handleClcikEdit,
      init: {
        // height: "100%",
        menubar: false,
        contextmenu: "",
        // skin_url: "/tinymce/skins/ui/oxide", // skin路径
        language_url: "/tinymce/langs/zh-Hans.js", //引入语言包文件
        language: "zh-Hans", //语言类型
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:16px; height: auto;min-height: 500px; }",
        plugins: [
          "image",
          "media",
          "preview",
          "save",
          "imagetools",
          "a11ychecker",
          "advlist",
          "advcode",
          "advtable",
          "autolink",
          "checklist",
          "export",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "powerpaste",
          "fullscreen",
          "formatpainter",
          "insertdatetime",
          "media",
          "table",
          "help",
          "wordcount",
          "export",
          "emoticons",
        ],
        toolbar:
          "undo redo |  blocks | bold italic backcolor |  alignleft aligncenter alignright  |  bullist numlst checklist    | code |  export |  emoticons | table | Image  | media  | preview  | fullscreen",
        file_picker_types: "image",
        /* and here's our custom image picker*/
        file_picker_callback: (cb: any, value: any, meta: any) => {
          const input = document.createElement("input")
          input.setAttribute("type", "file")
          input.setAttribute("accept", "image/*")

          input.addEventListener("change", (e: any) => {
            const file = e.target.files[0]

            const reader = new FileReader() as any
            reader.addEventListener("load", () => {
              /*
          Note: Now we need to register the blob in TinyMCEs image blob
          registry. In the next release this part hopefully won't be
          necessary, as we are looking to handle it internally.
        */
              const id = "blobid" + new Date().getTime()
              if (tinymce && tinymce.activeEditor) {
                const blobCache = tinymce.activeEditor.editorUpload.blobCache
                const base64 = reader.result.split(",")[1]
                const blobInfo = blobCache.create(id, file, base64)
                blobCache.add(blobInfo)

                /* call the callback and populate the Title field with the file name */
                cb(blobInfo.blobUri(), { title: file.name })
              }
            })
            reader.readAsDataURL(file)
          })

          input.click()
        },
      },
    }
  },
})
</script>
<style lang="scss">
.edit-box {
  height: 100%;
  .tox-tinymce {
    height: 100% !important;
  }
}
.tox-notifications-container {
  display: none !important;
}
.tox-statusbar {
  display: none !important;
}
</style>
