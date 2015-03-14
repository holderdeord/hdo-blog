(function () {
    var colorPattern = ["#606b82", "#e1c600"];
    var repCounts    = [{"name":"Jens Stoltenberg","party":"Ap","total":907,"count":18,"percent":1.9845644983461963},{"name":"Hans Olav Syversen","party":"KrF","total":664,"count":8,"percent":1.2048192771084338},{"name":"Jonas Gahr Støre","party":"Ap","total":809,"count":5,"percent":0.6180469715698393},{"name":"Knut Arild Hareide","party":"KrF","total":449,"count":5,"percent":1.1135857461024499},{"name":"Trine Skei Grande","party":"V","total":1165,"count":5,"percent":0.4291845493562232},{"name":"Per Olaf Lundteigen","party":"Sp","total":686,"count":4,"percent":0.5830903790087464},{"name":"Snorre Serigstad Valen","party":"SV","total":360,"count":3,"percent":0.8333333333333334},{"name":"Gunnar Gundersen","party":"H","total":526,"count":3,"percent":0.5703422053231939},{"name":"Ketil Solvik-Olsen","party":"FrP","total":990,"count":3,"percent":0.30303030303030304},{"name":"Knut Storberget","party":"Ap","total":794,"count":3,"percent":0.3778337531486146},{"name":"Kristin Halvorsen","party":"SV","total":940,"count":3,"percent":0.3191489361702127},{"name":"Dagfinn Høybråten","party":"KrF","total":360,"count":3,"percent":0.8333333333333334},{"name":"Svein Flåtten","party":"H","total":491,"count":3,"percent":0.6109979633401221},{"name":"Olemic Thommessen","party":"H","total":356,"count":3,"percent":0.8426966292134831},{"name":"Sigurd Hille","party":"H","total":11,"count":3,"percent":27.27272727272727},{"name":"Karin Andersen","party":"SV","total":674,"count":2,"percent":0.2967359050445104},{"name":"Magnhild Meltveit Kleppa","party":"Sp","total":1086,"count":2,"percent":0.1841620626151013},{"name":"Abid Q. Raja","party":"V","total":257,"count":2,"percent":0.7782101167315175},{"name":"Torbjørn Røe Isaksen","party":"H","total":613,"count":2,"percent":0.3262642740619902},{"name":"Tord Lien","party":"FrP","total":480,"count":2,"percent":0.4166666666666667},{"name":"Torgeir Micaelsen","party":"Ap","total":200,"count":2,"percent":1.0},{"name":"Trygve Slagsvold Vedum","party":"Sp","total":460,"count":2,"percent":0.43478260869565216},{"name":"Kenneth Svendsen","party":"FrP","total":115,"count":2,"percent":1.7391304347826086},{"name":"Per Arne Olsen","party":"FrP","total":168,"count":1,"percent":0.5952380952380952},{"name":"Anniken Huitfeldt","party":"Ap","total":563,"count":1,"percent":0.17761989342806395}];
    var partyCounts  = [{"party":"Ap","total":16963,"count":43,"percent":0.25349289630371985,"name":"Ap"},{"party":"KrF","total":5637,"count":18,"percent":0.31931878658861096,"name":"KrF"},{"party":"H","total":12570,"count":16,"percent":0.12728719172633254,"name":"H"},{"party":"FrP","total":12084,"count":15,"percent":0.12413108242303873,"name":"FrP"},{"party":"SV","total":7037,"count":11,"percent":0.15631661219269574,"name":"SV"},{"party":"Sp","total":7127,"count":9,"percent":0.1262803423600393,"name":"Sp"},{"party":"V","total":3595,"count":9,"percent":0.25034770514603616,"name":"V"}, {"party":"MDG","total":277,"count":0,"percent":0.0,"name":"MDG"}];
    var timeline     = [{"session":"2008-2009","count":15,"total":14603,"percent":0.10271861946175444},{"session":"2009-2010","count":28,"total":15522,"percent":0.1803891251127432},{"session":"2010-2011","count":28,"total":17559,"percent":0.15946238396264023},{"session":"2011-2012","count":40,"total":15100,"percent":0.26490066225165565},{"session":"2012-2013","count":13,"total":9231,"percent":0.14082981258801863},{"session":"2013-2014","count":33,"total":13462,"percent":0.24513445253305602}];

    var percentFormat = {
        format: function(d) { return d + '%'; }
    };

    repCounts.forEach(function(d) {
        d.name = d.name + ', ' + d.party + '';
    });

    function drawTopList(selector, data, key, opts) {
        var cols = [];
        var opts = opts || {};
        var type = opts.type || 'bar';

        var tickFormatter = key === 'percent' ? percentFormat : undefined;
        var yTitle        = key === 'percent' ? 'Prosent' : 'Antall';

        cols.push(['x'].concat(data.map(function (d) { return d.name; })));
        cols.push([yTitle].concat(data.map(function (d) { return d[key]; })));

        var chart = c3.generate({
            bindto: selector,
            data: {
                x: 'x',
                columns: cols,
                type: type
            },
            transition: { duration: 0 },
            axis: {
                x: { type: 'category', tick: { multiline: false } },
                y: { tick: tickFormatter },
                rotated: !!opts.rotated
            },
            legend: { show: false },
            color: { pattern: colorPattern }
        });
    }

    function drawTimeline(selector, data) {
        var cols = [];

        cols.push(['x'].concat(data.map(function(d) { return d.session; })));
        cols.push(['Prosent av alle innlegg'].concat(data.map(function(d) { return d.percent; })));

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

    drawTopList('.om-munterhet-representative-chart', repCounts.slice(0, 23), 'count', {type: 'line', rotated: true});
    drawTopList('.om-munterhet-party-chart', partyCounts, 'count');
    drawTopList('.om-munterhet-party-percent-chart', sortBy('percent', partyCounts), 'percent');
    drawTimeline('.om-munterhet-timeline-chart', timeline);
}());
