<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-09-30 16:41:31
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-10-24 17:04:43
 * @FilePath: \front-end\src\components\edit\EditComp.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <textarea id="file-picker"></textarea>
</template>

<script lang="ts">
import { defineComponent, defineExpose, onMounted, ref } from "vue"
// import tinymce from "tinymce"
// import Editor from "@tinymce/tinymce-vue"
// import "tinymce/plugins/image"
// import "tinymce/plugins/image" // 插入上传图片插件
// import "tinymce/plugins/media" // 插入视频插件
// import "tinymce/plugins/wordcount" // 字数统计插件

export default defineComponent({
  name: "editComp",
  components: {},
  mounted() {
    tinymce.init({
      selector: "textarea#file-picker",
      plugins: "image code",
      toolbar: "undo redo | link image | code",
      /* enable title field in the Image dialog*/
      image_title: true,
      /* enable automatic uploads of images represented by blob or data URIs*/
      automatic_uploads: true,
      /*
    URL of our upload handler (for more details check: https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
    images_upload_url: 'postAcceptor.php',
    here we add custom filepicker only to Image dialog
  */
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
            const blobCache = tinymce.activeEditor.editorUpload.blobCache
            const base64 = reader.result.split(",")[1]
            const blobInfo = blobCache.create(id, file, base64)
            blobCache.add(blobInfo)

            /* call the callback and populate the Title field with the file name */
            cb(blobInfo.blobUri(), { title: file.name })
          })
          reader.readAsDataURL(file)
        })

        input.click()
      },
      content_style:
        "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
    })
  },
})
</script>
<style>
textarea#mentions {
  height: 350px;
}

div.card,
.tox div.card {
  width: 240px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(34, 47, 62, 0.1);
  padding: 8px;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

div.card::after,
.tox div.card::after {
  content: "";
  clear: both;
  display: table;
}

div.card h1,
.tox div.card h1 {
  font-size: 14px;
  font-weight: bold;
  margin: 0 0 8px;
  padding: 0;
  line-height: normal;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

div.card p,
.tox div.card p {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

div.card img.avatar,
.tox div.card img.avatar {
  width: 48px;
  height: 48px;
  margin-right: 8px;
  float: left;
}
</style>
