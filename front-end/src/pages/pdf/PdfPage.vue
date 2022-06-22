<template>
  <div class="custom-upload">
    <a-upload-dragger
      v-model:fileList="fileList"
      name="file"
      :multiple="true"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      @change="handleChange"
    >
      <p class="ant-upload-drag-icon">
        <inbox-outlined></inbox-outlined>
      </p>
      <a-button class="ant-upload-text">选择文件</a-button>
      <p class="ant-upload-hint">或者把文件拖拽到此区域</p>
    </a-upload-dragger>
  </div>
</template>

<script lang="ts">
import { InboxOutlined } from "@ant-design/icons-vue"
import { message } from "ant-design-vue"
import { defineComponent, ref } from "vue"

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

export default defineComponent({
  components: {
    InboxOutlined,
  },
  setup() {
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
      fileList: ref([]),
    }
  },
})
</script>
