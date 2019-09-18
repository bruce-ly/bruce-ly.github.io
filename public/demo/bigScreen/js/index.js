;(function () {
    function toPercent(num) {
        return Number(num * 100).toFixed(1) + '%';
    }

    function toMoney(num) {
        return num.toString().replace(/(?=(?!^)(?:\d{3})+(?:\.|$))(\d{3}(\.\d+$)?)/g, ',$1');
    }

    // 中间
    // 目标责任考核趋势分析
    $.ajax({
        url: '/f/screenIndex/targetBenchmark',
        success: function (data) {
            targetBenchmark($.type(data) === 'string' ? JSON.parse(data).resultList : data.resultList);
        },
        error: function (err) {
            $.get('json/targetBenchmark.json', function (data) {
                targetBenchmark(data.resultList);
            });
        }
    });
    function targetBenchmark($data) {
        var
            l = [],
            x = ['1季度', '2季度', '3季度', '4季度'],
            s = []
        ;
        $.each($data, function (i, n) {
            l.push(n.office.office);
            s.push({
                type: 'bar',
                name: n.office.office,
                data: n.kaohe
            })
        });
        echarts.init(document.getElementById('echarts1'), 'theme').setOption({
            tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}},
            legend: {data: l},
            xAxis: {data: x},
            yAxis: {name: '单位：分'},
            series: s
        });
    }


    // 城区建设建设进完成情况
    $.ajax({
        url: '/f/screen/city',
        success: function (data) {
            city(JSON.parse(data));
        },
        error: function (err) {
            $.get('json/city.json', function (data) {
                city(data);
            })
        }
    });
    function city($data) {
        $.each($data, function (i, n) {
            $('.jslist').eq(i).find('li').eq(0).find('span').eq(0).text(n.cityTown).nextAll('span').text(n.family).parent().next().find('div').width(toPercent(n.competeRate)).parent().next().find('span').text(toPercent(n.competeRate));
        });
    }


    // 全区重点指标完成情况
    $.ajax({
        url: '/f/screenIndex/targetIndex',
        success: function (data) {
            targetIndex($.type(data) === 'string' ? JSON.parse(data).resultList : data.resultList);
        },
        error: function (err) {
            $.get('json/targetIndex.json', function (data) {
                targetIndex(data.resultList);
            })
        }
    });
    function targetIndex($data) {
        $.each($data, function (i, n) {
            $('.jslist2').eq(i).text(n.sumquarterlyCumulative).next().text(n.indexunit).end().prev().text(n.indexname);
        });
    }


    // 对标区县季度统计分析
    $.ajax({
        url: '/f/screenIndex/targetParty',
        success: function (data) {
            targetParty($.type(data) === 'string' ? JSON.parse(data) : data);
        },
        error: function (err) {
            $.get('json/targetParty.json', function (data) {
                targetParty(data);
            })
        }
    });
    function targetParty($data) {
        var
            l = ['渭城区', '汉台区', '新城区'],
            x = ['地区生产总值', '地方财政收入', '固定资产投资', '社会消费品零售额', '规模以上工业增加值'],
            o = []
        ;
        $.each($data, function (i, n) {
            o.push({
                series: [
                    {data: []},
                    {data: []},
                    {data: []}
                ]
            });
            $.each(n, function (i1, n1) {
                $.each(n1.areaNumList, function (i2, n2) {
                    o[i.replace(/^(.*[n])*.*(.|n)$/g, '$2') - 1].series[i2].data.push(n2);
                });
            });
        });
        echarts.init(document.getElementById('echarts2'), 'theme').setOption({
            baseOption: {
                timeline: {
                    x: 40,
                    x2: 40,
                    autoPlay: true,
                    playInterval: 3000,
                    controlStyle: {show: false},
                    tooltip: {show: false},
                    label: {
                        formatter: function (v, i) {
                            return (i + 1) + '季度'
                        }
                    },
                    data: ['2001', '2002', '2003', '2004']
                },
                grid: {y2: 40},
                tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}},
                legend: {data: l},
                xAxis: {axisLabel: {rotate: 18}, data: x},
                yAxis: {name: '单位：亿元'},
                series: [
                    {type: 'bar', name: l[0]},
                    {type: 'bar', name: l[1]},
                    {type: 'bar', name: l[2]}
                ]
            },
            options: o
        });
    }


    // 左边
    // 2017年主要经济指标季度完成情况
    $.ajax({
        url: '/f/screenIndex/targetStreet',
        success: function (data) {
            targetStreet($.type(data) === 'string' ? JSON.parse(data).resultList : data.resultList);
        },
        error: function (err) {
            $.get('json/targetStreet.json', function (data) {
                targetStreet(data.resultList);
            });
        }
    });
    function targetStreet($data) {
        $.each($data, function (i, n) {
            $('.jstable').eq(i).find('li').eq(1).text(n.indexNames.indexName + (n.unit.unit ? '（' + n.unit.unit + '）' : '')).next().next().find('span').text(n.gdprate[0] != 0 ? n.gdprate[0] : '--').parent().next().find('span').text(n.gdprate[1] != 0 ? n.gdprate[1] : '--').parent().next().find('span').text(n.gdprate[2] != 0 ? n.gdprate[2] : '--').parent().next().find('span').text(n.gdprate[3] != 0 ? n.gdprate[3] : '--').parent().next().next().next().find('span').text(toPercent(n.grpwthrate[0] / 100)).parent().next().find('span').text(toPercent(n.grpwthrate[1] / 100)).parent().next().find('span').text(toPercent(n.grpwthrate[2] / 100)).parent().next().find('span').text(toPercent(n.grpwthrate[3] / 100));
        });
    }


    // 渭城区生产总值趋势分析
    $.ajax({
        url: '/f/screenIndex/targetGdp',
        success: function (data) {
            targetGdp($.type(data) === 'string' ? JSON.parse(data).resultList : data.resultList);
        },
        error: function (err) {
            $.get('json/targetGdp.json', function (data) {
                targetGdp(data.resultList);
            });
        }
    });
    function targetGdp($data) {
        var
            l = ['第一产业', '第二产业', '第三产业', '增速'],
            x = [],
            d1 = [],
            d2 = [],
            d3 = [],
            d4 = []
        ;
        $.each($data, function (i, n) {
            x.push(n.year + '年');
            d1.push(n.data[0].firstIndustry);
            d2.push(n.data[1].secondIndustry);
            d3.push(n.data[2].thirdIndustry);
            d4.push(n.data[3].Growth);
        });
        echarts.init(document.getElementById('echarts3'), 'theme').setOption({
            color: ['#765bff', '#00a0e9', '#00ff00', '#4bbdee'],
            tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}},
            legend: {data: l,},
            xAxis: {data: x},
            yAxis: [{name: '单位（亿元）'}, {name: '单位（%）'}],
            series: [
                {
                    type: 'bar',
                    stack: '总量',
                    name: l[0],
                    data: d1,
                    itemStyle: {normal: {label: {show: true}}}
                },
                {
                    type: 'bar',
                    stack: '总量',
                    name: l[1],
                    data: d2,
                    itemStyle: {normal: {label: {show: true}}}
                },
                {
                    type: 'bar',
                    stack: '总量',
                    name: l[2],
                    data: d3,
                    itemStyle: {normal: {label: {show: true}}}
                },
                {
                    type: 'line',
                    yAxisIndex: 1,
                    name: l[3],
                    data: d4
                }
            ]
        });
    }


    // 渭城区人才结构现状分析
    (function () {
        var
            l = ['中专', '大专', '本科', '硕士以上'],
            x = ['2008年', '2009年', '2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年', '2017年']
        ;
        echarts.init(document.getElementById('echarts4'), 'theme').setOption({
            color: ['#00b7ee', '#00ff00', '#735aed', '#fff100'],
            tooltip: {trigger: 'axis'},
            legend: {data: l},
            xAxis: {boundaryGap: false, data: x},
            yAxis: {name: '单位：人'},
            series: [
                {
                    type: 'line',
                    stack: '总数',
                    areaStyle: {normal: {}},
                    name: l[0],
                    data: [22000, 23180, 17180, 18500, 13000, 10450, 11450, 9450, 8900, 10890]
                },
                {
                    type: 'line',
                    stack: '总数',
                    areaStyle: {normal: {}},
                    name: l[1],
                    data: [10200, 11000, 18900, 12800, 18000, 22000, 24000, 31000, 35000, 39000]
                },
                {
                    type: 'line',
                    stack: '总数',
                    areaStyle: {normal: {}},
                    name: l[2],
                    data: [8000, 8900, 12000, 12890, 14000, 16700, 18900, 19900, 20500, 23700]
                },
                {
                    type: 'line',
                    stack: '总数',
                    areaStyle: {normal: {}},
                    name: l[3],
                    data: [4000, 4890, 5900, 6900, 7500, 7900, 8300, 9000, 9600, 12000]
                }
            ]
        });
    })();


    // 重点项目建设
    $.ajax({
        url: '/f/screenIndex/targetProject',
        success: function (data) {
            targetProject($.type(data) === 'string' ? JSON.parse(data).result : data.result);
        },
        error: function (err) {
            $.get('json/targetProject.json', function (data) {
                targetProject(data.result);
            });
        }
    });
    function targetProject($data) {
        var
            $html = '',
            $time = null
        ;
        $.each($data, function (i, n) {
            $html += '<li><img src="' + n.imagePath + '"></li>';
        });
        $('#jstab').html($html).find('li').each(function (i, n) {
            $(this).click(function () {
                $(this).addClass('on').siblings().removeClass('on').parent().prevAll('img').attr('src', $data[i].imagePath).next().find('h2').text($data[i].projectName).next().find('span:last-child').text($data[i].hostUnit).end().next().find('span:last-child').text($data[i].leadership).end().next().find('span:last-child').text($data[i].startTime).end().next().find('span:last-child').text($data[i].annualTask).end().next().find('span:last-child').text($data[i].plannedInvestment).end().next().find('span:last-child').text($data[i].progress + '%').end().next().text($data[i].projectIntro);
                clearTimeout($time);
                $time = setTimeout(function () {
                    if ($(n).next().length) {
                        $(n).next().click();
                    } else {
                        $(n).siblings().first().click();
                    }
                }, 10000);
            });
        }).first().click();
    }


    // 项目投资进度排行榜
    $.ajax({
        url: '/f/screenIndex/targetProjectComplete',
        success: function (data) {
            targetProjectComplete($.type(data) === 'string' ? JSON.parse(data).ProjectComplete : data.ProjectComplete);
        },
        error: function (err) {
            $.get('json/targetProjectComplete.json', function (data) {
                targetProjectComplete(data.ProjectComplete);
            });
        }
    });
    function targetProjectComplete($data) {
        var
            txt = [],
            datal = [],
            datar = [],
            yMax = 100,
            dataShadow = []
        ;
        $.each($data, function (i, n) {
            txt.unshift(n.projectName);
            datal.unshift(n.annualTask);
            datar.unshift(n.completedRatio);
            dataShadow.unshift(yMax);
        });
        echarts.init(document.getElementById('echarts5'), 'theme').setOption({
            grid: {y: 40},
            yAxis: [
                {
                    type: 'category',
                    axisLabel: {inside: true},
                    z: 9,
                    data: txt
                },
                {
                    type: 'category',
                    name: '单位（万元）',
                    position: 'left',
                    data: datal
                },
                {
                    type: 'category',
                    name: '                                                                                                                                                                                                                                                                                                   累计投资占比',
                    position: 'right',
                    axisLabel: {formatter: '{value}%'},
                    data: datar
                }
            ],
            xAxis: {
                type: 'value',
                name: '百分比',
                splitLine: {show: false},
                axisTick: {show: false}
            },
            series: [
                {
                    type: 'bar',
                    barGap: '-100%',
                    barCategoryGap: '40%',
                    itemStyle: {normal: {color: 'rgba(0,0,0,0.2)'}},
                    animation: false,
                    data: dataShadow
                },
                {
                    type: 'bar',
                    data: datar,
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var colorList = ['#e32e2e', '#f25619', '#f79b09', '#edbd16', '#8db09a'];
                                if (params.data >= 80) {
                                    return colorList[0];
                                } else if (params.data >= 60) {
                                    return colorList[1];
                                } else if (params.data >= 40) {
                                    return colorList[2];
                                } else if (params.data >= 20) {
                                    return colorList[3];
                                } else {
                                    return colorList[4];
                                }
                            }
                        }
                    }
                }
            ]
        });
    }


    //24小时包抓监督实时动态
    $.ajax({
        url: '/f/screen/getReview',
        success: function (data) {
            getReview($.type(data) === 'string' ? JSON.parse(data) : data);
        },
        error: function (err) {
            $.get('json/getReview.json', function (data) {
                getReview(data);
            });
        }
    });
    function getReview($data) {
        var $html = '';
        $.each($data, function (i, n) {
            $html += '<li><img src="img/user-icon.png" alt=""><time>' + n.updateTime + '</time><div><span>' + n.createUser + '</span><span>' + n.content + '</span></div><p><span>' + n.ProjectName + '</span><span>已读</span></p></li>';
        });
        $('#jsmsg').html($html);
    }


    // 存在问题处置率
    $.ajax({
        url: '/f/screenIndex/problemDisposalList',
        success: function (data) {
            problemDisposalList($.type(data) === 'string' ? JSON.parse(data).problemDisposalList : data.problemDisposalList);
        },
        error: function (err) {
            $.get('json/problemDisposalList.json', function (data) {
                problemDisposalList(data.problemDisposalList);
            });
        }
    });
    function problemDisposalList($data) {
        $.each($data, function (i, n) {
            $('#jstable3').find('li').eq(i).find('span:first-child').text(n.leadership).next().text(n.projectName);
        });
    }

    $.ajax({
        url: '/f/screenIndex/problemType',
        success: function (data) {
            problemType($.type(data) === 'string' ? JSON.parse(data) : data);
        },
        error: function (err) {
            $.get('json/problemType.json', function (data) {
                problemType(data);
            });
        }
    });
    function problemType($data) {
        var d = [];
        $.each($data.problemTypeList, function (i, n) {
            d.push({
                value: n.num,
                name: n.type
            });
        });
        echarts.init(document.getElementById('echarts16'), 'theme').setOption({
            title: {text: '存在问题比例\n（%）', textStyle: {fontSize: 12}, x: 'center', y: 'center'},
            tooltip: {trigger: 'item'},
            series: [
                {
                    type: 'pie',
                    name: '存在问题',
                    roseType: 'area',
                    radius: [50, 120],
                    center: ['50%', '50%'],
                    label: {normal: {formatter: '{b} ({d}%)'}},
                    data: d
                }
            ]
        });
        $('#jsnum').find('li').first().find('span').text($data.problemSum).end().next().find('span').text($data.resolved).end().next().find('span').text($data.solvingRate);
    }


    // 右边
    // 养老模式情况趋势分析
    (function () {
        var
            l = ['居家养老', '机构养老', '社区养老', '其它'],
            x = ['2013年', '2014年', '2015年', '2016年', '2017年']
        ;
        echarts.init(document.getElementById('echarts14'), 'theme').setOption({
            tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}},
            legend: {data: l},
            xAxis: {data: x},
            yAxis: {name: '单位：位'},
            series: [
                {
                    type: 'bar',
                    name: l[0],
                    data: [17639, 17748, 18099, 18347, 18511]
                },
                {
                    type: 'bar',
                    name: l[1],
                    data: [581, 611, 667, 721, 863]
                },
                {
                    type: 'bar',
                    name: l[2],
                    data: [1163, 1360, 1456, 1546, 1664]
                },
                {
                    type: 'bar',
                    name: l[3],
                    data: [22, 32, 14, 41, 31]
                }
            ]
        });
    })();


    // 精准扶贫任务完成情况分析
    $.ajax({
        url: '/f/screenIndex/targeFuPin',
        success: function (data) {
            targeFuPin($.type(data) === 'string' ? JSON.parse(data)[0] : data[0]);
        },
        error: function (err) {
            $.get('json/targeFuPin.json', function (data) {
                targeFuPin(data[0]);
            });
        }
    });
    function targeFuPin($data) {
        var
            l = ['贫困人口', '已脱贫'],
            x = $data.area
        ;
        echarts.init(document.getElementById('echarts15'), 'theme').setOption({
            tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}},
            legend: {data: l},
            xAxis: {data: x},
            yAxis: {name: '单位：户'},
            series: [
                {
                    type: 'bar',
                    name: l[0],
                    itemStyle: {normal: {label: {show: true, position: 'top'}}},
                    data: $data.ReliefList
                },
                {
                    type: 'bar',
                    name: l[1],
                    itemStyle: {normal: {label: {show: true, position: 'top'}}},
                    data: $data.reliefListIs
                }
            ]
        });
    }


    // 60岁以上人口现状及趋势分析
    $.ajax({
        url: '/f/screenIndex/targetPopulation',
        success: function (data) {
            targetPopulation($.type(data) === 'string' ? JSON.parse(data)[0] : data[0]);
        },
        error: function (err) {
            $.get('json/targetPopulation.json', function (data) {
                targetPopulation(data[0]);
            });
        }
    });
    function targetPopulation($data) {
        var
            index = 0,
            time = [],
            l = $data.type,
            x = [],
            d1 = [],
            d2 = [],
            o = [],
            myChart = echarts.init(document.getElementById('echarts11'), 'theme');
        ;
        $.each($data.jsonArrayBoy, function (i, n) {
            time.push(n.nyear);
            x.push(n.nyear + '年');
            d1.push(n.man);
        });
        $.each($data.jsonArrayGirl, function (i, n) {
            d2.push(n.girl);
        });
        $.each($data.arrayagingList, function (i, n) {
            var ds = n.arrayaging, dz = ds[0] + ds[1] + ds[2];
            o.push({
                series: [
                    {},
                    {},
                    {
                        data: [
                            {
                                value: (100 * ds[0] / dz).toFixed(1),
                                name: l[0],
                                itemStyle: {normal: {label: {formatter: '{d}%'}, labelLine: {length: 20}}}
                            },
                            {
                                value: 100 - (100 * ds[0] / dz).toFixed(1),
                                itemStyle: {
                                    normal: {color: 'rgba(0,0,0,.1)'},
                                    emphasis: {color: 'rgba(0,0,0,.1)'}
                                }
                            }
                        ]
                    },
                    {
                        data: [

                            {
                                value: (100 * ds[1] / dz).toFixed(1),
                                name: l[1],
                                itemStyle: {normal: {label: {formatter: '{d}%'}, labelLine: {length: 50}}}
                            },
                            {
                                value: 100 - (100 * ds[1] / dz).toFixed(1),
                                itemStyle: {
                                    normal: {color: 'rgba(0,0,0,.1)'},
                                    emphasis: {color: 'rgba(0,0,0,.1)'}
                                }
                            }
                        ]
                    },
                    {
                        data: [
                            {
                                value: (100 * ds[2] / dz).toFixed(1),
                                name: l[2],
                                itemStyle: {normal: {label: {formatter: '{d}%'}, labelLine: {length: 80}}}
                            },
                            {
                                value: 100 - (100 * ds[2] / dz).toFixed(1),
                                itemStyle: {
                                    normal: {
                                        label: {
                                            position: 'center',
                                            formatter: '60岁以上人口总数\n' + dz,
                                            textStyle: {fontSize: 14}
                                        },
                                        color: 'rgba(0,0,0,.1)'
                                    }, emphasis: {color: 'rgba(0,0,0,.1)'}
                                }
                            }
                        ]
                    }
                ]
            });
        });
        myChart.setOption({
            baseOption: {
                timeline: {show: false, data: time},
                color: ['#36d236', '#00ffff', '#e5004f'],
                tooltip: {
                    trigger: 'axis',
                    formatter: function (v, i, callback) {
                        myChart.dispatchAction({
                            type: 'timelineChange',
                            currentIndex: v[0].dataIndex,
                        });
                        return v[0].axisValue + '<br>' + v[0].marker + v[0].seriesName + '：' + v[0].data + '<br>' + v[1].marker + v[1].seriesName + '：' + v[1].data;
                    }
                },
                grid: [{width: '50%'}, {width: '50%'}],
                legend: [{right: '48%', data: ['男', '女']}, {orient: 'vertical', right: 20, data: l}],
                xAxis: {type: 'category', boundaryGap: false, data: x},
                yAxis: {type: 'value', name: '单位：人'},
                series: [
                    {
                        type: 'line',
                        stack: '总数',
                        name: '男',
                        areaStyle: {normal: {}},
                        itemStyle: {normal: {color: '#20b8fe'}},
                        data: d1
                    },
                    {
                        type: 'line',
                        stack: '总数',
                        name: '女',
                        areaStyle: {normal: {}},
                        itemStyle: {normal: {color: '#8e1ec7'}},
                        data: d2
                    },
                    {
                        type: 'pie',
                        radius: ['56%', '60%'],
                        center: ['75%', '60%']
                    },
                    {
                        type: 'pie',
                        radius: ['42%', '46%'],
                        center: ['75%', '60%']
                    },
                    {
                        type: 'pie',
                        radius: ['28%', '32%'],
                        center: ['75%', '60%']
                    }
                ]
            },
            options: o
        });
        setInterval(function () {
            myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 1,
                dataIndex: index % time.length
            });
            index++;
        }, 3000);
    }


// 9年义务教育在校学生情况分析
    (function () {
        var
            l = ['小学', '初中', '总数'],
            x = ['2012年', '2013年', '2014年', '2015年', '2016年', '2017年']
        ;
        echarts.init(document.getElementById('echarts12'), 'theme').setOption({
            tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}},
            legend: {data: l},
            xAxis: {data: x},
            yAxis: {name: '单位：千人'},
            series: [
                {
                    type: 'bar',
                    stack: '总量',
                    name: l[0],
                    data: [31, 27, 25, 34, 28, 36],
                    itemStyle: {normal: {label: {show: true}}}
                },
                {
                    type: 'bar',
                    stack: '总量',
                    name: l[1],
                    data: [9, 10, 12, 8, 14, 6],
                    itemStyle: {normal: {label: {show: true}}}
                },
                {
                    type: 'line',
                    name: l[2],
                    data: [54, 58, 52, 59, 54, 56],
                    itemStyle: {normal: {label: {show: true}}}
                }
            ]
        });
    })();


// 千人平均医疗资源情况分析
    (function () {
        var
            x = ['床位数', '技术人员', '执业医师', '注册护士'],
            d1 = [[0, 2, 9, '中山办', '新兴办'], [1, 3, 10, '渭阳办', '中山办'], [2, 5, 12, '中山办', '渭阳办'], [3, 3, 11, '中山办', '文汇办']],
            d2 = [],
            d3 = [],
            d4 = []
        ;
        $.each(d1, function (i, n) {
            d2.push((n[1] + n[2]) / 2 - 2);
            d3.push(2);
            d4.push(.2);
        });
        echarts.init(document.getElementById('echarts13'), 'theme').setOption({
            color: ['#03fff0', '#03fff0', '#eb6877', '#03fff0'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {type: 'shadow'},
                formatter: function (v) {
                    return '千人' + v[0].axisValue + '<br>平均：' + ((v[0].data[1] + v[0].data[2]) / 2) + '<br>最高：' + v[0].data[2] + '<br>最低：' + v[0].data[1];
                }
            },
            xAxis: {data: x},
            yAxis: {name: '单位：位'},
            series: [
                {
                    type: 'custom',
                    renderItem: function (params, api) {
                        var
                            xValue = api.value(0),
                            lowPoint = api.coord([xValue, api.value(1)]),
                            highPoint = api.coord([xValue, api.value(2)]),
                            lowText = api.value(3),
                            highText = api.value(4),
                            halfWidth = api.size([1, 0])[0] * 0.1
                        ;
                        return {
                            type: 'group',
                            children: [
                                {
                                    type: 'line',
                                    shape: {
                                        x1: highPoint[0] - halfWidth, y1: highPoint[1],
                                        x2: highPoint[0] + halfWidth, y2: highPoint[1]
                                    },
                                    style: api.style({
                                        text: highText + '\n\n',
                                        stroke: api.visual('color')
                                    })
                                },
                                {
                                    type: 'line',
                                    shape: {
                                        x1: highPoint[0], y1: highPoint[1],
                                        x2: lowPoint[0], y2: lowPoint[1]
                                    },
                                    style: api.style({
                                        stroke: api.visual('color')
                                    })
                                },
                                {
                                    type: 'line',
                                    shape: {
                                        x1: lowPoint[0] - halfWidth, y1: lowPoint[1],
                                        x2: lowPoint[0] + halfWidth, y2: lowPoint[1]
                                    },
                                    style: api.style({
                                        text: '\n\n' + lowText,
                                        stroke: api.visual('color')
                                    })
                                }
                            ]
                        };
                    },
                    data: d1
                },
                {
                    type: 'bar',
                    stack: '总量',
                    data: d2,
                    itemStyle: {
                        normal: {barBorderColor: 'rgba(0,0,0,0)', color: 'rgba(0,0,0,0)'},
                        emphasis: {barBorderColor: 'rgba(0,0,0,0)', color: 'rgba(0,0,0,0)'}
                    }
                },
                {
                    type: 'bar',
                    stack: '总量',
                    data: d3,
                },
                {
                    type: 'bar',
                    stack: '总量',
                    data: d4,
                },
                {
                    type: 'bar',
                    stack: '总量',
                    data: d3,
                }
            ]
        });
    })();


// 近2年每24h空气质量趋势分析
    (function () {
        var
            l = ['质量值', '预警值', '平均值'],
            x = ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12', '2017-1', '2017-2', '2017-3', '2017-4', '2017-5', '2017-6', '2017-7', '2017-8', '2017-9', '2017-10', '2017-11', '2017-12'],
            d = [231, 211, 111, 131, 221, 141, 341, 111, 131, 221, 141, 341, 231, 113, 233, 213, 211, 331, 221, 311, 341, 212, 121, 321]
        ;
        echarts.init(document.getElementById('echarts9'), 'theme').setOption({
            tooltip: {trigger: 'axis'},
            grid: {x2: 40, y2: 20},
            legend: {data: l},
            xAxis: {boundaryGap: false, data: x},
            yAxis: {},
            dataZoom: [{
                show: true,
                y: 390,
                height: 6,
                handleIcon: 'M0,0 v10h5 v-10h-5 Z',
                handleSize: '200%',
                start: 50,
                end: 100
            }, {
                type: 'inside'
            }],
            series: [
                {
                    type: 'line',
                    name: l[0],
                    data: d,
                    markLine: {
                        precision: 0,
                        label: {normal: {formatter: '{b}\n{c}'}},
                        data: [
                            {
                                yAxis: 300,
                                lineStyle: {normal: {type: 'solid', width: 2, color: 'rgb(255, 112, 129)'}},
                                name: '预警值'
                            },
                            {type: 'average', lineStyle: {normal: {width: 2, color: 'rgb(255, 247, 153)'}}, name: '平均值'}
                        ]
                    }
                }
            ]
        });
    })();


// 污水排放量趋势分析
    (function () {
        var
            l = ['工业氨氮', '城镇生活氨氮', '农业氨氮', '集中式氨氮'],
            x = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
        ;
        echarts.init(document.getElementById('echarts10'), 'theme').setOption({
            tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}},
            legend: {data: l},
            xAxis: {data: x},
            yAxis: {name: '单位：万吨'},
            series: [
                {
                    type: 'bar',
                    stack: '总量',
                    name: l[0],
                    data: [11, 21, 31, 41, 21, 31, 41, 21, 31, 41]
                },
                {
                    type: 'bar',
                    stack: '总量',
                    name: l[1],
                    data: [21, 23, 12, 34, 23, 12, 34, 23, 12, 34]
                },
                {
                    type: 'bar',
                    stack: '总量',
                    name: l[2],
                    data: [11, 21, 31, 41, 21, 31, 41, 21, 31, 41]
                },
                {
                    type: 'bar',
                    stack: '总量',
                    name: l[3],
                    data: [21, 23, 12, 34, 23, 12, 24, 23, 12, 14]
                }
            ]
        });
    })();


// 渭河水质监测数据趋势分析
    (function () {
        var
            time = ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
        ;
        echarts.init(document.getElementById('echarts6'), 'theme').setOption({
            baseOption: {
                timeline: {
                    x: 40,
                    x2: 40,
                    y2: -6,
                    autoPlay: true,
                    playInterval: 3000,
                    controlStyle: {show: false},
                    label: {
                        formatter: function (v) {
                            return (new Date(v)).getFullYear() + '年';
                        }
                    },
                    data: time
                },
                grid: [{width: '70%', y2: 50}, {width: '30%'}],
                xAxis: {data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']},
                yAxis: {
                    axisLabel: {
                        formatter: function (v, i) {
                            var texts = [];
                            if (i === 0) {
                                texts.push('断流');
                            }
                            if (i === 1) {
                                texts.push('Ⅰ-Ⅱ优');
                            }
                            if (i === 2) {
                                texts.push('Ⅲ良');
                            }
                            if (i === 3) {
                                texts.push('Ⅳ污');
                            }
                            if (i === 4) {
                                texts.push('Ⅴ污');
                            }
                            if (i === 5) {
                                texts.push('劣Ⅴ');
                            }
                            return texts;
                        }
                    }
                },
                series: [
                    {
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    var colorList = ['#e5e5e5', '#36d236', '#259b24', '#dbcc42', '#ff9800', '#ff6478'];
                                    if (params.data === 0) {
                                        return colorList[0];
                                    } else if (params.data === 1) {
                                        return colorList[1];
                                    } else if (params.data === 2) {
                                        return colorList[2];
                                    } else if (params.data === 3) {
                                        return colorList[3];
                                    } else if (params.data === 4) {
                                        return colorList[4];
                                    } else {
                                        return colorList[5];
                                    }
                                }
                            }
                        }
                    },
                    {
                        type: 'pie',
                        radius: ['44%', '50%'],
                        center: ['86%', '50%']
                    }
                ]
            },
            options: [
                {
                    series: [
                        {data: [1, 2, 3, 4, 4, 5, 1, 2, 5, 4, 3, 3]},
                        {
                            data: [
                                {
                                    value: 50.42,
                                    name: '2009年达标占比',
                                    itemStyle: {
                                        normal: {
                                            label: {
                                                position: 'center',
                                                formatter: '{d}%\n{b}',
                                                textStyle: {fontSize: 16}
                                            },
                                            labelLine: {show: false}, color: '#36d236'
                                        }
                                    }
                                },
                                {
                                    value: 100 - 50.42,
                                    itemStyle: {normal: {color: 'rgba(0,0,0,.1)'}, emphasis: {color: 'rgba(0,0,0,.1)'}}
                                }
                            ]
                        }
                    ]
                },
                {
                    series: [
                        {data: [1, 2, 3, 4, 5, 4, 3, 1, 2, 3, 4, 5]},
                        {
                            data: [
                                {
                                    value: 51.23,
                                    name: '2010年达标占比',
                                    itemStyle: {
                                        normal: {
                                            label: {
                                                position: 'center',
                                                formatter: '{d}%\n{b}',
                                                textStyle: {fontSize: 16}
                                            },
                                            labelLine: {show: false}, color: '#36d236'
                                        }
                                    }
                                },
                                {
                                    value: 100 - 51.23,
                                    itemStyle: {normal: {color: 'rgba(0,0,0,.1)'}, emphasis: {color: 'rgba(0,0,0,.1)'}}
                                }
                            ]
                        }
                    ]
                },
                {
                    series: [
                        {data: [3, 1, 2, 3, 4, 5, 1, 2, 4, 5, 4, 3]},
                        {
                            data: [
                                {
                                    value: 58.29,
                                    name: '2011年达标占比',
                                    itemStyle: {
                                        normal: {
                                            label: {
                                                position: 'center',
                                                formatter: '{d}%\n{b}',
                                                textStyle: {fontSize: 16}
                                            },
                                            labelLine: {show: false}, color: '#36d236'
                                        }
                                    }
                                },
                                {
                                    value: 100 - 58.29,
                                    itemStyle: {normal: {color: 'rgba(0,0,0,.1)'}, emphasis: {color: 'rgba(0,0,0,.1)'}}
                                }
                            ]
                        }
                    ]
                },
                {
                    series: [
                        {data: [4, 5, 4, 3, 1, 2, 3, 4, 5, 1, 2, 3]},
                        {
                            data: [
                                {
                                    value: 53.09,
                                    name: '2012年达标占比',
                                    itemStyle: {
                                        normal: {
                                            label: {
                                                position: 'center',
                                                formatter: '{d}%\n{b}',
                                                textStyle: {fontSize: 16}
                                            },
                                            labelLine: {show: false}, color: '#36d236'
                                        }
                                    }
                                },
                                {
                                    value: 100 - 53.09,
                                    itemStyle: {normal: {color: 'rgba(0,0,0,.1)'}, emphasis: {color: 'rgba(0,0,0,.1)'}}
                                }
                            ]
                        }
                    ]
                },
                {
                    series: [
                        {data: [1, 2, 3, 4, 4, 5, 1, 2, 5, 4, 3, 3]},
                        {
                            data: [
                                {
                                    value: 50.42,
                                    name: '2013年达标占比',
                                    itemStyle: {
                                        normal: {
                                            label: {
                                                position: 'center',
                                                formatter: '{d}%\n{b}',
                                                textStyle: {fontSize: 16}
                                            },
                                            labelLine: {show: false}, color: '#36d236'
                                        }
                                    }
                                },
                                {
                                    value: 100 - 50.42,
                                    itemStyle: {normal: {color: 'rgba(0,0,0,.1)'}, emphasis: {color: 'rgba(0,0,0,.1)'}}
                                }
                            ]
                        }
                    ]
                },
                {
                    series: [
                        {data: [1, 2, 3, 4, 5, 4, 3, 1, 2, 3, 4, 5]},
                        {
                            data: [
                                {
                                    value: 51.23,
                                    name: '2014年达标占比',
                                    itemStyle: {
                                        normal: {
                                            label: {
                                                position: 'center',
                                                formatter: '{d}%\n{b}',
                                                textStyle: {fontSize: 16}
                                            },
                                            labelLine: {show: false}, color: '#36d236'
                                        }
                                    }
                                },
                                {
                                    value: 100 - 51.23,
                                    itemStyle: {normal: {color: 'rgba(0,0,0,.1)'}, emphasis: {color: 'rgba(0,0,0,.1)'}}
                                }
                            ]
                        }
                    ]
                },
                {
                    series: [
                        {data: [3, 1, 2, 3, 4, 5, 1, 2, 4, 5, 4, 3]},
                        {
                            data: [
                                {
                                    value: 58.29,
                                    name: '2015年达标占比',
                                    itemStyle: {
                                        normal: {
                                            label: {
                                                position: 'center',
                                                formatter: '{d}%\n{b}',
                                                textStyle: {fontSize: 16}
                                            },
                                            labelLine: {show: false}, color: '#36d236'
                                        }
                                    }
                                },
                                {
                                    value: 100 - 58.29,
                                    itemStyle: {normal: {color: 'rgba(0,0,0,.1)'}, emphasis: {color: 'rgba(0,0,0,.1)'}}
                                }
                            ]
                        }
                    ]
                },
                {
                    series: [
                        {data: [4, 5, 4, 3, 1, 2, 3, 4, 5, 1, 2, 3]},
                        {
                            data: [
                                {
                                    value: 53.09,
                                    name: '2016年达标占比',
                                    itemStyle: {
                                        normal: {
                                            label: {
                                                position: 'center',
                                                formatter: '{d}%\n{b}',
                                                textStyle: {fontSize: 16}
                                            },
                                            labelLine: {show: false}, color: '#36d236'
                                        }
                                    }
                                },
                                {
                                    value: 100 - 53.09,
                                    itemStyle: {normal: {color: 'rgba(0,0,0,.1)'}, emphasis: {color: 'rgba(0,0,0,.1)'}}
                                }
                            ]
                        }
                    ]
                },
                {
                    series: [
                        {data: [1, 3, 4, 5, 4, 3, 4, 5, 1, 2, 2, 3]},
                        {
                            data: [
                                {
                                    value: 60.05,
                                    name: '2017年达标占比',
                                    itemStyle: {
                                        normal: {
                                            label: {
                                                position: 'center',
                                                formatter: '{d}%\n{b}',
                                                textStyle: {fontSize: 16}
                                            },
                                            labelLine: {show: false}, color: '#36d236'
                                        }
                                    }
                                },
                                {
                                    value: 100 - 60.05,
                                    itemStyle: {normal: {color: 'rgba(0,0,0,.1)'}, emphasis: {color: 'rgba(0,0,0,.1)'}}
                                }
                            ]
                        }
                    ]
                }
            ]
        });
    })();


// 污水处置能力趋势分析
    (function () {
        var
            l = ['处理量', '增速'],
            x = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
        ;
        echarts.init(document.getElementById('echarts7'), 'theme').setOption({
            tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}},
            legend: {data: l},
            xAxis: {data: x},
            yAxis: {name: '单位：万吨'},
            series: [
                {
                    type: 'bar',
                    name: l[0],
                    data: [21, 23, 12, 34, 23, 12, 34, 23, 12, 34]
                },
                {
                    type: 'line',
                    name: l[1],
                    data: [11, 21, 31, 41, 21, 31, 41, 21, 31, 41]
                }
            ]
        });
    })();


// 废气排放指标来源构成分析
    (function () {
        var
            l = ['工业源', '城镇生活源', '机动车', '其他'],
            y = ['烟（粉）尘', '氮氧化物', '二氧化硫']
        ;
        echarts.init(document.getElementById('echarts8'), 'theme').setOption({
            tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}},
            legend: {data: l},
            xAxis: {},
            yAxis: {data: y},
            series: [
                {
                    type: 'bar',
                    stack: '总量',
                    barWidth: 60,
                    name: l[0],
                    data: [11, 21, 31]
                },
                {
                    type: 'bar',
                    stack: '总量',
                    barWidth: 60,
                    name: l[1],
                    data: [21, 23, 12]
                },
                {
                    type: 'bar',
                    stack: '总量',
                    barWidth: 60,
                    name: l[2],
                    data: [11, 21, 31]
                },
                {
                    type: 'bar',
                    stack: '总量',
                    barWidth: 60,
                    name: l[3],
                    data: [21, 23, 12]
                }
            ]
        });
    })();


// $('html').css({'transform-origin': '0 0', 'transform': 'scale(' + ($(this).width() / 7680) + ')'});
    $('.jsscroll').niceScroll({
        cursorcolor: 'rgb(113, 242, 156)', // 光标颜色
        cursoropacitymax: .8, // 改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
        cursorborder: '0', // 游标边框css定义
        cursorwidth: '4px', // 像素光标的宽度
        cursorborderradius: '4px',// 以像素为光标边界半径
        touchbehavior: true, // 使光标拖动滚动像在台式电脑触摸设备
        autohidemode: false // 是否隐藏滚动条
    });
})
();