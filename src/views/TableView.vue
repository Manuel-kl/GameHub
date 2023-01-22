<template>
  <div class="app">
    <section class="navbar">
      <nav-bar />
      <div class="sm-nav">
        <select v-model="selectedRoute" @change="changeRoute">
          <option value="/table">Table</option>
          <option value="/matches">Matches</option>
          <option value="/results" :selected="results">Results</option>
          <option value="/scorers">Scorers</option>
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