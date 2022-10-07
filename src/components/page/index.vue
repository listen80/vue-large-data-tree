<template>
  <div class="wrap">
    <Tree
      ref="tree"
      :selected="[]"
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
    return {};
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
  display: flex;
  height: 500px;
}
.tree {
  width: 500px;
  overflow: auto;
  height: 100%;
  margin: 20px auto;
  background-color: #eef;
}
</style>
