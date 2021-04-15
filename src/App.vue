<template>
  <div class="container">
    <div id="app">
      <h1>Life Advices</h1>
      <Search :propQuery="query" @click="retrieveAdvice" />
      <div class="advices">
        <Advice v-for="advice in advices" :key="advice.id" :advice="advice" />
      </div>
    </div>
  </div>
</template>

<script>
import Advice from "./components/Advice.vue";
import Search from "./components/Search.vue";

export default {
  name: "App",
  components: {
    Advice,
    Search,
  },
  data() {
    return {
      query: "life",
      advices: [{ advice: "..." }],
    };
  },
  async created() {
    this.retrieveAdvice(this.query);
  },
  methods: {
    retrieveAdvice: function (query) {
      this.query = query;
      fetch(`https://api.adviceslip.com/advice/search/${query}`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          this.advices = !("slips" in json)
            ? [{ advice: json.message.text }]
            : json.slips;
        });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  padding: 1em;
  align-content: center;
}
.advices {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
