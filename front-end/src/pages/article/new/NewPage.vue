<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-08-19 14:10:43
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-24 10:38:40
 * @FilePath: \front-end\src\pages\healthy\HealthyPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-spin tip="Loading..." :spinning="loading">
    <div class="new-box">
      <header>
        <a-input
          @change="handleChangeTitle"
          v-model:value="article.title"
          placeholder="请输入文章标题"
          :bordered="false"
          maxlength="100"
        />
        <div class="operation-box">
          <ul>
            <li><p>文章将自动保存至草稿箱</p></li>
            <li>
              <a-button><router-link to="/draft">草稿箱</router-link></a-button>
            </li>
            <li>
              <a-popover
                v-model:visible="isShowReplenish"
                trigger="click"
                placement="bottomLeft"
              >
                <template #title>
                  <h3
                    style="
                      height: 40px;
                      line-height: 40px;
                      margin: 0;
                      display: flex;
                      align-items: center;
                    "
                  >
                    更新文章
                  </h3>
                </template>
                <template #content>
                  <replenish-comp
                    @handleConfirm="handleClickPublish"
                    @handleCancel="handleClickCancel"
                    :article="article"
                  ></replenish-comp>
                </template>
                <a-button type="primary" arrow-point-at-center>发布</a-button>
              </a-popover>
            </li>
            <li><user-nav-bar-comp /></li>
          </ul>
        </div>
      </header>
      <main>
        <edit-comp2 ref="refEditComp" />
        <!-- <editor-comp
          api-key="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
        /> -->
      </main>
    </div>
  </a-spin>
</template>

<script lang="ts">
import { getArticleAPI, IArticle, updateArticleAPI } from "@/apis"
import { debounce } from "@/utils"
import { message } from "ant-design-vue"
import {
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  ref,
} from "vue"
import { useRoute, useRouter } from "vue-router"
import { IForm } from "./components"
import ReplenishComp from "./components/ReplenishComp.vue"
export default defineComponent({
  components: {
    "replenish-comp": ReplenishComp,
  },
  setup() {
    const isShowReplenish = ref<boolean>(false)
    const refEditComp = ref(null) as any
    const router = useRouter()
    const route = useRoute()
    const loading = ref<boolean>(false)
    const isDraft = ref<boolean>(false)
    const curForm = ref<IForm>()
    const article = ref<IArticle>({
      title: "",
      type: "",
      tags: [], // 文章标签
      abstract: "", // 文章摘要
      content: "", // 内容
    })

    const handleClickPublish = async (form: IForm) => {
      curForm.value = form
      if (!article.value.title) {
        message.error("请填写文章标题")
        return
      }
      if (!refEditComp.value.content) {
        message.error("请填写文章内容")
        return
      }
      isShowReplenish.value = true
      isDraft.value = false
      try {
        await updateArticleAPI({
          ...article?.value,
          ...form,
          status: 1,
          content: refEditComp.value.content,
        })
        message.success("发布成功")
        router.push("/home")
      } catch (err) {
        //
      }
    }

    const handleClickCancel = () => {
      isShowReplenish.value = false
    }
    // 当用户点击修改标题
    const handleChangeTitle = async (e: any) => {
      console.log("e:", e)
    }
    // 当用户修改点击content
    const handleChangeContent = async (e: any) => {
      console.log("e:", e)
    }

    // 获取文章
    const getArticle = async (id: string) => {
      try {
        loading.value = true
        article.value = await getArticleAPI(id)
        refEditComp.value.content = article.value.content
        loading.value = false
      } catch (err) {
        //
      }
    }
    // 更新草稿
    const createDraft = async () => {
      try {
        console.log("createDraft:", refEditComp.value?.content)
        article.value = await updateArticleAPI({
          ...article?.value,
          ...curForm.value,
          status: 0,
          content: refEditComp.value.content || "",
        })
      } catch (err) {
        console.log("err:", err, refEditComp.value)
        message.error("createDraft失败")
        //
      }
    }
    // const debounceCreateDraft = debounce(() => {
    //   debounce(() => createDraft(), 1000)()
    // }, 300)
    onBeforeUnmount(() => {
      if (
        (article.value?.title || refEditComp.value?.content) &&
        isDraft.value
      ) {
        createDraft()
      }
    })
    onMounted(() => {
      const id = route.params.id as string
      isDraft.value = !(id && id !== "0") || article?.value?.status === 0
      if (id && id !== "0") {
        getArticle(id)
      }
      document.onkeyup = () => {
        // debounceCreateDraft()
      }
    })

    return {
      isShowReplenish,
      loading,
      article,
      handleClickCancel,
      handleClickPublish,
      handleChangeTitle,
      handleChangeContent,
      refEditComp,
    }
  },
})
</script>

<style lang="scss" scoped>
.new-box {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  header {
    width: 100%;
    display: flex;
    height: 64px;
    justify-content: space-between;
    color: #c9cdd4;
    font-size: 14px;
    input {
      font-size: 24px;
    }
    input::placeholder {
      font-size: 24px;
    }
    ul {
      list-style: none;
      display: flex;
      align-items: center;
      padding-right: 20px;
      margin: 0;
      li {
        margin: 0 10px;
      }
    }
    .operation-box {
      display: flex;
      align-items: center;
      p {
        white-space: nowrap;
        margin: 0;
      }
    }
  }
  main {
    flex: 1;
  }
}
</style>
