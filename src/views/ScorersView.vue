<template>
  <div class="app">
    <section class="navbar">
      <nav-bar />
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
    return {};
  },
  created() {},
  methods: {},
  mounted() {},
};
</script>

  <style lang='css' scoped>
.top-scorers {
  display: flex;
  padding: 1rem 0 0 3rem;
  display: flex;
  justify-content: center;
}
.scorers {
  margin: 1rem;
}
</style>