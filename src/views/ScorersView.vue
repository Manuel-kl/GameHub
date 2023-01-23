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
      <main>
        <div class="top-scorers">
          <random-image class="random-left" />
          <scorers-component class="scorers" />
          <random-image />
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
import ScorersComponent from "@/components/ScorersComponent.vue";
import SideBar from "@/components/SideBar.vue";
export default {
  components: {
    NavBar,
    SideBar,
    ScorersComponent,
    RandomImage,
    FooterComponent,
  },
  props: {},
  data() {
    return {
      selectedRoute: "/scorers",
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

  <style lang='css' scoped>
.top-scorers {
  display: flex;
  padding: 1rem;
  display: flex;
  justify-content: center;
}
.scorers {
  margin: 1rem;
}
@media (max-width: 500px) {
  .top-scorers {
    padding: 1rem 0 !important;
  }
}
</style>