<template>
  <!-- <div style="width: 100%; height: 100%">
    <div id="cesiumContainer" style="width: 100%; height: 100%"></div>
    <video id="video" muted autoplay loop crossorigin="anonymous" controls>
      <source src="@/assets/test.mp4" type="video/mp4" />
      Your browser does not support the <code>video</code> element.
    </video>
  </div> -->
  <div class="viewer">
    <vc-viewer></vc-viewer>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue"
export default defineComponent({
  setup() {
    const dataBaseUrl = appGlobalConfig.mapServerUrl
    // mounted
    onMounted(() => {
      // XbsjEarthUI.create('cesiumContainer').
      //   console.log(XbsjEarthUI)
      // init()
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
        addVideo(viewer, "video", tileList)
      })
      // viewer.flyTo(result)
    }
    const addVideo = (viewer: any, id: string, tile: any) => {
      console.log("tile:", tile)
      // const result = viewer.entities.add({
      //   name: "123",
      //   position: Cesium.Cartesian3.fromDegrees(
      //     116.39147871632713,
      //     39.90358811794074,
      //     67.78227092367942,
      //   ),
      //   box: {
      //     dimensions: new Cesium.Cartesian3(2, 2, 2),
      //     material: Cesium.Color.GREEN.withAlpha(0.5),
      //     outline: true,
      //     outlineColor: Cesium.Color.RED,
      //   },
      // })
      // viewer.flyTo(result)
      // 创建实体对象
      // 获取视频元素
      // 创建实体对象
      var areaCoor = [
        116.39144639099534, 39.90357730345744, 56.94198443901108,
        116.39189871196555, 39.90357730345744, 56.94198443901108,
        116.39147023871958, 39.90357730345744, 22.37457551632845,
        116.39190553045852, 39.90357730345744, 22.37457551632845,
        // 116.39147871632713, 39.90358811794074, 1, 116.39247871632713,
        // 39.90358811794074, 1, 116.3907871632713, 39.90258811794074, 1,
        // 116.3927871632913, 39.90358811794074, 1,
      ]
      const getVideoMaterial = () => {
        const videoElement: any = document.getElementById(id)
        new Cesium.VideoSynchronizer({
          clock: viewer.clock,
          element: videoElement,
        })
        viewer.clock.shouldAnimate = true
        videoElement.style.display = "none"
        return videoElement
      }
      const entity = viewer.entities.add({
        polygon: {
          hierarchy: new Cesium.PolygonHierarchy(
            Cesium.Cartesian3.fromDegreesArrayHeights(areaCoor),
          ),
          perPositionHeight: true,
          extrudedHeight: 1,
          // extrudedHeight: new Cesium.CallbackProperty(() => {
          //   //此处用属性回调函数，直接设置extrudedHeight会导致闪烁。
          //   waterHeight += 0.1
          //   console.log("-----------waterHeight---------", waterHeight)
          //   if (waterHeight > targetHeight) {
          //     waterHeight = targetHeight //给个最大值
          //     this.enabled = false
          //   }
          //   return waterHeight
          // }, false),
          material: getVideoMaterial(),
          // material: new Cesium.ImageMaterialProperty({
          //   image: getVideoMaterial(),
          //   // image: `${origin}/water.jpg`,
          //   repeat: Cesium.Cartesian2(1.0, 1.0), // 不重复
          //   transparent: true, // 启用png透明
          //   color: Cesium.Color.WHITE.withAlpha(0.5),
          // }),
        },
      })
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
      var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
      handler.setInputAction((movement: any) => {
        let pickObj = viewer.scene.pick(movement.position)

        var cartesian = viewer.scene.pickPosition(movement.position)

        if (Cesium.defined(cartesian)) {
          var cartographic = Cesium.Cartographic.fromCartesian(cartesian) //根据笛卡尔坐标获取到弧度
          var lng = Cesium.Math.toDegrees(cartographic.longitude) //根据弧度获取到经度
          var lat = Cesium.Math.toDegrees(cartographic.latitude) //根据弧度获取到纬度
          var height = cartographic.height //模型高度
          console.log("--earthPosition--", lng, lat, height)
          // annotate(cartesian, lng, lat, height)
        }
        console.log(movement, pickObj)
      }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
      // addVideo(viewer, "video")
    }

    return {
      username: "123",
    }
  },
})
</script>
<style scoped>
.viewer {
  width: 100%;
  height: 400px;
}
</style>
