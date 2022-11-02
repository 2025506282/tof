import { Rule } from "ant-design-vue/lib/form"

/*
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-02 11:08:35
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-02 11:25:09
 * @FilePath: \front-end\src\utils\form.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const checkAge = async (_rule: Rule, value: number) => {
  if (!value) {
    return Promise.reject("Please input the age")
  }
  if (!Number.isInteger(value)) {
    return Promise.reject("Please input digits")
  } else {
    if (value < 18) {
      return Promise.reject("Age must be greater than 18")
    } else {
      return Promise.resolve()
    }
  }
}
const validatePass = async (_rule: Rule, value: string) => {
  if (value === "") {
    return Promise.reject("请输入密码")
  } else {
    // if (formState.checkPass !== "") {
    //   formRef.value.validateFields("checkPass")
    // }
    if (value.length < 4 || value.length > 16) {
      return Promise.reject("请输入密码在4到16位之间")
    }
    return Promise.resolve()
  }
}
const rules: Record<string, Rule[]> = {
  pass: [{ required: true, validator: validatePass, trigger: "change" }],
  //   checkPass: [{ validator: validatePass2, trigger: "change" }],
  age: [{ validator: checkAge, trigger: "change" }],
}

export const getRules = () => {
  return rules
}
