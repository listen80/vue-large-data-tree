<template>
  <div id="app">
    <div class="wrap">
      <Map />
      <Tree ref="tree" @checkBoxClick="checkBoxClick" class="tree" />
    </div>
  </div>
</template>

<script>
import Tree from "./components/Tree";
import Map from "./components/Map";
import { setTreeData } from "./app.js";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Tree,
    Map,
  },
  mounted() {
    setTreeData(this.$refs.tree);
  },
  methods: {
    checkBoxClick(data) {
      console.log(data, this.$refs.tree.getSelected(true));
    },
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
.wrap {
  display: flex;
  height: 100%;
}
.tree {
  width: 350px;
  overflow: auto;
  height: 100%;
}
.map {
  flex: 1;
  height: 100%;
}
</style>
