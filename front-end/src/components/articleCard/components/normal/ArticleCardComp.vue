<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-08-19 14:30:34
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-03 14:51:51
 * @FilePath: \front-end\src\pages\healthy\components\trend.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="custom-card" v-for="(article, index) in articleList" :key="index">
    <div class="card-left">
      <div class="card-top">
        <span>{{ article.nickName }}</span>
        <span>{{ article.publishTime }}</span>
        <!-- <span>{{ article.tags.join(" * ") }}</span> -->
        <span v-for="(item, index) in article.tags" :key="item"
          ><i v-if="index > 0">.</i>{{ item }}</span
        >
      </div>
      <div class="card-content">
        <h3>{{ article.title }}</h3>
        <p>{{ article.content }}</p>
      </div>
      <div class="card-bottom">
        <div title="收益">
          <money-collect-outlined style="font-size: 16px" />
          <span class="num">{{ article?.moneyNumber || 0 }}</span>
        </div>
        <div title="观看数">
          <eye-outlined style="font-size: 16px" />
          <span class="num">{{ article.watchNum }}</span>
        </div>
        <div title="点赞数">
          <heart-outlined style="font-size: 16px" />
          <span class="num">{{ article.likeNum }}</span>
        </div>
        <div title="评论数">
          <message-outlined style="font-size: 16px" />
          <span class="num">{{ article.commentNum }}</span>
        </div>
      </div>
    </div>
    <div class="card-right" v-if="article.imageUrl && isNormal">
      <img :src="article.imageUrl" />
    </div>
    <div class="card-right-operation" v-else>
      <EllipsisOutlined style="font-size: 22px" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue"
import { IArticle } from "../../articleCard.interface"
import { MOCK_ARTICLE_LIST } from "../../articleCard.const"
import {
  MessageOutlined,
  EyeOutlined,
  HeartOutlined,
  MoneyCollectOutlined,
  EllipsisOutlined,
} from "@ant-design/icons-vue"
export default defineComponent({
  components: {
    MessageOutlined,
    EyeOutlined,
    HeartOutlined,
    MoneyCollectOutlined,
    EllipsisOutlined,
  },
  props: {
    mode: {
      type: String,
      default: () => "normal",
    },
    articleList: {
      type: Object as PropType<IArticle[]>,
      default: () => MOCK_ARTICLE_LIST,
    },
  },
  setup(props: { articleList: IArticle[]; mode: string }) {
    // const { mode } = props
    const isNormal = computed(() => {
      return props.mode && props.mode === "normal"
    })
    return {
      isNormal,
    }
  },
})
</script>
<style lang="scss" scoped>
.custom-card {
  width: 100%;
  display: flex;
  cursor: pointer;
  position: relative;
  background: #fff;
  padding: 12px 20px 0;
  display: flex;
  align-items: center;
  text-align: left;
  border-top: none;
  border-bottom: 1px solid #e5e6eb;
  transition: all 0.3s ease-in;
  &:hover {
    background: #fafafa;
  }
  .card-left {
    flex: 1;
    .card-top {
      font-size: 13px;
      line-height: 22px;
      color: #86909c;
      i {
        vertical-align: 3px;
        margin: 0 5px;
        font-weight: 600;
      }
      span:nth-child(1) {
        padding-right: 10px;
      }
      span:nth-child(3) {
        padding-left: 10px;
      }
      span:nth-child(2) {
        padding: 0 10px;
        position: relative;
        &::before {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          display: block;
          width: 0.5px;
          height: 14px;
          left: 0;
          background: #e5e6eb;
          content: " ";
        }
        &::after {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 0;
          display: block;
          width: 0.5px;
          height: 14px;
          background: #e5e6eb;
          content: " ";
        }
      }
    }
    .card-content {
      margin-top: 7px;
      h3 {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #1d2129;
        width: 100%;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
      }
      p {
        color: #86909c;
        font-size: 13px;
        line-height: 22px;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
      }
    }
    .card-bottom {
      width: 100%;
      display: flex;
      padding-bottom: 12px;

      & > div {
        position: relative;
        margin-right: 20px;
        font-size: 13px;
        line-height: 20px;
        color: #86909c;
        flex-shrink: 0;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        .num {
          margin-left: 4px;
        }
        &:hover {
          color: #1d7dfa;
        }
      }
    }
  }
  .card-right {
    width: 144px;
    img {
      width: 120px;
      height: 80px;
      margin-left: 24px;
    }
  }
}
</style>
