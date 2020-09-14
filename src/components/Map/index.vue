<template>
  <div class="map">
    <div ref="map" class="baidu-map"></div>
  </div>
</template>

<script>
import { loadScript, url, renderBaiduMap } from "./map";

export default {
  mounted() {
    const el = this.$refs.map;
    loadScript(url, function() {
      renderBaiduMap(el);
    });
  },
};
</script>

<style scoped>
div.baidu-map {
  height: 100%;
}
</style>
