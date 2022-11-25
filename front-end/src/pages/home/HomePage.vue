<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-07-18 15:25:16
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-25 09:12:45
 * @FilePath: \front-end\src\pages\animate\WordPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="home" @scroll="onScroll">
    <header-comp></header-comp>
    <div class="content">
      <tab-bar-comp></tab-bar-comp>
      <a-spin tip="Loading..." :spinning="loading">
        <div style="min-height: 400px" v-if="articleList.length">
          <card-comp
            :articleList="articleList"
            @handleClickArticle="handleClickArticle"
          ></card-comp>
        </div>
        <empty-comp v-else></empty-comp>
      </a-spin>
    </div>
  </div>
</template>
<script lang="ts">
import { IArticleSearchForm, IArticle, getArticleListAPI } from "@/apis"
import { defineComponent, onMounted, ref } from "vue"
import { useRouter } from "vue-router"
import TabBarComp from "./components/tabBar/TabBarComp.vue"
// import * as THREE from "three"
interface IData {
  articleList: IArticle[]
  form: IArticleSearchForm
}
export default defineComponent({
  components: {
    "tab-bar-comp": TabBarComp,
  },
  setup() {
    const router = useRouter()

    const form = ref({
      pageSize: 20,
      pageIndex: 1,
      keyWord: "",
      status: 1,
    })
    const loading = ref(true)
    const articleList = ref<IArticle[]>([])
    const handleClickArticle = (article: IArticle) => {
      console.log("article:", article)
      router.push(`/article/detail/${article._id}`)
    }
    const getList = async () => {
      try {
        loading.value = true
        articleList.value = await getArticleListAPI(form.value)
        loading.value = false
      } catch (err) {
        //
      }
    }

    onMounted(() => {
      getList()
    })
    const onScroll = (event: any) => {
      // const { scrollTop, clientHeight, scrollHeight } = event.target
      // // 当离底部还有200px，加载新的列表
      // if (scrollTop + clientHeight + 200 > scrollHeight) {
      //   this.articleList = [...this.articleList, ...MOCK_ARTICLE_LIST]
      // }
      // console.log("scrollTop:", scrollTop, clientHeight, scrollHeight)
    }
    return {
      form,
      loading,
      articleList,
      handleClickArticle,
      getList,
      onScroll,
    }
  },
})
</script>

<style lang="scss" scoped>
.home {
  background-color: #f4f5f5;
  height: 100%;
  overflow-y: scroll;
  .content {
    width: 960px;
    margin: 20px auto 0;
  }
}
</style>
