$( document ).ready(function() {

    $("#barchart1").hide();
    $("#barchart2").hide();
    $("#barchart3").hide();
    $("#boxchart1").hide();
    $("#boxchart2").hide();
    $("#boxchart3").hide();
    $("#mega-linechart").hide();

    function resetAllExpanded() {
        $('#barchart1').width("33%");
        $('#barchart2').width("33%");
        $('#barchart3').width("33%");
        $('#boxchart1').width("33%");
        $('#boxchart2').width("33%");
        $('#boxchart3').width("33%");
    }

    function onClickExpand(thechart) {
        var width = $('#' + thechart["renderTo"]["id"]).width()
        var parentWidth = $('#' + thechart["renderTo"]["id"]).offsetParent().width();
        var percent = Math.round(100 * width / parentWidth);
        if (percent > 40) {
            resetAllExpanded();
            return;
        }

        switch (thechart["renderTo"]["id"]) {
            case "barchart1":
                $('#barchart1').width("70%");
                $('#barchart2').width("15%");
                $('#barchart3').width("15%");
                break;
            case "barchart2":
                $('#barchart2').width("70%");
                $('#barchart1').width("15%");
                $('#barchart3').width("15%");
                break;
            case "barchart3":
                $('#barchart3').width("70%");
                $('#barchart2').width("15%");
                $('#barchart1').width("15%");
                break;
            case "boxchart1":
                $('#boxchart1').width("70%");
                $('#boxchart2').width("15%");
                $('#boxchart3').width("15%");
                break;
            case "boxchart2":
                $('#boxchart2').width("70%");
                $('#boxchart1').width("15%");
                $('#boxchart3').width("15%");
                break;
            case "boxchart3":
                $('#boxchart3').width("70%");
                $('#boxchart2').width("15%");
                $('#boxchart1').width("15%");
                break;
            default:
        }
    }

    Highcharts.setOptions({
        plotOptions: {
            series: {
                animation: false,
                borderWidth: 0
            },
            scatter: {
                stickyTracking: false
            },
            bar: {       
                pointWidth: 15,     
                groupPadding: 0.5,
                borderWidth: 0,
                borderRadius: {
                    radius: 0
                },
            },
            boxplot: {
                medianColor: "#000000"            },
        }
    });

    const boxchart1 = Highcharts.chart('boxchart1', {
        chart: {
            type: 'boxplot',
            inverted: true,
            animation: false
        },

        exporting: {
            buttons: {
                contextButton: {
                    enabled: false
                },
                exportButton: {
                    enabled: false
                },
                printButton: {
                    enabled: false,
                },
                customButton: {
                    text: "EXPAND",
                    onclick: function () {
                        onClickExpand(this);
                    },
                    zIndex: 9999
                },
            },
        },
    
        title: {
            text: '10 Dec 2013 - 25 Mar 2014 (15 Weeks)'
        },
    
        legend: {
            enabled: false
        },

        tooltip: {
            formatter: function () {
                if (this.series.name == "max") {
                    return '<tspan style="font-size: 1em;">Highest Parse (100th %)</tspan> <br/><tspan style="font-size: 1.1em;"><b>' + this.point.y + '</b></tspan>';
                } else {
                    return '<tspan style="font-size: 0.85em;">' + this.point.parses + ' Parses</tspan><br/>' +
                    '<tspan style="font-size: 1em;">' + this.point.name + 
                    '</tspan> <br/><tspan style="font-size: 1.2em;">Maximum (99th %): <b>' + this.point.high + '</b></tspan>' +
                    '</tspan> <br/><tspan style="font-size: 1.2em;">75th %: <b>' + this.point.q3 + '</b></tspan>' +
                    '</tspan> <br/><tspan style="font-size: 1.2em;">Median: <b>' + this.point.median + '</b></tspan>' +
                    '</tspan> <br/><tspan style="font-size: 1.2em;">25th %: <b>' + this.point.q1 + '</b></tspan>' +
                    '</tspan> <br/><tspan style="font-size: 1.2em;">Minimum (1st %): <b>' + this.point.low + '</b></tspan>';
                };
            }
        },
    
        xAxis: {
            type: "category"
        },

        yAxis: {
            title: {
                text: "DPS"
            }
        },
    
        series: []
    });

    const boxchart2 = Highcharts.chart('boxchart2', {
        chart: {
            type: 'boxplot',
            inverted: true,
            animation: false
        },

        exporting: {
            buttons: {
                contextButton: {
                    enabled: false
                },
                exportButton: {
                    enabled: false
                },
                printButton: {
                    enabled: false,
                },
                customButton: {
                    text: "EXPAND",
                    onclick: function () {
                        onClickExpand(this);
                    }
                },
            },
        },
    
        title: {
            text: '25 Mar 2014 - 08 Jul 2014 (15 Weeks)'
        },
    
        legend: {
            enabled: false
        },

        tooltip: {
            formatter: function () {
                if (this.series.name == "max") {
                    return '<tspan style="font-size: 1em;">Highest Parse (100th %)</tspan> <br/><tspan style="font-size: 1.1em;"><b>' + this.point.y + '</b></tspan>';
                } else {
                    return '<tspan style="font-size: 0.85em;">' + this.point.parses + ' Parses</tspan><br/>' +
                    '<tspan style="font-size: 1em;">' + this.point.name + 
                    '</tspan> <br/><tspan style="font-size: 1.2em;">Maximum (99th %): <b>' + this.point.high + '</b></tspan>' +
                    '</tspan> <br/><tspan style="font-size: 1.2em;">75th %: <b>' + this.point.q3 + '</b></tspan>' +
                    '</tspan> <br/><tspan style="font-size: 1.2em;">Median: <b>' + this.point.median + '</b></tspan>' +
                    '</tspan> <br/><tspan style="font-size: 1.2em;">25th %: <b>' + this.point.q1 + '</b></tspan>' +
                    '</tspan> <br/><tspan style="font-size: 1.2em;">Minimum (1st %): <b>' + this.point.low + '</b></tspan>';
                };
            }
        },
    
        xAxis: {
            type: "category"
        },

        yAxis: {
            title: {
                text: "DPS"
            }
        },
    
        series: []
    });

    const boxchart3 = Highcharts.chart('boxchart3', {
        chart: {
            type: 'boxplot',
            inverted: true,
            animation: false
        },

        exporting: {
            buttons: {
                contextButton: {
                    enabled: false
                },
                exportButton: {
                    enabled: false
                },
                printButton: {
                    enabled: false,
                },
                customButton: {
                    text: "EXPAND",
                    onclick: function () {
                        onClickExpand(this);
                    }
                },
            },
        },
    
        title: {
            text: '08 Jul 2014 - 14 Oct 2014 (14 Weeks)'
        },
    
        legend: {
            enabled: false
        },

        tooltip: {
            formatter: function () {
                if (this.series.name == "max") {
                    return '<tspan style="font-size: 1em;">Highest Parse (100th %)</tspan> <br/><tspan style="font-size: 1.1em;"><b>' + this.point.y + '</b></tspan>';
                } else {
                    return '<tspan style="font-size: 0.85em;">' + this.point.parses + ' Parses</tspan><br/>' +
                    '<tspan style="font-size: 1em;">' + this.point.name + 
                    '</tspan> <br/><tspan style="font-size: 1.2em;">Maximum (99th %): <b>' + this.point.high + '</b></tspan>' +
                    '</tspan> <br/><tspan style="font-size: 1.2em;">75th %: <b>' + this.point.q3 + '</b></tspan>' +
                    '</tspan> <br/><tspan style="font-size: 1.2em;">Median: <b>' + this.point.median + '</b></tspan>' +
                    '</tspan> <br/><tspan style="font-size: 1.2em;">25th %: <b>' + this.point.q1 + '</b></tspan>' +
                    '</tspan> <br/><tspan style="font-size: 1.2em;">Minimum (1st %): <b>' + this.point.low + '</b></tspan>';
                };
            }
        },
    
        xAxis: {
            type: "category"
        },

        yAxis: {
            title: {
                text: "DPS"
            }
        },
    
        series: []
    });

    const barchart1 = Highcharts.chart('barchart1', {
        chart: {
            type: 'bar',
            animation: false
        },
        exporting: {
            buttons: {
                contextButton: {
                    enabled: false
                },
                exportButton: {
                    enabled: false
                },
                printButton: {
                    enabled: false,
                },
                customButton: {
                    text: "EXPAND",
                    onclick: function () {
                        onClickExpand(this);
                    }
                },
            },
        },
        title: {
            text: '10 Dec 2013 - 25 Mar 2014 (15 Weeks)'
        },
        xAxis: {
            type: "category"
        },
        yAxis: {
            title: {
                text: "DPS"
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                },
            },
            series: {
                borderWidth: 1,
                borderColor: "#000000"
            }
        },
        legend: {
            enabled: false
        },
        tooltip: { 
            formatter: function() { 
                return  '<tspan style="font-size: 1em;">' + 
                        this.point.parses + ' (' + this.point.consideredParses + ') Parses</tspan><br/>' + this.point.name + '<br/>' + '<tspan style="font-size: 1.5em;"><b>' + this.point.y + '</b></tspan> DPS'; 
            },
            animation: false,
            followPointer: true
        },
        credits: {
            enabled: false
        },
        series: []
    });

    const barchart2 = Highcharts.chart('barchart2', {
        chart: {
            type: 'bar',
            animation: false
        },
        exporting: {
            buttons: {
                contextButton: {
                    enabled: false
                },
                exportButton: {
                    enabled: false
                },
                printButton: {
                    enabled: false,
                },
                customButton: {
                    text: "EXPAND",
                    onclick: function () {
                        onClickExpand(this);
                    }
                },
            },
        },
        title: {
            text: '25 Mar 2014 - 08 Jul 2014 (15 Weeks)'
        },
        xAxis: {
            type: "category"
        },
        yAxis: {
            title: {
                text: "DPS"
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                },
            }
        },
        legend: {
            enabled: false
        },
        tooltip: { 
            formatter: function() { 
                return  '<tspan style="font-size: 1em;">' + 
                        this.point.parses + ' (' + this.point.consideredParses + ') Parses</tspan><br/>' + this.point.name + '<br/>' + '<tspan style="font-size: 1.5em;"><b>' + this.point.y + '</b></tspan> DPS'; 
            },
            animation: false,
            followPointer: true
        },
        credits: {
            enabled: false
        },
        series: []
    });

    const barchart3 = Highcharts.chart('barchart3', {
        chart: {
            type: 'bar',
            animation: false
        },
        exporting: {
            buttons: {
                contextButton: {
                    enabled: false
                },
                exportButton: {
                    enabled: false
                },
                printButton: {
                    enabled: false,
                },
                customButton: {
                    text: "EXPAND",
                    onclick: function () {
                        onClickExpand(this);
                    }
                },
            },
        },
        title: {
            text: '08 Jul 2014 - 14 Oct 2014 (14 Weeks)'
        },
        xAxis: {
            type: "category"
        },
        yAxis: {
            title: {
                text: "DPS"
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                },
            }
        },
        legend: {
            enabled: false
        },
        tooltip: { 
            formatter: function() { 
                return  '<tspan style="font-size: 1em;">' + 
                        this.point.parses + ' (' + this.point.consideredParses + ') Parses</tspan><br/>' + this.point.name + '<br/>' + '<tspan style="font-size: 1.5em;"><b>' + this.point.y + '</b></tspan> DPS'; 
            },
            animation: false,
            followPointer: true
        },
        credits: {
            enabled: false
        },
        series: []
    });

    const biglinechart = Highcharts.chart('mega-linechart', {
        chart: {
            animation: false
        },
        title: {
            text: "10 Dec 2013 - 14 Oct 2014",
        },
        exporting: {
            enabled: false
        },
        yAxis: {
            text: "DPS"
        },
        xAxis: {
            type: "datetime"
        },
        tooltip: { 
            formatter: function() { 
                return  '<tspan style="font-size: 0.8em;">' + Highcharts.dateFormat('%d %b, %Y', this.x) + 
                        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
                        this.point.parses + ' (' + this.point.consideredParses + ') Parses</tspan><br/>'+ '<b>' + this.series.name + '</b><br/>' + '<tspan style="font-size: 1em;">' + this.point.y + '</tspan> DPS'; 
            },
            animation: false
        },
        series: [],
        plotOptions: {
            series: {
                animation: false
            }
        },
        marker: {
            enabled: false,
        },
        dataGrouping: {
            approximation: "average",
            enabled: true,
            forced: true,
        },
    });

    var boxchartsarr = [boxchart1, boxchart2, boxchart3];
    var barchartsarr = [barchart1, barchart2, barchart3];

    function loadChart() {
        var raidsize = $('input[name="raidsize"]:checked').val()
        var percentile = $('input[name="percentile"]:checked').val()
        var boss = $('input[name="boss"]:checked').val()
        var role = $('input[name="type"]:checked').val()
        var charttype = $('input[name="chart"]:checked').val()

        $("#boxchart1").hide();
        $("#boxchart2").hide();
        $("#boxchart3").hide();
        $("#mega-linechart").hide();
        $("#barchart1").hide();
        $("#barchart2").hide();
        $("#barchart3").hide();

        switch(charttype) {
            case "linechart":
                $("#mega-linechart").show();

                if (percentile == "pall") {
                    $('#50').click();
                    return;
                }

                for(var i = biglinechart.series.length - 1; i > -1; i--){ biglinechart.series[i].destroy(); }
                for (var i = 0; i < linechartsdata["data"][charttype][role][raidsize][boss][percentile]["series"].length; i++) {
                    biglinechart.addSeries(linechartsdata["data"][charttype][role][raidsize][boss][percentile]["series"][i], false);
                }
                biglinechart.redraw();

                break;

            case "barchart":
                if (percentile == "pall") {
                    $("#boxchart1").show();
                    $("#boxchart2").show();
                    $("#boxchart3").show();
                    charttype = "boxchart";

                    boxchartsarr.forEach(function (curr, ind, all) {
                        for(var i = curr.series.length - 1; i > -1; i--) { curr.series[i].destroy(); }
                        for (var i = boxchartsdata["data"][charttype][role][raidsize][boss]["all"]["series"][ind].length-1; i >= 0; i--) {
                            if (boss == "all" && i != 0) { continue; }
                            curr.addSeries(boxchartsdata["data"][charttype][role][raidsize][boss]["all"]["series"][ind][i], false);
                        }
                        curr.redraw();
                    });
                } else {
                    $("#barchart1").show();
                    $("#barchart2").show();
                    $("#barchart3").show();

                    barchartsarr.forEach(function (curr, ind, all) {
                        for(var i = curr.series.length - 1; i > -1; i--){ curr.series[i].destroy(); }
                        for (var i = 0; i < barchartsdata["data"][charttype][role][raidsize][boss][percentile]["series"][ind].length; i++) {
                            curr.addSeries(barchartsdata["data"][charttype][role][raidsize][boss][percentile]["series"][ind][i], false);
                        }
                        curr.redraw();
                    });
                }

                break;

            default:
        }
    }

    $('input:radio').change(function(e) {
        loadChart();
    });

    loadChart();

});