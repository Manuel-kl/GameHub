<template>
  <div class="app">
    <section class="navbar">
      <nav-bar />
      <div class="sm-nav">
        <select v-model="selectedRoute" @change="changeRoute">
          <option value="/table" id="my-button">Table</option>
          <option value="/matches" id="my-button">Matches</option>
          <option value="/results" id="my-button">Results</option>
          <option value="/scorers" id="my-button">Scorers</option>
        </select>
        <font-awesome-icon icon="fa-solid fa-chevron-down" id="caret-down" />
      </div>
    </section>
    <section>
      <side-bar />
      <main>
        <div class="container">
          <keep-alive include="">
            <random-image class="random-left" />
          </keep-alive>
          <table-component class="table" />
          <keep-alive>
            <random-image />
          </keep-alive>
        </div>
      </main>
    </section>
    <section class="footer">
      <footer-component />
    </section>
  </div>
</template>
<script>
import FooterComponent from "@/components/FooterComponent.vue";
import NavBar from "@/components/NavBar.vue";
import RandomImage from "@/components/RandomImage.vue";
import SideBar from "@/components/SideBar.vue";
import TableComponent from "@/components/TableComponent.vue";
export default {
  components: { NavBar, SideBar, TableComponent, RandomImage, FooterComponent },
  props: {},
  data() {
    return {
      selectedRoute: "/table",
    };
  },
  created() {},
  methods: {
    changeRoute() {
      this.$router.push({ path: this.selectedRoute });
    },
  },
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
<style lang='css' scoped>
.container {
  display: flex;
  padding: 1rem;
  display: flex;
  justify-content: center !important;
}
.table {
  margin: 1rem;
}
</style>