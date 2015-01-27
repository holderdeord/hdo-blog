(function () {
    var partyCounts = [{"name": "KrF", "count": "16", "innlegg": "5356"}, {"name": "A", "count": "17", "innlegg": "10195"}, {"name": "Sp", "count": "7", "innlegg": "4218"}, {"name": "V", "count": "5", "innlegg": "3335"}, {"name": "SV", "count": "5", "innlegg": "4784"}, {"name": "FrP", "count": "9", "innlegg": "10322"}, {"name": "H", "count": "8", "innlegg": "9688"}, {"name": "MDG", "count": "0", "innlegg": "182"}];
    var repCounts = [{"name": "Jens Stoltenberg (A)", "count": "16", "innlegg": "907"}, {"name": "Knut Arild Hareide (KrF)", "count": "5", "innlegg": "433"}, {"name": "Torgeir Micaelsen (A)", "count": "2", "innlegg": "183"}, {"name": "Hans Olav Syversen (KrF)", "count": "6", "innlegg": "630"}, {"name": "Snorre Serigstad Valen (SV)", "count": "3", "innlegg": "318"}, {"name": "Dagfinn Høybråten (KrF)", "count": "3", "innlegg": "360"}, {"name": "Abid Q. Raja (V)", "count": "2", "innlegg": "241"}, {"name": "Per Olaf Lundteigen (Sp)", "count": "4", "innlegg": "636"}, {"name": "Jonas Gahr Støre (A)", "count": "4", "innlegg": "791"}];

    function cleanCounts(data) {
        data.forEach(function (d) {
            d.count = +d.count;
            d.innlegg = +d.innlegg;
            d.score = d.count / d.innlegg;
        });
    }

    cleanCounts(partyCounts);
    cleanCounts(repCounts);

    function drawTopList(selector, data) {
        var cols = [];

        cols.push(['x'].concat(data.map(function (d) { return d.name; })));
        cols.push(['Score'].concat(data.map(function (d) { return d.score; })));

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
                rotated: true
            },
            color: { pattern: ["#e0c600"] }
        });
    }

    drawTopList('.om-munterhet-representative-chart', repCounts);
    drawTopList('.om-munterhet-party-chart', partyCounts);
}());