<template>
    <div class='control'>
        <div class='contorl-left'>
            <div>
                <div class='contorl-title'>
                    JavaScript框架
                </div>
                <p>Vue.js</p>
                <p>GSAP</p>
                <p>Next.js</p>
                <p>React</p>
            </div>
            <div>
                <div class='contorl-title'>
                    安全
                </div>
                <p>Gee Test</p>
            </div>
            <div>
                <div class='contorl-title'>
                    富文本编辑器
                </div>
                <p>Quill</p>
            </div>
            <div>
                <div class='contorl-title'>
                    JavaScript图形
                </div>
                <p>Konva.js</p>
            </div>
            <div>
                <div class='contorl-title'>
                    编程语言
                </div>
                <p>Node.js</p>
            </div>
            <div>
                <div class='contorl-title'>
                    静态站点生成器
                </div>
                <p>Next.js</p>
            </div>
            <div>
                <div class='contorl-title'>
                    JavaScript库
                </div>
                <p>FingerprintJS</p>
                <p>core-js</p>
                <p>crypto-js</p>
                <p>Hammer.js</p>
                <p>MobX</p>
                <p>lit-element</p>
                <p>lit-html</p>
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
                    web框架
                </div>
                <p>Marko</p>
                <p>Express</p>
                <p>Next.js</p>
            </div>
            <div>
                <div class='contorl-title'>
                    杂项
                </div>
                <p>Open Graph</p>
                <p>Module Federation</p>
                <p>HTTP/2</p>
                <p>LottieFiles</p>
                <p>Babel</p>
                <p>Vite</p>
                <p>WebPack</p>
            </div>
            <div>
                <div class='contorl-title'>
                    Web服务器
                </div>
                <p>Express</p>
                <p>Next.js</p>
            </div>
            <div>
                <div class='contorl-title'>
                    用户界面(UI)框架
                </div>
                <p>Marko</p>
                <p>ElementUI</p>
            </div>
            <div>
                <div class='contorl-title'>
                    Browser fingerprinting
                </div>
                <p>FingerprintJS</p>
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
