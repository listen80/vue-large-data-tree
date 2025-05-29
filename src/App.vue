<template>
  <div class="demo">
    <Demo />
  </div>
</template>

<script>
import Demo from "./components/Demo";

export default {
  name: "Root",
  components: {
    Demo,
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
./components/Demo