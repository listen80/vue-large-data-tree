<template>
  <div class="wrap">
    <Map markers="markers" class="map" />
    <Tree ref="tree" @checkBoxClick="checkBoxClick" class="tree" />
  </div>
</template>

<script>
import Tree from "../Tree";
import Map from "../Map";
import { setTreeData } from "./TreeMap.js";

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
