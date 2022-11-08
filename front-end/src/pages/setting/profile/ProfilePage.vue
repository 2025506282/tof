<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-07-18 15:25:16
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-07 17:30:22
 * @FilePath: \front-end\src\pages\animate\WordPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="profile-box">
    <main>
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 4 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <h3>个人资料</h3>
        <div v-for="item in formList" :key="item.char">
          <a-divider></a-divider>
          <a-form-item
            :key="item.char"
            :label="item.label"
            :name="item.char"
            :rules="[{ required: item.require, message: item.placehodle }]"
          >
            <a-textarea
              v-if="item.isTextArea"
              show-count
              :maxlength="item.maxLength"
              v-model:value="formState[item.char]"
              :placeholder="item.placehodle"
            />
            <a-input
              v-else
              show-count
              :maxlength="item.maxLength"
              v-model:value="formState[item.char]"
              :placeholder="item.placehodle"
            />
          </a-form-item>
        </div>
        <a-divider></a-divider>
        <a-form-item :wrapper-col="{ offset: 4, span: 16 }">
          <a-button type="primary" html-type="submit">保存修改</a-button>
        </a-form-item>
      </a-form>
    </main>
    <aside>
      <img src="@/assets/images/logo/user.png" />
      <h5>我的头像</h5>
      <p>支持 jpg、png、jpeg 格式大小 5M 以内的图片</p>
    </aside>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue"
import { FORM_LIST } from "./profile.const"
import { IFormState } from "./profile.interface"
// import * as THREE from "three"

export default defineComponent({
  components: {},
  setup() {
    const formState = reactive<IFormState>({
      username: "",
      job: "",
      company: "",
      homepage: "",
      introduce: "",
    })
    const onFinish = (values: any) => {
      console.log("Success:", values)
    }

    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo)
    }
    return {
      formList: FORM_LIST,
      formState,
      onFinish,
      onFinishFailed,
    }
  },
})
</script>

<style lang="scss" scoped>
.profile-box {
  background-color: #fff;
  height: 100%;
  padding: 10px 0;
  text-align: left;
  display: flex;
  .ant-divider-horizontal {
    margin: 20px 0;
  }
  .ant-form-item {
    margin-bottom: 0;
  }
  aside {
    width: 112px;
    margin-left: 52px;
    margin-right: 100px;
    background-color: #fff;
    margin-top: 30px;
    text-align: center;
    img {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      cursor: pointer;
    }
    h5 {
      color: #1d2129;
      font-weight: 500;
      font-size: 14px;
      margin-top: 10px;
      margin-bottom: 8px;
    }
    p {
      word-break: break-all;
      color: #86909c;
      font-size: 12px;
      line-height: 17px;
      font-weight: 400;
    }
  }
  main {
    flex: 1;
    width: 100%;
    margin: 10px auto 0;
    background-color: #fff;
    padding: 0 20px;
    height: auto;
    h3 {
      font-weight: 700;
      text-align: left;
      font-size: 24px;
      line-height: 40px;
      margin-bottom: 0;
    }
  }
}
</style>
