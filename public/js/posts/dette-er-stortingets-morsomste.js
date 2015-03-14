(function () {
    var colorPattern = ["#606b82", "#e1c600"];
    var repCounts    = [{"name":"Jens Stoltenberg","party":"A","total":907,"count":18,"percent":1.9845644983461963},{"name":"Hans Olav Syversen","party":"KrF","total":664,"count":8,"percent":1.2048192771084338},{"name":"Jonas Gahr Støre","party":"A","total":808,"count":5,"percent":0.6188118811881188},{"name":"Trine Skei Grande","party":"V","total":1161,"count":5,"percent":0.4306632213608958},{"name":"Knut Arild Hareide","party":"KrF","total":449,"count":5,"percent":1.1135857461024499},{"name":"Per Olaf Lundteigen","party":"Sp","total":681,"count":4,"percent":0.5873715124816447},{"name":"Svein Flåtten","party":"H","total":491,"count":3,"percent":0.6109979633401221},{"name":"Ketil Solvik-Olsen","party":"FrP","total":990,"count":3,"percent":0.30303030303030304},{"name":"Knut Storberget","party":"A","total":794,"count":3,"percent":0.3778337531486146},{"name":"Kristin Halvorsen","party":"SV","total":940,"count":3,"percent":0.3191489361702127}];
    var partyCounts  = [{"party":"A","total":16963,"count":43,"percent":0.25349289630371985,"name":"A"},{"party":"KrF","total":5637,"count":18,"percent":0.31931878658861096,"name":"KrF"},{"party":"H","total":12570,"count":16,"percent":0.12728719172633254,"name":"H"},{"party":"FrP","total":12084,"count":15,"percent":0.12413108242303873,"name":"FrP"},{"party":"SV","total":7037,"count":11,"percent":0.15631661219269574,"name":"SV"},{"party":"Sp","total":7127,"count":9,"percent":0.1262803423600393,"name":"Sp"},{"party":"V","total":3595,"count":9,"percent":0.25034770514603616,"name":"V"}, {"party":"MDG","total":277,"count":0,"percent":0.0,"name":"MDG"}];
    var timeline     = [{"session":"2008-2009","count":15,"total":14603,"percent":0.10271861946175444},{"session":"2009-2010","count":28,"total":15522,"percent":0.1803891251127432},{"session":"2010-2011","count":28,"total":17559,"percent":0.15946238396264023},{"session":"2011-2012","count":40,"total":15100,"percent":0.26490066225165565},{"session":"2012-2013","count":13,"total":9231,"percent":0.14082981258801863},{"session":"2013-2014","count":33,"total":13462,"percent":0.24513445253305602}];

    var percentFormat = {
        format: function(d) { return d + '%'; }
    };

    function drawTopList(selector, data, key) {
        var cols = [];

        var tickFormatter = key === 'percent' ? percentFormat : undefined;
        var yTitle        = key === 'percent' ? 'Prosent' : 'Antall';

        cols.push(['x'].concat(data.map(function (d) { return d.name; })));
        cols.push([].concat(data.map(function (d) { return d[key]; })));

        var chart = c3.generate({
            bindto: selector,
            data: {
                x: 'x',
                columns: cols,
                type: 'bar'
            },
            transition: { duration: 0 },
            axis: {
                x: { type: 'category', tick: { multiline: false } },
                y: { tick: tickFormatter },
                rotated: true
            },
            legend: { show: false },
            color: { pattern: colorPattern }
        });
    }

    function drawTimeline(selector, data) {
        var cols = [];

        cols.push(['x'].concat(data.map(function(d) { return d.session; })));
        cols.push(['Sesjon'].concat(data.map(function(d) { return d.percent; })));

        var chart = c3.generate({
            bindto: selector,
            data: {
                x: 'x',
                columns: cols,
                type: 'spline'
            },
            transition: { duration: 0 },
            axis: {
                x: {
                    type: 'category',
                    tick: {
                        multiline: false
                    }
                },
                y: {
                    min: 0,
                    tick: percentFormat
                },
                rotated: false
            },
            legend: { show: false },
            color: { pattern: colorPattern }
        });
    }

    function sortBy(key, collection) {
        return collection.slice(0).sort(function(a, b) {
            return b[key] - a[key];
        });
    }

    drawTopList('.om-munterhet-representative-chart', repCounts.slice(0, 6), 'count');
    drawTopList('.om-munterhet-party-chart', partyCounts, 'count');
    drawTopList('.om-munterhet-party-percent-chart', sortBy('percent', partyCounts), 'percent');

    drawTimeline('.om-munterhet-timeline-chart', timeline);
}());
