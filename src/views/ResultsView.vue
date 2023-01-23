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
    <section class="body-container">
      <side-bar />
      <main @click="closeSidebar">
        <div class="container">
          <keep-alive>
            <random-image class="random-left" />
          </keep-alive>
          <results-component class="results" />
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
import ResultsComponent from "@/components/ResultsComponent.vue";
import SideBar from "@/components/SideBar.vue";
import { toggleSidebarMixin } from "../components/mixins/toggleSidebarMixin";

export default {
  mixins: [toggleSidebarMixin],

  components: {
    NavBar,
    SideBar,
    ResultsComponent,
    RandomImage,
    FooterComponent,
  },
  props: {},
  data() {
    return {
      selectedRoute: "/results",
    };
  },
  created() {},
  methods: {
    changeRoute() {
      this.$router.push({ path: this.selectedRoute });
    },
    closeSidebar() {
      this.$emit("closeSidebar");
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
  justify-content: center;
}
.results {
  margin: 1rem;
}
@media (max-width: 700px) {
  .results {
    flex: 1;
  }
}
@media (max-width: 500px) {
  .container {
    padding: 1rem 0 !important;
  }
}
/* @media (min-width: 600px) {
  .sm-nav {
    display: none;
  }
} */
</style>