<template>
    <div class="Agent">
    <Content-view
    WebName="Envoy"
    adress="https://www.envoyproxy.io/"
    PicAdress="https://www.envoyproxy.io/favicon.ico">
    </Content-view>
    <Content-view
    WebName="Nginx"
    adress="https://www.nginx-cn.net/?utm_medium=cpc&utm_source=baidu&utm_campaign=apcj_china-nx_ssap_ngx"
    PicAdress="https://www.nginx-cn.net/content/dam/www/zh_cn-assets/nginx.svg">
    </Content-view>

    </div>
  </template>
<script>
import ContentView from '@/components/ContentView.vue'
import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
export default {
  components: { ContentView },
  data () {
    return {
      activeName: 'introduce'
    }
  }
}
</script>
  <style lang="scss" scoped>
  *{
    margin:0;
    padding:0;
  }
  .Agent{
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
