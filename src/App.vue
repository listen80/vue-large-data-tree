<template>
  <div class="modal">
    <div class="wrap">
      <Tree ref="tree" @checkBoxClick="checkBoxClick" selected="selected" />
    </div>
  </div>
</template>

<script>
import Tree from "./Tree";
import { getTreeData } from "./mock.js";

export default {
  name: "Demo",
  data() {
    return {
      selected: []
    };
  },
  components: {
    Tree,
  },
  mounted() {
    // 初始化树状结构数据
    getTreeData().then((data) => { this.$refs.tree.setData(data) });
  },
  methods: {
    checkBoxClick(data) {
      console.log(data)
      console.log(this.$refs.tree.getSelected())
    }
  },
};
</script>

<style>
body {
  margin: 0;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e1f5fe;
  /* 使用更鲜艳的浅蓝色背景 */
}

.wrap {
  height: 70%;
  max-height: 800px;
  width: 80%;
  max-width: 800px;
  background-color: #f8f9fa;
  /* 使用稍带颜色的背景替代纯白色 */
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
}
</style>
