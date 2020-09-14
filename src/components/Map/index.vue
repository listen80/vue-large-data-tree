<template>
  <div class="wrap">
    <div ref="map"></div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import { loadScript } from "./map";
const url =
  "http://api.map.baidu.com/getscript?v=2.0&ak=E4805d16520de693a3fe707cdc962045";

export default {
  mounted() {
    const el = this.$refs.map;
    loadScript(url, function() {
      var map = new BMap.Map(el); // 创建Map实例
      map.centerAndZoom(new BMap.Point(113.958407, 22.538493), 16); // 初始化地图,设置中心点坐标和地图级别
      //添加地图类型控件
      map.addControl(
        new BMap.MapTypeControl({
          mapTypes: [
            BMAP_NORMAL_MAP,
            // BMAP_PERSPECTIVE_MAP,
            BMAP_SATELLITE_MAP,
            BMAP_HYBRID_MAP,
            // BMAP_MAPTYPE_CONTROL_MAP,
          ],
        })
      );
      map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true);
    });
  },
};
</script>

<style scoped>
div.wrap {
  flex: 1;
}
div {
  min-height: 500px;
  height: 100%;
  width: 100%;
}
</style>
