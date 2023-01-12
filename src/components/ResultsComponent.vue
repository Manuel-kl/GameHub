<template>
  <div class="results-container">
    <div class="results-header">
      <Datepicker
        v-model="date"
        :enable-time-picker="false"
        class="datepicker"
        :position="auto"
        :value="currentDate"
      />
      <h3>{{ formattedDate }}</h3>
    </div>
    <div class="results">
      <div class="result">
        <div class="time">15:32</div>
        <div class="teams">
          <div class="home-team">
            <img src="../assets/Arsenal_FC.png" alt="" />
            <h4>Arsenal</h4>
            <p>5</p>
          </div>
          <h5>:</h5>
          <div class="away-team">
            <p>1</p>
            <img src="../assets/Arsenal_FC.png" alt="" />
            <h4>Chelsea</h4>
          </div>
        </div>
      </div>
      <div class="result">
        <div class="time">15:32</div>
        <div class="teams">
          <div class="home-team">
            <img src="../assets/Arsenal_FC.png" alt="" />
            <h4>Arsenal</h4>
            <p>5</p>
          </div>
          <h5>:</h5>
          <div class="away-team">
            <p>1</p>
            <img src="../assets/Arsenal_FC.png" alt="" />
            <h4>Chelsea</h4>
          </div>
        </div>
      </div>
      <div class="result">
        <div class="time">15:32</div>
        <div class="teams">
          <div class="home-team">
            <img src="../assets/Arsenal_FC.png" alt="" />
            <h4>Arsenal</h4>
            <p>5</p>
          </div>
          <h5>:</h5>
          <div class="away-team">
            <p>1</p>
            <img src="../assets/Arsenal_FC.png" alt="" />
            <h4>Chelsea</h4>
          </div>
        </div>
      </div>
      <div class="result">
        <div class="time">15:32</div>
        <div class="teams">
          <div class="home-team">
            <img src="../assets/Arsenal_FC.png" alt="" />
            <h4>Arsenal</h4>
            <p>5</p>
          </div>
          <h5>:</h5>
          <div class="away-team">
            <p>1</p>
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
.results-container {
  display: flex;
  flex-direction: column;
  color: var(--white);
  width: 45%;
  font-family: var(--font-family-roboto);
}

.results-container .results-header {
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

.results-container .results {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
}

.results-container .result {
  display: flex;
  flex-direction: row;
  background-color: var(--tile-bg-color);
  gap: 1rem;
  padding: 1rem;
}

.results-container .results .result .teams {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex: 1;
  font-family: var(--font-family-base);
}

.results-container .results .teams img {
  width: 15px;
  padding-right: 0.5rem;
}

.results-container .results .home-team,
.results-container .results .away-team {
  display: flex;
  flex-direction: row;
}
.home-team p {
  padding-left: 3rem;
}
.away-team p {
  padding-right: 3rem;
}
</style>