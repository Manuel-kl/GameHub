<template>
  <div class="slides">
    <div class="slide-pic">
      <img v-bind:src="currentImage" alt="random image" class="fade" />
    </div>
    <div class="slide-pic">
      <img v-bind:src="currentImage2" alt="random image" class="fade" />
    </div>
    <div class="slide-pic">
      <img v-bind:src="currentImage3" alt="random image" class="fade" />
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      images: [
        require("@/assets/12.png"),
        require("@/assets/13.png"),
        require("@/assets/11.png"),
        require("@/assets/13.png"),
        require("@/assets/14.png"),
        require("@/assets/15.png"),
        require("@/assets/16.png"),
        require("@/assets/17.png"),
        require("@/assets/2.png"),
        require("@/assets/22.png"),
        require("@/assets/24.png"),
        require("@/assets/25.png"),
        require("@/assets/26.png"),
        require("@/assets/27.png"),
        require("@/assets/3.webp"),
        require("@/assets/31.png"),
        require("@/assets/32.png"),
        require("@/assets/33.png"),
        require("@/assets/34.webp"),
        require("@/assets/35.png"),
        require("@/assets/41.png"),
        require("@/assets/42.png"),
        require("@/assets/43.png"),
        require("@/assets/44.png"),
        require("@/assets/45.webp"),
        require("@/assets/46.png"),
        require("@/assets/47.png"),
        require("@/assets/4.png"),
        require("@/assets/5.png"),
        require("@/assets/51.png"),
        require("@/assets/52.png"),
        require("@/assets/53.png"),
        require("@/assets/54.png"),
        require("@/assets/55.png"),
        require("@/assets/56.png"),
        require("@/assets/57.png"),
        require("@/assets/6.png"),
        require("@/assets/61.png"),
        require("@/assets/62.png"),
        require("@/assets/63.png"),
        require("@/assets/64.png"),
        require("@/assets/66.png"),
        require("@/assets/67.png"),
        require("@/assets/7.webp"),
        require("@/assets/71.png"),
        require("@/assets/34.webp"),
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
