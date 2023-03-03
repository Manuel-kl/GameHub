<template>
  <div>
    <div>
      <div v-if="loading" class="loader">
        <img src="../assets/loading-1.gif" alt="" />
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
          <td>
            <div class="team-row">
              <img
                :src="crestUrl + standing.team.id + crestUrlExt"
                @error="onError"
                alt=""
              />

              {{ standing.team.name.replace(" FC", "") }}
            </div>
          </td>
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
      <div class="page-buttons">
        <button
          class="first-page"
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
          id="my-button"
        >
          {{ currentPage - 2 }}
        </button>
        <button
          v-if="currentPage > 1"
          v-on:click="currentPage = currentPage - 1"
          id="my-button"
        >
          {{ currentPage - 1 }}
        </button>
        <button v-on:click="currentPage = currentPage" class="current-page">
          {{ currentPage }}
        </button>
        <button
          v-if="currentPage < totalPages"
          v-on:click="currentPage = currentPage + 1"
          id="my-button"
        >
          {{ currentPage + 1 }}
        </button>
        <button
          class="sm-d-none"
          v-if="currentPage < totalPages - 1"
          v-on:click="currentPage = currentPage + 2"
          id="my-button"
        >
          {{ currentPage + 2 }}
        </button>

        <span v-if="currentPage != totalPages">--</span>
        <button
          class="last-page"
          v-if="currentPage < totalPages"
          v-on:click="currentPage = totalPages"
          id="my-button"
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
      standings: [],
      currentPage: 1,
      pageOne: 1,
      loading: true,
      crestUrl: "https://crests.football-data.org/",
      crestUrlExt: ".png",
      altCrestUrlExt: ".svg",
    };
  },
  created() {
    const tableName = this.$route.params.tableName;
    axios
      .get(`/table/${tableName}`)
      .then((response) => {
        setTimeout(() => {
          this.standings = response.data.table.standings[0].table;
          this.loading = false;
        }, 500);
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
  mounted() {
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
.team-row img {
  padding-right: 0.5rem;
  vertical-align: middle;
  width: 20px;
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
  font-size: 0.9rem;
}
table tr td:nth-child(2) {
  text-align: left;
}

.navigation-buttons,
.first-page,
.last-page,
.pagination span {
  display: none;
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
    padding: 0 0.3rem !important;
  }
  table tr td:not(:nth-child(2)),
  table th:not(:nth-child(2)) {
    padding: 0.9rem !important;
  }
  table {
    margin: 0 1rem;
  }
}
@media (max-width: 600px) {
  .sm {
    display: none;
  }
}
@media (max-width: 400px) {
  table tr td,
  table th {
    font-size: 0.9rem !important;
  }
  table tr td:not(:nth-child(2)),
  table th:not(:nth-child(2)) {
    padding: 0.8rem !important;
  }
}
</style>
