$( document ).ready(function() {

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

    const boxchart = Highcharts.chart('boxchart', {
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
            },
        },
    
        title: {
            text: 'Both Weekends'
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

    function loadChart() {
        var raidsize = $('input[name="raidsize"]:checked').val()
        var percentile = $('input[name="percentile"]:checked').val()
        var boss = $('input[name="boss"]:checked').val()
        var role = $('input[name="type"]:checked').val()
        var difficulty = $('input[name="difficulty"]:checked').val()

        for(var i = boxchart.series.length - 1; i > -1; i--) { boxchart.series[i].destroy(); }
        for (var i = boxchartsdata["data"]["boxchart"][role][raidsize][difficulty][boss]["all"]["series"].length-1; i >= 0; i--) {
            if (boss == "all" && i != 0) { continue; }
            boxchart.addSeries(boxchartsdata["data"]["boxchart"][role][raidsize][difficulty][boss]["all"]["series"][i], false);
        }
        boxchart.redraw();
    }

    $('input:radio').change(function(e) {
        loadChart();
    });

    loadChart();

});