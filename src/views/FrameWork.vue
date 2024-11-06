<template>
    <div class="FrameWork">
    <Content-view
    WebName="Vue"
    adress="https://cn.vuejs.org/"
    PicAdress="https://cn.vuejs.org/logo.svg">
    </Content-view>
    <Content-view
    WebName="React"
    adress="https://react.docschina.org/"
    PicAdress="https://react.docschina.org/favicon.ico">
    </Content-view>
    <Content-view
    WebName="Nuxt.js(Vue)"
    adress="https://www.nuxtjs.cn/"
    PicAdress="https://www.nuxtjs.cn/favicon.ico">
    </Content-view>
    <Content-view
    WebName="Next.js(React)"
    adress="https://www.nextjs.cn/"
    PicAdress="https://www.nextjs.cn/static/favicon/apple-touch-icon.png">
    </Content-view>

    </div>
</template>
<script>
import ContentView from '@/components/ContentView.vue'
export default {
  components: { ContentView }
}
</script>
  <style lang="scss" scoped>
  *{
    margin:0;
    padding:0;
  }
  .FrameWork{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: #eff2f5;
    img{
      width:48px;
      height:48px;
    }
  }

  </style>
