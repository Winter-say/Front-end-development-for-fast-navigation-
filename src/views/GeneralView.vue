<template>
  <div class="comprehensive">
    <Content-view
    WebName="MdnCode"
    adress="https://developer.mozilla.org/zh-CN/"
    PicAdress="https://developer.mozilla.org/favicon-48x48.bc390275e955dacb2e65.png"
    sname=" HTML | CSS | JavaScript | webApi | Http | Web Extensions |">
    </Content-view>
    <Content-view
    WebName="npm"
    adress="https://www.npmjs.com/"
    PicAdress="https://static-production.npmjs.com/1996fcfdf7ca81ea795f67f093d7f449.png"
    sname="Search for third-party libraries such as Axios(查找第三方库 例如:axios)">
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
.comprehensive{
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
