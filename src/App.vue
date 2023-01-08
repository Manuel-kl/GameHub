<template>
  <nav></nav>
  <router-view />
</template>

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
  /*  */
  --tile-bg-color: #32303d;
  --main-bg-color: #1b1b1b;
  --dark-blue-tile: #23212e;
  --sidebar-bg-color: #23212e;
  --font-family-base: "PT Sans", sans-serif;
  --font-family-roboto: "Roboto Condensed", sans-serif;
}

.body-container {
  display: flex;
  flex-wrap: wrap;
}

main {
  flex: 1;
  background-color: var(--main-bg-color);
}

.body-container {
  display: flex;
  flex-wrap: wrap;
}

.slides {
  flex-basis: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
}

.slides .slide-pic img {
  width: 100%;
}

.table-rank,
.top-scorers {
  display: flex;
  padding: 1rem 0 0 3rem;
}
</style>
