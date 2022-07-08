<template>
  <div style="width: 100%; height: 100%">
    <div id="cesiumContainer" style="width: 100%; height: 100%"></div>
    <video id="video" muted autoplay loop crossorigin="anonymous" controls>
      <source src="@/assets/test.mp4" type="video/mp4" />
      Your browser does not support the <code>video</code> element.
    </video>
  </div>
</template>
<script lang="ts">
import { add } from "lodash"
import { defineComponent, onMounted } from "vue"
export default defineComponent({
  setup() {
    const dataBaseUrl = appGlobalConfig.mapServerUrl
    // mounted
    onMounted(() => {
      // XbsjEarthUI.create('cesiumContainer').
      //   console.log(XbsjEarthUI)
      init()
    })
    const addTiles = (viewer: any, url: string) => {
      // 计算偏移量
      // var translation = Cesium.Cartesian3.fromArray([114.33, 30.35, 10])
      // var modelMatrix = Cesium.Matrix4.fromTranslation(translation)
      const x = 114
      const y = 30
      const z = 10
      // 创建Matrix4实例

      const modelMatrix = Cesium.Matrix4.fromArray([
        1.0,
        0.0,
        0.0,
        0.0,
        0.0,
        1.0,
        0.0,
        0.0,
        0.0,
        0.0,
        1.0,
        0.0,
        x,
        y,
        z,
        1.0,
      ])
      const tileList = new Cesium.Cesium3DTileset({
        // debugShowBoundingVolume: true,
        // debugColorizeTiles: true,
        url: dataBaseUrl + url,
        maximumScreenSpaceError: 2, // Temporary workaround for low memory mobile devices - Increase maximum error to 8.
        maximumNumberOfLoadedTiles: 1000, // Temporary workaround for low memory mobile devices - Decrease (disable) tile cache.
        modelMatrix,
      })
      const result = viewer.scene.primitives.add(tileList)
      // let count = 1
      // result.tileLoad.addEventListener(function (tile: any) {
      //   // console.log('一个瓦片加载了。');
      //   count++
      //   if (count === 7) {
      //     // console.log("tile:", tile)
      //     setTimeout(() => {
      //       addVideo(viewer, "video", tile)
      //     }, 3000)
      //   }
      // })
      result.readyPromise.then((tileset: any) => {
        console.log(
          "-----------------------------------------:",
          tileset,
          tileset.boundingSphere,
          tileset.modelMatrix,
        )
        // 将相机设置为查看新添加的tileset
        viewer.camera.viewBoundingSphere(
          tileset.boundingSphere,
          new Cesium.HeadingPitchRange(0, -0.5, 0),
        )
      })
      // viewer.flyTo(result)
    }
    const addVideo = (viewer: any, id: string, tile: any) => {
      console.log("tile:", tile)
      const result = viewer.entities.add({
        name: "123",
        position: Cesium.Cartesian3.fromDegrees(114, 30, 300000.0),
        box: {
          dimensions: new Cesium.Cartesian3(200.0, 200.0, 200.0),
          material: Cesium.Color.GREEN.withAlpha(0.5),
          outline: true,
          outlineColor: Cesium.Color.RED,
        },
      })
      // viewer.flyTo(result)
      // const videoElement: any = document.getElementById(id)
      // 创建实体对象
      // 获取视频元素
      // 创建实体对象
      // const rectangle = viewer.entities.add({
      //   rectangle: {
      //     coordinates: Cesium.Rectangle.fromDegrees(116, 40, -100, 100),
      //     material: videoElement,
      //   },
      //   // 或创建多边形
      //   // polygon: {
      //   //    hierarchy: new PolygonHierarchy(positions),
      //   //    material: videoElement
      //   // },
      // })
      // // 锁定实体对象（这句可有可无）
      // viewer.trackedEntity = rectangle
      // new Cesium.VideoSynchronizer({
      //   clock: viewer.clock,
      //   element: videoElement,
      // })
      // viewer.clock.shouldAnimate = true
      // videoElement.style.display = "none"
      // viewer.flyTo(rectangle)
    }
    const init = () => {
      const cesiumContainer = document.getElementById("cesiumContainer")
      var earth = new XE.Earth(cesiumContainer)
      earth.sceneTree.root = {
        children: [
          {
            czmObject: {
              name: "天地图-影像",
              xbsjType: "Imagery",
              xbsjImageryProvider: {
                XbsjImageryProvider: {
                  url: "//t6.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=1c0b8ce9cfe7d851f0cfb8d399e5217a",
                },
              },
            },
          },
          {
            czmObject: {
              name: "天地图-标记",
              xbsjType: "Imagery",
              xbsjImageryProvider: {
                XbsjImageryProvider: {
                  url: "//t3.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=1c0b8ce9cfe7d851f0cfb8d399e5217a",
                },
              },
              xbsjZIndex: 99,
            },
          },
        ],
      }
      const viewer = earth.czm.viewer
      addTiles(viewer, "/tileset.json")
      // addVideo(viewer, "video")
    }

    return {
      username: "123",
    }
  },
})
</script>

<style lang="sass" scoped></style>
