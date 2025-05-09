<template>
  <div class="demo">
    <Page />
  </div>
</template>

<script>
import Page from "./components/page";

export default {
  name: "Root",
  components: {
    Page,
  },
};
</script>

<style scoped>
.demo {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
