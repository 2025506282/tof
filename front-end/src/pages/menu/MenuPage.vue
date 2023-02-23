<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-07-18 15:25:16
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-25 09:12:45
 * @FilePath: \front-end\src\pages\animate\WordPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="menu-box" @mouseleave="handleMouseleave">
    <div
      class="menu-container first-menu-container"
      v-bind:class="{ expand: isExpand }"
    >
      <div
        class="menu-item"
        v-for="item in menuList"
        :key="item.value"
        @mouseover="() => handleMouseover(item, 1)"
        @click="() => handleClickMenu(item, 1)"
      >
        <div class="icon-box">
          <i>{{ item.icon }}</i>
          <!-- <div class="tips-box">{{ item.label }}</div> -->
        </div>
        <div class="label-box">
          <span>{{ item.label }}</span>
          <i>&gt;</i>
        </div>
      </div>
      <div class="btn-expand" @click="handleClickExpand">expand</div>
    </div>
    <!-- 第二级菜单 -->
    <div
      class="menu-container second-menu-container"
      v-bind:class="{ expand: isExpand, hover: secondMenu.length > 0 }"
    >
      <div
        class="menu-item second-menu-item"
        key="all"
        @mouseover="() => handleMouseover({ value: 'all' }, 2)"
      >
        <div class="label-box">
          <span>全部</span>
          <i>&gt;</i>
        </div>
      </div>
      <div
        class="menu-item second-menu-item"
        v-for="item in secondMenu"
        :key="item.value"
        @mouseover="() => handleMouseover(item, 2)"
      >
        <div class="label-box">
          <span>{{ item.label }}</span>
        </div>
      </div>
    </div>
    <!-- 第三级菜单 -->
    <div
      class="menu-container third-menu-container"
      v-bind:class="{
        expand: isExpand,
        hover: !!currentSecondItem.value,
      }"
    >
      <div class="search-box">
        <input type="text" v-if="currentSecondItem?.value === 'all'" />
      </div>
      <ul>
        <li
          v-for="item in currentSecondItem?.value !== 'all'
            ? [currentSecondItem]
            : currentFirstItem?.children"
          :key="item.value"
        >
          <div>
            <h3>{{ item.label }}</h3>
            <div v-for="subItem in item.children" :key="subItem.value">
              <a>{{ subItem.label }}</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref } from "vue"
import { useRouter } from "vue-router"
import { MENU_LIST } from "./mock"

export default {
  name: "custom-menu",
  data() {
    return {
      menuList: MENU_LIST,
      isExpand: false,
      secondMenu: [],
      thirdMenu: [],
      currentFirstItem: {},
      currentSecondItem: {},
    }
  },
  methods: {
    handleClickExpand() {
      this.isExpand = !this.isExpand
    },
    handleClickMenu(item, level) {
      // 点击第一级菜单，且一级菜单是不展开的，才会赋值
      if (level === 1 && !this.isExpand) {
        this.secondMenu = item.children
        this.currentFirstItem = item
        console.log("this.currentFirstItem:", this.currentFirstItem)
      }
    },
    handleMouseover(item, level) {
      // hover第一级菜单，且一级菜单是展开的，才会赋值
      if (level === 1 && this.isExpand) {
        this.secondMenu = item.children
        this.currentFirstItem = item
        console.log("this.currentFirstItem:", this.currentFirstItem)
      }
      if (level === 2) {
        this.thirdMenu = item.children || []
        this.currentSecondItem = item
      }
    },
    handleMouseleave() {
      this.secondMenu = []
      this.thirdMenu = []
      this.currentFirstItem = {}
      this.currentSecondItem = {}
    },
  },
}
</script>

<style lang="scss" scoped>
.menu-box {
  text-align: left;
  .menu-container {
    position: absolute;
    height: 100%;
    -webkit-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .first-menu-container {
    z-index: 1000;
    background-color: #0e2232;
    color: rgba(255, 255, 255, 0.65);
    width: 50px;

    .btn-expand {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 42px;
      background-color: #021525;
      z-index: 1002;
      text-align: center;
      line-height: 42px;
      font-size: 14px;
      color: #e1e4e6;
      cursor: pointer;
      -webkit-transition: all 0.2s ease-out;
      transition: all 0.2s ease-out;
    }
    &.expand {
      width: 270px;
    }
  }
  .second-menu-container {
    z-index: 999;
    width: 0;
    background-color: rgba(14, 34, 50, 0.9);
    border-right: 1px solid #364c5d;
    opacity: 0;
    left: -180px;
    &.hover {
      left: 50px;
      opacity: 1;
      width: 180px;
    }
    &.hover.expand {
      left: 270px;
      opacity: 1;
      width: 180px;
    }
  }
  .third-menu-container {
    z-index: 998;
    width: 0;
    background-color: rgba(14, 34, 50, 0.9);
    left: 0;
    display: none;
    &.hover {
      left: 230px;
      opacity: 1;
      width: 530px;
      display: block;
    }
    &.hover.expand {
      left: 450px;
      opacity: 1;
      width: 530px;
      display: block;
    }
    .search-box {
      padding: 20px 18px;
      white-space: nowrap;
      overflow: hidden;
      text-align: left;
    }
    ul {
      display: flex;
      padding: 0 10px;
      li {
        width: 155px;
        padding: 0 0 5px 10px;
        color: rgba(255, 255, 255, 0.65);
        display: inline-block;
        -webkit-column-break-inside: avoid;
        text-align: left;
        h3 {
          color: rgb(255, 255, 255);
          width: 100%;
          margin-bottom: 10px;
          display: inline-block;
          margin-top: 5px;
        }
      }
    }
  }
  .menu-item {
    width: 100%;
    height: 38px;
    line-height: 38px;
    text-align: left;
    overflow: hidden;
    padding: 0 20px;
    cursor: pointer;
    margin-bottom: 5px;
    color: #fff;
    &.active {
      background: #153955;
    }
    &:hover {
      background: #153955;
    }
    // .icon-box {
    //   width: 50px;
    //   height: 100%;
    //   display: inline-flex;
    //   justify-content: center;
    //   align-items: center;
    // }
    .label-box {
      display: inline-flex;
      width: auto;
      justify-content: space-between;
      width: 100%;
    }
  }
  .first-menu-container {
    .menu-item {
      padding-left: 0;
      .icon-box {
        width: 50px;
        height: 100%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        .tips-box {
          right: -100px;
          position: absolute;
          width: 100px;
          height: 50px;
          background: red;
          -webkit-transition: all 0.2s ease-out;
          transition: all 0.2s ease-out;
        }
        &:hover {
          .tips-box {
            display: block;
            right: -100px;
            position: fixed;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
      .label-box {
        width: calc(100% - 70px);
      }
    }
  }
  .second-menu-item {
    border-left: 3px solid transparent;
    &:hover {
      background: #153955;
      border-left: 3px solid #3394e1;
    }
  }
}
</style>
