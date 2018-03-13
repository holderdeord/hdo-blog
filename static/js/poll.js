var colors = ["#000000", "#fadd00", "#b8bfcc", "#ccc", "#455068"];

var historyChart = d3.select('.history-chart');
var pollCharts   = d3.selectAll('.poll-chart');

pollCharts.each(function() {
    var data = JSON.parse(this.getAttribute('data-json'));
    var columns = data.map(function(e) { return [e.name, +e.value]; });

    c3.generate({
        bindto: this,
        data: {
            columns: columns,
            type: 'donut'
        },
        color: { pattern: colors }
    });
});

var polls = JSON.parse(historyChart.attr('data-polls'));

if (polls.length > 1) {
    var dates = polls.map(function (p) { return p.published_at; });
    var data  = [];
    var types = {};

    for (var i = 0, l = polls.length; i < l; i++) {
        var poll = polls[i];

        for (var j = 0, k = poll.positions.length; j < k; j++) {
            var position = poll.positions[j];

            data[j] = data[j] || [position.name];
            data[j].push(+position.value);
        }
    }

    data.unshift(['x'].concat(dates));

    c3.generate({
        bindto: historyChart[0][0],
        padding: { right: 20 },
        data: {
            x: 'x',
            columns: data,
            types: types
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%Y-%m-%d'
                }
            }
        },
        color: { pattern: colors },
        point: { show: false }
    });
}

