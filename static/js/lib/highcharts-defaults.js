Highcharts.setOptions({
    global: {
        useUTC: false
    },

    lang: {
        numericSymbols: null,
        decimalPoint: ',',
        months: ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'],
        shortMonths: ['jan', 'feb', 'mar', 'apr', 'mai', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'des'],
        weekdays: ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'],
        thousandsSep: ' '
    },

    colors: [
        "#000000",
        "#fadd00",
        "#b8bfcc",
        "#ccc",
        "#455068"
    ],

    chart: {
        reflow: false, // see https://github.com/highcharts/highcharts/issues/3478
        backgroundColor: 'transparent',

        style: {
            width: '100%'
        }
    },

    xAxis: {
        lineColor: '#ddd',
        gridLineWidth: 0,
        minorGridLineWidth: 0,
        tickWidth: 0,
        labels: {
            style: {
                fontWeight: '600'
            }
        }
    },

    yAxis: {
        min: 0,
        tickPosition: 'inside',
        gridLineWidth: 1,
        gridLineColor: 'rgba(221, 221, 221, 0.6)',
        title: {
            enabled: false
        },
        labels: {
            style: {
                fontWeight: 'normal',
                color: '#999'
            }
        }
    },

    title: {
        style: {
            color: '#111',
            font: 'bold 16px "Roboto", Helvetica Neue", "Helvetica", Arial, sans-serif'
        }
    },

    subtitle: {
        style: {
            color: '#666',
            font: 'light 12px "Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif'
        }
    },

    legend: {
        itemStyle: {
            font: '9pt "Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif',
            color: '#111'
        },

        itemHoverStyle: {
            color: 'gray'
        }
    },

    plotOptions: {
        area: {
            marker: {
                enabled: false
            }
        }
    },

    credits: {
        enabled: false
    }
});
