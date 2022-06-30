<template>
  <div id="cesiumContainer" style="width: 100%; height: 100%"></div>
</template>
<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  setup() {
    const init = () => {
      const earth = new Window.XE.Earth("cesiumContainer")
      earth.sceneTree.root = {
        children: [
          {
            czmObject: {
              name: "默认离线影像",
              xbsjType: "Imagery",
              xbsjImageryProvider: {
                createTileMapServiceImageryProvider: {},
                type: "createTileMapServiceImageryProvider",
              },
            },
          },
        ],
      }
    }
    XE.ready().then(init)
    return {
      username: "123",
    }
  },
})
</script>

<style lang="sass" scoped></style>
