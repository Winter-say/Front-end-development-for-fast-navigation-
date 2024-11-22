<template>
    <div class="PageReference">
    <Content-view
    WebName="蔚蓝档案(BlueArchieve)官网"
    adress="https://bluearchive-cn.com/"
    PicAdress="https://webcnstatic.yostar.net/ba_cn_web/prod/web/favicon.png"
    sname="gsap">
    <li @click.stop='handleClick_BlueArchieve'>点我查看技术栈</li>
    </Content-view>
    <Content-view
    WebName="哔哩哔哩(bilibili)"
    adress="https://www.bilibili.com"
    PicAdress=""
    sname="all">
    <li @click.stop='handleClick_bilibili'>点我查看技术栈</li>
    </Content-view>
    </div>
  </template>
// qwq/bfs/static/jinkela/long/images/favicon.ico
<script>
import ContentView from '@/components/ContentView.vue'
import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'
// import axios from 'axios'

Vue.use(Vant)
export default {
  components: { ContentView },
  data () {
    return {
      activeName: 'introduce'
    }
  },
  methods: {
    handleClick_BlueArchieve () {
      this.$router.push('BlueArchieve')
    },
    handleClick_bilibili () {
      this.$router.push('bilibili')
    }
  }
}
</script>
  <style lang="scss" scoped>
  *{
    margin:0;
    padding:0;
  }
  .PageReference{
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
