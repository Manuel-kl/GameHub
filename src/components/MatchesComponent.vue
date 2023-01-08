<template>
  <div class="matches-container">
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
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
  mounted() {},
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

.matches-container .date {
  display: flex;
  flex-direction: row;
  background-color: var(--dark-blue-tile);
  padding: 1rem 2rem;
  font-family: var(--font-family-roboto);
  gap: 2rem;
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