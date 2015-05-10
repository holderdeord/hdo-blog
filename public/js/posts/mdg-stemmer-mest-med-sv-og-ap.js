(function() {
    var data = [
        { combo: 'MDG + SV',  pct: 51.4 },
        { combo: 'MDG + Ap',  pct: 47.4 },
        { combo: 'MDG + Sp',  pct: 45.6 },
        { combo: 'MDG + V',   pct: 44.3 },
        { combo: 'MDG + KrF', pct: 43.5 },
        { combo: 'MDG + H',   pct: 41.6 },
        { combo: 'MDG + FrP', pct: 41.5 }
    ];

    var chart = c3.generate({
        bindto: '#percentage-overall',
        data: {
            columns: [
                ['Prosent'].concat(data.map(function(d) { return d.pct; }))
            ],
            type: 'bar'
        },
        transition: { duration: 0 },
        axis: {
            x: {
                type: 'category',
                tick: { multiline: false },
                categories: data.map(function(d) { return d.combo; })
            },
            y: { tick: { format: function(d) { return d + '%'; }}},
            rotated: true
        },
        legend: { show: false },
        color: { pattern: ["#606b82", "#e1c600"] }
    });

})();
