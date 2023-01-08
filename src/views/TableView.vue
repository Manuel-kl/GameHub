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
            <div class="slides">
              <div class="slide-pic">
                <img src="../assets/Arsenal_FC.png" alt="Arsenal" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";
import TableComponent from "@/components/TableComponent.vue";
export default {
  components: { NavBar, SideBar, TableComponent },
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