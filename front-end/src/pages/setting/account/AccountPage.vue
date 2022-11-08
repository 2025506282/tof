<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-07-18 15:25:16
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-08 09:27:08
 * @FilePath: \front-end\src\pages\animate\WordPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="account-box">
    <main>
      <h3>账号设置</h3>
      <a-divider></a-divider>
      <div class="account-item">
        <div>
          <label>手机</label>
          <span>130202717131</span>
        </div>
        <div>
          <a-button type="link">换绑</a-button>
        </div>
      </div>
      <a-divider></a-divider>
      <div class="account-item">
        <div>
          <label>密码</label>
          <span></span>
        </div>
        <div>
          <a-button type="link">重置</a-button>
        </div>
      </div>
      <a-divider></a-divider>
      <div class="account-item">
        <div>
          <label>账号注销</label>
          <span></span>
        </div>
        <div>
          <a-button type="link">注销</a-button>
        </div>
      </div>
      <a-divider></a-divider>
    </main>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue"
import { FORM_LIST } from "./account.const"
import { IFormState } from "./account.interface"
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
.account-box {
  background-color: #fff;
  height: 100%;
  padding: 10px 0;
  text-align: left;
  display: flex;
  .ant-divider-horizontal {
    margin: 20px 0;
  }
  main {
    flex: 1;
    width: 100%;
    margin: 10px auto 0;
    background-color: #fff;
    padding: 0 20px;
    height: auto;
    .account-item {
      display: flex;
      justify-content: space-between;
      height: 30px;
      line-height: 30px;
      & > div {
        display: flex;
        align-items: center;
      }
      label {
        color: #333;
        width: 100px;
        display: block;
      }
      span {
        color: #909090;
      }
    }
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
