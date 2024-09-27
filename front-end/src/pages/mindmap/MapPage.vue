<template>
  <div id="mindMapContainer"></div>
</template>

<script>
import MindMap from "simple-mind-map"
export default {
  data() {
    return {}
  },
  computed: {},
  mounted() {
    const mindMap = new MindMap({
      el: document.getElementById("mindMapContainer"),
      layout: 'fishbone', // logicalStructure, logicalStructureLeft, catalogOrganization, fishbone
      data: {
        data: {
          text: "根节点",
        },
        children: [
          {
            data: {
              text: "子节点1",
            },
            children: [],
          },
          {
            data: {
              text: "子节点2",
            },
            children: [],
          },
        ],
      },
      // isUseCustomNodeContent: true,
      // customCreateNodeContent: (node) => {
      //   console.log("nodes:", node)
      //   let div = document.createElement("div")
      //   div.className = "xxx"
      //   div.style.cssText = `xxx`
      //   div.innerHTML = `
      //       <h1>我是自定义节点</h1>
      //   `
      //   return div
      // },
    })
  },
  methods: {},
}
</script>

<style scoped>
#mindMapContainer * {
  margin: 0;
  padding: 0;
}
#mindMapContainer {
  width: 100vh;
  height: 100vh;
}
</style>
