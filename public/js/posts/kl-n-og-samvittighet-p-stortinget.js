(function () {
    var colorPattern  = ["#606b82", "#e1c600"];
    var slugs         = {"Sosialistisk Venstreparti":"SV","Kristelig Folkeparti":"KrF","Venstre":"V","Arbeiderpartiet":"Ap","Miljøpartiet De Grønne":"MDG","Fremskrittspartiet":"FrP","Høyre":"H","Senterpartiet":"Sp"};
    var repCounts     = {"H":78,"FrP":70,"SV":18,"Ap":119,"Sp":21,"V":11,"KrF":20,"MDG":1};
    var top20         = [{"name": "Linda C. Hofstad Helleland", "party": "Høyre", "rebel_count": "65"}, {"name": "Robert Eriksson", "party": "Fremskrittspartiet", "rebel_count": "65"}, {"name": "Per-Kristian Foss", "party": "Høyre", "rebel_count": "62"}, {"name": "Lars Myraune", "party": "Høyre", "rebel_count": "59"}, {"name": "Torbjørn Røe Isaksen", "party": "Høyre", "rebel_count": "44"}, {"name": "Arve Kambe", "party": "Høyre", "rebel_count": "42"}, {"name": "Øyvind Korsberg", "party": "Fremskrittspartiet", "rebel_count": "41"}, {"name": "Michael Tetzschner", "party": "Høyre", "rebel_count": "36"}, {"name": "Marit Nybakk", "party": "Arbeiderpartiet", "rebel_count": "33"}, {"name": "Per Olaf Lundteigen", "party": "Senterpartiet", "rebel_count": "29"}, {"name": "Tord Lien", "party": "Fremskrittspartiet", "rebel_count": "29"}, {"name": "Ingebjørg Amanda Godskesen", "party": "Fremskrittspartiet", "rebel_count": "29"}, {"name": "Line Henriette Hjemdal", "party": "Kristelig Folkeparti", "rebel_count": "29"}, {"name": "Elisabeth Aspaker", "party": "Høyre", "rebel_count": "27"}, {"name": "Jette F. Christensen", "party": "Arbeiderpartiet", "rebel_count": "27"}, {"name": "Per-Willy Amundsen", "party": "Fremskrittspartiet", "rebel_count": "26"}, {"name": "Peter N. Myhre", "party": "Fremskrittspartiet", "rebel_count": "25"}, {"name": "Oskar J. Grimstad", "party": "Fremskrittspartiet", "rebel_count": "25"}, {"name": "Åge Starheim", "party": "Fremskrittspartiet", "rebel_count": "23"}, {"name": "Elisabeth Røbekk Nørve", "party": "Høyre", "rebel_count": "22"}];
    var topParties    = [{"party": "Høyre", "rebel_count": "699"}, {"party": "Fremskrittspartiet", "rebel_count": "594"}, {"party": "Arbeiderpartiet", "rebel_count": "452"}, {"party": "Kristelig Folkeparti", "rebel_count": "134"}, {"party": "Senterpartiet", "rebel_count": "98"}, {"party": "Sosialistisk Venstreparti", "rebel_count": "86"}, {"party": "Venstre", "rebel_count": "20"}];
    var timeline      = {"2009-2010":{"votes":947,"rebels":263},"2010-2011":{"votes":1196,"rebels":273},"2011-2012":{"votes":1032,"rebels":228},"2012-2013":{"votes":1453,"rebels":322},"2013-2014":{"votes":657,"rebels":87}};
    var partyTimeline = {"2009-2010":{"A":0.1819764222,"FrP":0.6754978507,"H":1.131765672,"KrF":0.5556520229,"Sp":0.2449479486,"SV":0.1754385965,"V":0},"2010-2011":{"A":0.195576952,"FrP":0.5400868518,"H":0.8949937781,"KrF":0.5401563611,"Sp":0.19990005,"SV":0.2266431629,"V":0},"2011-2012":{"A":0.27492941,"FrP":0.5417760095,"H":0.5753285577,"KrF":0.505931612,"Sp":0.2519949601,"SV":0.2659574468,"V":0},"2012-2013":{"A":0.2131858064,"FrP":0.4589822833,"H":0.6522707937,"KrF":0.2886183963,"Sp":0.250809907,"SV":0.2157730068,"V":0},"2013-2014":{"A":0.191957474,"FrP":0.07912783541,"H":0.2033972844,"KrF":0.254813137,"Sp":0.5616399888,"SV":0.4749568221,"V":0.5786249149},"2014-2015":{"A":0.1964885593,"FrP":0.08728859793,"H":0.1648804617,"KrF":0.3567606136,"Sp":0.6735200284,"SV":0.5217391304,"V":0.2101723413}}

    top20.forEach(function (d) {
        d.rebel_count = +d.rebel_count;
        d.party_slug = slugs[d.party];
    });

    topParties.forEach(function (d) {
        d.rebel_count = +d.rebel_count;
        d.slug = slugs[d.party];
    });

    function drawTop20(opts) {
        c3.generate({
            bindto: opts.selector,
            data: {
                x: 'x',
                columns: [
                    ['x'].concat(top20.map(function (d) { return d.name + ', ' + d.party_slug; })),
                    ['Antall utbryterstemmer'].concat(top20.map(function (d) { return d.rebel_count; }))
                ],
                type: 'line'
            },
            transition: { duration: 0 },
            axis: {
                x: { type: 'category', tick: { multiline: false } },
                rotated: true
            },
            color: { pattern: colorPattern }
        });
    }

    function drawParties(opts) {
        var label       = opts.normalized ? 'Utbryterstemmer per representant' : 'Utbryterstemmer';
        var valueMapper = opts.normalized ? function (d) { return d.rebel_count / (repCounts[d.slug] / 2); } : function (d) { return d.rebel_count; };
        var data        = topParties.sort(function (a, b) { return d3.descending(valueMapper(a), valueMapper(b)); });
        var names       = data.map(function (d) { return d.slug; });
        var values      = data.map(valueMapper);

        c3.generate({
            bindto: opts.selector,
            data: {
                x: 'x',
                columns: [
                    ['x'].concat(names),
                    [label].concat(values)
                ],
                type: 'bar'
            },
            transition: { duration: 0 },
            axis: {
                x: { type: 'category' },
                rotated: false
            },
            legend: { show: false },
            color: { pattern: colorPattern }
        });
    }

    function drawTimeline(opts) {
        var entries = d3.entries(timeline).sort(function (a, b) { return d3.ascending(a.key, b.key); });
        var names   = entries.map(function (d) { return d.key; });
        var values  = entries.map(function (d) { return d.value.rebels * 100 / d.value.votes; });
        var label   = 'Avstemninger med en eller flere utbryterstemmer';

        c3.generate({
            bindto: opts.selector,
            data: {
                x: 'x',
                columns: [
                    ['x'].concat(names),
                    [label].concat(values)
                ],
                type: 'line'
            },
            axis: {
                x: { type: 'category' },
                y: { min: 0, tick: { format: function (d) { return d + '%'; }}}
            },
            legend: { show: false },
            color: { pattern: colorPattern }
        });
    }

    function drawPartyTimeline(opts) {
        var entries = d3.entries(partyTimeline).sort(function (a, b) { return d3.ascending(a.key, b.key); });
        var names   = entries.map(function(d) { return d.key; });
        var label   = 'Andel utbryterstemmer per parti';

        var cols = [
            ['x'].concat(names)
        ];

        Object.keys(entries[0].value).forEach(function(party) {
            var col = [party];

            entries.forEach(function(e) {
                col.push(e.value[party]);
            })

            cols.push(col);
        });

        c3.generate({
            bindto: opts.selector,
            data: {
                x: 'x',
                columns: cols,
                type: 'line'
            },
            axis: {
                x: { type: 'category' },
                y: { min: 0, tick: { format: function (d) { return d + '%'; }}}
            },
            legend: { show: false },
            color: { pattern: ['#cc000d', '#003e8a', '#152971', '#d0ba00', '#008b36', '#e60014', '#005d52'] }
        });
    }

    drawTop20({selector: '#kl-n-og-samvittighet-p-stortinget-top-20'});
    drawParties({selector: '#kl-n-og-samvittighet-p-stortinget-parties', normalized: false});
    drawParties({selector: '#kl-n-og-samvittighet-p-stortinget-parties-normalized', normalized: true});
    drawTimeline({selector: '#kl-n-og-samvittighet-p-stortinget-timeline'});
    drawPartyTimeline({selector: '#kl-n-og-samvittighet-p-stortinget-parties-timeline'});
}());
