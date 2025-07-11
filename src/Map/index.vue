<template>
  <!-- 添加地图容器 -->
  <div id="baiduMap" style="width: 100%; height: 100%;"></div>
</template>

<script>
const { BMapGL } = window

export default {
  name: "TreeMap",
  data() {
    return {
      selected: []
    };
  },
  components: {
  },
  mounted() {
    // 初始化百度地图
    this.initMap();
  },
  methods: {
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

<style></style>
