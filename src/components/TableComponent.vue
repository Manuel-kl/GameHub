<template>
  <div>
    <table>
      <tr>
        <th>Position</th>
        <th>Team</th>
        <th>P</th>
        <th>W</th>
        <th>D</th>
        <th>L</th>
        <th>F</th>
        <th>A</th>
        <th>GD</th>
        <th>PTS</th>
      </tr>
      <tr v-for="standing in standings" :key="standing.team.id">
        <td>{{ standing.position }}</td>
        <td>{{ standing.team.name.replace(" FC", "") }}</td>
        <td>{{ standing.playedGames }}</td>
        <td>{{ standing.won }}</td>
        <td>{{ standing.draw }}</td>
        <td>{{ standing.lost }}</td>
        <td>{{ standing.goalsFor }}</td>
        <td>{{ standing.goalsAgainst }}</td>
        <td>{{ standing.goalDifference }}</td>
        <td>{{ standing.points }}</td>
      </tr>
    </table>
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
    };
  },
  created() {
    axios
      .get("https://api.football-data.org/v2/competitions/2021/standings", {
        headers: {
          "X-Auth-Token": "e9e00611e0ab46598a0b9747dcbd8dc7",
        },
      })
      .then((response) => {
        this.standings = response.data.standings[0].table;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {},
  mounted() {},
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
  padding: 1rem;
  font-family: var(--font-family-base);
  text-align: center;
  vertical-align: middle;
  border: 1px groove var(--faded-gray);
}

table img {
  width: 12px;
  margin-left: 23px;
}
</style>
