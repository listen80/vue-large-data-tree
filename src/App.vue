<template>
  <div id="app">
    <Page />
  </div>
</template>

<script>
import Page from "./components/Page";

export default {
  name: "App",
  components: {
    Page,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
