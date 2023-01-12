<template>
  <div class="matches-container">
    <div class="matches-header">
      <Datepicker
        v-model="date"
        :enable-time-picker="false"
        class="datepicker"
        :position="auto"
        :value="currentDate"
      />
      <h3>{{ formattedDate }}</h3>
    </div>
    <div class="matches">
      <div class="match">
        <div class="time">15:32</div>
        <div class="teams">
          <div class="home-team">
            <img src="../assets/Arsenal_FC.png" alt="" />
            <h4>Arsenal</h4>
          </div>
          <h5>VS</h5>
          <div class="away-team">
            <img src="../assets/Arsenal_FC.png" alt="" />
            <h4>Chelsea</h4>
          </div>
        </div>
      </div>
      <div class="match">
        <div class="time">15:32</div>
        <div class="teams">
          <div class="home-team">
            <img src="../assets/Arsenal_FC.png" alt="" />
            <h4>Arsenal</h4>
          </div>
          <h5>VS</h5>
          <div class="away-team">
            <img src="../assets/Arsenal_FC.png" alt="" />
            <h4>Chelsea</h4>
          </div>
        </div>
      </div>
      <div class="match">
        <div class="time">15:32</div>
        <div class="teams">
          <div class="home-team">
            <img src="../assets/Arsenal_FC.png" alt="" />
            <h4>Arsenal</h4>
          </div>
          <h5>VS</h5>
          <div class="away-team">
            <img src="../assets/Arsenal_FC.png" alt="" />
            <h4>Chelsea</h4>
          </div>
        </div>
      </div>
      <div class="match">
        <div class="time">15:32</div>
        <div class="teams">
          <div class="home-team">
            <img src="../assets/Arsenal_FC.png" alt="" />
            <h4>Arsenal</h4>
          </div>
          <h5>VS</h5>
          <div class="away-team">
            <img src="../assets/Arsenal_FC.png" alt="" />
            <h4>Chelsea</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import format from "vue-date-fns";
export default {
  watch: {},

  components: { Datepicker },
  props: {},
  data() {
    return {
      date: "",
      currentDate: "",
    };
  },
  created() {
    function formatDate(date) {
      let year = date.getFullYear();
      let month = date.toLocaleString("default", { month: "long" });
      let day = date.toLocaleString("default", { day: "numeric" });
      day += this.getDaySuffix(day);
      this.currentDate = day + " " + month + "," + " " + year;
      this.date = day + " " + month + "," + " " + year;
    }
  },

  methods: {
    getDaySuffix(day) {
      let suffix = "th";
      if (day === 1 || day === 21 || day === 31) {
        suffix = "st";
      } else if (day === 2 || day === 22) {
        suffix = "nd";
      } else if (day === 3 || day === 23) {
        suffix = "nd";
      }
      return suffix;
    },
  },
  mounted() {
    let newDate = new Date();
    let year = newDate.getFullYear();
    let month = newDate.toLocaleString("default", { month: "long" });
    let day = newDate.toLocaleString("default", { day: "numeric" });
    day += this.getDaySuffix(day);
    this.date = day + " " + month + "," + " " + year;
  },
  computed: {
    formakdttedDate() {
      return this.date ? format(this.date, "Do MMM YYY") : "";
    },
  },
};
</script>

<style lang='css' scoped>
.matches-container {
  display: flex;
  flex-direction: column;
  color: var(--white);
  width: 45%;
  font-family: var(--font-family-roboto);
}

.matches-container .matches-header {
  display: flex;
  flex-direction: row;
  background-color: var(--dark-blue-tile);
  padding: 1rem;
  font-family: var(--font-family-roboto);
  gap: 1rem;
  margin-bottom: 2px;
  align-items: center;
  border-radius: 5px;
  border-bottom: 1px solid var(--dark-gray);
}

.matches-container .matches {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
}

.matches-container .match {
  display: flex;
  flex-direction: row;
  background-color: var(--tile-bg-color);
  gap: 1rem;
  padding: 1rem;
}

.matches-container .matches .match .teams {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex: 1;
  font-family: var(--font-family-base);
}

.matches-container .matches .teams img {
  width: 15px;
  padding-right: 0.5rem;
}

.matches-container .matches .home-team,
.matches-container .matches .away-team {
  display: flex;
  flex-direction: row;
}
</style>