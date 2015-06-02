!!(function() {

    function chart(opts) {
        c3.generate({
            bindto: opts.node,
            data: {
                x: 'x',
                columns: [
                    ['x'].concat(opts.names),
                    [opts.label].concat(opts.values)
                ],
                type: 'bar'
            },
            transition: { duration: 0 },
            axis: {
                x: { type: 'category' },
                rotated: false
            },
            legend: { show: false },
            color: { pattern: opts.colorPattern }
        });
    }

    var data = d3.entries({
      "FrP": {
        "total": 224150,
        "rebel": 609
      },
      "H": {
        "total": 199752,
        "rebel": 717
      },
      "A": {
        "total": 362889,
        "rebel": 477
      },
      "KrF": {
        "total": 58580,
        "rebel": 151
      },
      "Sp": {
        "total": 63104,
        "rebel": 126
      },
      "SV": {
        "total": 59102,
        "rebel": 101
      },
      "V": {
        "total": 21054,
        "rebel": 28
      },
      "MDG": {
        "total": 1334
      }
    });

    data.forEach(function(d) {
        d.value.rebelPercent = d.value.rebel ? (d.value.rebel / d.value.total)*100 : 0;
    });

    data.sort(function(a, b) {
        return d3.descending(a.value.rebelPercent, b.value.rebelPercent);
    });




    chart({
        node: '#percent-rebels-per-party',
        names: data.map(function(d) { return d.key; }),
        values: data.map(function(d) { return d.value.rebelPercent; }),
        label: 'Prosent utbrytere'
    });

}());
