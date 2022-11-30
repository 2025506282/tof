/*
 * @Description:表格数据接口
 * @Autor: scy😊
 * @Date: 2021-01-12 11:31:47
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-30 13:44:30
 */
import { get, deleteA, post } from "@/utils/https"
import { RootObject } from "@/apis/rootObject"
import { IUserForm, IUser } from "./user.model"

export const sendCodeAPI = async (email: string): Promise<boolean> => {
  const { data } = await post<RootObject<boolean>>("email/send", { email })
  return data
}

export const loginAPI = async (form: IUserForm): Promise<RootObject<IUser>> => {
  return await post<RootObject<IUser>>("users/login", form)
}
