<template>
    <div class="CompatibleView">
    <Content-view
    WebName="CanIUse?"
    adress="https://caniuse.com/"
    PicAdress="https://caniuse.com/img/favicon-128.png"
    sname="Check the compatibility of native methods(查看原生方法的兼容性)">
    </Content-view>
    <Content-view
    WebName="PostCSS"
    adress="https://postcss.nodejs.cn/"
    PicAdress="https://postcss.nodejs.cn/assets/logo-tq8kLoG9.svg"
    sname="Improve project compatibility(提高项目兼容性)">
    </Content-view>
    <Content-view
    WebName="Sass"
    adress="https://www.sass.hk/"
    PicAdress="https://www.sass.hk/favicon.ico">
    </Content-view>
    <Content-view
    WebName="Stylus"
    adress="https://stylus.bootcss.com/docs/selectors.html"
    PicAdress="https://stylus.bootcss.com/img/stylus-logo.png">
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
  .CompatibleView{
    width: 100%;
    height: auto;
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
