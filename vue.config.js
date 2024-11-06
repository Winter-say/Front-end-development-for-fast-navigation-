const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    proxy: {
      '/awa': {
        target: 'https://gsap.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/awa': ''
        }
      },
      '/qwq': {
        target: 'https://i0.hdslb.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/qwq': ''
        }
      }
    }
  }
}
