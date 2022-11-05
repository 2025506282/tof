<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-08-19 14:10:43
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-09-30 14:08:17
 * @FilePath: \front-end\src\pages\healthy\HealthyPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="healthy-box">
    <header>
      <h3>文件上传概览</h3>
    </header>
    <main>
      <a-upload
        v-model:file-list="fileList"
        name="file"
        :action="host"
        :headers="headers"
        @change="handleChange"
        :customRequest="customUpload"
      >
        <a-button>
          <upload-outlined></upload-outlined>
          点击上传
        </a-button>
      </a-upload>
    </main>
  </div>
</template>

<script lang="ts">
import { message, Upload } from "ant-design-vue"
import { defineComponent, ref } from "vue"
import { UploadOutlined } from "@ant-design/icons-vue"
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
import networkConfig from "@/config/default/net.config"
import { splitFile } from "./utils"
import { IFile, mergeFile, uploadFile } from "@/apis"
import pLimit from "p-limit"
export default defineComponent({
  components: {
    UploadOutlined,
  },
  setup() {
    const UPLOAD_SIZE = 10 * 1024 * 1024
    // const uploadChunks = async (chunksData) => {
    //     const formDataList = chunksData.map(({ chunk, hash }) => {
    //         const formData = new FormData()
    //         formData.append("chunk", chunk);
    //         formData.append("hash", hash);
    //         return formData;
    //     })
    //     const requestList = formDataList.map((item: IFile, index) => {
    //         return uploadFile(item);
    //     })
    // }
    const limit = pLimit(10)
    const customUpload = (req: any) => {
      const { file } = req
      const { name } = file
      const suffix = name.split(".")[1]
      const fileName = name.split(".")[0]
      const chunkList = splitFile(file, UPLOAD_SIZE)
      let uploadedChunkIndexList: number[] = []
      const chunksData = chunkList
        .map(({ chunk }, index) => {
          return {
            chunk,
            hash: fileName + `___$${index}`,
            suffix,
            progress: 0,
          }
        })
        .filter((item) => {
          const arr = item.hash.split("___$")
          return (
            uploadedChunkIndexList.indexOf(parseInt(arr[arr.length - 1])) === -1
          )
        })
      const requestList = chunksData.map((ele) => {
        return limit(() => uploadFile(ele))
      })
      Promise.all(requestList)
        .then((res) => {
          setTimeout(() => {
            mergeFile(fileName, suffix, UPLOAD_SIZE)
          }, 500)
        })
        .catch((err) => {
          console.log("error:", err)
        })
    }

    const handleChange = (info: any) => {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`)
      }
    }

    const fileList = ref([])
    return {
      fileList,
      host: networkConfig.host + "/ue/upload",
      headers: {
        authorization: "authorization-text",
      },
      customUpload,
      handleChange,
    }
  },
})
</script>
<style lang="scss" scoped>
.healthy-box {
  width: 100%;
  height: 100%;
  background: url("@/assets/images/bg.jpg") 0 0 / 100% 100% no-repeat;

  header {
    height: 48px;
    background: url("@/assets/images/header.png") 0 0 / 100% 100% no-repeat;

    h3 {
      line-height: 42px;
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 400;
      color: #fff;
      margin: 0;
    }
  }
}
</style>
