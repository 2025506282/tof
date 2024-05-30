/*
 * @Description:表格数据接口
 * @Autor: scy😊
 * @Date: 2021-01-12 11:31:47
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-30 14:27:04
 */
import { get } from "@/utils/https"
import { RootObject } from "@/apis/rootObject"
import { IMessage } from "./message.model"

export const getMessageListAPI = async (): Promise<IMessage[]> => {
  const { data } = await get<RootObject<IMessage[]>>("api/message/list")
  return data
}
