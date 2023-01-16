<template>
  <div>
    <table>
      <tr>
        <th>Name</th>
        <th>Team</th>
        <th>Goals</th>
      </tr>
      <tr v-for="scorer in topScorers" :key="scorer.id">
        <td>{{ scorer.player.name }}</td>
        <td>{{ scorer.team.name }}</td>
        <td>{{ scorer.numberOfGoals }}</td>
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
      topScorers: [],
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
        this.topScorers = response.data.scorers;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {},
  mounted() {},
};
</script>
  <style scoped>
</style>
  <style lang='css' scoped>
.top-scorers {
  display: flex;
  padding: 1rem 0 0 3rem;
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

table img {
  width: 12px;
  margin-left: 23px;
}
</style>