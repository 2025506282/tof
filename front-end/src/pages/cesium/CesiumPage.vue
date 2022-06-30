<template>
  <div style="width: 100%; height: 100%">
    <div
      id="cesiumContainer"
      ref="cesium"
      style="width: 100%; height: 100%"
    ></div>
    <div style="position: absolute; left: 18px; top: 18px">
      <!-- <button>{{ message }}</button> -->
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue"
export default defineComponent({
  setup() {
    // mounted
    onMounted(() => {
      init()
    })
    const init = () => {
      const cesiumContainer = document.getElementById("cesiumContainer")
      const earth = new XE.Earth(cesiumContainer)
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
          {
            czmObject: {
              xbsjType: "CameraVideo",
              name: "视频融合",
              videoUrl: "//192.168.1.184:8080/test.mp4",
              position: [
                1.9017043698837766, 0.5972379094016695, 446.2499351617626,
              ],
              rotation: [
                0.07413323656963833, -0.933639537288121, 0.0003900191769634631,
              ],
              far: 50,
            },
            enabled: true,
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
