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
  map.centerAndZoom(new BMap.Point(121.474791, 31.224072), 14); // 初始化地图,设置中心点坐标和地图级别
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
};
