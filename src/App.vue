<template>
  <div class="modal">
    <div class="wrap">
      <div class="tree">
        <Tree ref="tree" @checkBoxClick="checkBoxClick" />
      </div>
      <div>
        
      </div>
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
    this.initTreeData()
  },
  methods: {
    initTreeData() {
      // 获取树状结构数据并设置到树组件中
      getTreeData().then((data) => { this.$refs.tree.setData(data) });
    },
    checkBoxClick(data) {
      console.log(data)
      console.log(this.$refs.tree.getSelected())
    }
  },
};
</script>

<style>
.modal {
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  margin: auto;

  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}

.wrap {
  height: 80%;
  width: 80%;
  background-color: #fff;
  position: absolute;

  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
}

.tree {
  width: 300px;
  border: 2px solid #ccc;
  overflow: auto;
}

.map {
  border: 2px solid #ccc;
  flex: 1;
}
</style>
