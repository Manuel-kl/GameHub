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
          <router-link to="/matches" active-class="active">Matches</router-link>
        </li>
        <li>
          <router-link to="/results" active-class="active">Results</router-link>
        </li>
        <li>
          <router-link to="/scorers" active-class="active">Scorers</router-link>
        </li>
        <li>
          <router-link to="/table" active-class="active">Table</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
  mounted() {},
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
  text-shadow: 1px -2px 1px var(--main-green);
  font-family: var(--font-family-roboto);
  line-height: 1.5rem;
  font-size: 2rem;
  background-color: var(--dark-blue-tile);
  width: fit-content;
  padding: 1rem;
  border-radius: 7px;
  box-shadow: 1px 1px 0px var(--main-green);
}

nav h1 span {
  font-family: Arial, Helvetica, sans-serif;
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
}

nav li {
}

nav li a:hover,
.active {
  border-bottom: 1px groove var(--main-green);
  border-radius: 22px;
  box-shadow: 1px 1px 2px 1px var(--grass-green);
  color: var(--grass-green);
}
</style>