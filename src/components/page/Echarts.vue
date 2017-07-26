<template>
     <div>
                <a href="http://echarts.baidu.com/api.html#echarts">参考api：http://echarts.baidu.com/api.html#echarts</a>
                <div  id="echarts1" class="echart"></div>
                <div  id="echarts2" class="echart"></div>
                <div  id="Dashboard" class="echart"></div>
                <div  id="echarts3" class="echart"></div>
                <div  id="echarts4" class="echart"></div>
     </div>
</template>
<!-- <script type="text/ecmascript-6"> -->
<script>
import echarts from "echarts"
export default {
    data () {
        return {
           
        }
     },
     mounted: function() {
        this.echarts1();
        this.dashboard();
        this.echarts2();
        this.echarts3();
        this.echarts4();
    },
    methods: {
             dashboard() {
                    // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('Dashboard'));

                // 指定图表的配置项和数据
                var option = {
                    title: {
                            text: '仪表盘'
                    },
                    tooltip : {
                        formatter: "{a} <br/>{b} : {c}%"
                    },
                    toolbox: {
                        feature: {
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    series: [
                        {
                            name: '业务指标',
                            type: 'gauge',
                            detail: {formatter:'{value}%'},
                            data: [{value: 50, name: '完成率'}]
                        }
                    ]
                };

                // 使用刚指定的配置项和数据显示图表。
                //myChart.setOption(option);
                setInterval(function () {
                    option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
                    myChart.setOption(option, true);
                },2000);
            },
            echarts1() {
                    // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('echarts1'));

                // 指定图表的配置项和数据
                var option = {
                    title:{ text: '折柱混合'},
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        }
                    },
                    toolbox: {
                        feature: {
                            dataView: {show: true, readOnly: false},
                            magicType: {show: true, type: ['line', 'bar']},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    legend: {
                        data:['蒸发量','降水量','平均温度']
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                            axisPointer: {
                                type: 'shadow'
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '水量',
                            min: 0,
                            max: 250,
                            interval: 50,
                            axisLabel: {
                                formatter: '{value} ml'
                            }
                        },
                        {
                            type: 'value',
                            name: '温度',
                            min: 0,
                            max: 25,
                            interval: 5,
                            axisLabel: {
                                formatter: '{value} °C'
                            }
                        }
                    ],
                    series: [
                        {
                            name:'蒸发量',
                            type:'bar',
                            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                        },
                        {
                            name:'降水量',
                            type:'bar',
                            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                        },
                        {
                            name:'平均温度',
                            type:'line',
                            yAxisIndex: 1,
                            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                        }
                    ]
                };


                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
            echarts2() {
                    // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('echarts2'));

                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: '堆叠区域图'
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    legend: {
                        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            data : ['周一','周二','周三','周四','周五','周六','周日']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'邮件营销',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name:'联盟广告',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name:'视频广告',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name:'直接访问',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name:'搜索引擎',
                            type:'line',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            areaStyle: {normal: {}},
                            data:[820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                };


                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
            echarts3() {
                    // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('echarts3'));
                
                // 指定图表的配置项和数据
                var option = {
                    title : {
                        text: '某站点用户访问来源',
                        subtext: '纯属虚构',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                    },
                    series : [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:335, name:'直接访问'},
                                {value:310, name:'邮件营销'},
                                {value:234, name:'联盟广告'},
                                {value:135, name:'视频广告'},
                                {value:1548, name:'搜索引擎'}
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };



                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
            echarts4() {
                    // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('echarts4'));

                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: 'Step Line'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['Step Start', 'Step Middle', 'Step End']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name:'Step Start',
                            type:'line',
                            step: 'start',
                            data:[120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name:'Step Middle',
                            type:'line',
                            step: 'middle',
                            data:[220, 282, 201, 234, 290, 430, 410]
                        },
                        {
                            name:'Step End',
                            type:'line',
                            step: 'end',
                            data:[450, 432, 401, 454, 590, 530, 510]
                        }
                    ]
                };



                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
    }
}
</script>
<style>
     .echart{margin: 25px 0;width: 1000px;height: 400px;border-bottom: 1px solid #eee}
</style>
