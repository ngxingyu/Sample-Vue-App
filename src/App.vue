<template>
  <div class="container">
    <div id="app">
      <h1>Life Advices</h1>
      <Search :propQuery="query" @change="updateSearch" />
      <Suspense>
        <template #default>
          <AdviceList ref="adviceList" :query="query" />
        </template>
        <template #fallback>
          <p>Loading...</p>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import AdviceList from "./components/AdviceList.vue";
import Search from "./components/Search.vue";

export default {
  name: "App",
  components: {
    AdviceList,
    Search,
  },
  setup() {
    const query = ref("life");
    return {
      query,
    };
  },
  methods: {
    updateSearch(query) {
      console.log(query);
      this.query = query;
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
