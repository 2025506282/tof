<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-08-19 14:30:34
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-02 15:06:50
 * @FilePath: \front-end\src\pages\healthy\components\trend.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="replenish-box">
    <!-- <h3>更新文章</h3> -->
    <div>
      <a-form
        ref="formRef"
        name="custom-validation"
        :model="formState"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="handleFinish"
        @finishFailed="handleFinishFailed"
      >
        <a-form-item
          label="分类"
          name="type"
          :rules="[{ required: true, message: '请选择分类!' }]"
        >
          <!-- <a-input v-model:value="formState.type" /> -->
          <a-radio-group v-model:value="formState.type">
            <a-radio-button
              :value="item.value"
              v-for="item in typeList"
              :key="item.value"
              >{{ item.label }}</a-radio-button
            >
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="添加标签"
          name="tags"
          :rules="[{ required: true, message: '请选择标签!' }]"
        >
          <a-select
            mode="tags"
            :options="tagList"
            allowClear
            v-model:value="formState.tags"
          >
          </a-select>
        </a-form-item>

        <a-form-item label="文章封面" name="cover">
          <a-upload
            v-model:file-list="fileList"
            name="file"
            list-type="picture-card"
            class="avatar-uploader"
            :action="uploadUrl"
            :max-count="1"
            :before-upload="beforeUpload"
            @change="handleChange"
            @preview="handlePreview"
          >
            <!-- <img
              v-if="imageUrl"
              :src="imageUrl"
              alt="avatar"
              style="width: 100px; height: 100px"
            /> -->
            <div>
              <loading-outlined v-if="loading"></loading-outlined>
              <plus-outlined v-else></plus-outlined>
              <div class="ant-upload-text">上传封面</div>
            </div>
            <!-- <div class="ant-upload-text">建议尺寸1303*734px</div> -->
          </a-upload>
        </a-form-item>
        <a-form-item
          label="编辑摘要"
          name="abstract"
          :rules="[{ required: true, message: '请输入摘要' }]"
        >
          <a-textarea
            v-model:value="formState.abstract"
            show-count
            :maxlength="100"
            :rows="3"
          />
        </a-form-item>
        <a-divider />
        <a-form-item :wrapper-col="{ offset: 6, span: 16 }">
          <a-button type="primary" html-type="submit">确定</a-button>
          <a-button style="margin-left: 20px" @click="resetForm">取消</a-button>
        </a-form-item>
      </a-form>
      <a-modal
        style="z-index: 1000; position: relative"
        :visible="previewVisible"
        :title="previewTitle"
        :footer="null"
        @cancel="handleCancel"
      >
        <img alt="example" style="width: 100%" :src="previewImage" />
      </a-modal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons-vue"

import * as echarts from "echarts/core"
import { IForm } from "./replenish.interface"
import { TAG_LIST, TYPE_LIST } from "./replenish.const"
import { getBase64, getBase64Result } from "@/utils"
import { FormInstance, message, UploadChangeParam } from "ant-design-vue"
import networkConfig from "@/config/default/net.config"
// defineProps({
//   chartData: IChart
// })
export default defineComponent({
  components: { LoadingOutlined, PlusOutlined },
  // props: ["replenish"],
  setup() {
    const fileList = ref([])
    const loading = ref<boolean>(false)
    const imageUrl = ref<string>("")
    const formRef = ref<FormInstance>()
    const previewImage = ref("")
    const previewTitle = ref("")
    const previewVisible = ref(false)
    const handleCancel = () => {
      previewVisible.value = false
      previewTitle.value = ""
    }
    const resetForm = () => {
      console.log("123", formRef, formRef.value)
      formRef.value?.resetFields()
    }
    const handlePreview = async (file: any) => {
      if (!file.url && !file.preview) {
        file.preview = (await getBase64Result(file.originFileObj)) as string
      }
      previewImage.value = file.url || file.preview
      previewVisible.value = true
      previewTitle.value =
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    }
    const handleChange = (info: UploadChangeParam) => {
      if (info.file.status === "uploading") {
        loading.value = true
        return
      }
      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj as Blob, (base64Url: string) => {
          imageUrl.value = base64Url
          loading.value = false
        })
      }
      if (info.file.status === "error") {
        loading.value = false
        message.error("upload error")
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
    const formState = reactive<IForm>({
      type: "",
      tags: [],
      cover: "",
      abstract: "",
    })
    const handleFinish = (values: any) => {
      console.log("Success:", values)
    }

    const handleFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo)
    }
    return {
      typeList: TYPE_LIST,
      tagList: TAG_LIST,
      formState,
      handleFinish,
      handleFinishFailed,
      beforeUpload,
      handleChange,
      resetForm,
      handlePreview,
      formRef,
      fileList,
      imageUrl,
      loading,
      previewTitle,
      previewImage,
      previewVisible,
      handleCancel,
      uploadUrl: networkConfig.host + "/image/upload",
    }
  },
})
</script>
<style lang="scss">
.replenish-box {
  width: 530px;
  white-space: nowrap;
  color: #909090;
  // background-color: #fff;
  // border: 1px solid #ddd;
  border-radius: 2px;
  // -webkit-box-shadow: 0 1px 2px #f1f1f1;
  // box-shadow: 0 1px 2px #f1f1f1;
  cursor: default;
  .ant-radio-group {
    white-space: pre-wrap;
  }

  .ant-radio-group {
    label {
      margin-right: 10px;
      margin-bottom: 10px;
      width: 88px;
      height: 28px;
      padding: 0;
      line-height: 28px;
      text-align: center;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
