<template>
  <div class="slides">
    <div class="slide-pic" v-for="image in images" :key="image.id">
      <img
        v-if="images.indexOf(image) === currentIndex"
        :src="imagePreview + image.image"
        alt=""
        class="fade"
      />
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      images: [],
      imagePreview: "https://temp.cvv-metro.org/storage/app/public/",
      currentIndex: 0,
    };
  },
  created() {},
  methods: {
    startInterval() {
      setInterval(() => {
        this.currentIndex++;
        if (this.currentIndex >= this.images.length) {
          this.currentIndex = 0;
        }
      }, 7000);
    },
    fetchImages() {
      axios
        .get("https://temp.cvv-metro.org/api/image")
        .then((response) => {
          const imagesArray = response.data.images;
          this.images = imagesArray;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.fetchImages();
    setInterval(() => {
      this.fetchImages();
    }, 12000);
    this.startInterval();
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
  20% {
    opacity: 0.4;
  }
  50% {
    opacity: 1;
  }
  80% {
    opacity: 0.7;
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