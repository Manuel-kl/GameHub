<template>
  <div>
    <div>
      <div v-if="loading" class="loader">
        <img src="../assets/loading-1.gif" alt="" />
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Team</th>
          <th>Goals</th>
        </tr>
        <tr v-for="scorer in paginatedScorers" :key="scorer.id">
          <td>{{ scorer.player.name }}</td>
          <td>{{ scorer.team.name }}</td>
          <td>{{ scorer.numberOfGoals }}</td>
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
      topScorers: [],
      currentPage: 1,
      pageOne: 1,
      loading: true,
    };
  },
  created() {
    axios
      .get(
        "https://api.football-data.org/v2/competitions/2021/scorers?limit=1000",
        {
          headers: { "X-Auth-Token": process.env.VUE_APP_API_KEY },
        }
      )
      .then((response) => {
        setTimeout(() => {
          this.topScorers = response.data.scorers;
          this.loading = false;
        }, 600);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {},
  mounted() {},
  computed: {
    paginatedScorers() {
      const start = (this.currentPage - 1) * 10;

      return this.topScorers.slice(start, start + 10);
    },
    totalPages() {
      return Math.ceil(this.topScorers.length / 10);
    },
  },
};
</script>
  <style scoped>
</style>
  <style lang='css' scoped>
table {
  background-color: var(--tile-bg-color);
  border-radius: 5px;
  border-collapse: collapse;
  color: var(--white);
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

td:first-child,
tr:first-child {
  width: 200px;
}
table tr td {
  padding: 1rem;
  font-family: var(--font-family-base);
  text-align: center;
  vertical-align: middle;
  border: 1px groove var(--faded-gray);
}
</style>