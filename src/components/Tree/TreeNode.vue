<template>
  <div class="node">
    <div class="node-content">
      <Caret :isLeaf="data.children" :expand="expand" @click="caretClick" />
      <CheckBox :flag="flag" @click="checkBoxClick" />
      <span @click="labelClick">{{ data.name }}</span>
      <span>( {{ checked }} / {{ total }} )</span>
    </div>
    <div class="p20" :style="{'max-height': expand ? '999px': '0px'}">
      <TreeNodeList
        ref="TreeNodeList"
        v-if="expand && data.children"
        :data="data.children"
      ></TreeNodeList>
    </div>
  </div>
</template>

<script>
import CheckBox from "./CheckBox";
import Caret from "./Caret";
import { calcSonNode, calcParentNode } from "./tree";

const ALL = 2;
const NONE = 0;
const SOME = 1;

export default {
  name: "TreeNode",
  props: ["data"],
  data() {
    return {
      expand: false,
      checked: 0,
      total: 0,
    };
  },
  components: {
    CheckBox,
    Caret,
  },
  computed: {
    flag() {
      if (this.checked === this.total) {
        return ALL;
      } else if (this.checked === 0) {
        return NONE;
      } else {
        return SOME;
      }
    },
  },
  created() {
    this.$tree = this.$parent.$tree;
    this.update();
  },
  methods: {
    update() {
      this.checked = this.data.$checked;
      this.total = this.data.$total;
    },
    setSonNode() {
      this.update();
      // 展开状态时，需要更新UI
      this.$refs.TreeNodeList && this.$refs.TreeNodeList.setSonNode();
    },
    setParentNode() {
      this.update();
      // 更新父UI
      this.$parent.setParentNode();
    },
    checkBoxClick(flag) {
      calcSonNode(this.data, flag);
      calcParentNode(this.data.$parent);
      // 事件冒出
      this.$tree.$emit("checkBoxClick", this.data);

      // 下面是UI变化
      this.setSonNode();
      this.$parent.setParentNode();
    },
    labelClick() {
      this.$tree.$emit("labelClick", this.data);
    },
    caretClick(expand) {
      this.expand = expand;
    },
  },
};
</script>

<style scoped>
.node {
  white-space: nowrap;
  line-height: 18px;
  padding: 1px 0;
}
.node span {
  vertical-align: top;
}
.p20 {
  padding-left: 20px;
  transition: 1s;
  max-height: 1114px;
  overflow-y: hidden;
}
</style>
