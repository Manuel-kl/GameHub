<template>
  <div>
    <li v-for="team in teams" :key="team.team_id">{{ team.name }}</li>
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
      <tr>
        <td>1</td>
        <td>Arsenal</td>
        <td>17</td>
        <td>17</td>
        <td>0</td>
        <td>1</td>
        <td>47</td>
        <td>14</td>
        <td>+33</td>
        <td>51</td>
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
      teams: [],
    };
  },
  created() {
    axios
      .get("http://api.football-data.org/v4/competitions/PL/standings", {
        headers: {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": "	e9e00611e0ab46598a0b9747dcbd8dc7",
        },
      })
      .then((response) => {
        this.teams = response.data.api.teams;
        console.log(teams);
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