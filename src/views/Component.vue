    <template>
        <div class="Components">
        <Content-view
        WebName="Element ui"
        adress="https://element.eleme.cn/#/zh-CN"
        PicAdress="https://element.eleme.cn/favicon.ico"
        sname="component library(组件库)">
        </Content-view>
        <Content-view
        WebName="Vant(Vue2)"
        adress="https://vant-ui.github.io/vant/v2/#/zh-CN/"
        PicAdress="https://img01.yzcdn.cn/vant/logo.png"
        sname="Mobile Component Library(移动端组件库)">
        </Content-view>
        <Content-view
        WebName="Jquery"
        adress="https://www.jq22.com/"
        PicAdress="https://www.jq22.com/favicon.ico">
        </Content-view>
        <Content-view
        WebName="BootStrap"
        adress="https://www.bootcss.com/"
        PicAdress="https://www.bootcss.com/assets/favicons/favicon.ico">
        </Content-view>
        <Content-view
        WebName="Swiper"
        adress="https://www.swiper.com.cn/"
        PicAdress="https://www.swiper.com.cn/favicon.ico">
        </Content-view>
        <Content-view
        WebName="Axios(GitHub)"
        adress="https://github.com/axios/axios"
        PicAdress="https://avatars.githubusercontent.com/u/32372333?s=80&v=4">
        </Content-view>
        <Content-view
        WebName="Ant Design"
        adress="https://ant-design.antgroup.com/index-cn"
        PicAdress="https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png">
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
    .Components{
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
