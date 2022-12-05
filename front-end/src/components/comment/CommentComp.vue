<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-07-18 15:25:16
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-12-05 16:32:11
 * @FilePath: \front-end\src\pages\animate\WordPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="comment-box">
    <div class="my-comment-box">
      <h2 class="comment-title">评论</h2>
      <div class="comment-input-box">
        <img
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
        <div>
          <div>
            <!-- <a-textarea
              placeholder="输入评论（Enter换行，Ctrl + Enter发送）"
              v-model:value="content"
            /> -->
            <span
              class="input-comment"
              ref="inputComment"
              @blur="handleBlur"
              @input="handleInput"
              :contenteditable="true"
              placeholder="输入评论（Enter换行，Ctrl + Enter发送）"
              v-html="content"
            ></span>
          </div>
          <div class="comment-operation">
            <ul>
              <li><EmotionComp @handleClickEmotion="handleClickEmotion" /></li>
              <li><ImageComp @handleClickImage="handleClickImage" /></li>
            </ul>
            <div>
              <a-button type="primary" @click="handleClickPublishComment"
                >发表评论</a-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <TestComment />
    <!-- <div v-for="item in commentList" :key="item.id">
      <comment-item-comp :commnetItem="item"></comment-item-comp>
    </div> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { COMMENT_LIST } from "./components"
import EmotionComp from "./components/emotion/EmotionComp.vue"
import ImageComp from "./components/image/ImageComp.vue"
export default defineComponent({
  components: {
    ImageComp,
    EmotionComp,
    // "comment-item-comp": CommentItemComp,
  },
  setup(props, { emit }) {
    const content = ref(``)
    const inputComment = ref()
    const commentForm: any = reactive({
      selection: null,
      rangeAt: null,
    })

    const handleClickImage = (image: string) => {
      const dom = `<img src='${image}' class='image' />`
      addDom(dom)
    }
    // 用户点击发表评论
    const handleClickPublishComment = () => {
      emit("handleClickPublishComment", inputComment.value.innerHTML)
      // console.log("inputComment:", inputComment.value.innerHTML)
    }
    const addDom = (dom: string) => {
      if (window.getSelection()) {
        let winSn = commentForm.selection,
          range = commentForm.rangeAt
        //  要判断的光标状态
        // if (
        //   winSn.focusNode.className !== "content_edit" &&
        //   winSn.focusNode.parentElement.className !== "content_edit"
        //   // &&
        //   // !this.isAncestorsDom(winSn.baseNode, "content_edit")
        // ) {
        //   console.log("inputComment:", inputComment)
        //   winSn.selectAllChildren(inputComment)
        //   winSn.collapseToEnd()
        //   range = winSn.getRangeAt(0)
        // }
        range?.collapse(false)
        let node
        if (range.createContextualFragment) {
          // 兼容IE9跟safari
          node = range.createContextualFragment(dom)
        } else {
          let tempDom = document.createElement("div")
          tempDom.innerHTML = dom
          node = tempDom
        }
        let child = node.firstChild
        range.insertNode(child)
        let clRang = range.cloneRange()
        clRang.setStartAfter(child)
        winSn.removeAllRanges()
        winSn.addRange(clRang)
      }
    }
    const handleClickEmotion = (url: string) => {
      console.log("content:", content.value)
      let img = `<img src='${url}' class='emotion' />`
      addDom(img)
    }
    const handleInput = (e: any) => {
      let text = e.srcElement.innerHTML
      console.log("e:", e)
    }
    // 失去焦点保存光标位置
    const handleBlur = () => {
      const selection = getSelection()
      commentForm.selection = selection
      commentForm.rangeAt = selection?.getRangeAt(0)
    }
    return {
      content,
      inputComment,
      handleInput,
      handleBlur,
      handleClickEmotion,
      handleClickImage,
      handleClickPublishComment,
      commentList: COMMENT_LIST,
    }
  },
})
</script>

<style lang="scss" scoped>
.comment-box {
  background-color: #fff;
  width: 820px;
  margin: 20px auto;
  padding-bottom: 30px;
  padding: 20px;
  text-align: left;
  .comment-input-box {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .input-comment {
      display: block;
      width: 100%;
      padding: 8px 12px;
      border: 1px solid;
      margin-bottom: 20px;
      height: 80px;
      line-height: 22px;
      font-size: 16px;
      color: #252933;
      cursor: pointer;
      // background: #c2c8d1;
      border-color: #1e80ff;
      background: #fff;
      border-radius: 5px;
      overflow-y: auto;
      ::v-deep {
        .emotion {
          width: 24px;
          height: 24px;
        }
        .image {
          max-width: 50px;
        }
      }
      &[contenteditable="true"] {
        background: #fff;
        border-color: #1e80ff;
      }
      &:empty:before {
        padding: 10px 0;
        box-sizing: border-box;
        content: attr(placeholder);
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        line-height: 22px;
        color: rgba(178, 178, 178, 1);
      }
      &:focus {
        background: #fff;
        border-color: #1e80ff;
      }
      &::placeholder {
        background: #fff;
        border-color: #1e80ff;
      }
    }
    h2 {
      margin-bottom: 24px;
    }
    img {
      width: 40px;
      height: 40px;
      margin-right: 20px;
    }
    & > div {
      flex: 1;
    }
    .comment-operation {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 1;
      ul {
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        margin: 0;
        li {
          margin-right: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          line-height: 20px;

          .anticon {
            margin-right: 5px;
            font-size: 16px;
            color: #515767;
            margin-top: -4px;
          }
          .des {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
