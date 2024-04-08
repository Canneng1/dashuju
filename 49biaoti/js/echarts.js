$(function () {
	
	$.ajax({
		   type:"get",
		   url:"",
		   async:true,
		   success:function(res){
		   	
		   }
	});

    ceshis();
    ceshis1();
    ceshis2();
    ceshis3();
    ceshis4();
    ceshis11();
     
/////////////////////////////////////////////////////////////////////////////////////////////////

    function ceshis() {
        var myChart = echarts.init(document.getElementById('chart1'));

window.dataList = [{
        name: "南海诸岛",
        value: 0
    },
    {
        name: '北京',
        value: 54
    },
    {
        name: '天津',
        value: 13
    },
    {
        name: '上海',
        value: 40
    },
    {
        name: '重庆',
        value: 75
    },
    {
        name: '河北',
        value: 13
    },
    {
        name: '河南',
        value: 83
    },
    {
        name: '云南',
        value: 11
    },
    {
        name: '辽宁',
        value: 19
    },
    {
        name: '黑龙江',
        value: 15
    },
    {
        name: '湖南',
        value: 69
    },
    {
        name: '安徽',
        value: 60
    },
    {
        name: '山东',
        value: 39
    },
    {
        name: '新疆',
        value: 4
    },
    {
        name: '江苏',
        value: 31
    },
    {
        name: '浙江',
        value: 104
    },
    {
        name: '江西',
        value: 36
    },
    {
        name: '湖北',
        value: 1052
    },
    {
        name: '广西',
        value: 33
    },
    {
        name: '甘肃',
        value: 7
    },
    {
        name: '山西',
        value: 9
    },
    {
        name: '内蒙古',
        value: 7
    },
    {
        name: '陕西',
        value: 22
    },
    {
        name: '吉林',
        value: 4
    },
    {
        name: '福建',
        value: 18
    },
    {
        name: '贵州',
        value: 5
    },
    {
        name: '广东',
        value: 98
    },
    {
        name: '青海',
        value: 1
    },
    {
        name: '西藏',
        value: 0
    },
    {
        name: '四川',
        value: 44
    },
    {
        name: '宁夏',
        value: 4
    },
    {
        name: '海南',
        value: 22
    },
    {
        name: '台湾',
        value: 3
    },
    {
        name: '香港',
        value: 5
    },
    {
        name: '澳门',
        value: 5
    }
];
option = {
    tooltip: {
        triggerOn: "click",
        formatter: function(e, t, n) {
            return .5 == e.value ? e.name + "：有疑似病例" : e.seriesName + "<br />" + e.name + "：" + e.value
        }
    },
    visualMap: {
        min: 0,
        max: 1000,
        left: 20,
        bottom: 4,
        showLabel: !0,
        text: ["高", "低"],
        pieces: [{
            gt: 100,
            label: "> 100 人",
            color: "#7f1100"
        }, {
            gte: 10,
            lte: 100,
            label: "10 - 100 人",
            color: "#ff5428"
        }, {
            gte: 1,
            lt: 10,
            label: "1 - 9 人",
            color: "#ff8c71"
        }, {
            gt: 0,
            lt: 1,
            label: "疑似",
            color: "#ffd768"
        }, {
            value: 0,
            color: "#ffffff"
        }],
        show: !0
    },
    geo: {
        map: "china",
        //允许放大缩小
        roam:true,
//      scaleLimit: {
//          min: 1,
//          max: 2
//      },
        zoom: 1,
       
        label: {
            normal: {
                show: !0,
                fontSize: "14",
                color: "rgba(0,0,0,0.7)"
            }
        },
        itemStyle: {
            normal: {
                //shadowBlur: 50,
                //shadowColor: 'rgba(0, 0, 0, 0.2)',
                borderColor: "rgba(0, 0, 0, 0.2)"
            },
            emphasis: {
                areaColor: "#f2d5ad"
              
            }
        }
    },
    series: [{
        name: "确诊病例",
        type: "map",
        geoIndex: 0,
        data: window.dataList
    }]
}

    // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////
//心脏病主要种类及患病人数模块
    function ceshis1() {
        var myChart = echarts.init(document.getElementById('chart2'));

       var myColor = ['#34da62','#d0a00e', '#d0570e',  '#eb3600','#eb2100'];
option = {
	//图形大小
    grid: {
        left: '20%',
        top: '10%',
        right: '0%',
        bottom: '10%',
        containLabel: true
    },
//  title: {
//      text: "心脏病主要种类及患病人数",
//      left: "center",
//      top: 5,
//      textStyle: {
//          color: "#ccc"
//      }
//  },

    xAxis: [{
        show: false,
    }],
    yAxis: [{
        axisTick: 'none',
        axisLine: 'none',
        offset: '27',
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '16',
            }
        },
        data: [ '先天性心脏病', '风湿性心脏病','肺心病', '心力衰竭', '冠心病',]
    }, {
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '16',
            }
        },
    }, {
        name: '心脏病主要种类及患病人数（万人）',
        nameGap: '50',
        nameTextStyle: {
            color: '#ffffff',
            fontSize: '16',
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        },
        data: [],
    }],
    series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: [200, 250, 500, 890, 1139],
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '16',
                    }
                }
            },
            barWidth: 12,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                }
            },
            z: 2
        }, 
        {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [ 0, 0, 0, 0, 0],
            yAxisIndex: 2,
            symbolSize: 35,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    opacity: 1,
                }
            },
            z: 2
        }]
}
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 心脏致病因素及致死人数模块
    function ceshis2() {
        var myChart = echarts.init(document.getElementById('chart3'));
        // This example requires ECharts v5.5.0 or later
option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
//  top: '8%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '50%'],
      center: ['50%', '70%'],
      // adjust the start and end angle
      startAngle: 180,
      endAngle: 360,
      data: [
        { value: 50, name: '运动不足' },
        { value: 200, name: 'BMI高' },
        { value: 230, name: '空腹血糖高' },
        { value: 300, name: '吸烟' },
        { value: 380, name: '低密度脂蛋白胆固醇' },
        { value: 498, name: '空气污染' },
        { value: 1080, name: '血压升高' }, 
        
      ]
    }
  ]
};

//    option = {
//  toolbox: {
//      show: true,
//      feature: {
//          mark: {
//              show: true
//          },
//         
//          magicType: {
//              show: true,
//              type: ['pie', 'funnel']
//          }           
//      }
//  },
//  calculable: true,
//  "tooltip": {
//      "trigger": "item",
//      "formatter": "{a}<br/>{b}:{c}万死亡"
//  },
//  "title": {
//      "text": "心脏致病因素及致死人数",
//      "left": "center",
//      "top": 5,
//      "textStyle": {
//          "color": "#ccc",
//           fontSize:"12"
//      }
//  },
//  "calculable": true,
//  "legend": {
//      "icon": "circle",
//      "x": "center",
//      "y": "10%",
//      "data": [
//          "运动不足",
//          "BMI高",
//          "空腹血糖高",
//          "吸烟",
//          "低密度脂蛋白胆固醇",
//          "空气污染",
//          "血压升高",
//          
//      ],
//      "textStyle": {
//          "color": "#fff"
//      }
//  },
//  "series": [{
//      "name": "致病因素",
//      "type": "pie",
//      "radius": [
//          37,
//          155
//      ],
//      "avoidLabelOverlap": false,
//      "startAngle": 0,
//      "center": [
//          "50.1%",
//          "34%"
//      ],
//      "roseType": "area",
//      "selectedMode": "single",
//      "label": {
//          "normal": {
//              "show": true,
//              "formatter": "{c}万死亡"
//          },
//          "emphasis": {
//              "show": true
//          }
//      },
//      "labelLine": {
//          "normal": {
//              "show": true,
//              "smooth": false,
//              "length": 20,
//              "length2": 10
//          },
//          "emphasis": {
//              "show": true
//          }
//      },
//      "data": [{
//              "value": 39.7,
//              "name": "运动不足",
//                 itemStyle: {
//                     normal: {
//                         color: '#f845f1'
//                     }
//                 }
//             },
//             {
//                 value: 200,
//                 name: 'BMI高',
//                 itemStyle: {
//                     normal: {
//                         color: '#ad46f3'
//                     }
//                 }
//             },
//             {
//                 value: 230,
//                 name: '空腹血糖高',
//                 itemStyle: {
//                     normal: {
//                         color: '#5045f6'
//                     }
//                 }
//             },
//             {
//                 value: 300,
//                 name: '吸烟',
//                 itemStyle: {
//                     normal: {
//                         color: '#4777f5'
//                     }
//                 }
//             },
//             {
//                 value: 380,
//                 name: '低密度脂蛋白胆固醇',
//                 itemStyle: {
//                     normal: {
//                         color: '#44aff0'
//                     }
//                 }
//             },
//             {
//                 value: 490,
//                 name: '空气污染',
//                 itemStyle: {
//                     normal: {
//                         color: '#45dbf7'
//                     }
//                 }
//             },
//             {
//                 value: 1080,
//                 name: '血压升高',
//                 itemStyle: {
//                     normal: {
//                         color: '#f6d54a'
//                     }
//                 }
//             },
//             {
//                 value: 0,
//                 name: "",
//                 itemStyle: {
//                     normal: {
//                         color: 'transparent'
//                     }
//                 },
//                 label: {
//                     show: false
//                 },
//                 labelLine: {
//                     show: false
//                 }
//             },
//             {
//                 value: 0,
//                 name: "",
//                  itemStyle: {
//                     normal: {
//                         color: 'transparent'
//                     }
//                 },
//                 label: {
//                     show: false
//                 },
//                 labelLine: {
//                     show: false
//                 }
//             },
//             {
//                 value: 0,
//                 name: "",
//                  itemStyle: {
//                     normal: {
//                         color: 'transparent'
//                     }
//                 },
//                 label: {
//                     show: false
//                 },
//                 labelLine: {
//                     show: false
//                 }
//             },
//             {
//                 value: 0,
//                 name: "",
//                  itemStyle: {
//                     normal: {
//                         color: 'transparent'
//                     }
//                 },
//                 label: {
//                     show: false
//                 },
//                 labelLine: {
//                     show: false
//                 }
//             },
//             {
//                 value: 0,
//                 name: "",
//                  itemStyle: {
//                     normal: {
//                         color: 'transparent'
//                     }
//                 },
//                 label: {
//                     show: false
//                 },
//                 labelLine: {
//                     show: false
//                 }
//             },
//             {
//                 value: 0,
//                 name: "",
//                  itemStyle: {
//                     normal: {
//                         color: 'transparent'
//                     }
//                 },
//                 label: {
//                     show: false
//                 },
//                 labelLine: {
//                     show: false
//                 }
//             },
//             {
//                 value: 0,
//                 name: "",
//                  itemStyle: {
//                     normal: {
//                         color: 'transparent'
//                     }
//                 },
//                 label: {
//                     show: false
//                 },
//                 labelLine: {
//                     show: false
//                 }
//             },
//             {
//                 value: 0,
//                 name: "",
//                  itemStyle: {
//                     normal: {
//                         color: 'transparent'
//                     }
//                 },
//                 label: {
//                     show: false
//                 },
//                 labelLine: {
//                     show: false
//                 }
//             }
//         ]
//     }]
// }
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function ceshis3() {
        var myChart = echarts.init(document.getElementById('chart4'));
        option = {
  title: {
    text: '中国心脏病死亡率分布图表',
     top: 5,
      textStyle: {
       color: "#ccc",
        fontSize:"12"
            
        }
    
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: ['2018', '2019', '2020', '2021', '2022', '2023'],
    //不显示刻度
    axisTick:{
      show:false
    },
    //刻度标签改为白色
    axisLable:{
      color:"#fff"
    }
  },
  series: [
    {
      name: '农村',
      type: 'bar',
      data: [88203, 23489, 29034, 20497, 33174, 63023],
      //修改柱子宽度
      barWidth:5,
      itemStyle:{
        //修改柱子颜色
        // color:""
      }
    
    },
    
    {
      name: '城市',
      type: 'bar',
      data: [99322, 23438, 31000, 32159, 33414, 68180],
      barWidth:15,
    }
  ]
};

//      var colors = ['rgb(46, 199, 201)', 'rgb(90, 177, 239)', 'rgb(255, 185, 128)'];
//
//      option = {
//          color: colors,
//
//          tooltip: {
//              trigger: 'axis',
//              axisPointer: {
//                  type: 'cross'
//              },
//              formatter: function(params) {
//                  // 系列
//                  let html = params[0].name + "<br>";
//
//                  for (var i = 0; i < params.length; i++) {
//
//                      // 获取每个系列对应的颜色值
//                      html += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + params[i].color + ';"></span>';
//
//                      // 通过判断指定系列增加 % 符号
//                      if (option.series[params[i].seriesIndex].type == "line") {
//                          html += params[i].seriesName + ": " + params[i].value + "%<br>";
//                      } else {
//                          html += params[i].seriesName + ": " + params[i].value + "<br>";
//                      }
//                  }
//                  return html;
//              }
//          },
//          grid: {
//              right: '20%'
//          },
//          toolbox: {
//              feature: {
//                  dataView: {
//                      show: true,
//                      readOnly: false
//                  },
//                  restore: {
//                      show: true
//                  },
//                  saveAsImage: {
//                      show: true
//                  }
//              }
//          },
//          legend: {
//              textStyle: {
//                  color: '#fff'
//              },
//              data: ['蒸发量', '降水量', '平均温度']
//          },
//          // 缩放组件
//          /*dataZoom: {
//              type: 'slider'
//          },*/
//          xAxis: [{
//              type: 'category',
//              axisTick: {
//                  alignWithLabel: true
//              },
//              axisLabel: {
//                  formatter: '{value} ',
//                  textStyle: {
//                      color: "#ffffff" //X轴文字颜色
//                  }
//              },
//              data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
//          }],
//          yAxis: [{
//              type: 'value',
//              name: '蒸发量',
//              min: 0,
//              max: 250,
//              position: 'right',
//              axisLine: {
//                  lineStyle: {
//                      color: colors[0]
//                  }
//              },
//              axisLabel: {
//                  formatter: '{value} ml'
//              }
//          },
//              {
//                  type: 'value',
//                  name: '降水量',
//                  min: 0,
//                  max: 250,
//                  position: 'right',
//                  offset: 80,
//                  axisLine: {
//                      lineStyle: {
//                          color: colors[1]
//                      }
//                  },
//                  axisLabel: {
//                      formatter: '{value} ml'
//                  }
//              },
//              {
//                  type: 'value',
//                  name: '温度',
//                  min: 0,
//                  max: 25,
//                  position: 'left',
//                  axisLine: {
//                      lineStyle: {
//                          color: colors[2]
//                      }
//                  },
//                  axisLabel: {
//                      formatter: '{value} °C'
//                  }
//              }
//          ],
//          series: [{
//              name: '蒸发量',
//              type: 'bar',
//              data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
//              itemStyle: {
//                  normal: {
//                      barBorderRadius: 2
//                  }
//              }
//          },
//              {
//                  barGap: '-50%', // 增加偏移量使重叠显示
//                  name: '降水量',
//                  type: 'bar',
//                  yAxisIndex: 1,
//                  data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
//                  itemStyle: {
//                      normal: {
//                          barBorderRadius: 2
//                      }
//                  }
//              },
//              {
//                  name: '平均温度',
//                  type: 'line',
//                  yAxisIndex: 2,
//                  data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
//              }
//          ]
//      };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  中国心脏病死亡率分布图模块
    function ceshis4() {
        var myChart = echarts.init(document.getElementById('chart5'));

        const colorList = ["#9E87FF", '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF']
option = {
    title: {
        text: '中国心脏病死亡率分布图表',
        left: "center",
        top: 5,
        textStyle: {
            color: "#ccc",
             fontSize:"12"
        }
    },
    legend: {
        icon: 'circle',
        top: '5%',
        right: '5%',
        itemWidth: 5,
        itemGap: 20,
        textStyle: {
            color: '#556677'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            label: {
                show: true,
                backgroundColor: '#fff',
                color: '#556677',
                borderColor: 'rgba(0,0,0,0)',
                shadowColor: 'rgba(0,0,0,0)',
                shadowOffsetY: 0
            },
            lineStyle: {
                width: 0
            }
        },
        backgroundColor: '#fff',
        textStyle: {
            color: '#5c6c7c'
        },
        padding: [10, 10],
        extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
    },
    grid: {
        top: '15%'
    },
    xAxis: [{
        type: 'category',
        data: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        axisLine: {
            lineStyle: {
                color: '#DCE2E8'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#556677'
            },
            fontSize: 12,
            margin: 15
        },
        axisPointer: {
            label: {
                padding: [0, 0, 10, 0],
                margin: 15,
                fontSize: 12,
                backgroundColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#fff' // 0% 处的颜色
                    }, {
                        // offset: 0.9,
                        offset: 0.86,
                        /*
0.86 = （文字 + 文字距下边线的距离）/（文字 + 文字距下边线的距离 + 下边线的宽度）
                        
                        */
                        color: '#fff' // 0% 处的颜色
                    }, {
                        offset: 0.86,
                        color: '#33c0cd' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#33c0cd' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        boundaryGap: false
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#DCE2E8'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#556677'
            }
        },
        splitLine: {
            show: false
        }
    }, {
        type: 'value',
        position: 'right',
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#556677'
            },
            formatter: '{value}'
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#DCE2E8'
            }
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
            name: '农村',
            type: 'line',
            data: [174,177,206,221,265,257,262,255,294,296,298,309,312,322,323,336],
            symbolSize: 1,
            symbol: 'circle',
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            lineStyle: {
                width: 5,
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#9effff'
                    },
                    {
                        offset: 1,
                        color: '#9E87FF'
                    }
                ]),
                shadowColor: 'rgba(158,135,255, 0.3)',
                shadowBlur: 10,
                shadowOffsetY: 20
            },
            itemStyle: {
                normal: {
                    color: colorList[0],
                    borderColor: colorList[0]
                }
            }
        }, {
            name: '城市',
            type: 'line',
            data: [209,184,212,242,255,254,257,252,259,262,265,265,268,275,278,291],
            symbolSize: 1,
            symbol: 'circle',
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            lineStyle: {
                width: 5,
                color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                        offset: 0,
                        color: '#73DD39'
                    },
                    {
                        offset: 1,
                        color: '#73DDFF'
                    }
                ]),
                shadowColor: 'rgba(115,221,255, 0.3)',
                shadowBlur: 10,
                shadowOffsetY: 20
            },
            itemStyle: {
                normal: {
                    color: colorList[1],
                    borderColor: colorList[1]
                }
            }
        },

    ]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 function ceshis11() {
        var myChart = echarts.init(document.getElementById('chart11'));
option = {
    tooltip: {
        trigger: 'item',
    },
    title: {
        text: "性别年龄分布图",
        left: "center",
        top: 5,
        textStyle: {
            color: "#ccc",
            fontSize:"12"
            
        }
    },

    legend: {
        orient: 'vertical',
        bottom:"1%",
        //小图标的宽度与高度
        itemWidth:10,
        itemHeight:10,
        //修改图标的文字
        textStyle:{
        	color:"rgba(243, 238, 238, 1)",
        	fontSize:"12"
        },
        x: 'left',
        data:['男性患者','女性患者','0~20岁','21~35岁','36~50岁','51~65岁','66~80岁','80岁以上']
    },
    series: [
        {
            name:'患者性别',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            color: [ '#59ADF3', '#FF999A'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:0.58, name:'男性患者', selected:true},
                {value:0.42, name:'女性患者'}
            ]
        },
        {
            name:'患者年龄',
            type:'pie',
            radius: ['30%', '55%'],

            data:[
                {value:0.0088, name:'0~20岁'},
                {value:0.0177, name:'21~35岁'},
                {value:0.0444, name:'36~50岁'},
                {value:0.2044, name:'51~65岁'},
                {value:0.3422, name:'66~80岁'},
                {value:0.3825, name:'80岁以上'},
            ]
        }
    ]
}
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    

});