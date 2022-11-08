<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-07-18 15:25:16
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-07 17:29:12
 * @FilePath: \front-end\src\pages\animate\WordPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="message-box">
    <main>
      <h3>消息设置</h3>
      <a-divider></a-divider>
      <div>
        <h3>私信设置</h3>
        <a-form-item label="允许谁给我发私信">
          <a-radio-group v-model:value="formState.messageState">
            <a-radio
              :value="item.value"
              :key="item.value"
              v-for="item in messageStateList"
              >{{ item.label }}</a-radio
            >
          </a-radio-group>
        </a-form-item>
      </div>
    </main>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue"
import { MESSAGE_STATE_LIST } from "./message.const"
import { IFormState } from "./message.interface"
// import * as THREE from "three"

export default defineComponent({
  components: {},
  setup() {
    const formState = reactive<IFormState>({
      messageState: "",
    })
    const onFinish = (values: any) => {
      console.log("Success:", values)
    }

    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo)
    }
    return {
      messageStateList: MESSAGE_STATE_LIST,
      formState,
      onFinish,
      onFinishFailed,
    }
  },
})
</script>

<style lang="scss" scoped>
.message-box {
  background-color: #fff;
  height: 100%;
  padding: 10px 0px;
  text-align: left;
  display: flex;
  .ant-divider-horizontal {
    margin: 20px 0;
  }
  .ant-form-item {
    margin-bottom: 0;
  }
  main {
    flex: 1;
    width: 100%;
    margin: 10px auto 0;
    background-color: #fff;
    padding: 0 20px;
    height: auto;
    & > h3 {
      font-weight: 600;
      text-align: left;
      font-size: 24px;
      line-height: 40px;
      margin-bottom: 0;
    }
  }
}
</style>
