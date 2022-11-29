<template>
  <div>
    <a-modal
      v-model:visible="visible"
      title="账密登录"
      @ok="handleOk"
      width="320px"
      :footer="null"
    >
      <div class="form-item">
        <a-input v-model:value="form.email" placeholder="邮箱" />
      </div>
      <div class="form-item" v-if="!isCodeWayLogin">
        <a-input
          type="password"
          v-model:value="form.password"
          placeholder="密码"
        />
      </div>
      <div class="form-item" v-else>
        <a-input v-model:value="form.code" placeholder="验证码" maxlength="4" />
        <div class="code-box">
          <a
            @click="handleClickCode"
            v-if="!timerForm.timer && timerForm.clickCount < 1"
            >获取验证码</a
          >
          <a
            @click="handleClickCode"
            v-else-if="!timerForm.timer && timerForm.clickCount >= 1"
            >重新获取</a
          >
          <span v-else>{{ timerForm.remainTime }} 秒后重新发送</span>
        </div>
      </div>
      <div class="form-operation">
        <a-button type="primary" @click="hadleClickLogin">登录</a-button>
        <!-- <a-button>注册</a-button> -->
      </div>
      <div class="form-forget">
        <a @click="handleChangeLoginWay" v-if="isCodeWayLogin">其他登录方式</a>
        <a @click="handleChangeLoginWay" v-else>邮箱验证码登录</a>
        <!-- <a>忘记密码</a> -->
      </div>
      <div class="form-forget">
        注册登录即表示同意<a target="_blank" href="./html/law/用户协议.html"
          >用户协议 、</a
        >
        <a target="_blank" href="./html/law/隐私政策.html">隐私政策</a>
        <!-- <a>忘记密码</a> -->
      </div>
    </a-modal>
  </div>
</template>
<script lang="ts">
import { loginAPI, sendCodeAPI } from "@/apis"
import { isEmail } from "@/utils"
import { message } from "ant-design-vue"
import { defineComponent, reactive, ref } from "vue"
export default defineComponent({
  props: ["isShowModal"],
  setup(props, { emit }) {
    const visible = ref<boolean>(props.isShowModal)
    const form = ref({
      email: "",
      password: "",
      code: "",
    })
    const isCodeWayLogin = ref<boolean>(true)
    const timerForm = reactive<{
      timer: any
      time: number
      clickCount: number
      remainTime: number
    }>({
      clickCount: 0,
      timer: null,
      time: 5,
      remainTime: 5,
    })
    const showModal = () => {
      visible.value = true
    }

    const handleOk = (e: MouseEvent) => {
      console.log(e)
      visible.value = false
    }
    const sendCode = async (email: string) => {
      try {
        await sendCodeAPI(email)
      } catch (err) {
        console.log("sendCodeAPI err:", err)
      }
    }
    const hadleClickLogin = async () => {
      if (!isEmail(form.value.email)) {
        message.error("请输入正确的邮箱")
        return
      }
      if (form.value.code.length !== 4) {
        message.error("请输入正确的验证码")
        return
      }
      try {
        const { code, data, msg } = await loginAPI(form.value)
        if (code !== 200) {
          message.error(msg)
          return
        }
        message.success("登录成功")
        visible.value = false
        emit("handleLoginSuccess", data)
      } catch (err) {
        console.log("loginAPI err:", err)
      }
    }
    // 用户点击获取验证码
    const handleClickCode = () => {
      if (!isEmail(form.value.email)) {
        message.error("请输入正确的邮箱")
        return
      }
      sendCode(form.value.email)
      timerForm.remainTime = timerForm.time
      timerForm.clickCount = timerForm.clickCount + 1
      if (timerForm.clickCount === 5) {
        message.error("你已经点击了太多次，请稍后再试一试")
        return
      }
      timerForm.timer = setInterval(() => {
        if (timerForm.remainTime <= 0) {
          clearInterval(timerForm.timer)
          timerForm.timer = null
        }
        timerForm.remainTime = timerForm.remainTime - 1
        console.log("timerForm.remainTime:", timerForm.remainTime)
      }, 1000)
      //
    }
    // 用户点击修改等率方式
    const handleChangeLoginWay = () => {
      isCodeWayLogin.value = !isCodeWayLogin.value
    }

    return {
      isCodeWayLogin,
      form,
      visible,
      timerForm,
      hadleClickLogin,
      handleChangeLoginWay,
      showModal,
      handleOk,
      handleClickCode,
    }
  },
})
</script>
<style lang="scss" scoped>
.form-item {
  margin-bottom: 20px;
  position: relative;
  .code-box {
    position: absolute;
    right: 10px;
    top: 0;
    color: #007fff;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
}
.form-operation {
  display: flex;
  justify-content: center;
  button {
    width: 100%;
  }
}
.form-forget {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;

  a {
    color: #007fff;
  }
}
</style>
