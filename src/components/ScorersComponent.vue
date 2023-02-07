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
          <td>
            <div class="team-row">
              <img
                :src="crestUrl + scorer.team.id + crestUrlExt"
                @error="onError"
                alt=""
              />
              {{ scorer.team.name.replace(" FC", " ") }}
            </div>
          </td>
          <td>{{ scorer.goals }}</td>
        </tr>
      </table>
    </div>
    <div class="pagination">
      <div class="page-buttons">
        <button
          v-if="currentPage <= totalPages && currentPage != pageOne"
          v-on:click="currentPage = pageOne"
        >
          {{ pageOne }}
        </button>
        <span v-if="currentPage != pageOne">--</span>
        <button
          class="sm-d-none"
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
          class="sm-d-none"
          v-if="currentPage < totalPages - 1"
          v-on:click="currentPage = currentPage + 2"
        >
          {{ currentPage + 2 }}
        </button>

        <span v-if="currentPage != totalPages"> -- </span>
        <button
          v-if="currentPage < totalPages"
          v-on:click="currentPage = totalPages"
        >
          {{ totalPages }}
        </button>
      </div>
    </div>
  </div>
</template>
  <script>
import axios from "../utils/api.js";
export default {
  components: {},
  props: {},
  data() {
    return {
      topScorers: [],
      currentPage: 1,
      pageOne: 1,
      loading: true,
      crestUrl: "https://crests.football-data.org/",
      crestUrlExt: ".png",
      altCrestUrlExt: ".svg",
    };
  },
  created() {
    axios
      .get("/scorers")
      .then((response) => {
        setTimeout(() => {
          console.log(response.data.scorers.scorers);
          this.topScorers = response.data.scorers.scorers;
          this.loading = false;
        }, 600);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    onError() {
      this.crestUrlExt = this.altCrestUrlExt;
    },
  },
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
  z-index: 2;
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
  z-index: 2;
  border: 1px groove var(--faded-gray);
}
@media (max-width: 400px) {
  table tr td {
    padding: 0.7rem !important;
    width: auto !important;
  }
}
</style>