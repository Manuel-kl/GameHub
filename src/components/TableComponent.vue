<template>
  <div>
    <div>
      <div v-if="loading" class="loader">
        <img src="../assets/loading.gif" alt="" />
      </div>
      <table>
        <tr>
          <th>#</th>
          <th>Team</th>
          <th>P</th>
          <th class="sm">W</th>
          <th class="sm">D</th>
          <th class="sm">L</th>
          <th class="sm">F</th>
          <th class="sm">A</th>
          <th>GD</th>
          <th>PTS</th>
        </tr>
        <tr v-for="standing in paginatedStandings" :key="standing.team.id">
          <td>{{ standing.position }}</td>
          <td>{{ standing.team.name.replace(" FC", "") }}</td>
          <td>{{ standing.playedGames }}</td>
          <td class="sm">{{ standing.won }}</td>
          <td class="sm">{{ standing.draw }}</td>
          <td class="sm">{{ standing.lost }}</td>
          <td class="sm">{{ standing.goalsFor }}</td>
          <td class="sm">{{ standing.goalsAgainst }}</td>
          <td>{{ standing.goalDifference }}</td>
          <td>{{ standing.points }}</td>
        </tr>
      </table>
    </div>
    <div class="pagination">
      <button
        v-on:click="currentPage = currentPage - 1"
        :disabled="currentPage == 1"
        class="navigation-buttons"
      >
        Previous
      </button>
      <div class="page-buttons">
        <button
          v-if="currentPage <= totalPages && currentPage != pageOne"
          v-on:click="currentPage = pageOne"
        >
          {{ pageOne }}
        </button>
        <span v-if="currentPage != pageOne">...</span>
        <button
          v-if="currentPage > 2"
          v-on:click="currentPage = currentPage - 2"
        >
          {{ currentPage - 2 }}
        </button>
        <button
          v-if="currentPage > 1"
          v-on:click="currentPage = currentPage - 1"
        >
          {{ currentPage - 1 }}
        </button>
        <button v-on:click="currentPage = currentPage" class="current-page">
          {{ currentPage }}
        </button>
        <button
          v-if="currentPage < totalPages"
          v-on:click="currentPage = currentPage + 1"
        >
          {{ currentPage + 1 }}
        </button>
        <button
          v-if="currentPage < totalPages - 1"
          v-on:click="currentPage = currentPage + 2"
        >
          {{ currentPage + 2 }}
        </button>

        <span v-if="currentPage != totalPages"> ... </span>
        <button
          v-if="currentPage < totalPages"
          v-on:click="currentPage = totalPages"
        >
          {{ totalPages }}
        </button>
      </div>

      <button
        v-on:click="currentPage = currentPage + 1"
        :disabled="currentPage == totalPages"
        class="navigation-buttons"
      >
        Next
      </button>
    </div>
  </div>
</template>
  <script>
import axios from "axios";
export default {
  components: {},
  props: {},
  data() {
    return {
      standings: [],
      currentPage: 1,
      pageOne: 1,
      loading: true,
    };
  },
  created() {
    axios
      .get("https://api.football-data.org/v2/competitions/2021/standings", {
        headers: {
          "X-Auth-Token": process.env.VUE_APP_API_KEY,
        },
      })
      .then((response) => {
        setTimeout(() => {
          this.standings = response.data.standings[0].table;
          this.loading = false;
        }, 500);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {},
  mounted() {},
  computed: {
    paginatedStandings() {
      const start = (this.currentPage - 1) * 10;
      return this.standings.slice(start, start + 10);
    },
    totalPages() {
      return Math.ceil(this.standings.length / 10);
    },
  },
};
</script>

<style lang='css' scoped>
td:first-child,
tr:first-child {
  width: fit-content;
}

th:nth-child(2) {
  width: 150px;
}

th:nth-child(n + 3) {
  width: 30px;
}

table {
  background-color: var(--tile-bg-color);
  border-radius: 5px;
  border-collapse: collapse;
  color: var(--white);
  margin: auto;
}

table th {
  background-color: var(--dark-blue-tile);
  padding: 1rem;
  border-radius: 5px;
  border-right: 1px solid var(--tile-bg-color);
  font-family: var(--font-family-roboto);
  border-bottom: 2px groove var(--grass-green);
  text-align: center;
}

table tr td {
  padding: 0.7rem;
  font-family: var(--font-family-base);
  text-align: center;
  vertical-align: middle;
  border: 1px groove var(--faded-gray);
  font-size: 1rem;
}

table img {
  width: 12px;
  margin-left: 23px;
}
@media (max-width: 400px) {
  .sm {
    display: none;
  }
  table tr td,
  table tr th {
    padding: 1rem 0 !important;
    font-size: 0.8rem !important;
  }
  table {
    padding: 2px;
  }
  th:nth-child(2) {
    width: 100px;
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
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }
  .page-buttons {
    padding: 0;
  }
  .navigation-buttons {
    padding: 0.6rem 0.7rem;
    z-index: 1;
    max-width: 50px !important;
    cursor: pointer;
    border: 1px solid var(--tile-bg-color);
  }
  .page-buttons button {
    font-size: 0.9rem;
    padding: 0.5rem;
  }
}
</style>
