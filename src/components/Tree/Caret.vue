<template>
  <span
    v-if="isLeaf"
    :class="{ 'expand-icon': true, 'caret-down': expand }"
    @click="click"
    >▶</span
  >
  <span v-else class="expand-icon"> </span>
</template>

<script>
export default {
  name: "Caret",
  props: ["isLeaf", "expand"],
  methods: {
    click() {
      // 事件冒出
      this.$emit("click", !this.expand);
    },
  },
};
</script>

<style scoped>
.expand-icon {
  display: inline-block;
  width: 18px;
  height: 18px;
  user-select: none;
  cursor: pointer;
  color: #999;
  font-size: 18px;
  transform: rotate(0deg);
  transform-origin: center;
  transition: transform 0.3s ease-in-out;
}
.expand-icon.caret-down {
  transform: rotate(90deg);
}
</style>
