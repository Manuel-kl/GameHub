<template>
  <div class="sidebar">
    <div
      class="menu-icon"
      v-on:click="toggleSidebar"
      v-bind:class="{ sidebarOpen: sidebarOpen }"
    >
      <font-awesome-icon
        v-if="!sidebarOpen"
        icon="fa-solid fa-bars"
        class="side-bar-open"
        id="my-button"
      />
      <font-awesome-icon
        v-if="sidebarOpen"
        v-bind:class="{ rotate }"
        icon="fa-solid fa-x"
        id="my-button"
      />
    </div>
    <aside v-bind:class="{ open: sidebarOpen }">
      <div class="title">
        <h2>Competitions</h2>
      </div>
      <div class="leagues">
        <div class="league" id="my-button">
          <router-link to="/table/PL"> <h4>Premier League</h4></router-link>
        </div>
        <div class="league" id="my-button">
          <router-link to="/BL1"> <h4>Bundesliga</h4></router-link>
        </div>
        <div class="league" id="my-button">
          <router-link to="/table/SA"> <h4>Serie A</h4></router-link>
        </div>
        <div class="league" id="my-button">
          <router-link to="/table/FL1"> <h4>Ligue 1</h4></router-link>
        </div>
        <div class="league" id="my-button">
          <router-link to="/table/ELC">
            <h4>English League Championship</h4>
          </router-link>
        </div>
        <div class="league" id="my-button">
          <router-link to="/">
            <h4>Champions League</h4>
          </router-link>
        </div>
      </div>
    </aside>
  </div>
</template>
<script>
import { toggleSidebarMixin } from "./mixins/toggleSidebarMixin";
export default {
  components: {},
  mixins: [toggleSidebarMixin],
  props: {},
  data() {
    return {
      sidebarOpen: false,
      rotate: false,
    };
  },
  created() {},
  methods: {
    rotateIcon() {
      setTimeout(() => {
        this.rotate = true;
      }, 1000);
    },
  },
  mounted() {
    this.rotateIcon();
    // Add an event listener to track scrolling
    window.addEventListener("scroll", function () {
      // Track a scroll event in Matomo
      window._paq.push(["trackEvent", "Window", "Scroll"]);
    });
    // Add an event listener to track clicks on the button
    document.getElementById("my-button").addEventListener("click", function () {
      // Track a click event in Matomo
      window._paq.push(["trackEvent", "Button", "Click"]);
    });
  },
};
</script>

<style lang='css' scoped>
.sidebar {
  background-color: var(--main-bg-color);
  position: absolute;
  z-index: 10;
  background-color: rgba(27, 27, 27, 0);
}

.rotate {
  animation: rotate 5s linear infinite;
  transition: all 0.5s ease-in-out;
}
@keyframes rotate {
  0% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(-10deg);
  }
}

aside.open {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: rgba(27, 27, 27, 0);
  gap: 2rem;
  transform: translateX(0);
  transition: all 0.5s ease-out;
  width: 230px;
  position: relative;
}

.menu-icon {
  position: absolute;
  top: -5px;
  font-size: 1.5rem;
  color: var(--main-green);
  z-index: 2;
  text-align: center;
  left: 0px;
  border-radius: 15px;
  transition: all 0.5s ease-out;
  margin-left: 5px;
  padding: 1rem;
  cursor: pointer;
}
.sidebarOpen {
  border-radius: 15px;
  position: absolute;
  top: 15px;
  font-size: 1.5rem;
  color: var(--main-green);
  z-index: 2;
  text-align: center;
  left: 240px;
  transition: all 0.5s ease-out;
  margin-left: 5px;
  padding: 1rem;
  cursor: pointer;
}
.menu-icon:hover {
  padding: 1rem;
  background-color: var(--sidebar-bg-color);
  border-radius: 5px;
  margin-left: 4px;
  transition: all 0.5s ease-out;
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
  z-index: 223;
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
@media (max-width: 1275px) {
  aside.open {
    background-color: rgba(27, 27, 27, 0.7);
  }
  .sidebarOpen {
    background-color: var(--sidebar-bg-color);
    border-radius: 0;
    border-bottom: 1px groove var(--yellow);
    animation: blink 5s infinite;
  }
  @keyframes blink {
    50% {
      opacity: 0.7;
    }
  }
}
@media (max-width: 900px) {
  aside .league h4 {
    font-size: 1rem;
  }
  aside .leagues .league {
    text-align: center;
    padding: 0.7rem 1rem;
  }
}
</style>