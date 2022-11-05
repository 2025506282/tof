<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-08-19 14:30:34
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-02 17:05:53
 * @FilePath: \front-end\src\pages\healthy\components\trend.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <nav class="nav">
    <a-dropdown :trigger="['click']" overlayClassName="custom-dropdown">
      <a class="ant-dropdown-link" @click.prevent> </a>
      <template #overlay>
        <a-menu>
          <div v-for="menu in menuList" :key="menu.value">
            <a-sub-menu
              v-if="menu.children"
              :key="menu.value"
              :title="menu.label"
            >
              <a-menu-item
                @click="$emit('handleClickMenu', menu)"
                v-for="subMenu in menu.children"
                :key="subMenu.value"
              >
                <router-link :to="subMenu.value">{{
                  subMenu.label
                }}</router-link>
              </a-menu-item>
            </a-sub-menu>
            <a-menu-item v-else @click="$emit('handleClickMenu', menu)">
              <!-- <span>{{ menu.label }}</span> -->
              <router-link :to="menu.value">{{ menu.label }}</router-link>
            </a-menu-item>
            <a-menu-divider v-if="menu.isSplit" />
          </div>
        </a-menu>
      </template>
    </a-dropdown>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { DEFAULT_VALUE } from "./userNavBar.const"
import { IMenu } from "./userNavBar.interface"
export default defineComponent({
  props: {
    menuList: {
      type: Object as PropType<IMenu[]>,
      default: () => DEFAULT_VALUE,
    },
  },
  // setup() {
  //   const handleClickMenu = (item: IMenu): void => {
  //     this.$emit()
  //   }
  //   return {
  //     handleClickMenu,
  //   }
  // },
})
</script>
<style lang="scss" scoped>
.nav {
  margin: 0 8px;
  padding: 0;
  .ant-dropdown-link {
    background-image: url("../../assets/images/logo/user.png");
    background-size: cover;
    width: 32px;
    height: 32px;
    display: block;
    border-radius: 50%;
  }
}
.custom-dropdown {
  .ant-dropdown-menu {
    padding: 10px 0;
  }
  .ant-menu-item-divider {
    margin: 8px 0;
  }
  .ant-dropdown-menu-item,
  .ant-dropdown-menu-submenu-title {
    display: flex;
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    position: relative;
    padding: 8px 30px;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    color: #909090;
    &:hover {
      color: #333;
    }
  }
}
</style>
