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
          <matches-component class="matches" />
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
.matches {
  margin: 1rem;
}
@media (max-width: 700px) {
  .matches {
    flex: 1;
  }
}
</style>