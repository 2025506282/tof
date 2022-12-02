<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-07-18 15:25:16
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-12-02 10:06:02
 * @FilePath: \front-end\src\pages\animate\WordPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="image-box">
    <a-upload
      name="file"
      :showUploadList="false"
      :multiple="false"
      :action="uploadUrl"
      :before-upload="beforeUpload"
      @change="handleChange"
    >
      <FileImageOutlined /><span class="des">图片</span>
    </a-upload>
  </div>
</template>
<script lang="ts">
interface FileItem {
  uid: string
  name?: string
  status?: string
  response?: string
  url?: string
}

interface FileInfo {
  file: FileItem
  fileList: FileItem[]
}
import networkConfig from "@/config/default/net.config"
import { FileImageOutlined } from "@ant-design/icons-vue"
import { message } from "ant-design-vue"
import { defineComponent, ref } from "vue"
export default defineComponent({
  components: {
    FileImageOutlined,
  },
  setup(props, { emit }) {
    const handleChange = (info: FileInfo) => {
      if (info.file.status !== "uploading") {
        console.log("done:", info.file)
      }
      if (info.file.status === "done") {
        if (
          info.file.response &&
          (info.file.response as unknown as { data: string })["data"]
        ) {
          emit(
            "handleClickImage",
            (info.file.response as unknown as { data: string })["data"],
          )
        }
        // const imageUrl =
        // console.log("done:", info.file.response?.data || "")
        // message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        console.log("error:", info.file)
        // message.error(`${info.file.name} file upload failed.`);
      }
    }

    const beforeUpload = (file: any) => {
      const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png"
      if (!isJpgOrPng) {
        message.error("只可以上传图片类型文件!")
      }
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        message.error("图片大小必须小于2MB!")
      }
      return isJpgOrPng && isLt2M
    }
    return {
      uploadUrl: networkConfig.host + "/image/upload",
      beforeUpload,
      fileList: [],
      handleChange,
    }
  },
})
</script>

<style lang="scss" scoped>
.image-box {
  .des {
    margin-left: 5px;
  }
}
</style>
