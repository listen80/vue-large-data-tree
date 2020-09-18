<template>
  <div class="wrap">
    <Map ref="map" markers="markers" class="map" />
    <Tree ref="tree" @checkBoxClick="checkBoxClick" class="tree" />
  </div>
</template>

<script>
import Tree from "../Tree";
import Map from "../Map";
import { getTreeData, format } from "./TreeMap.js";

export default {
  name: "TreeMap",
  data() {
    return {};
  },
  components: {
    Tree,
    Map,
  },
  mounted() {
    getTreeData().then(
      function(data) {
        const markers = [];
        const tree = format(data, markers);
        this.$refs.tree.setData(tree);
      }.bind(this)
    );
  },
  methods: {
    checkBoxClick(data) {
      console.log(data, this.$refs.tree.getSelected(true));
        this.$refs.map.drawMarkers(this.$refs.tree.getSelected(true));
    },
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
.map {
  flex: 1;
  height: 100%;
}
</style>
