<template>
  <div class="sidebar">
    <font-awesome-icon
      icon="fa-solid fa-bars"
      class="menu-icon"
      v-on:click="toggleSidebar"
    />
    <aside v-bind:class="{ open: sidebarOpen }">
      <div class="title">
        <h2>Competitions</h2>
      </div>
      <div class="leagues">
        <div class="league">
          <h4>Premier League</h4>
        </div>
        <div class="league">
          <h4>Bundesliga</h4>
        </div>
        <div class="league">
          <h4>Serie A</h4>
        </div>
        <div class="league">
          <h4>Ligue 1</h4>
        </div>
        <div class="league">
          <h4>English League Championship</h4>
        </div>
        <div class="league">
          <h4>UEFA Champions League</h4>
        </div>
      </div>
    </aside>
  </div>
</template>
<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      sidebarOpen: true,
    };
  },
  created() {},
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
  },
  mounted() {},
};
</script>

<style lang='css' scoped>
.sidebar {
  background-color: var(--main-bg-color);
}
aside.open {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: var(--main-bg-color);
  gap: 2rem;
  transform: translateX(0);
  transition: all 0.5s ease-out;
  width: 230px;
  position: relative;
}

.menu-icon {
  position: absolute;
  top: 105px;
  font-size: 1.5rem;
  color: var(--main-green);
  z-index: 2;
  left: 0px;
  padding: 1rem;
  border-radius: 50%;
  transition: all 0.5s ease-out;
  margin-left: 5px;
  cursor: pointer;
}
.menu-icon:hover {
  background-color: var(--tile-bg-color);
  padding: 1rem;
  margin-left: 4px;
  transition: all 0.5s ease-out;
  border-radius: 50%;
}

aside {
  transform: translateX(-100%);
  transition: all 0.5s ease-out;
  position: fixed;
}

aside .title {
  text-align: center;
  color: var(--black);
  font-family: var(--font-family-roboto);
}

aside .title h2 {
  color: var(--main-green);
  background-color: var(--dark-blue-tile);
  padding: 1rem 2rem;
  border-radius: 5px;
  border-bottom: 1px groove var(--faded-gray);
}

aside .leagues {
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 5px;
  background-color: var(--dark-blue-tile);
  gap: 0.5rem;
}

aside .leagues .league {
  text-align: center;
  padding: 0.7rem 1.2rem;
  border-bottom: 1px groove var(--tile-bg-color);
  font-size: 0.71rem;
  transition: all 0.6s ease-out;
  border-radius: 5px;
  max-width: 210px;
}

aside .leagues .league:active,
aside .leagues .league:hover {
  box-shadow: 2px 2px 1px var(--yellow);
  border-top: 1px groove var(--grass-green);
  border-left: 1px groove var(--grass-green);
  background-color: var(--tile-bg-color);
  margin-right: -0.5rem;
  transition: all 0.5s ease-in-out;
}

aside .league h4 {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--white);
  text-align: center;
  font-family: var(--font-family-base);
}
</style>