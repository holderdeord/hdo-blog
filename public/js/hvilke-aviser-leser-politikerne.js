(function () {
    var colors = {};  ["#000000", d3.rgb("#fadd00").darker(0.2), "#b8bfcc", "#ccc", "#455068"];
    var totals  = {"Aftenposten":850,"VG":482,"Dagens Næringsliv":416,"Dagbladet":288,"Bergens Tidende":164,"Adresseavisen":81,"Stavanger Aftenblad":85,"Fædrelandsvennen":24,"Morgenbladet":7,"Drammens Tidende":16,"Romerikes Blad":22,"Sunnmørsposten":32,"Finansavisen":45,"Tønsbergs Blad":13,"Haugesunds Avis":15,"Vårt Land":80,"Oppland Arbeiderblad":6,"Hamar Arbeiderblad":14,"Gudbrandsdølen Dagn.":1,"Dagsavisen":238,"Budstikka":11,"Nordlys":49,"Varden":6,"Trønder-Avisa":34,"Avisa Nordland":8,"Agderposten":9,"Telemarksavisa":15,"Fredriksstad Blad":9,"Klassekampen":103};
    var prints  = {"Aftenposten":214026,"VG":164430,"Dagens Næringsliv":80595,"Dagbladet":80028,"Bergens Tidende":73470,"Adresseavisen":67325,"Stavanger Aftenblad":59262,"Fædrelandsvennen":34845,"Morgenbladet":29337,"Drammens Tidende":29124,"Romerikes Blad":27951,"Sunnmørsposten":27460,"Finansavisen":24742,"Tønsbergs Blad":24544,"Haugesunds Avis":24073,"Vårt Land":23682,"Oppland Arbeiderblad":23645,"Hamar Arbeiderblad":23231,"Gudbrandsdølen Dagn.":23077,"Dagsavisen":23065,"Budstikka":22299,"Nordlys":21902,"Varden":21476,"Trønder-Avisa":20681,"Avisa Nordland":19894,"Agderposten":19853,"Telemarksavisa":19173,"Fredriksstad Blad":18801,"Klassekampen":17648};
    var byYear  = {"Aftenposten":{"2008":55,"2009":141,"2010":208,"2011":192,"2012":72,"2013":107,"2014":75},"VG":{"2008":44,"2009":78,"2010":124,"2011":98,"2012":44,"2013":47,"2014":47},"Dagens Næringsliv":{"2008":28,"2009":77,"2010":90,"2011":88,"2012":40,"2013":61,"2014":32},"Dagbladet":{"2008":18,"2009":54,"2010":77,"2011":54,"2012":30,"2013":31,"2014":24},"Bergens Tidende":{"2008":11,"2009":26,"2010":53,"2011":19,"2012":11,"2013":22,"2014":22},"Adresseavisen":{"2008":5,"2009":13,"2010":17,"2011":25,"2012":1,"2013":11,"2014":9},"Stavanger Aftenblad":{"2008":9,"2009":11,"2010":28,"2011":9,"2012":9,"2013":8,"2014":11},"Fædrelandsvennen":{"2008":1,"2009":1,"2010":10,"2011":1,"2012":2,"2013":4,"2014":5},"Morgenbladet":{"2008":0,"2009":1,"2010":3,"2011":1,"2012":1,"2013":0,"2014":1},"Drammens Tidende":{"2008":1,"2009":4,"2010":4,"2011":5,"2012":1,"2013":1,"2014":0},"Romerikes Blad":{"2008":1,"2009":10,"2010":4,"2011":4,"2012":1,"2013":1,"2014":1},"Sunnmørsposten":{"2008":1,"2009":7,"2010":10,"2011":11,"2012":2,"2013":1,"2014":0},"Finansavisen":{"2008":3,"2009":11,"2010":11,"2011":6,"2012":5,"2013":7,"2014":2},"Tønsbergs Blad":{"2008":0,"2009":2,"2010":1,"2011":5,"2012":4,"2013":0,"2014":1},"Haugesunds Avis":{"2008":1,"2009":3,"2010":5,"2011":1,"2012":2,"2013":3,"2014":0},"Vårt Land":{"2008":0,"2009":10,"2010":10,"2011":15,"2012":12,"2013":15,"2014":18},"Oppland Arbeiderblad":{"2008":0,"2009":0,"2010":3,"2011":1,"2012":1,"2013":1,"2014":0},"Hamar Arbeiderblad":{"2008":1,"2009":3,"2010":8,"2011":1,"2012":0,"2013":1,"2014":0},"Gudbrandsdølen Dagn.":{"2008":0,"2009":0,"2010":0,"2011":0,"2012":0,"2013":1,"2014":0},"Dagsavisen":{"2008":19,"2009":35,"2010":55,"2011":35,"2012":32,"2013":35,"2014":27},"Budstikka":{"2008":0,"2009":2,"2010":0,"2011":2,"2012":0,"2013":6,"2014":1},"Nordlys":{"2008":4,"2009":8,"2010":13,"2011":8,"2012":1,"2013":7,"2014":8},"Varden":{"2008":0,"2009":0,"2010":2,"2011":0,"2012":1,"2013":0,"2014":3},"Trønder-Avisa":{"2008":1,"2009":4,"2010":9,"2011":3,"2012":7,"2013":5,"2014":5},"Avisa Nordland":{"2008":0,"2009":1,"2010":1,"2011":3,"2012":1,"2013":1,"2014":1},"Agderposten":{"2008":0,"2009":0,"2010":5,"2011":3,"2012":0,"2013":0,"2014":1},"Telemarksavisa":{"2008":3,"2009":1,"2010":4,"2011":0,"2012":1,"2013":4,"2014":2},"Fredriksstad Blad":{"2008":3,"2009":3,"2010":1,"2011":0,"2012":1,"2013":0,"2014":1},"Klassekampen":{"2008":4,"2009":10,"2010":25,"2011":20,"2012":7,"2013":21,"2014":16}};
    var byParty = {"Aftenposten":{"Ukjent":89,"A":116,"FrP":229,"H":173,"KrF":107,"V":61,"SV":47,"Sp":28,"MDG":0},"VG":{"Ukjent":48,"A":65,"FrP":131,"H":119,"KrF":53,"V":35,"SV":19,"Sp":12,"MDG":0},"Dagens Næringsliv":{"Ukjent":21,"A":57,"FrP":108,"H":104,"KrF":50,"V":35,"SV":19,"Sp":22,"Frp":0,"MDG":0},"Dagbladet":{"Ukjent":24,"A":64,"FrP":68,"H":55,"KrF":23,"V":20,"SV":22,"Sp":12,"MDG":0},"Bergens Tidende":{"Ukjent":9,"A":23,"FrP":41,"H":40,"KrF":6,"V":14,"SV":11,"Sp":20,"MDG":0},"Adresseavisen":{"Ukjent":6,"A":13,"FrP":23,"H":19,"KrF":8,"V":4,"SV":1,"Sp":7,"MDG":0},"Stavanger Aftenblad":{"Ukjent":8,"A":4,"FrP":20,"H":21,"KrF":12,"V":2,"SV":8,"Sp":10,"MDG":0},"Fædrelandsvennen":{"Ukjent":0,"A":9,"FrP":7,"H":2,"KrF":4,"V":1,"SV":1,"Sp":0,"MDG":0},"Morgenbladet":{"Ukjent":1,"A":1,"FrP":1,"H":1,"KrF":2,"V":1,"SV":0,"Sp":0,"MDG":0},"Drammens Tidende":{"Ukjent":0,"A":6,"FrP":5,"H":3,"KrF":2,"V":0,"SV":0,"Sp":0,"MDG":0},"Romerikes Blad":{"Ukjent":1,"A":1,"FrP":16,"H":3,"KrF":0,"V":0,"SV":1,"Sp":0,"MDG":0},"Sunnmørsposten":{"Ukjent":0,"A":2,"FrP":12,"H":13,"KrF":3,"V":0,"SV":1,"Sp":1,"MDG":0},"Finansavisen":{"Ukjent":3,"A":4,"FrP":13,"H":19,"KrF":1,"V":0,"SV":1,"Sp":4,"MDG":0},"Tønsbergs Blad":{"Ukjent":0,"A":6,"FrP":6,"H":1,"KrF":0,"V":0,"SV":0,"Sp":0,"MDG":0},"Haugesunds Avis":{"Ukjent":2,"A":4,"FrP":5,"H":3,"KrF":0,"V":0,"SV":1,"Sp":0,"MDG":0},"Vårt Land":{"Ukjent":3,"A":10,"FrP":18,"H":20,"KrF":21,"V":1,"SV":3,"Sp":4,"MDG":0},"Oppland Arbeiderblad":{"Ukjent":1,"A":0,"FrP":3,"H":1,"KrF":0,"V":0,"SV":1,"Sp":0,"MDG":0},"Hamar Arbeiderblad":{"Ukjent":1,"A":1,"FrP":11,"H":1,"KrF":0,"V":0,"SV":0,"Sp":0,"MDG":0},"Gudbrandsdølen Dagn.":{"Ukjent":0,"A":0,"FrP":0,"H":1,"KrF":0,"V":0,"SV":0,"Sp":0,"MDG":0},"Dagsavisen":{"Ukjent":15,"A":38,"FrP":48,"H":67,"KrF":33,"V":17,"SV":13,"Sp":6,"MDG":1},"Budstikka":{"Ukjent":1,"A":5,"FrP":2,"H":1,"KrF":1,"V":1,"SV":0,"Sp":0,"MDG":0},"Nordlys":{"Ukjent":6,"A":16,"FrP":7,"H":13,"KrF":2,"V":3,"SV":1,"Sp":1,"MDG":0},"Varden":{"Ukjent":0,"A":1,"FrP":2,"H":1,"KrF":1,"V":0,"SV":0,"Sp":1,"MDG":0},"Trønder-Avisa":{"Ukjent":6,"A":5,"FrP":10,"H":10,"KrF":0,"V":1,"SV":0,"Sp":2,"MDG":0},"Avisa Nordland":{"Ukjent":0,"A":4,"FrP":2,"H":0,"KrF":0,"V":0,"SV":2,"Sp":0,"MDG":0},"Agderposten":{"Ukjent":1,"A":5,"FrP":0,"H":1,"KrF":2,"V":0,"SV":0,"Sp":0,"MDG":0},"Telemarksavisa":{"Ukjent":1,"A":3,"FrP":5,"H":5,"KrF":1,"V":0,"SV":0,"Sp":0,"MDG":0},"Fredriksstad Blad":{"Ukjent":2,"A":0,"FrP":6,"H":0,"KrF":1,"V":0,"SV":0,"Sp":0,"MDG":0},"Klassekampen":{"Ukjent":8,"A":16,"FrP":16,"H":21,"KrF":19,"V":7,"SV":9,"Sp":7,"MDG":0}};
    var papers  = Object.keys(byParty).sort(d3.ascending);

    function getColumns(name, object) {
        var data    = d3.entries(object).sort(function (a, b) { return d3.descending(a.value, b.value); });
        var dataCol = [name].concat(data.map(function (d) { return d.value; }));
        var xCol    = ['x'].concat(data.map(function (d) { return d.key; }));

        return [xCol, dataCol];
    }

    function drawTotals() {
        var cols = getColumns('Antall ganger sitert', totals);
        cols.push(['Opplag 2013'].concat(cols[0].slice(1).map(function (key) { return prints[key]; })));

        var chart = c3.generate({
            bindto: document.getElementById('hvilke-aviser-leser-politikerne-totals'),
            data: {
                x: 'x',
                columns: cols,
                axes: {
                    'Antall ganger sitert': 'y',
                    'Opplag 2013': 'y2'
                },
                type: 'line'
            },
            axis: {
                x: { type: 'category' },
                rotated: true
            },
            point: { show: true },
            color: {
                pattern: colors
            },
            tooltip: {
                format: {
                    title: function (idx) { return (idx + 1) + '. ' + cols[0][idx + 1]; }
                }
            }
        });
    }

    function normalize(t) {
        var print = prints[t.key];
        t.score = t.value / prints[t.key];
        t.ratio = '1:' + Math.floor(print / t.value);

        return t;
    }

    function drawNormalized() {
        var data = d3.entries(totals)
                .map(normalize)
                .sort(function (a, b) { return d3.descending(a.score, b.score); });

        var chart = c3.generate({
            bindto: document.getElementById('hvilke-aviser-leser-politikerne-normalized'),
            data: {
                x: 'x',
                columns: [
                    ['x'].concat(data.map(function (d) { return d.key; })),
                    ['Sitater per trykte avis'].concat(data.map(function (d) { return d.score; }))
                ],
                type: 'line'
            },
            axis: {
                x: { type: 'category' },
                rotated: true
            },
            tooltip: {
                format: {
                    title: function (idx) { return (idx + 1) + '. ' + data[idx].key; },
                    value: function (value, ratio, id, idx) {
                        return data[idx].ratio + ' (' + value + ')';
                    }
                }
            },
            color: {
                pattern: colors
            }
        });
    }

    function drawParties() {
        var chart = c3.generate({
            bindto: document.getElementById('hvilke-aviser-leser-politikerne-by-party'),
            data: {
                x: 'Parti',
                columns: [],
                type: 'bar'

            },
            axis: {
                x: { type: 'category' }
            }
        });

        var previousKey;

        function load(key) {
            var entries = d3
                    .entries(byParty[key])
                    .filter(function (e) { return e.key !== "Ukjent" && e.value > 0; })
                    .sort(function (a, b) { return d3.descending(a.value, b.value); });

            var cols = [];
            var colKey = 'Sitater av ' + key;


            cols.push(['Parti'].concat(entries.map(function (e) { return e.key; })));
            cols.push([colKey].concat(entries.map(function (e) { return e.value; })));

            chart.load({
                columns: cols,
                unload: previousKey
            });

            previousKey = colKey;
        }

        load("Adresseavisen");
        return load;
    }

    function drawTimeline() {
        var chart = c3.generate({
            bindto: document.getElementById('hvilke-aviser-leser-politikerne-by-year'),
            data: {
                x: 'year',
                columns: [],
                type: 'spline'

            },
            axis: {},
            point: { show: false }
        });


        function load(key) {
            var cols = [];
            var entries = d3
                    .entries(byYear[key])
                    .sort(function (a, b) { return d3.descending(+a.key, +b.key); });

            cols.push(['year'].concat(entries.map(function (e) { return +e.key; })));
            cols.push(['Antall ganger nevnt'].concat(entries.map(function (e) { return e.value; })));

            chart.load({
                columns: cols
            });

        }

        load("Adresseavisen");
        return load;
    }

    drawTotals();
    drawNormalized();

    var loadParties = drawParties();
    var loadTimeline = drawTimeline();

    var selectElement = document.getElementById('hvilke-aviser-leser-politikerne-party-selector');

    var i = 1;
    var timer = setInterval(function () {
        if (i == papers.length) { i = 0; }

        var paper = papers[i++];
        selectElement.value = paper;
        loadParties(paper);
        loadTimeline(paper);
    }, 5000);

    d3.select(selectElement).on('change', function () {
        clearInterval(timer);
        loadParties(d3.event.target.value);
        loadTimeline(d3.event.target.value);
    });

}());
