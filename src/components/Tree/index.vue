<template>
  <div>
    <div v-if="data">
      <TreeNodeList
        ref="TreeNodeList"
        :data="data"
        v-if="data.length"
      ></TreeNodeList>
      <div v-else>无数据</div>
    </div>
    <div v-else>载入中</div>
  </div>
</template>

<script>
import TreeNode from "./TreeNode.vue";
import TreeNodeList from "./TreeNodeList.vue";
import Vue from "vue";
import { collectSonNodeFlag, getSelected } from "./tree";
Vue.component("TreeNode", TreeNode);
Vue.component("TreeNodeList", TreeNodeList);

export default {
  name: "TreeRoot",
  created() {
    this.data = null;
    this.selected = [];
    this.keyword = "";
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
    setKeyword(keyword) {
      this.keyword = keyword;
      this.initTreeData();
    },
    initTreeData() {
      // selectedMap
      const selectedMap = Object.create(null);
      this.selected.forEach((selectedId) => {
        selectedMap[selectedId] = true;
      });
      collectSonNodeFlag(this.data, null, selectedMap);
      this.$forceUpdate();
    },
  },
};
</script>
