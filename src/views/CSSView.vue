<template>
  <div class="css">
    <Content-view
    WebName="阿里字体库"
    adress="https://www.iconfont.cn/"
    PicAdress="https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg">
    </Content-view>
    <Content-view
    WebName="FontAwesome"
    adress="https://fontawesome.com.cn/"
    PicAdress="https://fontawesome.com.cn/favicon.ico">
    </Content-view>
    <Content-view
    WebName="贝塞尔曲线"
    adress="https://cubic-bezier.com/"
    PicAdress="https://srv.carbonads.net/static/30242/4b723271609d12c16fec10ddea2ce78e9bba0517">
    </Content-view>
    <Content-view
    WebName="learnui.design"
    adress="https://www.learnui.design"
    PicAdress="https://www.learnui.design/favicon.ico">
    </Content-view>
    <Content-view
    WebName="GSAP"
    adress="https://gsap.com/"
    PicAdress="https://gsap.com/favicon-32x32.png">
    </Content-view>

  </div>
</template>
<script>
// import axios from 'axios'
import ContentView from '@/components/ContentView.vue'
export default {
  // mounted () {
  //   // axios.get('/awa/favicon-32x32.png')
  //   //   .then(res => {
  //   //     console.log(res)
  //   //   })
  //   // 代理cors https://cors-anywhere.herokuapp.com/
  //   axios.get('https://gsap.com/favicon-32x32.png', {
  //     headers: {
  //       'x-frame-options': 'sameorigin'
  //     }
  //   })
  //     .then(response => {
  //       console.log(response)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // },
  // mounted () {
  //   const oscript = document.createElement('script')
  //   oscript.src = 'https://awa/gsap.com/favicon-32x32.png'
  //   document.body.appendChild(oscript)
  //   return oscript
  // },
  // destroyed (oscript) {
  //   oscript.remove()
  // },
  components: { ContentView }
  ,  mounted () {
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
.css{
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
