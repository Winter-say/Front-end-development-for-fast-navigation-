<template>
    <div class='control'>
        <div class='contorl-left'>
            <div>
                <div class='contorl-title'>
                    分析
                </div>
                <p>Google Analytics</p>
            </div>
            <div>
                <div class='contorl-title'>
                    JavaScript框架
                </div>
                <p>Vue.js</p>
                <p>GSAP</p>
            </div>
            <div>
                <div class='contorl-title'>
                    杂项
                </div>
                <p> Open Graph</p>
            </div>
        </div>
        <div class='contorl-right'>
            <div>
                <div class='contorl-title'>
                    标签管理器
                </div>
                <p> Google Tag Manager</p>
            </div>
            <div>
                <div class='contorl-title'>
                    JavaScript库
                </div>
                <p>Swiper</p>
            </div>
            <div>
                <div class='contorl-title'>
                    反向代理
                </div>
                <p>Envoy</p>
            </div>
            <div>
                <div class='contorl-title'>
                    用户界面(UI)框架
                </div>
                <p> Ant Design</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  mounted () {
    this.$store.commit('hide')
  },
  beforeDestroy () {
    this.$store.commit('show')
  }
}
</script>
<style lang='scss' scoped>
.control{
    width:90%;
    height: auto;
    display: flex;
    background-color: #9697991c;
    border-radius: 1rem;
}
.contorl-left{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.contorl-right{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.contorl-title{
    font-size:1.5rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color:red;

}
</style>
