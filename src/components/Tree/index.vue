<template>
  <div>
    <TreeNodeList
      ref="TreeNodeList"
      :data="data"
      v-if="data.length"
    ></TreeNodeList>
    <div v-else>无数据</div>
  </div>
</template>

<script>
import TreeNode from "./TreeNode.vue";
import TreeNodeList from "./TreeNodeList.vue";
import Vue from "vue";
Vue.component("TreeNode", TreeNode);
Vue.component("TreeNodeList", TreeNodeList);

export default {
  name: "Tree",
  watch: {
    selected() {
      this.initTreeData();
      this.$refs.TreeNodeList && this.$refs.TreeNodeList.setSonNode();
    },
    keyword() {
      this.initTreeData();
      this.$refs.TreeNodeList && this.$refs.TreeNodeList.setSonNode();
    },
  },
  created() {
    this.data = [];
    this.selected = [];
    this.keyword = "";
    this.$tree = this;
    this.initTreeData();
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
    getSelected() {
      return this.selected;
    },
    setKeyword(keyword) {
      this.keyword = keyword;
      this.initTreeData();
    },
    initTreeData() {
      // selectedMap
      this.selectedMap = Object.create(null);
      this.selected.forEach((selectedId) => {
        this.selectedMap[selectedId] = true;
      });
      const collectSonNodeFlag = (dataList, parent) => {
        dataList.forEach((data) => {
          data.$parent = parent;

          if (data.children) {
            collectSonNodeFlag(data.children, data);
            let $checked = 0;
            let $total = 0;
            for (let i = 0; i < data.children.length; i++) {
              $checked += data.children[i].$checked;
              $total += data.children[i].$total;
            }
            data.$checked = $checked;
            data.$total = $total;
          } else {
            data.$checked = this.selectedMap[data.id] ? 1 : 0;
            data.$total = 1;
          }
        });
      };
      collectSonNodeFlag(this.data, null);
      console.log(this.data);
    },
  },
};
</script>
