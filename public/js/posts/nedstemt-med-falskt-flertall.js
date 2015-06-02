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
    };

    chart({
        node: '#percent-rebels-per-party',
        names: ['test1', 'test2', 'test3', 'test4', 'test5', 'test6'],
        values: [5, 10, 15, 20, 25, 30],
        label: 'Prosent utbrytere'
    });

}());
