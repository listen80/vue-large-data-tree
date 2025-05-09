<template>
  <div v-if="data">
    <TreeNodeList
      v-if="data.length"
      ref="TreeNodeList"
      :data="data"
    ></TreeNodeList>
    <div v-else>无数据</div>
  </div>
  <div v-else>载入中</div>
</template>

<script>
import TreeNode from "./components/TreeNode.vue";
import TreeNodeList from "./components/TreeNodeList.vue";
import Vue from "vue";
import { collectSonNodeFlag, getSelected } from "./tree";

Vue.component("TreeNode", TreeNode);
Vue.component("TreeNodeList", TreeNodeList);

export default {
  name: "TreeRoot",
  created() {
    this.data = null;
    this.keyword = "";
    this.selected = []
    this.$tree = this;
  },
  methods: {
    setData(data) {
      this.data = data;
      this.initTreeData();
    },
    getData() {
      return this.data;
    },
    setSelected(selected) {
      this.selected = selected;
      this.initTreeData();
    },
    getSelected(onlyLeaf) {
      return getSelected(this.data, [], onlyLeaf);
    },
    initTreeData() {
      // selectedMap
      const selectedMap = Object.create(null);
      this.selected.forEach((item) => selectedMap[item] = true);
      collectSonNodeFlag(this.data, null, selectedMap, this.keyword);
      this.$forceUpdate();
      
      // this.$nextTick(function () {
      //   this.$refs.TreeNodeList && this.$refs.TreeNodeList.setSonNode();
      // });
    },
  },
};
</script>
