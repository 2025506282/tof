<template>
  <div style="width: 100%; height: 100%">
    <div
      id="cesiumContainer"
      style="width: 100%; height: 100%"
    ></div>
    <!-- <div style="position: absolute; left: 18px; top: 18px"> -->
      <!-- <button>{{ message }}</button> -->
    <!-- </div> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue"
export default defineComponent({
  setup() {
    // mounted
    onMounted(() => {
      // XbsjEarthUI.create('cesiumContainer').
      //   console.log(XbsjEarthUI)
      init()
    })
    const init = () => {
      debugger
      const cesiumContainer = document.getElementById("cesiumContainer")
      var earth = new XE.Earth(cesiumContainer)
      earth.sceneTree.root = {
        children: [
          {
            czmObject: {
              name: "默认离线影像",
              xbsjType: "Imagery",
              xbsjImageryProvider: {
                createTileMapServiceImageryProvider: {
                  url: XE.HTML.cesiumDir + "Assets/Textures/NaturalEarthII",
                  fileExtension: "jpg",
                },
                type: "createTileMapServiceImageryProvider",
              },
            },
          },
        ],
      }
    }

    return {
      username: "123",
    }
  },
})
</script>

<style lang="sass" scoped></style>
