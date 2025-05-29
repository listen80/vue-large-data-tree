<template>
  <div class="modal">
    <div class="wrap">
      <div class="tree">
        <Tree ref="tree" @checkBoxClick="checkBoxClick" />
      </div>
      <div class="map"><Map /></div>
    </div>
  </div>
</template>

<script>
import Tree from "../Tree";
import Map from "../Map";
import { getTreeData } from "./mock.js";

const { BMapGL } = window

export default {
  name: "Demo",
  data() {
    return {
      selected: []
    };
  },
  components: {
    Tree,
    Map,
  },
  mounted() {
    // 初始化树状结构数据
    this.initTreeData()
    // 初始化百度地图
    this.initMap();
  },
  methods: {
    initTreeData() {
      // 获取树状结构数据并设置到树组件中
      getTreeData().then((data) => { this.$refs.tree.setData(data) });
    },
    initMap() {
      // 创建地图实例
      const map = new BMapGL.Map('baiduMap');
      // 设置中心点坐标
      const point = new BMapGL.Point(116.404, 39.915);
      // 初始化地图，设置中心点坐标和地图级别
      map.centerAndZoom(point, 15);
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
}

.map {
  border: 2px solid #ccc;
  flex: 1;
}
</style>
