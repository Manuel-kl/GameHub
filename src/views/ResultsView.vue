<template>
  <div class="app">
    <section class="navbar">
      <nav-bar />
    </section>
    <section class="body-container">
      <side-bar />
      <main>
        <div class="container">
          <random-image class="random-left" />
          <results-component class="results" />
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
import ResultsComponent from "@/components/ResultsComponent.vue";
import SideBar from "@/components/SideBar.vue";
export default {
  components: {
    NavBar,
    SideBar,
    ResultsComponent,
    RandomImage,
    FooterComponent,
  },
  props: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
  mounted() {},
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
</style>