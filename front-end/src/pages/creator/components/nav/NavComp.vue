<template>
  <div class="nav-box">
    <ul class="top">
      <li>
        <user-nav-bar-comp />
        <span>沙漠闹</span>
      </li>
      <li>
        <a-button type="primary"
          ><router-link to="/new">写文章</router-link></a-button
        >
      </li>
    </ul>
    <a-menu
      mode="inline"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
    >
      <div v-for="menu in navList" :key="menu.value">
        <a-sub-menu v-if="menu.children" :key="menu.value">
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
import { watch, defineComponent, ref, computed } from "vue"
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
  position: fixed;
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
