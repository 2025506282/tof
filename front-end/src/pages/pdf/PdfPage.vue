<template>
  <div class="custom-upload">
    <div class="content">
      <h2>
        PDF转换成Word (.docx, .doc)<img src="@/assets/images/logo/word.svg" />
      </h2>
      <p>PDF转换成Word (.docx, .doc)</p>
    </div>

    <a-upload-dragger
      v-model:fileList="fileList"
      accpet=".doc"
      name="file"
      :multiple="true"
      :before-upload="beforeUpload"
      :action="serviceUrl"
      @change="handleChange"
    >
      <p class="ant-upload-drag-icon">
        <inbox-outlined></inbox-outlined>
      </p>
      <a-button class="ant-upload-text" type="primary">选择文件</a-button>
      <p class="ant-upload-hint">或者把文件拖拽到此区域</p>
    </a-upload-dragger>
  </div>
</template>

<script lang="ts">
import { InboxOutlined } from "@ant-design/icons-vue"
import { message, Upload } from "ant-design-vue"
import { defineComponent, ref } from "vue"

interface CustomFileItem {
  uid: string
  name?: string
  status?: string
  response?: string
  url?: string
  type?: string
}

interface FileInfo {
  file: CustomFileItem
  fileList: CustomFileItem[]
}
import networkConfig from '@/config/default/net.config'
export default defineComponent({
  components: {
    InboxOutlined,
  },
  setup() {
    const beforeUpload = (file: CustomFileItem) => {
      const isPdf = file.type === "application/pdf"
      if (!isPdf) {
        message.error(`${file.name} 必须是pdf`)
      }
      return isPdf || Upload.LIST_IGNORE
    }
    const handleChange = (info: FileInfo) => {
      const status = info.file.status
      if (status !== "uploading") {
        console.log(info.file, info.fileList)
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`)
      }
    }
    return {
      handleChange,
      beforeUpload,
      fileList: ref([]),
      serviceUrl: networkConfig.host+ "/pdf/uploadFile"
    }
  },
})
</script>
<style lang="sass" scoped>
.custom-upload
  text-align: left
  border: none
  padding-top: 10px
  .content
    padding-left: 10px
    h2
      img
        margin-left: 10px
</style>
