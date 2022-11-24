<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-08-19 14:10:43
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-24 10:41:36
 * @FilePath: \front-end\src\pages\healthy\HealthyPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <header-comp></header-comp>
  <a-spin tip="Loading..." :spinning="loading">
    <div class="article-detail-box">
      <div class="operation-box" v-if="!article?.isDraft">
        <ul>
          <li title="点赞" @click="handleClickLike">
            <like-filled />
            <div class="num-box" v-if="article?.likeNum">
              {{ article?.likeNum }}
            </div>
          </li>
          <li title="评论">
            <message-filled />
            <div class="num-box" v-if="article?.commentNum">
              {{ article?.commentNum }}
            </div>
          </li>
          <li title="收藏" @click="handleClickCollect">
            <star-filled />
            <div class="num-box" v-if="article?.collectNum">
              {{ article?.collectNum }}
            </div>
          </li>
          <!-- <li><star-filled /></li> -->
        </ul>
      </div>

      <h1>{{ article?.title }}</h1>
      <div class="top">
        <img src="@/assets/images/logo/user.png" />
        <div>
          <h2>{{ article?.nickName }}</h2>
          <p>
            {{ article?.publishTimeStr
            }}<span v-if="article?.watchNum" class="watch-num">
              阅读 {{ article?.watchNum }}</span
            >
            <a
              ><router-link :to="`/article/new/${article?._id}`"
                >编辑</router-link
              ></a
            >
          </p>
        </div>
      </div>
      <img :src="article?.cover" class="cover" v-if="article?.cover" />
      <div class="content" v-html="article?.content"></div>
    </div>
  </a-spin>
</template>

<script lang="ts">
import { LikeFilled, MessageFilled, StarFilled } from "@ant-design/icons-vue"

import { getArticleAPI, IArticle, updateArticleAPI } from "@/apis"
import { defineComponent, onMounted, onUnmounted, ref } from "vue"
import { useRoute } from "vue-router"
export default defineComponent({
  components: {
    LikeFilled,
    MessageFilled,
    StarFilled,
  },
  setup() {
    const refEditComp = ref(null) as any
    const route = useRoute()
    const article = ref<IArticle>()
    const loading = ref(true)
    // 用户点击发布
    const handlePublish = () => {
      if (refEditComp.value) {
        console.log(this, refEditComp.value.content)
      }
    }
    // 用户点击点赞
    const handleClickLike = async () => {
      const { likeNum = 0 } = article.value as IArticle
      article.value = await updateArticleAPI({
        ...(article.value as IArticle),
        likeNum: likeNum + 1,
      })
    }
    // 用户点击收藏
    const handleClickCollect = async () => {
      const { collectNum = 0 } = article.value as IArticle
      article.value = await updateArticleAPI({
        ...(article.value as IArticle),
        collectNum: collectNum + 1,
      })
    }
    // 获取文章详情
    const getArticle = async (id: string) => {
      try {
        loading.value = true
        article.value = await getArticleAPI(id)
        loading.value = false
      } catch (err) {
        //
      }
    }
    const updateArticle = async () => {
      try {
        const { watchNum = 0 } = article.value as IArticle
        article.value = await updateArticleAPI({
          ...(article.value as IArticle),
          watchNum: watchNum + 1,
        })
      } catch (err) {
        //
      }
    }
    onMounted(() => {
      const id = route.params.id as string
      getArticle(id)
    })
    onUnmounted(() => {
      updateArticle()
    })
    return {
      loading,
      article,
      handleClickLike,
      handleClickCollect,
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
<style lang="scss">
.article-detail-box {
  width: 820px;
  min-height: 400px;
  margin: 20px auto;
  padding: 32px;
  background: #fff;
  text-align: left;
  position: relative;

  .operation-box {
    position: absolute;
    top: 100px;
    left: -120px;
    ul {
      list-style: none;
      font-size: 20px;
      color: #8a919f;
      li {
        width: 48px;
        height: 48px;
        cursor: pointer;
        position: relative;
        border-radius: 50%;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        &:hover {
          color: #515767;
        }
        .num-box {
          font-size: 8px;
          text-align: center;
          left: 75%;
          top: 0px;
          position: absolute;
          width: 24px;
          height: 17px;
          background: #c2c8d1;
          color: #fff;
          border-radius: 9px;
        }
      }
    }
  }
  h1 {
    margin: 0 0 20px;
    font-size: 32px;
    font-weight: 600;
    color: #252933;
  }
  .top {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }
    a {
      margin-left: 10px;
      color: #1e80ff;
      &:hover {
        text-decoration: underline;
      }
    }
    .watch-num {
      margin-left: 5px;
    }
    & > div {
      margin-left: 12px;
      h2 {
        font-size: 16px;
        color: #515767;
        margin-bottom: 5px;
      }
      p {
        color: #8a919f;
        font-size: 14px;
        margin: 0;
      }
    }
  }
  .content {
    margin-top: 20px;
    img {
      max-width: 100%;
    }
    .language-markup {
      background: #f5f2f0;
      padding: 20px 20px;
    }
  }
  .cover {
    width: 100%;
    height: auto;
  }
}
</style>
