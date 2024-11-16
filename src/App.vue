<template>
  <div>
    <div class='myheader' v-show='$store.state.isTabbarShow'>
      <ul class='header-nav'>
      <div class='header-line1'>
        <router-link to="/" custom v-slot='{navigate , isActive}' class='header-main'>
          <li @click='navigate' :class="isActive?'':''">通用类(Generic Class)</li>
        </router-link>
        <router-link to="/css" custom v-slot='{navigate , isActive}' class="header-other">
          <li @click='navigate' :class="isActive?'router-link-exact-active':''">CSS样式(CSS)</li>
        </router-link>
        <router-link to="/Component" custom v-slot='{navigate , isActive}' class="header-component">
          <li @click='navigate' :class="isActive?'router-link-exact-active':''">组件库(Library)</li>
        </router-link>
      </div>
      <div class='header-line2'>
        <router-link to="/FrameWork" custom v-slot='{navigate , isActive}' class="header-main">
          <li @click='navigate' :class="isActive?'router-link-exact-active':''">框架(Framework)</li>
        </router-link>
        <router-link to="/CompatibleView" custom v-slot='{navigate , isActive}' class="header-other">
          <li @click='navigate' :class="isActive?'router-link-exact-active':''">兼容性(Compatibility)</li>
        </router-link>
        <router-link to="/PageReference" custom v-slot='{navigate , isActive}' class="header-component">
          <li @click='navigate' :class="isActive?'router-link-exact-active':''">网页参考(Web page reference)</li>
        </router-link>
      </div>
      <div class='header-line3'>
        <router-link to="/BackEnd" custom v-slot='{navigate , isActive}' class="header-main">
          <li @click='navigate' :class="isActive?'router-link-exact-active':''">后端(Backend)</li>
        </router-link>
        <router-link to="/AgentView" custom v-slot='{navigate , isActive}' class='header-other'>
          <li @click='navigate' :class="isActive?'router-link-exact-active':''">代理(Agent)</li>
        </router-link>
        <router-link to="/ServeView" custom v-slot='{navigate , isActive}' class="header-component">
          <li @click='navigate' :class="isActive?'router-link-exact-active':''">服务器上线(ServerOnLine)</li>
        </router-link>
      </div>
    </ul>
    </div>
    <router-view class='mybody'></router-view>
  </div>
</template>

<script>

// const changecolor = {
//   mounted (el, binding) {
//     el.style.color = binding.value
//   }
// }
// export default {
//   directives: {
//     // 在模板中启用 v-focus
//     changecolor
//   }
// }
document.documentElement.style.fontSize = document.documentElement.clientWidth / 414 * 16 + 'px'
</script>
<style lang="scss" scoped>
  *{
    padding:0;
    margin:0;
    cursor:default;
  }
  .active{
    color:#ff5f16
  }
  ul{
    list-style: none;
    font-family: "Microsoft YaHei", 微软雅黑, "MicrosoftJhengHei", 华文细黑, STHeiti, MingLiu, sans-serif;
  }
  @font-face {
    font-family: Winter;
    src: url();
  }
  .myheader{
    width: 100%;
    height: 7.5rem;
    margin: 2px 0;
  }
  .header-nav{
    width:100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: columns;
    li{
      border: 1px solid #000000;
    }
    position: relative;
  }
  .header-main,.header-main-title{
    width: 33.3%;
    display: flex;
    height:2.5rem;
    align-items: center;
    justify-content: center;
  }
  .header-main-title{
    color:red;
  }
  .header-other{
    display: flex;
    width: 33.3%;
    height:2.5rem;
    align-items: center;
    justify-content: center;
  }
  .header-component{
    display: flex;
    width: 33.3%;
    height:2.5rem;
    align-items: center;
    justify-content: center;
  }
  .header-line1{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position:absolute;
    top:0;
    li{
      font-size:16px;
    }
  }
  .header-line2{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
    top:2.5rem;
  }
  .header-line3{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
    top:5rem;
  }
  .mybody{
    width: 100%;
  }
  .router-link-exact-active{
    color:red;
    transition: all 1s cubic-bezier(0,1.02,1,1);
  }
</style>
