<template>
  <div class="map">
    <div ref="map" class="baidu-map"></div>
  </div>
</template>

<script>
import { loadScript, url, renderBaiduMap, addMarker } from "./map";

export default {
  mounted() {
    const el = this.$refs.map;
    const self = this;
    loadScript(url, function() {
      self.map = renderBaiduMap(el);
    });
  },
  methods: {
    drawMarkers(data) {
      addMarker(this.map, data.sort(function() {
        return Math.random() - .5
      }).slice(0, 10))
    }
  },
};
</script>

<style scoped>
div.baidu-map {
  height: 100%;
}
</style>
