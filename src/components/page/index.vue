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
import { getTreeData } from "./TreeMap.js";

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
    circle() {},
    mapClick() {},
  },
};
</script>

<style>
.wrap {
  display: flex;
  height: 100%;
}
.tree {
  width: 350px;
  overflow: auto;
  height: 100%;
}
</style>
