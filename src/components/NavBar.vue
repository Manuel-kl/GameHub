<template>
  <nav>
    <div class="app-name">
      <router-link to="/">
        <h1>Game<span>Hub</span></h1>
      </router-link>
    </div>
    <div class="nav-links">
      <ul>
        <li>
          <router-link to="/table" active-class="active">Table</router-link>
        </li>
        <li>
          <router-link to="/matches" active-class="active"
            >Fixtures</router-link
          >
        </li>
        <li>
          <router-link to="/results" active-class="active">Results</router-link>
        </li>
        <li>
          <router-link to="/scorers" active-class="active">Scorers</router-link>
        </li>
      </ul>
    </div>
    <!-- <div class="sm-nav">
      <select v-model="selectedRoute" @change="changeRoute">
        <option value="/table">Table</option>
        <option value="/matches">Matches</option>
        <option value="/results">Results</option>
        <option value="/scorers">Scorers</option>
      </select>
    </div> -->
  </nav>
</template>
<script>
export default {
  watch: {},
  data() {
    return {
      selectedRoute: "matches",
    };
  },
  methods: {
    changeRoute() {
      this.$router.push({ path: this.selectedRoute });
    },
  },
  created() {},
};
</script>

<style lang='css' scoped>
nav {
  display: flex;
  flex-direction: row;
  background-color: var(--tile-bg-color);
  padding: 1rem;
  align-items: center;
}

nav h1 {
  color: var(--white);
  font-family: var(--font-family-roboto);
  line-height: 1.5rem;
  font-size: 2rem;
  background-color: var(--dark-blue-tile);
  width: fit-content;
  letter-spacing: 1px;
  padding: 1rem;
  margin-right: 1rem;
  border-radius: 7px;
  box-shadow: 1px 1px 0px var(--main-green);
}

nav h1 span {
  font-family: var(--font-family-roboto);
  color: var(--yellow);
}

.nav-links {
  display: flex;
  flex: 1;
  justify-content: center;
}

nav ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: center;
  flex: 1;
}

nav li a {
  text-decoration: none;
  color: var(--white);
  font-family: var(--font-family-roboto);
  padding: 0.7rem 1.2rem;
  font-size: 1.3rem;
  margin-right: 15px;
  border: 2px solid var(--tile-bg-color);
  transition: all 0.5s ease-in-out;
}

nav li {
}

nav li a:hover {
  border-bottom: 1px groove var(--yellow);
  border-radius: 22px;
  transition: all 0.5s ease-in-out;
  color: var(--grass-green);
}
.active,
.active:hover {
  border-bottom: none;
  border-radius: 22px;
  background-color: var(--tile-bg-color-active);
  border: 1px solid var(--tile-bg-color-active);
  transition: all 0.5s ease-in-out;
  border-bottom: 1px groove var(--yellow);
  color: var(--grass-green);
  transition: all 0.5s ease-in-out;
}
@media (max-width: 800px) {
  nav h12,
  nav ul li a {
    font-size: 1.2rem;
    padding: 0.4rem 1rem;
    margin-right: 5px;
  }
}
@media (max-width: 700px) {
  nav ul li a {
    font-size: 1.2rem;
    padding: 0.4rem 0.7rem;
    margin-right: 1px;
  }
  nav h1 {
    font-size: 1.3rem;
    padding: 0.4rem;
    text-shadow: none;
  }
}

@media (max-width: 600px) {
  .nav-links {
    display: none;
  }

  nav {
    padding: 1rem 0 1rem 1rem;
  }
}
</style>