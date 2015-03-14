(function () {
    var colorPattern = ["#606b82", "#e1c600"];

    function drawChart (selector) {
        var el      = d3.select(selector);
        var data    = d3.entries(JSON.parse(el.attr('data-values')));
        var yTitle  = el.attr('data-value-title') || 'y';
        var rotated = el.attr('data-rotated') !== null;

        data.sort(function(a,b) { return d3.descending(a.value, b.value); });

        var chart = c3.generate({
            bindto: el.node(),
            data: {
                x: 'x',
                columns: [
                    ['x'].concat(data.map(function(d) { return d.key; })),
                    [yTitle].concat(data.map(function(d) { return d.value; }))
                ],
                type: el.attr('data-type') || 'bar'
            },
            transition: { duration: 0 },
            axis: {
                x: { type: 'category', tick: { multiline: false } },
                // y: { tick: tickFormatter },
                rotated: rotated
            },
            legend: { show: false },
            color: { pattern: colorPattern }
        });
    }

    drawChart('.uparlamanterisk-sprakbruk-party-chart');
    drawChart('.uparlamanterisk-sprakbruk-person-chart');
}());
