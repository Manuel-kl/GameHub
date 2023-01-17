<template>
  <div class="pagination">
    <button
      v-on:click="currentPage = currentPage - 1"
      :disabled="currentPage == 1"
    >
      Previous
    </button>
    <div class="page-buttons">
      <button v-if="currentPage > 3" v-on:click="currentPage = currentPage - 3">
        {{ currentPage - 3 }}
      </button>
      <button v-if="currentPage > 2" v-on:click="currentPage = currentPage - 2">
        {{ currentPage - 2 }}
      </button>
      <button v-if="currentPage > 1" v-on:click="currentPage = currentPage - 1">
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
      <button
        v-if="currentPage < totalPages - 2"
        v-on:click="currentPage = currentPage + 3"
      >
        {{ currentPage + 3 }}
      </button>
    </div>

    <button
      v-on:click="currentPage = currentPage + 1"
      :disabled="currentPage == totalPages"
    >
      Next
    </button>
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
<style scoped>
</style>
<style lang='scss' scoped>
</style>