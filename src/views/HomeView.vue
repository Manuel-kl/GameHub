<template>
  <div>
    <table-view />
  </div>
</template>
<script>
import TableView from "./TableView.vue";
export default {
  components: { TableView },
  props: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
  mounted() {
    // Add an event listener to track scrolling
    window.addEventListener("scroll", function () {
      // Track a scroll event in Matomo
      window._paq.push(["trackEvent", "Window", "Scroll"]);
    });
    // Add an event listener to track clicks on the button
    document.getElementById("my-button").addEventListener("click", function () {
      // Track a click event in Matomo
      window._paq.push(["trackEvent", "Button", "Click"]);
    });
  },
};
</script>
<style scoped>
</style>
<style lang='scss' scoped>
</style>