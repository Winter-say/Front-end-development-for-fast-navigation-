<template>
    <div class="ServerOnLine">

    <Content-view
    WebName="Nginx"
    adress="https://www.nginx-cn.net/?utm_medium=cpc&utm_source=baidu&utm_campaign=apcj_china-nx_ssap_ngx"
    PicAdress="https://www.nginx-cn.net/content/dam/www/zh_cn-assets/nginx.svg"
    sname="Reverse Proxy(反向代理) ServerOnline(服务器上线)">
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
  .ServerOnLine{
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
