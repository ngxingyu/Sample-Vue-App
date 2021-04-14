<template>
  <div class="advice">
    <h2>{{ advice.advice }}</h2>
    <p>{{ advice.date }}</p>
  </div>
</template>

<script>
export default {
  name: 'Advice',
  props: ['advice']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
p {
  color: #42b983;
}
.advice {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 0px 40px;
  width: 300px;
  margin: 16px;

}
</style>
