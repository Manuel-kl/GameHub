<template>
  <div class="matches-container">
    <div class="table">
      <div v-if="loading" class="loader">
        <img src="../assets/loading-1.gif" alt="" />
      </div>
      <table class="lg-table">
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Home Team</th>
          <th>Score</th>
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
          <td
            v-bind:class="{
              win: match.score.winner === 'HOME_TEAM',
              loss: match.score.winner === 'AWAY_TEAM',
            }"
          >
            <div class="team-row">
              <img
                :src="crestUrl + match.homeTeam.id + crestUrlExt"
                @error="onError"
                alt=""
              />
              {{ match.homeTeam.name.replace(" FC", "") }}
            </div>
          </td>
          <td v-bind:class="{ draw: match.score.winner === 'DRAW' }">
            {{ match.score.fullTime.home }}
            :
            {{ match.score.fullTime.away }}
          </td>
          <td
            v-bind:class="{
              win: match.score.winner === 'AWAY_TEAM',
              loss: match.score.winner === 'HOME_TEAM',
            }"
          >
            <div class="team-row">
              <img
                :src="crestUrl + match.awayTeam.id + crestUrlExt"
                @error="onError"
                alt=""
              />
              {{ match.awayTeam.name.replace(" FC", "") }}
            </div>
          </td>
        </tr>
      </table>
      <table class="sm-table">
        <tr v-for="match in paginatedMatches" :key="match.id" class="matches">
          <td class="date-container">
            <tr class="row date">
              {{
                new Date(match.utcDate).toLocaleDateString()
              }}
            </tr>
            <tr class="row time">
              {{
                new Date(match.utcDate).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              }}
            </tr>
          </td>
          <td>
            <tr
              class="row home"
              v-bind:class="{
                win: match.score.winner === 'HOME_TEAM',
                loss: match.score.winner === 'AWAY_TEAM',
              }"
            >
              <div class="team">
                <div class="team-row">
                  <img
                    :src="crestUrl + match.homeTeam.id + crestUrlExt"
                    @error="onError"
                    alt=""
                  />
                  {{ match.homeTeam.name.replace(" FC", "") }}
                </div>
                <div class="goals">
                  {{ match.score.fullTime.homeTeam }}
                </div>
              </div>
            </tr>
            <tr
              class="row away"
              v-bind:class="{
                win: match.score.winner === 'AWAY_TEAM',
                loss: match.score.winner === 'HOME_TEAM',
              }"
            >
              <div class="team">
                <div class="team-row">
                  <img
                    :src="crestUrl + match.awayTeam.id + crestUrlExt"
                    @error="onError"
                    alt=""
                  />
                  {{ match.awayTeam.name.replace(" FC", "") }}
                </div>
                <div class="goals">
                  {{ match.score.fullTime.awayTeam }}
                </div>
              </div>
            </tr>
          </td>
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

        <span v-if="currentPage != totalPages"> --</span>
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
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import axios from "../utils/api.js";

export default {
  watch: {},

  components: { Datepicker },
  props: {},
  data() {
    return {
      matches: [],
      currentPage: 1,
      pageOne: 1,
      loading: true,
      crestUrl: "https://crests.football-data.org/",
      crestUrlExt: ".png",
      altCrestUrlExt: ".svg",
    };
  },
  created() {},

  methods: {
    onError() {
      this.crestUrlExt = this.altCrestUrlExt;
    },
  },
  mounted() {
    axios
      .get("/games/PL", {})
      .then((response) => {
        setTimeout(() => {
          this.matches = response.data.games.matches;
          this.loading = false;
        }, 500);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    scheduledMatches() {
      return this.matches.filter((match) => match.status === "FINISHED");
    },
    sortedGames() {
      return this.scheduledMatches.sort(
        (a, b) => new Date(b.utcDate) - new Date(a.utcDate)
      );
    },

    paginatedMatches() {
      const start = (this.currentPage - 1) * 10;

      return this.sortedGames.slice(start, start + 10);
    },
    totalPages() {
      return Math.ceil(this.sortedGames.length / 10);
    },
  },
};
</script>

<style lang='css' scoped>
.lg-table .win {
  border-bottom: 1px solid var(--grass-green);
}

.lg-table .loss {
  border-bottom: 1px solid var(--red);
}

.lg-table .draw {
  border-bottom: 1px solid var(--yellow);
}

.lg-table td:first-child,
.lg-table tr:first-child {
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
  z-index: 2;
  padding: 1rem;
  position: relative;
  text-align: left;
  border-radius: 5px;
  font-family: var(--font-family-roboto);
  border-bottom: 2px groove var(--faded-gray);
}

.lg-table tr td {
  position: relative;
  padding: 1rem;
  font-family: var(--font-family-base);
  vertical-align: middle;
  z-index: 2;
  border-bottom: 1px groove var(--dark-blue-tile);
}
table tr td:nth-child(3),
table tr td:nth-child(5) {
  width: 150px;
}

@media (min-width: 700px) {
  .sm-table {
    display: none;
  }
}
@media (max-width: 700px) {
  .lg-table {
    display: none;
  }
  .sm-table {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    font-family: var(--font-family-roboto);
  }
  .row {
    padding: 0.5rem !important;
    display: flex;
  }
  .date-container {
    width: fit-content;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  .date-container .date,
  .date-container .time {
    justify-content: center;
    padding: 0.2rem !important;
  }

  .sm-table .matches .away,
  .sm-table .matches .home {
    font-size: 1rem;
  }
  .sm-table .matches {
    display: flex;
    border-bottom: 1px solid var(--main-bg-color);
  }
  .sm-table .team {
    display: flex;
    flex-direction: row;
    flex: 1;
    width: 250px;
    justify-content: space-between;
  }
}
@media (max-width: 480px) {
  table {
    padding: 0 !important;
  }
  .sm-table .matches .away,
  .sm-table .matches .home {
    font-size: 0.9rem;
  }
  .date-container {
    padding-right: 0 !important;
  }
  .sm-table tr td:not(.date-container) {
    padding: 0.7rem 1rem 0 0.7rem !important;
    width: 100%;
  }
  .sm-table .team-row {
    width: 150px;
    margin-right: 1rem;
  }
  .sm-table .team {
    width: auto !important;
  }
}
</style>