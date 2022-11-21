<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-07-18 15:25:16
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-21 17:18:19
 * @FilePath: \front-end\src\pages\animate\WordPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="home" @scroll="onScroll">
    <header-comp></header-comp>
    <a-spin tip="Loading..." :spinning="loading">
      <div class="content">
        <h5>文章草稿（{{ articleList.length }}）</h5>
        <draft-item-comp
          v-for="item in articleList"
          :draft="item"
          :key="item.title"
          @handleClickDetail="handleClickDetail"
          @handleClickEdit="handleClickEdit"
          @handleClickDelete="handleClickDelete"
        ></draft-item-comp>
      </div>
    </a-spin>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue"
import DraftItemComp from "./components/draftItem/DraftComp.vue"
import { getArticleListAPI, IArticle } from "@/apis"
import { useRouter } from "vue-router"
// import * as THREE from "three"
export default defineComponent({
  components: {
    "draft-item-comp": DraftItemComp,
  },
  setup() {
    const router = useRouter()
    const form = ref({
      pageSize: 20,
      pageIndex: 1,
      keyWord: "",
      status: 0,
    })
    const loading = ref(true)
    const articleList = ref<IArticle[]>([])
    const handleClickEdit = (article: IArticle) => {
      router.push(`/article/new/${article._id}`)
    }
    const handleClickDetail = (article: IArticle) => {
      router.push(`/article/detail/${article._id}`)
    }
    const handleClickDelete = (draft: IArticle) => {
      console.log("234:", draft)
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
      //
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
.home {
  background-color: #f4f5f5;
  height: 100%;

  overflow-y: scroll;
  .content {
    width: 960px;
    margin: 10px auto 0;
    background-color: #fff;
    padding: 0 12px;
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
