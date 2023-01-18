<template>
  <div class="app">
    <section class="navbar">
      <nav-bar />
    </section>

    <section class="body-container">
      <side-bar />
      <main>
        <random-image class="random-left" />

        <random-image />
      </main>
    </section>
    <section class="footer">
      <footer-component />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import FooterComponent from "@/components/FooterComponent.vue";
import HomeComponent from "@/components/HomeComponent.vue";
import NavBar from "@/components/NavBar.vue";
import RandomImage from "@/components/RandomImage.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  name: "HomeView",
  components: {
    HomeComponent,
    NavBar,
    SideBar,
    RandomImage,
    FooterComponent,
  },
};
</script>
