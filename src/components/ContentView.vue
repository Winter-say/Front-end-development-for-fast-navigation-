<template>
  <div class="card">
    <div class="outer-card" @click="HandleGo">
      <div class="pic-card">
        <img :src="PicAdress" alt="图片">
      </div>
      <div class="art-card">
        <p>{{ WebName }}</p >
        <p class="ad">网址: {{ adress }}</p >
        <slot></slot>
      </div>
      <div class="detail" @click.stop="HandleNogo" v-show='$store.state.isDetailShow'>
      <img src="../assets/arrow.png" alt="箭头" @click="rotateImage">
    </div>
      <div class="detail-cha" v-show="DetailShow">
        <p>适用于(suitable for): {{ sname }}</p >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      DetailShow: false,
    }
  },
  props: ['WebName', 'adress', 'PicAdress', 'sname'],
  methods: {
    HandleGo() {
      window.location.href = this.adress;
    },
    HandleNogo() {
      this.DetailShow = !this.DetailShow;
    },
    rotateImage() {
      const img = event.target;
      const currentTransform = img.style.transform;
      if (currentTransform.includes('180deg')) {
        img.style.transform = 'rotate(0deg)';
      } else {
        img.style.transform = 'rotate(180deg)';
      }
  }
          }
}
</script>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}

.detail img {
  width: 1rem;
  height: 0.8rem;
  background-size: 100% 100%;
  transition: transform 0.5s;
}

.card {
  width: 90%;
  height: 6rem;
  display: flex;
  font-size: 16px;
  background-color: rgba(150, 151, 153, 0.11); // 更清晰的颜色表示
  border-radius: 1rem;
  margin: 5%;
}

.card::after {
  content: "";
  display: block;
  clear: both;
}

.outer-card {
  width: 100%;
  height: 6rem;
  position: relative;
}

.pic-card {
  width: 4rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
}

.pic-card img {
  width: 3rem;
  height: 3rem;
}

.art-card {
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

.detail {
  width: inherit;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
}

.detail img {
  width: 1rem;
  height: 0.8rem;
  background-size: 100% 100%;
}

.detail-cha {
  width: inherit;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: start;
  position: absolute;
  bottom: -2rem;
}
</style>