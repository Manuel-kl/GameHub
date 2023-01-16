<template>
  <div class="matches-container">
    <table>
      <tr>
        <th>Date</th>
        <th>Time</th>
        <th>Home Team</th>
        <th>Score</th>
        <th>Away Team</th>
      </tr>
      <tr v-for="match in sortedGames" :key="match.id" class="matches">
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
          {{ match.homeTeam.name.replace(" FC", "") }}
        </td>
        <td v-bind:class="{ draw: match.score.winner === 'DRAW' }">
          {{ match.score.fullTime.homeTeam }}
          :
          {{ match.score.fullTime.awayTeam }}
        </td>
        <td
          v-bind:class="{
            win: match.score.winner === 'AWAY_TEAM',
            loss: match.score.winner === 'HOME_TEAM',
          }"
        >
          {{ match.awayTeam.name.replace(" FC", "") }}
        </td>
      </tr>
    </table>
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
        console.log(response);
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
  },
};
</script>

<style lang='css' scoped>
.win {
  border-bottom: 1px solid var(--grass-green);
}

.loss {
  border-bottom: 1px solid var(--red);
}

.draw {
  border-bottom: 1px solid var(--yellow);
}

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
  border-bottom: 2px groove var(--faded-gray);
}

table tr td {
  padding: 1rem;
  font-family: var(--font-family-base);
  vertical-align: middle;
  border-bottom: 1px groove var(--dark-blue-tile);
}
</style>