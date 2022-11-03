<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-03 10:33:33
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-03 11:07:12
 * @FilePath: \front-end\src\pages\creator\components\MenuComp.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- <a-menu
      style="width: 256px"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
    >
      <a-menu-item key="1">
        <template #icon>
          <MailOutlined />
        </template>
        Navigation One
      </a-menu-item>
      <a-menu-item key="2">
        <template #icon>
          <CalendarOutlined />
        </template>
        Navigation Two
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #icon>
          <AppstoreOutlined />
        </template>
        <template #title>Navigation Three</template>
        <a-menu-item key="3">Option 3</a-menu-item>
        <a-menu-item key="4">Option 4</a-menu-item>
        <a-sub-menu key="sub1-2" title="Submenu">
          <a-menu-item key="5">Option 5</a-menu-item>
          <a-menu-item key="6">Option 6</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #icon>
          <SettingOutlined />
        </template>
        <template #title>Navigation Four</template>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
      </a-sub-menu>
    </a-menu> -->
    <a-menu mode="inline" style="width: 256px">
      <div v-for="menu in menuList" :key="menu.value">
        <a-sub-menu v-if="menu.children" :key="menu.value" :title="menu.label">
          <a-menu-item
            @click="$emit('handleClickMenu', menu)"
            v-for="subMenu in menu.children"
            :key="subMenu.value"
          >
            <router-link :to="subMenu.value">{{ subMenu.label }}</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item v-else @click="$emit('handleClickMenu', menu)">
          <!-- <span>{{ menu.label }}</span> -->
          <router-link :to="menu.value">{{ menu.label }}</router-link>
        </a-menu-item>
      </div>
    </a-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue"
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue"
import { MENU_LIST } from "./menu.const"
export default defineComponent({
  setup() {
    const state = reactive({
      theme: "dark",
      selectedKeys: ["1"],
      openKeys: ["sub1"],
    })
    const changeTheme = (checked: boolean) => {
      state.theme = checked ? "dark" : "light"
    }

    return {
      ...toRefs(state),
      changeTheme,
      menuList: MENU_LIST,
    }
  },
  components: {
    // MailOutlined,
    // CalendarOutlined,
    // AppstoreOutlined,
    // SettingOutlined,
  },
})
</script>
