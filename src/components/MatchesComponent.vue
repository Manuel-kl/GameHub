<template>
  <div class="matches-container">
    <div class="table">
      <table>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Home Team</th>
          <th>Away Team</th>
        </tr>
        <tr v-for="match in paginatedMatches" :key="match.id" class="matches">
          <td>{{ new Date(match.utcDate).toLocaleDateString() }}</td>
          <td>
            {{
              new Date(match.utcDate).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            }}
          </td>
          <td>{{ match.homeTeam.name.replace(" FC", "") }}</td>
          <td>{{ match.awayTeam.name.replace(" FC", "") }}</td>
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
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import axios from "axios";
export default {
  watch: {},

  components: { Datepicker },
  props: {},
  data() {
    return {
      matches: [],
      currentPage: 1,
      pageOne: 1,
    };
  },
  created() {},

  methods: {},
  mounted() {
    axios
      .get("https://api.football-data.org/v2/competitions/2021/matches", {
        headers: {
          "X-Auth-Token": process.env.VUE_APP_API_KEY,
        },
      })
      .then((response) => {
        this.matches = response.data.matches;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    scheduledMatches() {
      return this.matches.filter((match) => match.status === "SCHEDULED");
    },
    paginatedMatches() {
      const start = (this.currentPage - 1) * 10;

      return this.scheduledMatches.slice(start, start + 10);
    },
    totalPages() {
      return Math.ceil(this.scheduledMatches.length / 10);
    },
  },
};
</script>

<style lang='css' scoped>
td:first-child,
tr:first-child {
  width: fit-content;
}

table {
  background-color: var(--tile-bg-color);
  border-radius: 5px;
  border-collapse: collapse;
  color: var(--white);
}

table th {
  background-color: var(--dark-blue-tile);
  padding: 1rem;
  text-align: left;
  border-radius: 5px;
  font-family: var(--font-family-roboto);
  border-bottom: 2px groove var(--grass-green);
}

table tr td {
  min-width: 100px;
  padding: 1rem;
  font-family: var(--font-family-base);
  vertical-align: middle;
  border-bottom: 1px groove var(--dark-blue-tile);
}
</style>