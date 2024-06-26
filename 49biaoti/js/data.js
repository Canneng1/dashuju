var data = [
     {name: '上海', value: 81.59},
     {name: '浙江', value:78.60 },
     {name: '北京市', value:77.21 },
     {name: '江苏', value:73.34 },
     {name: '福建', value:73.29 },
     {name: '湖北', value:66.33 },
     {name: '四川', value:64.93 },
     {name: '天津', value:64.75 },
     {name: '广东', value:64.33 },
     {name: '新疆', value:64.08 },
     {name: '山东', value:63.04 },
     {name: '江西', value:62.02 },
     {name: '宁夏', value:61.16 },
     {name: '重庆', value:61.09 },
     {name: '安徽', value:60.84 },
     {name: '湖南', value:59.06 },
     {name: '山西', value:56.48 },
     {name: '河南', value:55.70 },
     {name: '海南', value:54.95 },
     {name: '云南', value:53.87 },
     {name: '内蒙古', value:52.56 },
     {name: '甘肃', value:51.78 },
     {name: '陕西', value:51.65 },
     {name: '河北', value:49.85 },
     {name: '青海', value:48.95 },
     {name: '广西', value:46.28 },
     {name: '贵州', value:43.36 },
     {name: '黑龙江', value:42.31 },
     {name: '吉林', value:41.79 },
     {name: '西藏', value:41.30 },
     {name: '辽宁', value:38.26 },
];
var geoCoordMap = {
     '台湾': [121.5135,25.0308],
    '黑龙江': [127.9688, 45.368],
    '内蒙古': [110.3467, 41.4899],
    "吉林": [125.8154, 44.2584],
    '北京市': [116.4551, 40.2539],
    "辽宁": [123.1238, 42.1216],
    "河北": [114.4995, 38.1006],
    "天津": [117.4219, 39.4189],
    "山西": [112.3352, 37.9413],
    "陕西": [109.1162, 34.2004],
    "甘肃": [103.5901, 36.3043],
    "宁夏": [106.3586, 38.1775],
    "青海": [101.4038, 36.8207],
    "新疆": [87.9236, 43.5883],
    "西藏": [91.11, 29.97],
    "四川": [103.9526, 30.7617],
    "重庆": [108.384366, 30.439702],
    "山东": [117.1582, 36.8701],
    "河南": [113.4668, 34.6234],
    "江苏": [118.8062, 31.9208],
    "安徽": [117.29, 32.0581],
    "湖北": [114.3896, 30.6628],
    "浙江": [119.5313, 29.8773],
    "福建": [119.4543, 25.9222],
    "江西": [116.0046, 28.6633],
    "湖南": [113.0823, 28.2568],
    "贵州": [106.6992, 26.7682],
    "云南": [102.9199, 25.4663],
    "广东": [113.12244, 23.009505],
    "广西": [108.479, 23.1152],
    "海南": [110.3893, 19.8516],
    '上海': [121.4648, 31.2891],
    
};