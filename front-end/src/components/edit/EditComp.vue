<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-09-30 16:41:31
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-02 09:58:35
 * @FilePath: \front-end\src\components\edit\EditComp.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <textarea id="full-featured">
  <p><img style="display: block; margin-left: auto; margin-right: auto;" title="Tiny Logo" src="https://www.tiny.cloud/docs/images/logos/android-chrome-256x256.png" alt="TinyMCE Logo" width="128" height="128"></p>
  <h2 style="text-align: center;">Welcome to the TinyMCE Cloud demo!</h2>
  <h5 style="text-align: center;">Note, this includes some "enterprise/premium" features.<br>Visit the <a href="https://www.tiny.cloud/pricing">pricing page</a> to learn more about our premium plugins.</h5>
  <p>Please try out the features provided in this full featured example.</p>

  <h2>Got questions or need help?</h2>
  <ul>
    <li>Our <a class="mceNonEditable" href="https://www.tiny.cloud/docs/tinymce/6/">documentation</a> is a great resource for learning how to configure TinyMCE.</li>
    <li>Have a specific question? Try the <a href="https://stackoverflow.com/questions/tagged/tinymce" target="_blank" rel="noopener"><code>tinymce</code> tag at Stack Overflow</a>.</li>
    <li>We also offer enterprise grade support as part of <a href="https://www.tiny.cloud/pricing">TinyMCE premium subscriptions</a>.</li>
  </ul>

  <h2>A simple table to play with</h2>
  <table style="border-collapse: collapse; width: 100%;" border="1">
    <thead>
      <tr>
        <th>Product</th>
        <th>Cost</th>
        <th>Really?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>TinyMCE Cloud</td>
        <td>Get started for free</td>
        <td>YES!</td>
      </tr>
      <tr>
        <td>Plupload</td>
        <td>Free</td>
        <td>YES!</td>
      </tr>
    </tbody>
  </table>

  <h2>Found a bug?</h2>
  <p>If you think you have found a bug please create an issue on the <a href="https://github.com/tinymce/tinymce/issues">GitHub repo</a> to report it to the developers.</p>

  <h2>Finally ...</h2>
  <p>Don't forget to check out our other product <a href="http://www.plupload.com" target="_blank">Plupload</a>, your ultimate upload solution featuring HTML5 upload support.</p>
  <p>Thanks for supporting TinyMCE! We hope it helps you and your users create great content.<br>All the best from the TinyMCE team.</p>
</textarea
  >
</template>

<script>
import { defineComponent, defineExpose, onMounted, ref } from "vue"
// import tinymce from "tinymce"
// import Editor from "@tinymce/tinymce-vue"
import "tinymce/plugins/image" // 插入上传图片插件
import "tinymce/plugins/media" // 插入视频插件
import "tinymce/plugins/wordcount" // 字数统计插件

export default defineComponent({
  name: "editComp",
  components: {},
  mounted() {
    const useDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches
    const isSmallScreen = window.matchMedia("(max-width: 1023.5px)").matches

    tinymce.init({
      selector: "textarea#full-featured",
      plugins:
        "a11ychecker advcode table advlist lists image media anchor link autoresize",
      toolbar:
        "a11ycheck | blocks bold forecolor backcolor | bullist numlist | link image media anchor | table | code",
      a11y_advanced_options: true,
      a11ychecker_html_version: "html5",
      a11ychecker_level: "aaa",
      content_style:
        "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
    })
  },
})
</script>
<style scoped>
/* For other boilerplate styles, see: https://www.tiny.cloud/docs/tinymce/6/editor-content-css/ */
/*
* For rendering images inserted using the image plugin.
* Includes image captions using the HTML5 figure element.
*/
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
