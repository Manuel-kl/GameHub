<template>
  <div>
    <section class="navbar">
      <nav-bar />
    </section>
    <section class="body-container">
      <side-bar />
      <main>
        <div class="top-scorers">
          <results-component />
          <random-image />
        </div>
      </main>
    </section>
  </div>
</template>
  <script>
import NavBar from "@/components/NavBar.vue";
import RandomImage from "@/components/RandomImage.vue";
import ResultsComponent from "@/components/ResultsComponent.vue";
import SideBar from "@/components/SideBar.vue";
export default {
  components: { NavBar, SideBar, ResultsComponent, RandomImage },
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
  <style lang='scss' scoped>
</style>