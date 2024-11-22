<template>
    <div class="BackEnd">
    <Content-view
    WebName="Node.js"
    adress="https://nodejs.cn/api/"
    PicAdress="https://img.nodejs.cn/favicon.png">
    </Content-view>
    <Content-view
    WebName="Express"
    adress="https://www.expressjs.com.cn/"
    PicAdress="https://www.expressjs.com.cn/images/favicon.png">
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
  },  mounted () {
    this.$store.commit('HideDetail')
  },
  beforeDestroy () {
    this.$store.commit('ShowDetail')
  }
}
</script>
  <style lang="scss" scoped>
  *{
    margin:0;
    padding:0;
  }
  .BackEnd{
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
