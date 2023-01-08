<template>
  <aside>
    <div class="title">
      <h2>Competitions</h2>
    </div>
    <div class="leagues">
      <div class="league">
        <h4>Premier League</h4>
      </div>
      <div class="league">
        <h4>Bundesliga</h4>
      </div>
      <div class="league">
        <h4>Serie A</h4>
      </div>
      <div class="league">
        <h4>Ligue 1</h4>
      </div>
      <div class="league">
        <h4>English League Championship</h4>
      </div>
      <div class="league">
        <h4>UEFA Champions League</h4>
      </div>
    </div>
  </aside>
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
aside {
  display: flex;
  flex-direction: column;
  background-color: var(--faded-gray);
  padding: 1rem;
  background-color: var(--main-bg-color);
  gap: 2rem;
  flex-basis: 15%;
}

aside .title {
  text-align: center;
  color: var(--black);
  font-family: var(--font-family-roboto);
}

aside .title h2 {
  color: var(--main-green);
  background-color: var(--dark-blue-tile);
  padding: 1rem 2rem;
  border-radius: 5px;
  border-bottom: 1px groove var(--faded-gray);
}

aside .leagues {
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 5px;
  background-color: var(--dark-blue-tile);
  gap: 0.5rem;
}

aside .leagues .league {
  text-align: center;
  padding: 0.7rem 1.2rem;
  border-bottom: 1px groove var(--tile-bg-color);
  font-size: 0.71rem;
  border-radius: 5px;
}

aside .leagues .league:active,
aside .leagues .league:hover {
  box-shadow: 2px 2px 1px var(--yellow);
  border-top: 1px groove var(--grass-green);
  border-left: 1px groove var(--grass-green);
  background-color: var(--tile-bg-color);
  margin-right: -0.5rem;
}

aside .league h4 {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--white);
  text-align: center;
  font-family: var(--font-family-base);
}
</style>