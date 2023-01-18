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

.pagination {
  display: flex;
  flex-direction: row;
  padding: 2rem;
  justify-content: center;
  font-family: var(--font-family-roboto);
}
.pagination button:hover {
  border: 1px groove var(--grass-green);
  transition: all 0.5s ease-in-out;
}
.pagination span {
  color: var(--grass-green);
  font-size: 1.5rem;
  height: 1vh;
  margin: 0.2rem;
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
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
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
  table tr td,
  table th {
    padding: 1rem 0.5rem !important;
  }
  table tr :nth-child(1),
  table tr :nth-child(2) {
    padding: 1rem 0.2rem !important;
  }
}
@media (max-width: 600px) {
  .sm {
    display: none;
  }
}
</style>
