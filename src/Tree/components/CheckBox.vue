<template>
  <span :class="{checkbox: true, highlight: this.flag > 0}" @click="click">
    {{ mark }}
  </span>
</template>

<script>
const flagMaps = {
  1: "‒",
  2: '✔',
  0: " "
}
export default {
  name: "CheckBox",
  props: ["flag"],
  computed: {
    mark() {
      return flagMaps[this.flag]
    },
  },
  methods: {
    click() {
      let flag;
      if (this.flag === 2) {
        flag = 0;
      } else {
        flag = 2;
      }
      // 事件冒出
      this.$emit("click", flag);
    },
  },
};
</script>

<style scoped>
.checkbox {
  user-select: none;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  border: 1px solid #999;
  border-radius: 4px;
  width: 16px;
  height: 16px;
  color: white;
  vertical-align: top;
  line-height: 14px;
}
.highlight {
  background: #1c91ff;
  border-color: #1c91ff;
}
</style>
