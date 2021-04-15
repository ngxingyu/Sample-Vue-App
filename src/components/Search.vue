<template>
  <div>
    <input v-model="query" placeholder="Enter your query" v-on:keyup.enter="handleInput" />
    <button @click="handleInput">Search</button>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: ["propQuery"],
  data() {
    return {
      query: this.propQuery,
    };
  },
  methods: {
    handleInput() {
      this.query=this.query.replace(/\W/g, '')
      if (!this.query || /^\s*$/.test(this.query)) {
        this.query = "life";
      }
      this.$emit("click", this.query);
    },
  },
};
</script>

<style>
</style>