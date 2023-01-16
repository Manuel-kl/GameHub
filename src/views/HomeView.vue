<template>
  <div>
    <section class="navbar">
      <nav-bar />
    </section>
    <section class="body-container">
      <side-bar />
      <main>
        <random-image />
      </main>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
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
  },
};
</script>
