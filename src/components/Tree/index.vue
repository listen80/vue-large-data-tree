<template>
  <div v-if="data">
    <LTreeNodeList
      v-if="data.length"
      ref="TreeNodeList"
      :data="data"
    ></LTreeNodeList>
    <div v-else>无数据</div>
  </div>
  <div v-else>载入中</div>
</template>

<script>
import TreeNode from "./components/TreeNode.vue";
import TreeNodeList from "./components/TreeNodeList.vue";
import Vue from "vue";
import { collectSonNodeFlag, getSelected } from "./tree";

Vue.component("LTreeNode", TreeNode);
Vue.component("LTreeNodeList", TreeNodeList);

export default {
  name: "TreeRoot",
  created() {
    this.data = null;
    this.keyword = "";
    this.selected = [];
    this.$tree = this;
  },
  methods: {
    setData(data, selected = [], keyword = "") {
      this.data = data;
      this.selected = selected;
      this.keyword = keyword;
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
    getKeyword() {
      return this.keyword;
    },
    initTreeData() {
      const selectedMap = Object.create(null);
      this.selected.forEach((item) => (selectedMap[item] = true));
      collectSonNodeFlag(this.data, null, selectedMap, this.keyword);
      this.$forceUpdate();
      // this.$nextTick(function () {
      //   this.$refs.TreeNodeList && this.$refs.TreeNodeList.setSonNode();
      // });
    },
  },
};
</script>
