<template>
  <div class="slides">
    <div class="slide-pic">
      <img v-bind:src="currentImage" alt="random image" class="fade" />
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      images: [
        require("@/assets/1.png"),
        require("@/assets/2.png"),
        require("@/assets/8.png"),
        require("@/assets/9.png"),
        require("@/assets/10.png"),
        require("@/assets/11.png"),
        require("@/assets/13.png"),
        require("@/assets/14.png"),
        require("@/assets/15.png"),
        require("@/assets/16.png"),
        require("@/assets/17.png"),
        require("@/assets/22.png"),
        require("@/assets/24.png"),
        require("@/assets/25.png"),
        require("@/assets/26.png"),
        require("@/assets/27.png"),
        require("@/assets/28.png"),
        require("@/assets/29.png"),
        require("@/assets/30.png"),
        require("@/assets/3.webp"),
        require("@/assets/31.png"),
        require("@/assets/32.png"),
        require("@/assets/33.png"),
        require("@/assets/35.png"),
        require("@/assets/38.png"),
        require("@/assets/39.png"),
        require("@/assets/40.png"),
        require("@/assets/41.png"),
        require("@/assets/42.png"),
        require("@/assets/43.png"),
        require("@/assets/44.png"),
        require("@/assets/46.png"),
        require("@/assets/47.png"),
        require("@/assets/48.png"),
        require("@/assets/49.png"),
        require("@/assets/4.png"),
        require("@/assets/50.png"),
        require("@/assets/5.png"),
        require("@/assets/51.png"),
        require("@/assets/52.png"),
        require("@/assets/53.png"),
        require("@/assets/54.png"),
        require("@/assets/55.png"),
        require("@/assets/56.png"),
        require("@/assets/57.png"),
        require("@/assets/58.png"),
        require("@/assets/59.png"),
        require("@/assets/60.png"),
        require("@/assets/6.png"),
        require("@/assets/61.png"),
        require("@/assets/62.png"),
        require("@/assets/63.png"),
        require("@/assets/64.png"),
        require("@/assets/66.png"),
        require("@/assets/67.png"),
        require("@/assets/68.png"),
        require("@/assets/69.png"),
        require("@/assets/70.png"),
        require("@/assets/7.webp"),
        require("@/assets/71.png"),
        require("@/assets/72.png"),
        require("@/assets/73.png"),
        require("@/assets/74.png"),
        require("@/assets/75.png"),
        require("@/assets/76.png"),
        require("@/assets/77.png"),
        require("@/assets/78.png"),
        require("@/assets/79.png"),
        require("@/assets/80.png"),
        require("@/assets/81.png"),
        require("@/assets/82.png"),
        require("@/assets/83.png"),
        require("@/assets/84.png"),
        require("@/assets/85.png"),
        require("@/assets/86.png"),
        require("@/assets/87.png"),
        require("@/assets/88.png"),
        require("@/assets/89.png"),
        require("@/assets/90.png"),
        require("@/assets/91.png"),
        require("@/assets/92.png"),
        require("@/assets/93.png"),
        require("@/assets/94.png"),
        require("@/assets/95.png"),
        require("@/assets/96.png"),
        require("@/assets/97.png"),
        require("@/assets/98.png"),
        require("@/assets/99.png"),
        require("@/assets/100.png"),
        require("@/assets/111.png"),
        require("@/assets/112.png"),
        require("@/assets/113.png"),
        require("@/assets/114.png"),
        require("@/assets/115.png"),
        require("@/assets/116.png"),
        require("@/assets/117.png"),
        require("@/assets/118.png"),
        require("@/assets/119.png"),
        require("@/assets/120.png"),
        require("@/assets/121.png"),
        require("@/assets/122.png"),
        require("@/assets/123.png"),
        require("@/assets/124.png"),
        require("@/assets/125.png"),
        require("@/assets/126.png"),
        require("@/assets/127.png"),
        require("@/assets/128.png"),
        require("@/assets/129.png"),
        require("@/assets/130.png"),
      ],
      currentImage: "",
      currentImage2: "",
      currentImage3: "",
    };
  },
  created() {
    this.updateImage();
    setInterval(() => {
      this.updateImage();
    }, 3000);
    this.updateImage2();
    setInterval(() => {
      this.updateImage2();
    }, 3500);
    this.updateImage3();
    setInterval(() => {
      this.updateImage3();
    }, 2300);
  },
  methods: {
    updateImage() {
      this.currentImage =
        this.images[Math.floor(Math.random() * this.images.length)];
    },
    updateImage2() {
      this.currentImage2 =
        this.images[Math.floor(Math.random() * this.images.length)];
    },
    updateImage3() {
      this.currentImage3 =
        this.images[Math.floor(Math.random() * this.images.length)];
    },
  },
};
</script>
<style>
.slides {
  flex-basis: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 1rem;
  width: 285px;
}

.slides .slide-pic img {
  width: 100%;
  animation: blink 5s infinite;
  object-fit: cover;
  z-index: 1;
  height: 70vh;
  min-height: 250px;
  overflow-x: hidden;
  max-height: 50vh;
}
@keyframes blink {
  50% {
    opacity: 0.6;
  }
}
@media (max-width: 1020px) {
  .slides {
    position: fixed;
    height: 70vh;
    display: flex;
    margin: auto;
    opacity: 0.3;
  }
  .slides .slide-pic img {
  }
}
</style>