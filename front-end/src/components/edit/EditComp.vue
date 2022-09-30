<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-09-30 16:41:31
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-09-30 17:22:32
 * @FilePath: \front-end\src\components\edit\EditComp.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <editor
      api-key="no-api-key"
      :init="{
        height: 500,
        menubar: false,
        language_url: '/tinymce/langs/zh-Hans.js', //引入语言包文件
        language: 'zh-Hans', //语言类型
        plugins: [
          'a11ychecker',
          'advlist',
          'advcode',
          'advtable',
          'autolink',
          'checklist',
          'export',
          'lists',
          'link',
          'image',
          'charmap',
          'preview',
          'anchor',
          'searchreplace',
          'visualblocks',
          'powerpaste',
          'fullscreen',
          'formatpainter',
          'insertdatetime',
          'media',
          'table',
          'help',
          'wordcount',
          'export',
          'emoticons',
          'Image',
          'Link',
          'media',
          'preview',
          'save',
        ],
        toolbar:
          'undo redo | casechange blocks | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlst checklist outdent indent | removeformat | code |  export |  emoticons | table | Image | link | openlink | media  | fullscreen | preview | cancel | save',
      }"
      initial-value="请开始你的表演"
    />
  </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue"

export default {
  name: "app",
  components: {
    editor: Editor,
  },
}
</script>
<style>
.tox-notifications-container {
  display: none !important;
}
</style>
