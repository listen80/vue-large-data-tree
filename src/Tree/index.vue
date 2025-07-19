<template>
  <div class="tree">
    <template v-if="data">
      <LTreeNodeList v-if="data.length" ref="TreeNodeList" :data="data"></LTreeNodeList>
      <div class="text" v-else>无数据</div>
    </template>
    <div class="text" v-else>载入中</div>
  </div>
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
<style>
.tree {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #1976d2;
  height: 100%;
  overflow: auto;
  /* 添加鲜艳的蓝色文字颜色 */
}
.text {
  text-align: center;
  margin-top: 20%;
}
</style>