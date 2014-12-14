(function () {

    var slugs = {
        "V": "v",
        "SV": "sv",
        "Ap": "a",
        "FrP": "frp",
        "H": "h",
        "KrF": "krf",
        "MDG": "mdg",
        "Sp": "sp"
    };

    function getPartyLogoUrl(s) {
        return 'https://www.holderdeord.no/api/parties/' + slugs[s] + '/logo?version=small';
    }

    var data = {
        '2009-2013': {"For avvikling": ["V", "SV"], "Mot avvikling": ["H"], "Ingen mening": ["Ap", "Sp", "KrF", "FrP"]},
        '2013-2017': {"For avvikling": ["V", "SV", "Ap", "MDG", "FrP"], "Mot avvikling": [], "Ingen mening": ["Sp", "KrF", "H"]}
    };

    var root  = d3.select('#pelsdyr-meninger-vis .gfx');
    var select = d3.select('#pelsdyr-meninger-vis select');

    function update(title, data) {
        data = d3.entries(data).sort(function (a, b) { return d3.descending(a.key, b.key);});
        select[0][0].value = title;

        var positions = root
                .selectAll('div.position')
                .data(data, function (d, i) { return d.value; });

        var position = positions
                .enter()
                .append('div')
                .attr('class', 'position');

        position.text(function (d) { return d.key; });
        positions.exit().remove();

        var party = position
                .selectAll('img.party')
                .data(function (d) { return d.value.sort(function (a, b) { return d3.ascending(a, b); }); });

        party.enter()
                .append('img')
                .attr('src', getPartyLogoUrl)
                .attr('class', 'party');

        party.text(function (d) { return d; });
        party.exit().remove();
    }

    var k = '2009-2013'; 
    update(k, data[k]);

    var timeout = setInterval(function () {
        k = k === '2009-2013' ? '2013-2017' : '2009-2013';
        update(k, data[k]);
    }, 4000);

    select.on('change', function () {
        clearTimeout(timeout);
        var val = d3.event.target.value;
        update(val, data[val]);
    });

}());
