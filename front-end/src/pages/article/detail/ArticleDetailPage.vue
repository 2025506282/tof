<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-08-19 14:10:43
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-16 15:43:40
 * @FilePath: \front-end\src\pages\healthy\HealthyPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="article-detail-box">
    <div>
      <ul>
        <li><like-filled /></li>
        <li><message-filled /></li>
        <li><star-filled /></li>
        <li><star-filled /></li>
      </ul>
    </div>
    <div v-html="html"></div>
  </div>
</template>

<script lang="ts">
import { getArticleAPI, IArticle } from "@/apis"
import { defineComponent, onMounted, ref } from "vue"
import { useRoute } from "vue-router"
export default defineComponent({
  setup() {
    const refEditComp = ref(null) as any
    const route = useRoute()
    const article = ref<IArticle>()
    // 用户点击发布
    const handlePublish = () => {
      if (refEditComp.value) {
        console.log(this, refEditComp.value.content)
      }
    }
    const getArticle = async (id: string) => {
      try {
        article.value = await getArticleAPI(id)
      } catch (err) {
        //
      }
    }
    onMounted(() => {
      const id = route.params.id as string
      getArticle(id)
    })
    return {
      title: "",
      html: "",
      handlePublish,
      refEditComp,
    }
  },
})
</script>
<!-- 
<script setup>
import { defineComponent, ref } from "vue"
const refEditComp = ref(null)

function handlePublish() {
  console.log(refEditComp.value) // Hello World
}
</script> -->
<style lang="scss" scoped>
.healthy-box {
  width: 100%;
  height: 100%;

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
}
</style>
