export function loadScript(url, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  if (script.readyState) {
    //IE
    script.onreadystatechange = function() {
      if (script.readyState == "loaded" || script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    //Others
    script.onload = function() {
      callback();
    };
  }
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}

export const url =
  "http://api.map.baidu.com/getscript?v=2.0&ak=E4805d16520de693a3fe707cdc962045";

/* eslint-disable no-undef */
export const renderBaiduMap = (el) => {
  var map = new BMap.Map(el); // 创建Map实例
  map.centerAndZoom(new BMap.Point(113.958409, 22.538473), 18); // 初始化地图,设置中心点坐标和地图级别
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
  map.setCurrentCity("深圳"); // 设置地图显示的城市 此项是必须设置的
  map.enableScrollWheelZoom(true);
  map.addEventListener("click", function(e) {
    var lng = e.point.lng;
    var lat = e.point.lat;
    var p1 = new BMap.Point(lng, lat);
    var marker = new BMap.Marker(p1); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
  });
  var geolocation = new BMap.Geolocation();
  geolocation.getCurrentPosition(
    function(r) {
      // 定位成功事件
      if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        console.log("您的位置：" + r.point.lng + "," + r.point.lat);
        // setTimeout(() => {
        //   map.centerAndZoom(new BMap.Point(r.point.lng,  r.point.lat), 14)
        // }, 1000)
        // var point = new BMap.Point(r.point.lng, +r.point.lat);
      }
    },
    { enableHighAccuracy: true }
  );
  return map;
};

export const addMarker = (map, arr) => {
  arr.forEach(({ latitude, longitude }) => {
    var p1 = new BMap.Point(longitude, latitude);
    var marker = new BMap.Marker(p1); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
  });
};
