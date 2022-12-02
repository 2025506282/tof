<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-07-18 15:25:16
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-09 12:55:15
 * @FilePath: \front-end\src\pages\animate\WordPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="comment-item">
      <div class="comment-left">
        <div class="user-logo">
          <img src="@/assets/images/logo/user.png" />
        </div>
        <div class="user-content">
          <div class="user-content-top">
            <h5>{{ commnetItem?.username }}</h5>
            <p>{{ commnetItem?.time }}</p>
          </div>
          <div class="user-content-mid">
            <p>{{ commnetItem?.message }}</p>
          </div>
          <div class="operation-box">
            <div class="operation-item">
              <like-outlined /> <span class="des">12</span>
            </div>
            <div
              class="operation-item"
              @click="handleClickMessage"
              title="回复"
            >
              <message-outlined /> <span class="des">13</span>
            </div>
          </div>
        </div>
      </div>
      <div class="comment-right"></div>
    </div>
    <div v-if="commnetItem.children?.length" class="reply-box">
      <div v-for="item in commnetItem.children" :key="item.id">
        <comment-item-comp :commnetItem="item"></comment-item-comp>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { IComment } from "./comment.interface"
import { LikeOutlined, MessageOutlined } from "@ant-design/icons-vue"
import { defineComponent, PropType } from "vue"
import { COMMENT_LIST } from "./comment.const"
export default defineComponent({
  components: {
    LikeOutlined,
    MessageOutlined,
  },
  props: {
    commnetItem: {
      type: Object as PropType<IComment>,
      default: () => COMMENT_LIST[0],
    },
  },
  setup() {
    const handleClickMessage = () => {
      console.log("1312")
    }
    return {
      handleClickMessage,
      commentList: COMMENT_LIST,
    }
  },
})
</script>

<style lang="scss" scoped>
.comment-item {
  margin-top: 10px;
  display: flex;
  align-items: center;
  .comment-left {
    display: flex;
    .user-content-top {
      display: flex;
      align-items: center;
      h5,
      p {
        margin: 0;
      }
      h5 {
        font-weight: 500;
        font-size: 15px;
        color: #252933;
      }
      p {
        margin-left: 10px;
        color: #8a919f;
        font-size: 14px;
        padding-left: 9px;
        position: relative;
        &::before {
          position: absolute;
          content: "";
          height: 60%;
          top: 4px;
          width: 0;
          left: 0;
          border-left: 1px solid #8a919f;
          opacity: 0.7;
        }
      }
    }
    .user-content-mid {
      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 2rem;
        color: #515767;
        margin-top: 8px;
        -webkit-line-clamp: 6;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
      }
    }
    .operation-box {
      margin-right: 16px;
      line-height: 22px;
      font-size: 14px;
      cursor: pointer;
      color: #8a919f;
      text-align: left;
      display: flex;
      .operation-item {
        margin-right: 10px;
      }
      .operation-item:hover {
        color: #1171ee;
      }
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 20px;
    }
  }
}
.reply-box {
  margin: 20px 60px;
  padding: 16px;
  background: rgba(247, 248, 250, 0.7);
  border-radius: 4px;
}
</style>
