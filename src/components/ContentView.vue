<template>
  <div class="card">
    <div class="outer-card" @click="HandleGo">
      <div class="pic-card">
        <img :src="PicAdress" alt="">
      </div>
      <div class="art-card">
        <p>{{ WebName }}</p>
        <p class="ad">网址:{{ adress }}</p>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['WebName', 'adress', 'PicAdress'],
  methods: {
    HandleGo () {
      location.href = `${this.adress}`
    }
  }
}
</script>

<style scoped lang="scss">
*{
  padding: 0;
  margin: 0;
}
.card{
  width: 90%;
  height: 6rem;
  display: flex;
  font-size:16px;
  background-color: #9697991c;
  border-radius: 1rem;
  margin: 2%;
}
.card::after{
  content:"";
  display: block;
  clear:both;
}
.outer-card{
  width: 100%;
  height: 6rem;
  position: relative;
}
.pic-card{
  width: 4rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
  img{
    width: 3rem;
    height: 3rem;
  }
}
.art-card{
  width: calc(90% - 3rem);
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  float: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
