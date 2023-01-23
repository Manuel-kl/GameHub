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
        <div class="container">
          <keep-alive include="">
            <random-image class="random-left" />
          </keep-alive>
          <matches-component class="matches" />
          <keep-alive include="">
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
import MatchesComponent from "@/components/MatchesComponent.vue";
import NavBar from "@/components/NavBar.vue";
import RandomImage from "@/components/RandomImage.vue";
import SideBar from "@/components/SideBar.vue";
export default {
  components: {
    NavBar,
    MatchesComponent,
    SideBar,
    RandomImage,
    FooterComponent,
  },
  props: {},
  data() {
    return {
      selectedRoute: "/matches",
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
  justify-content: center;
}
.matches {
  margin: 1rem;
}
@media (max-width: 700px) {
  .matches {
    flex: 1;
  }
}
</style>