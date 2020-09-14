<template>
  <div id="app">
    <div class="wrap">
      <Map />
      <Tree ref="tree" style="width: 350px; overflow: auto; height: 100%"/>
    </div>
  </div>
</template>

<script>
import Tree from "./components/Tree";
import Map from "./components/Map";

export default {
  name: "App",
  data() {
    return {
      keyword: "",
    };
  },
  components: {
    Tree,
    Map,
  },
  created() {

    const self = this;
    fetch("./videoResourceGroups.json")
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        const format = (data) => {
          return data.map(function(child) {
            if (child.leafNode === false) {
              return {
                name: child.name,
                children: format(child.subTreeNodes),
              };
            } else {
              return {
                name: child.name,
                children: child.resources.map(({ name }) => ({ name })),
              };
            }
          });
        };
        self.$refs.tree.setData(format(data.responseData));
        self.$refs.tree.$forceUpdate();
      });
  },
  methods: {
    console() {
      console.log(this.data);
    },
  },
};
</script>

<style>
html, body {
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
</style>
