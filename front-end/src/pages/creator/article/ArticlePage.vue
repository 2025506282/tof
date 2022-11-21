<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-07-18 15:25:16
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-21 17:17:01
 * @FilePath: \front-end\src\pages\animate\WordPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-spin tip="Loading..." :spinning="loading">
    <div class="article-box">
      <card-comp
        :articleList="articleList"
        mode="special"
        @handleClickArticle="handleClickDetail"
        @handleClickEdit="handleClickEdit"
        @handleClickDelete="handleClickDelete"
      ></card-comp>
    </div>
  </a-spin>
</template>
<script lang="ts">
interface IData {
  articleList: IArticle[]
}
import { getArticleListAPI, IArticle } from "@/apis"
import { defineComponent, onMounted, ref } from "vue"
import { useRouter } from "vue-router"
// import * as THREE from "three"

export default defineComponent({
  setup() {
    const router = useRouter()
    const form = ref({
      pageSize: 20,
      pageIndex: 1,
      keyWord: "",
    })
    const loading = ref(true)
    const articleList = ref<IArticle[]>([])
    const handleClickDelete = (article: IArticle) => {
      //
    }
    const handleClickDetail = (article: IArticle) => {
      router.push(`/article/detail/${article._id}`)
    }
    const handleClickEdit = (article: IArticle) => {
      router.push(`/article/new/${article._id}`)
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
      handleClickDetail,
      handleClickEdit,
      handleClickDelete,
      getList,
      onScroll,
    }
  },
})
</script>

<style lang="scss" scoped>
.creator-box {
  background-color: #f4f5f5;
  height: 100%;

  overflow-y: scroll;
  .content {
    background-color: #fff;
    padding: 0 12px;
    overflow-y: scroll;
    h5 {
      font-weight: 700;
      color: #007fff;
      text-align: left;
      padding: 12px 12px;
      font-size: 16px;
      line-height: 40px;
      margin-bottom: 0;
    }
  }
}
</style>
