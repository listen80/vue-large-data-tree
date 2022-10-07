<template>
  <div class="node-list">
    <div v-for="(node, index) in data" :key="index">
      <TreeNode
        ref="TreeNode"
        v-if="index < (page + 1) * size"
        :key="index"
        :data="node"
      ></TreeNode>
    </div>
    <div v-if="data.length > (page + 1) * size" @click="page++" class="more">
      点击显示更多数据...
    </div>
  </div>
</template>

<script>
export default {
  name: "TreeNodeList",
  props: ["data"],
  data() {
    return { page: 0 };
  },
  created() {
    this.$tree = this.$parent.$tree;
    this.size = 20;
  },
  methods: {
    setSonNode() {
      this.$nextTick(function() {
        this.$refs.TreeNode &&
          this.$refs.TreeNode.forEach((vm) => {
            vm.setSonNode();
          });
      });
    },
    setParentNode() {
      this.$parent.setParentNode && this.$parent.setParentNode();
    },
  },
};
</script>

<style scoped>
.more {
  line-height: 30px;
  text-indent: 30px;
}
</style>
