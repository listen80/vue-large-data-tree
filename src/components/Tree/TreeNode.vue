<template>
  <div>
    <div class="node">
      <span
        v-if="data.children"
        :class="{ 'expand-icon': true, 'caret-down': expand }"
        @click="expand = !expand"
      >
        {{ String.fromCharCode(9654) }}
      </span>
      <span v-else class="expand-icon"></span>
      <span :class="checkboxWrapperClass" @click="checkBoxClick">
        <span class="check-indicator">{{ mark }}</span>
      </span>
      <span @click="labelClick">{{ data.name }}</span>
      <span v-if="data.children">( {{ checked }} / {{ total }} )</span>
    </div>
    <TreeNodeList
      ref="TreeNodeList"
      v-if="expand && data.children"
      :data="data.children"
    ></TreeNodeList>
  </div>
</template>

<script>
export default {
  name: "TreeNode",
  props: ["data"],
  data() {
    return {
      expand: false,
      checked: 0,
    };
  },
  computed: {
    flag() {
      if (this.checked === this.total) {
        return 2;
      } else if (this.checked === 0) {
        return 0;
      } else {
        return 1;
      }
    },
    checkboxWrapperClass() {
      const cls = ["checkbox-wrapper"];
      switch (this.flag) {
        case 1:
          cls.push("indeterminate");
          break;
        case 2:
          cls.push("all");
          break;
        default:
          break;
      }
      return cls;
    },
    mark() {
      let mark;
      switch (this.flag) {
        case 1:
          mark = String.fromCharCode(8210);
          break;
        case 2:
          mark = String.fromCharCode(10004);
          break;
        default:
          mark = " ";
      }
      return mark;
    },
  },
  created() {
    this.$tree = this.$parent.$tree;

    this.checked = this.data.$checked;
    this.total = this.data.$total;
  },
  updated() {
  },
  methods: {
    setSonNode() {
      this.checked = this.data.$checked;
      this.total = this.data.$total;
      // 展开状态时，需要更新UI
      this.$refs.TreeNodeList && this.$refs.TreeNodeList.setSonNode();
    },
    setParentNode() {
      this.checked = this.data.$checked;
      // 更新UI
      this.$parent.setParentNode();
    },
    checkBoxClick() {
      let flag;
      if (this.flag === 2) {
        flag = 0;
      } else {
        flag = 2;
      }

      const calcSonNode = (data, flag) => {
        if (flag) {
          data.$checked = data.$total;
        } else {
          data.$checked = 0;
        }
        data.children &&
          data.children.forEach((data) => {
            calcSonNode(data, flag);
          });
      };

      calcSonNode(this.data, flag);

      const calcParentNode = (data) => {
        let $checked = 0;
        for (let i = 0; i < data.children.length; i++) {
          $checked += data.children[i].$checked;
        }
        data.$checked = $checked;
        data.$parent && calcParentNode(data.$parent);
      };

      this.data.$parent && calcParentNode(this.data.$parent);

      // 事件冒出
      this.$tree.$emit("checkBoxClick", this.data);

      // 下面是UI变化
      this.setSonNode();
      this.$parent.setParentNode();
    },
    labelClick() {
      this.$tree.$emit("labelClick", this.data);
    },
  },
};
</script>

<style scoped>
.node {
  white-space: nowrap;
}
.node > span {
  vertical-align: top;
}
.expand-icon {
  user-select: none;
  display: inline-block;
  cursor: pointer;
  color: #999;
  font-size: 18px;
  width: 18px;
  height: 18px;
  transform: rotate(0deg);
  transform-origin: center;
  transition: transform 0.3s ease-in-out;
}
.expand-icon.caret-down {
  transform: rotate(90deg);
}

.checkbox-wrapper {
  user-select: none;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  border: 1px solid #999;
  border-radius: 4px;
  width: 16px;
  height: 16px;
}
.checkbox-wrapper.indeterminate,
.checkbox-wrapper.all {
  background: #1c91ff;
  border-color: #1c91ff;
}
.check-indicator {
  user-select: none;
  font-size: 16px;
  line-height: 16px;
  color: white;
}
</style>
