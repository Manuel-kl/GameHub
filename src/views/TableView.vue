<template>
  <div>
    <section class="navbar">
      <nav-bar />
    </section>
    <section class="body-container">
      <side-bar />
      <main>
        <div class="table-rank">
          <div class="body-container">
            <table-component />
            <random-image />
          </div>
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
<style lang='scss' scoped>
</style>