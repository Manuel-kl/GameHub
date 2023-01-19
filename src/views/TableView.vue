<template>
  <div class="app">
    <section class="navbar">
      <nav-bar />
    </section>
    <section>
      <side-bar />
      <main>
        <div class="container">
          <random-image class="random-left" />
          <table-component class="table" />
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
import SideBar from "@/components/SideBar.vue";
import TableComponent from "@/components/TableComponent.vue";
export default {
  components: { NavBar, SideBar, TableComponent, RandomImage, FooterComponent },
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
  justify-content: center !important;
}
.table {
  margin: 1rem;
}
</style>