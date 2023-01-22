<template>
  <div></div>

  <keep-alive include="['RandomImage']">
    <router-view />
  </keep-alive>
</template>
<script>
import RandomImage from "./components/RandomImage.vue";
export default {
  components: { RandomImage },
  props: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
  mounted() {},
};
</script>
<style lang="css">
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

::selection {
  background-color: var(--main-green);
}

:root {
  --main-green: #42c56c;
  --grass-green: #7ed957;
  --dark-gray: #545454;
  --faded-gray: #a9b6ad;
  --black: black;
  --yellow: #ffde59;
  --white: white;
  --red: red;
  /*  */
  --tile-bg-color: #32303d;
  --tile-bg-color-active: #3e3c4b;
  --main-bg-color: #1b1b1b;
  --dark-blue-tile: #23212e;
  --sidebar-bg-color: #23212e;
  --font-family-base: "PT Sans", sans-serif;
  --font-family-roboto: "Roboto Condensed", sans-serif;
}
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--main-bg-color);
}

.body-container {
  display: flex;
  justify-content: space-between;
  flex: 1;
}

main {
  flex: 1;
  background-color: var(--main-bg-color);
  transition: all 0.3s ease-out;
  padding: 1rem 0;
}

.table-rank {
  display: flex;
  padding: 1rem 0 0 3rem;
}
th,
tr,
td {
  z-index: 2;
}
table {
  z-index: 3;
}
.team-row {
  display: flex;
  flex-direction: row;
}

.team-row img {
  padding-right: 1rem;
  vertical-align: middle;
  width: 20px;
}

.pagination {
  display: flex;
  flex-direction: row;
  padding: 2rem;
  justify-content: center;
  font-family: var(--font-family-roboto);
  z-index: 5;
  position: relative;
}
.pagination button:hover {
  border: 1px groove var(--grass-green);
  transition: all 0.5s ease-in-out;
}
.pagination span {
  color: var(--grass-green);
  font-size: 1rem;
  margin: 0.2rem;
  width: 0.7rem;
}
.page-buttons {
  display: flex;
  justify-content: center;
  z-index: 1;
  align-items: center;
}
.page-buttons button {
  padding: 10px;
  margin: 0 5px;
  transition: all 0.3s ease-in-out;
  font-size: 1rem;
  width: 40px;
  border: 1px solid var(--tile-bg-color);
  background: var(--tile-bg-color);
  color: var(--white);
  border-radius: 3px;
  cursor: pointer;
}
.page-buttons button.current-page {
  background: #4caf50;
  color: #fff;
}
.navigation-buttons {
  background-color: var(--tile-bg-color);
  color: var(--white);
  width: 75px;
  border: none;
  font-size: 1rem;
  border-radius: 5px;
}
.loader {
  display: flex;
  padding: 3rem;
}
.loader img {
  width: 100px;
  margin: auto;
}
@media (max-width: 1275px) {
  .random-left {
    display: none !important;
  }
}
@media (max-width: 1020px) {
}

@media (max-width: 921px) {
  table tr td,
  table th {
    font-size: 0.9rem !important;
    padding: 0.9rem !important;
  }
}
@media (max-width: 800px) {
  table tr td,
  table th {
    font-size: 0.9rem !important;
    padding: 1rem 0.6rem !important;
  }
  .pagination {
    padding: 2rem 0;
  }
  .sm-d-none {
    display: none;
  }
  .page-buttons {
    padding: 0;
  }
  .navigation-buttons {
    padding: 0.6rem 1rem;
    z-index: 1;
    width: fit-content;
    min-width: 100px;
    cursor: pointer;
    border: 1px solid var(--tile-bg-color);
  }
  .page-buttons button {
    font-size: 0.9rem;
    padding: 0.5rem;
  }
}
@media (max-width: 700px) {
}

@media (min-width: 600px) {
  .sm-nav {
    display: none;
  }
}
@media (max-width: 600px) {
  .sm-nav {
    flex: 1;
  }

  .sm-nav select {
    float: right;
    padding: 0.5rem 1.8rem 0.5rem 1.5rem;
    border: none;
    background-color: var(--dark-blue-tile);
    border-radius: 7px;
    font-size: 1.1rem;
    letter-spacing: 0.4px;
    color: var(--white);
    margin-right: 1rem;
    appearance: none;
    border: 1px solid var(--dark-blue-tile);
    cursor: pointer;
    border-bottom: 1px groove var(--grass-green);
    transition: all 0.4s ease-in-out;
    border-right: 1px groove var(--grass-green);
  }
  #caret-down {
    position: absolute;
    right: 25px;
    padding: 0;
    top: 33px;
    transform: translateY(-50%);
    color: var(--white);
  }
  select:focus,
  select:hover,
  select:focus-visible {
    background-color: var(--tile-bg-color-active);
    border: 1px groove var(--main-green);
    border-left: none;
    border-top: none;
    transition: all 0.4s ease-in-out;
    color: var(--grass-green);
  }
  select option {
    color: var(--white);
  }
  select:focus + #caret-down {
    color: var(--grass-green);
  }
  .sm-nav select:focus-visible {
    outline: none;
    border: none;
    border-bottom: 1px groove var(--grass-green);
  }

  section.navbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--tile-bg-color);
  }
}
</style>