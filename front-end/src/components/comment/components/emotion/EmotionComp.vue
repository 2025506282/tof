<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-07-18 15:25:16
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-12-02 09:49:08
 * @FilePath: \front-end\src\pages\animate\WordPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="emotion-box">
    <a-popover v-model:visible="visible" trigger="click" placement="bottom">
      <template #content>
        <div class="emotion-item">
          <h5>全部</h5>
          <div class="content-box">
            <div v-for="item in emotionList" :key="item" class="img-box">
              <img :src="item" @click="$emit('handleClickEmotion', item)" />
            </div>
          </div>
        </div>
      </template>
      <MehOutlined /><span class="des">表情</span>
    </a-popover>
  </div>
</template>
<script lang="ts">
import { MehOutlined } from "@ant-design/icons-vue"
import { defineComponent, PropType, ref } from "vue"
import { EmotionList } from "./emotion.const"
export default defineComponent({
  components: {
    MehOutlined,
  },
  props: {
    emotionList: {
      type: Array as PropType<string[]>,
      default: () => EmotionList,
    },
  },
  setup() {
    const visible = ref<boolean>(false)

    const hide = () => {
      visible.value = false
    }
    return {
      visible,
      hide,
      // emotionList: EmotionList,
    }
  },
})
</script>

<style lang="scss" scoped>
.emotion-box {
  .des {
    margin-left: 5px;
  }
}
.emotion-item {
  h5 {
    font-size: 12px;
    line-height: 20px;
    color: #4e5969;
    margin: 0;
    padding: 8px 3px;
  }
  .content-box {
    width: 406px;
    display: flex;
    flex-wrap: wrap;
    .img-box {
      width: 32px;
      height: 32px;
      margin-right: 12px;
      margin-bottom: 8px;
      img {
        width: 28px;
        height: 28px;

        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          width: 32px;
          height: 32px;
        }
      }
    }
  }
}
</style>
