/**
 * Gray theme for Highcharts JS
 * @author Torstein Hønsi
 */

 // ["#C41F3B", "#FFF569", "#FF7D0A", "#DF5353", "rgb(78%, 61%, 43%)", "#a0a0a0", "#F43F5B", "#FFFF89", "#FF9D2A", "#FF7373", "rgb(92%, 76%, 58%)", "#c0c0c0"]
 Highcharts.theme = {
     colors: ["#aaeeee", "#f45b5b", "#90ee7e", "#7798BF", "#777777", "#ff0066", "#7E4DB1", "#55BF3B", "#DF5353", "#7798BF", '#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
     chart: {
         backgroundColor: '#141414',
         borderWidth: 1,
         borderRadius: 0,
         borderColor: '#888',
         plotBackgroundColor: null,
         plotShadow: false,
         spacingTop: 15,
         plotBorderWidth: 0,
         zoomType: 'x'
     },
     title: {
         style: {
             color: '#fff',
             font: '16px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
         }
     },
     subtitle: {
         style: {
             color: '#fff',
             font: '12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
         }
     },
     xAxis: {
         ordinal: false,
         gridLineWidth: 0,
         lineColor: '#333',
         tickColor: '#333',
         labels: {
             style: {
                 color: '#fff',
                 fontWeight: 'normal'
             }
         },
         title: {
             style: {
                 color: '#fff',
                 font: 'bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
             }
         }
     },
     yAxis: {
         ordinal: false,
         alternateGridColor: null,
         minorTickInterval: null,
         gridLineColor: 'rgba(255, 255, 255, .1)',
         lineWidth: 0,
         tickWidth: 0,
         labels: {
             style: {
                 color: '#fff',
                 fontWeight: 'normal'
             }
         },
         title: {
             style: {
                 color: '#fff',
                 font: 'bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
             }
         }
     },
     legend: {
         itemStyle: {
             color: '#c2c7d0', fontSize: '9px'
         },
         itemHoverStyle: {
             color: '#fff'
         },
         itemHiddenStyle: {
             color: '#666'
         },
         maxHeight: 600,
         navigation: {
             activeColor: '#333',
             inactiveColor: '#141414',
             arrowSize: 11,
             style: {
                 color: '#fff',
                 fontSize: '10px'
             }
         }
     },
     labels: {
         style: {
             color: '#fff'
         }
     },
     tooltip: {
         backgroundColor: '#202020',
         borderWidth: 5,
         borderColor: 'rgba(33%, 33%, 33%, 0.8)',
         borderRadius: 2,
         style: {
             color: '#FFF'
         }
     },
 
 
     plotOptions: {
         line: {
             dataLabels: {
                 color: '#fff'
             },
             marker: {
                 lineColor: '#333'
             }
         },
         spline: {
             marker: {
                 lineColor: '#333'
             }
         },
         scatter: {
             marker: {
                 lineColor: '#333'
             }
         },
         candlestick: {
             lineColor: 'fff'
         }
     },
 
     toolbar: {
         itemStyle: {
             color: '#fff'
         }
     },
 
     navigation: {
         buttonOptions: {
             backgroundColor: '#fff',
             borderColor: '#4d4d4d',
             symbolStroke: '#fff',
             hoverSymbolStroke: '#fff'
         }
     },
 
     exporting: {
         buttons: {
             exportButton: {
                 symbolFill: '#fff'
             },
             printButton: {
                 symbolFill: '#fff'
             }
         }
     },
 
     // scroll charts
     rangeSelector: {
         buttonTheme: {
             fill: {
                 linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                 stops: [
                     [0.4, '#888'],
                     [0.6, '#555']
                 ]
             },
             stroke: '#747474',
             style: {
                 color: '#fff',
                 fontWeight: 'normal'
             },
             states: {
                 hover: {
                     fill: {
                         linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                         stops: [
                             [0.4, '#BBB'],
                             [0.6, '#888']
                         ]
                     },
                     stroke: '#747474',
                     style: {
                         color: 'white'
                     }
                 },
                 select: {
                     fill: {
                         linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                         stops: [
                             [0.1, '#000'],
                             [0.3, '#333']
                         ]
                     },
                     stroke: '#747474',
                     style: {
                         color: '#fff'
                     }
                 }
             }
         },
         inputStyle: {
             backgroundColor: '#141414',
             color: '#fff',
             fontSize: 'x-small',
             borderColor: '#4d4d4d'
         },
         labelStyle: {
             color: '#ff'
         }
     },
 
     navigator: {
         handles: {
             backgroundColor: '#141414',
             borderColor: '#d6d6d6'
         },
         outlineColor: '#4d4d4d',
         maskFill: 'rgba(16, 16, 16, 0.5)',
         series: {
             color: '#808a9c',
             lineColor: 'rgba(16,16,16,0.0)'
         }
     },
 
     
     
     scrollbar: {
         barBackgroundColor: {
                 linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                 stops: [
                     [0.4, '#888'],
                     [0.6, '#555']
                 ]
             },
         barBorderColor: '#747474',
         buttonArrowColor: '#d6d6d6',
         buttonBackgroundColor: {
                 linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                 stops: [
                     [0.4, '#888'],
                     [0.6, '#555']
                 ]
             },
         buttonBorderColor: '#747474',
         rifleColor: '#d6d6d6',
         trackBackgroundColor: {
             linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
             stops: [
                 [0, '#000'],
                 [1, '#333']
             ]
         },
         trackBorderColor: '#747474'
     },
 
     // special colors for some of the demo examples
     legendBackgroundColor: 'rgba(48, 48, 48, 0.8)',
     legendBackgroundColorSolid: 'rgb(70, 70, 70)',
     dataLabelsColor: '#fff',
     textColor: '#fff',
     maskColor: 'rgba(255,255,255,0.3)'
 };
 
 // Apply the theme
 var highchartsOptions = Highcharts.setOptions(Highcharts.theme);
 