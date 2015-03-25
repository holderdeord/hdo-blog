(function () {
    var colorPattern = ["#606b82", "#e1c600"];

    function drawChart (selector) {
        var el      = d3.select(selector);
        var data    = d3.entries(JSON.parse(el.attr('data-values')));
        var yTitle  = el.attr('data-value-title') || 'y';
        var rotated = el.attr('data-rotated') !== null;
        var postfix = el.attr('data-postfix');

        data.sort(function(a,b) { return d3.descending(a.value, b.value); });

        var tickFormatter = postfix ? function(e) { return e + postfix; } : undefined;

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
                y: { tick: { format: tickFormatter } },
                rotated: rotated
            },
            legend: { show: false },
            color: { pattern: colorPattern }
        });
    }

    drawChart('.uparlamanterisk-sprakbruk-party-chart');
    drawChart('.uparlamanterisk-sprakbruk-party-percent-chart');
    drawChart('.uparlamanterisk-sprakbruk-person-chart');
    drawChart('.uparlamanterisk-sprakbruk-person-percent-chart');

    wordlists = $('#uparlamanterisk-sprakbruk-wordlists');

    wordlists.turn({
        gradients: true,
        acceleration: true,
        duration: 500,
        display: $(window).width() > 500 ? 'double' : 'single'
    });

    var turnNext = function() { wordlists.turn('next'); };
    var turnPrev = function() { wordlists.turn('previous'); };

    $(".next").click(turnNext);
    $(".prev").click(turnPrev);
}());
