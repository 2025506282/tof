<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-08-19 14:30:34
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-18 13:32:59
 * @FilePath: \front-end\src\pages\healthy\components\trend.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <header>
    <div>
      <nav class="nav">
        <a class="logo-box" href="/home">
          <img src="@/assets/images/logo/basketball.svg" />
          <span>TOF</span>
        </a>
        <ul>
          <li v-for="nav in navList" :key="nav.value" class="nav-item">
            <a-tag-item @click="$emit('handleClickNav', nav)">
              <router-link :to="nav.value">{{ nav.label }}</router-link>
            </a-tag-item>
          </li>
        </ul>
      </nav>
      <div class="operation-box">
        <ul>
          <li>
            <a-input-search
              v-model:value="keyWord"
              placeholder="搜索文章/视频"
              enter-button
              @search="$emit('handleClickSearch', keyWord)"
            />
          </li>
          <li>
            <a-dropdown-button type="primary">
              <router-link to="/creator">创作者中心</router-link>
              <template #overlay>
                <a-menu>
                  <a-menu-item :key="item.value" v-for="item in creatorList">
                    <router-link :to="item.value">{{ item.label }}</router-link>
                  </a-menu-item>
                </a-menu>
              </template>
              <template #icon><DownOutlined /></template>
            </a-dropdown-button>
          </li>
          <li>
            <bell-outlined class="tips" title="消息" />
          </li>
          <li><user-nav-bar-comp></user-nav-bar-comp></li>
        </ul>

        <!-- <a-button type="primary">
        创作者中心
        <template #icon>
          <DownOutlined />
        </template>
      </a-button>
      <bell-outlined /> -->
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { CREATOR_LIST, NAV_LIST } from "./header.const"
import { IITem } from "./header.interface"
import { DownOutlined, BellOutlined } from "@ant-design/icons-vue"

export default defineComponent({
  props: {
    navList: {
      type: Object as PropType<IITem[]>,
      default: () => NAV_LIST,
    },
  },
  components: {
    DownOutlined,
    BellOutlined,
  },
  setup() {
    // const handleClickMenu = (item: IITem): void => {
    //   this.$emit()
    // }
    return {
      keyWord: "",
      creatorList: CREATOR_LIST,
    }
  },
})
</script>
<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0;
  margin: 0 auto;
  z-index: 100;
  overflow-y: auto;
  border-bottom: 1px solid #f1f1f1;
  background: #fff;
  position: sticky;
  & > div {
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    max-width: 1280px;
    min-width: 960px;
    width: 960px;
    margin: 0 auto;
    background: #fff;
  }
  ul {
    list-style: none;
    display: flex;
    height: 100%;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  .nav {
    display: flex;
    align-items: center;
    padding: 0;
    font-size: 14px;
    height: 100%;
    .logo-box {
      display: flex;
      align-items: center;
      font-size: 0;
      margin-right: 20px;
      cursor: pointer;
      img {
        width: 20px;
        height: 20px;
        margin-right: 1px;
        display: inline-block;
      }
      span {
        font-size: 16px;
        font-style: italic;
      }
    }
    ul {
      .nav-item {
        cursor: pointer;
        color: #86909c;
        padding: 0 10px;
        font-size: 14px;
        margin: 0;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
  }
  .operation-box {
    display: flex;
    li {
      margin: 0 10px;
      cursor: pointer;
      .tips {
        font-size: 24px;
        color: #8a919f;
        opacity: 0.7;
        &:hover {
          opacity: 0.9;
        }
      }
    }
  }
}
.nav a.router-link-exact-active {
  color: #2c3e50;
}
</style>
