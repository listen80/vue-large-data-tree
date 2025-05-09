<template>
  <div class="wrap">
    <div>{{ selected.length }}</div>
    <Tree
      ref="tree"
      @checkBoxClick="checkBoxClick"
      class="tree"
    />
  </div>
</template>

<script>
import Tree from "../Tree";
import { getTreeData } from "./mock.js";

export default {
  name: "TreeMap",
  data() {
    return {
      selected: []
    };
  },
  components: {
    Tree,
  },
  mounted() {
    getTreeData().then((data) => {this.$refs.tree.setData(data)});
  },
  methods: {
    checkBoxClick(data) {
      console.log(data, this.$refs.tree.getSelected(true));
      // this.$refs.map.drawMarkers([data], this.$refs.tree.getSelected(true));
    },
  },
};
</script>

<style>
.wrap {
  background-color: #eef;
  margin: 10px auto;
  height: 500px;
  width: 500px;
}
.tree {
  overflow: auto;
}
</style>
