<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-07 11:00:05
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-11-09 09:07:21
 * @FilePath: \front-end\src\pages\setting\components\nav\NavComp.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="nav-box">
    <a-menu
      mode="inline"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
    >
      <div v-for="menu in navList" :key="menu.value">
        <a-sub-menu v-if="menu.children" :key="menu.label">
          <template #icon>
            <!-- {{ menu.icon }}11 -->
            <component :is="menu.icon" />
          </template>
          <template #title>{{ menu.label }}</template>
          <a-menu-item :key="item.value" v-for="item in menu.children">
            <router-link :to="item.value">{{ item.label }}</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item v-else :key="menu.value">
          <template #icon>
            <!-- {{ menu.icon }} -->
            <component :is="menu.icon" />
          </template>
          <router-link :to="menu.value">{{ menu.label }}</router-link>
        </a-menu-item>
      </div>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue"
import {
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  HomeOutlined,
} from "@ant-design/icons-vue"
import networkConfig from "@/config/default/net.config"
import UserNavBarComp from "@/components/userNavBar/UserNavBarComp.vue"
import { NAV, OPEN_KEYS } from "./nav.const"
import { useRoute } from "vue-router"
export default defineComponent({
  components: {
    HomeOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    UserNavBarComp,
  },
  setup() {
    const selectedKeys = computed(() => {
      const route = useRoute()
      console.log("route:", route.path)
      return [route.path]
    })
    return {
      selectedKeys,
      openKeys: OPEN_KEYS,
      navList: NAV,
      fileList: ref([]),
      serviceUrl: networkConfig.host + "/pdf/uploadFile",
    }
  },
})
</script>
<style lang="scss" scoped>
.nav-box {
  position: sticky;
  width: 240px;
  overflow: hidden;
  background: #fff;
  .top {
    margin: 0 16px;
    list-style: none;

    padding: 0;
    li {
      width: 100%;
      display: flex;
      align-items: center;
      margin: 24px 0;
      button {
        width: 100%;
      }
    }
  }
}
</style>
