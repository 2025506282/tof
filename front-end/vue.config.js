const { defineConfig } = require("@vue/cli-service")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const path = require("path")
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
    const cwp = new CopyWebpackPlugin({
      patterns: [
        {
          from: './node_modules/earthsdk/dist/XbsjCesium',
          to: 'js/earthsdk/XbsjCesium',
          toType: 'dir'
        },
        {
          from: './node_modules/earthsdk/dist/XbsjEarth',
          to: 'js/earthsdk/XbsjEarth',
          toType: 'dir'
        },
      ]
    });
    config.plugins.push(cwp)
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        path.resolve(__dirname, "src/styles/_variables.scss"),
        path.resolve(__dirname, "src/styles/_mixins.scss"),
      ],
    },
  },
})
