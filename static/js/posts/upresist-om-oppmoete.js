!(function() {
    var all = [{"name": "Niclas Tokerud", "attending_percent": "100.0"}, {"name": "Kristian Støback Wilhelmsen", "attending_percent": "100.0"}, {"name": "Tor Arne Bell Ljunggren", "attending_percent": "93.4426229508"}, {"name": "Roy Steffensen", "attending_percent": "89.825282631"}, {"name": "Sigurd Hille", "attending_percent": "89.06128782"}, {"name": "Tom E. B. Holthe", "attending_percent": "88.338658147"}, {"name": "Tone Wilhelmsen Trøen", "attending_percent": "87.2389791183"}, {"name": "Jan-Henrik Fredriksen", "attending_percent": "86.2377850163"}, {"name": "Oskar J. Grimstad", "attending_percent": "85.9416445623"}, {"name": "Gjermund Hagesæter", "attending_percent": "85.3508095605"}, {"name": "Christian Tynning Bjørnø", "attending_percent": "84.2713955281"}, {"name": "Hans Andreas Limi", "attending_percent": "83.8383838384"}, {"name": "Bente Stein Mathisen", "attending_percent": "83.6687306502"}, {"name": "Tone Merete Sønsterud", "attending_percent": "83.5275835276"}, {"name": "Erik Skutle", "attending_percent": "82.9606784888"}, {"name": "Helge Orten", "attending_percent": "82.5212683681"}, {"name": "Morten Stordalen", "attending_percent": "82.4209714726"}, {"name": "Stine Renate Håheim", "attending_percent": "82.0354664611"}, {"name": "Hårek Elvenes", "attending_percent": "81.5728604472"}, {"name": "Tone-Helen Toften", "attending_percent": "81.0880829016"}, {"name": "Margunn Ebbesen", "attending_percent": "80.9930178433"}, {"name": "Henrik Asheim", "attending_percent": "80.4163454125"}, {"name": "Norunn Tveiten Benestad", "attending_percent": "80.3392444102"}, {"name": "Åsmund Aukrust", "attending_percent": "79.5811518325"}, {"name": "Stefan Heggelund", "attending_percent": "79.2996108949"}, {"name": "Marianne Aasen", "attending_percent": "77.7489177489"}, {"name": "Nils Aage Jegstad", "attending_percent": "77.0239013107"}, {"name": "Ib Thomsen", "attending_percent": "77.0123839009"}, {"name": "Mudassar Kapur", "attending_percent": "76.8696993061"}, {"name": "Tore Hagebakken", "attending_percent": "76.68997669"}, {"name": "Bente Thorsen", "attending_percent": "76.4841942945"}, {"name": "Bengt Morten Wenstøb", "attending_percent": "76.3157894737"}, {"name": "Heidi Nordby Lunde", "attending_percent": "75.867386276"}, {"name": "Mette Tønder", "attending_percent": "75.5430410298"}, {"name": "Freddy de Ruiter", "attending_percent": "75.4015215554"}, {"name": "Elisabeth Røbekk Nørve", "attending_percent": "75.1734772552"}, {"name": "Ruth Grung", "attending_percent": "74.6303501946"}, {"name": "Solveig Sundbø Abrahamsen", "attending_percent": "74.4945567652"}, {"name": "Helge Thorheim", "attending_percent": "74.4795682344"}, {"name": "Tove Karoline Knutsen", "attending_percent": "74.3253662298"}, {"name": "Kjell-Idar Juvik", "attending_percent": "74.2765273312"}, {"name": "Kristin Vinje", "attending_percent": "74.0940632228"}, {"name": "Hans Fredrik Grøvan", "attending_percent": "74.0511231603"}, {"name": "Eirik Milde", "attending_percent": "74.011299435"}, {"name": "Torstein Tvedt Solberg", "attending_percent": "73.6378205128"}, {"name": "Michael Tetzschner", "attending_percent": "73.6314572089"}, {"name": "Lene Vågslid", "attending_percent": "73.2459521974"}, {"name": "Kjell Ingolf Ropstad", "attending_percent": "73.1688511951"}, {"name": "Martin Kolberg", "attending_percent": "72.8130360206"}, {"name": "Pål Farstad", "attending_percent": "72.7906976744"}, {"name": "Geir Jørgen Bekkevold", "attending_percent": "72.7058823529"}, {"name": "Odd Omland", "attending_percent": "72.5961538462"}, {"name": "Fredric Holen Bjørdal", "attending_percent": "72.5232198142"}, {"name": "Tor André Johnsen", "attending_percent": "72.5184577523"}, {"name": "Torill Eidsheim", "attending_percent": "72.4749421742"}, {"name": "Kent Gudmundsen", "attending_percent": "72.2549019608"}, {"name": "Geir S. Toskedal", "attending_percent": "72.0600500417"}, {"name": "Magne Rommetveit", "attending_percent": "71.5288611544"}, {"name": "Snorre Serigstad Valen", "attending_percent": "71.0833982853"}, {"name": "Anders B. Werp", "attending_percent": "70.4456606724"}, {"name": "Frank J. Jenssen", "attending_percent": "70.1480904131"}, {"name": "Dag Terje Andersen", "attending_percent": "69.699306091"}, {"name": "Kåre Simensen", "attending_percent": "69.5693779904"}, {"name": "Kari Kjønaas Kjos", "attending_percent": "69.468003084"}, {"name": "Mazyar Keshvari", "attending_percent": "69.4221508828"}, {"name": "Ketil Kjenseth", "attending_percent": "69.4108151735"}, {"name": "Janne Sjelmo Nordås", "attending_percent": "69.1129032258"}, {"name": "Sivert Bjørnstad", "attending_percent": "68.8906128782"}, {"name": "Elin Rodum Agdestein", "attending_percent": "68.7893081761"}, {"name": "Ingvild Kjerkol", "attending_percent": "68.5427910563"}, {"name": "Marit Arnstad", "attending_percent": "68.4713375796"}, {"name": "Kårstein Eidem Løvaas", "attending_percent": "68.0030840401"}, {"name": "Kristin Ørmen Johnsen", "attending_percent": "67.9098679099"}, {"name": "Ola Elvestuen", "attending_percent": "67.5819309123"}, {"name": "Ingebjørg Amanda Godskesen", "attending_percent": "67.4835061263"}, {"name": "Ingunn Foss", "attending_percent": "67.3775671406"}, {"name": "Karin Andersen", "attending_percent": "67.0778720123"}, {"name": "Svein Roald Hansen", "attending_percent": "66.8198529412"}, {"name": "Martin Henriksen", "attending_percent": "66.4670658683"}, {"name": "Rigmor Aasrud", "attending_percent": "66.0755589823"}, {"name": "Rasmus Hansson", "attending_percent": "65.1162790698"}, {"name": "Heikki Eidsvoll Holmås", "attending_percent": "65.0957290133"}, {"name": "Arild Grande", "attending_percent": "64.6076794658"}, {"name": "Per Rune Henriksen", "attending_percent": "64.5816409423"}, {"name": "Hege Haukeland Liadal", "attending_percent": "64.3026004728"}, {"name": "Jenny Klinge", "attending_percent": "64.1152263374"}, {"name": "Per Olaf Lundteigen", "attending_percent": "62.8325508607"}, {"name": "Iselin Nybø", "attending_percent": "62.5194401244"}, {"name": "Kristian Norheim", "attending_percent": "62.3580786026"}, {"name": "Heidi Greni", "attending_percent": "62.354763749"}, {"name": "Anette Trettebergstuen", "attending_percent": "62.3491552695"}, {"name": "Helge André Njåstad", "attending_percent": "61.5384615385"}, {"name": "Sveinung Rotevatn", "attending_percent": "60.5392156863"}, {"name": "Olaug V.  Bollestad", "attending_percent": "60.5242868157"}, {"name": "Erlend Wiborg", "attending_percent": "60.3700848111"}, {"name": "Helga Pedersen", "attending_percent": "60.2158828065"}, {"name": "Odd Henriksen", "attending_percent": "60.1387818042"}, {"name": "Frank Bakke-Jensen", "attending_percent": "59.6825396825"}, {"name": "Jette F. Christensen", "attending_percent": "59.4448727833"}, {"name": "Torgeir Knag Fylkesnes", "attending_percent": "59.3596059113"}, {"name": "Christian Tybring-Gjedde", "attending_percent": "59.1920857378"}, {"name": "Sonja Mandt", "attending_percent": "58.9678510998"}, {"name": "Rigmor Andersen Eide", "attending_percent": "58.9585172109"}, {"name": "Kari Henriksen", "attending_percent": "58.8923556942"}, {"name": "Anne Tingelstad Wøien", "attending_percent": "58.3916083916"}, {"name": "Eva Kristin Hansen", "attending_percent": "58.156779661"}, {"name": "Eirik Sivertsen", "attending_percent": "57.7849117175"}, {"name": "Ove Trellevik", "attending_percent": "57.5221238938"}, {"name": "Stein Erik Lauvås", "attending_percent": "57.4203574204"}, {"name": "Øyvind Korsberg", "attending_percent": "57.2860447186"}, {"name": "Peter Christian Frølich", "attending_percent": "57.1761055081"}, {"name": "André N. Skjelstad", "attending_percent": "56.773688332"}, {"name": "Kjersti Toppe", "attending_percent": "56.7315175097"}, {"name": "Tina Bru", "attending_percent": "56.7190226876"}, {"name": "Eirin Sund", "attending_percent": "56.7082683307"}, {"name": "Hadia Tajik", "attending_percent": "55.9753276793"}, {"name": "Trond Giske", "attending_percent": "55.9282371295"}, {"name": "Morten Wold", "attending_percent": "55.6218057922"}, {"name": "Terje Breivik", "attending_percent": "55.5846422339"}, {"name": "Siri A. Meling", "attending_percent": "55.4820415879"}, {"name": "Anders Tyvand", "attending_percent": "55.2043176561"}, {"name": "Åse Michaelsen", "attending_percent": "55.1984877127"}, {"name": "Ingrid Heggø", "attending_percent": "54.4891640867"}, {"name": "Kenneth Svendsen", "attending_percent": "52.740434333"}, {"name": "Else-May Botten", "attending_percent": "52.6440410418"}, {"name": "Karianne O. Tung", "attending_percent": "51.3321492007"}, {"name": "Sveinung Stensland", "attending_percent": "51.0140405616"}, {"name": "Arve Kambe", "attending_percent": "50.1547987616"}, {"name": "Jorodd Asphjell", "attending_percent": "50.1183898974"}, {"name": "Marit Nybakk", "attending_percent": "50.0387897595"}, {"name": "Truls Wickholm", "attending_percent": "49.535962877"}, {"name": "Geir Pollestad", "attending_percent": "49.3446414803"}, {"name": "Liv Signe Navarsete", "attending_percent": "49.2227979275"}, {"name": "Line Henriette Hjemdal", "attending_percent": "49.1105955143"}, {"name": "Ulf Leirstein", "attending_percent": "48.6780715397"}, {"name": "Knut Storberget", "attending_percent": "48.5380116959"}, {"name": "Gunnar Gundersen", "attending_percent": "48.3768804434"}, {"name": "Jørund Rytman", "attending_percent": "46.5968586387"}, {"name": "Jan Bøhler", "attending_percent": "46.2606013878"}, {"name": "Terje Aasland", "attending_percent": "45.4895913647"}, {"name": "Øyvind Halleraker", "attending_percent": "45.1040863531"}, {"name": "Bjørn Lødemel", "attending_percent": "44.6927374302"}, {"name": "Astrid Aarhus Byrknes", "attending_percent": "44.4444444444"}, {"name": "Lise Christoffersen", "attending_percent": "43.9782439782"}, {"name": "Irene Johansen", "attending_percent": "41.7133706966"}, {"name": "Ingjerd Schou", "attending_percent": "41.5432579891"}, {"name": "Gunvor Eldegard", "attending_percent": "40.9475465313"}, {"name": "Marianne Marthinsen", "attending_percent": "40.8635312259"}, {"name": "Svein Harberg", "attending_percent": "39.9383191981"}, {"name": "Trygve Slagsvold Vedum", "attending_percent": "39.9383191981"}, {"name": "Anniken Huitfeldt", "attending_percent": "39.3312101911"}, {"name": "Hans Olav Syversen", "attending_percent": "38.7823185988"}, {"name": "Sylvi Graham", "attending_percent": "38.6486486486"}, {"name": "Linda C. Hofstad Helleland", "attending_percent": "37.3939861218"}, {"name": "Morten Ørsal Johansen", "attending_percent": "36.2852664577"}, {"name": "Abid Q. Raja", "attending_percent": "35.0809560524"}, {"name": "Audun Lysbakken", "attending_percent": "33.6160370085"}, {"name": "Svein Flåtten", "attending_percent": "31.0717039322"}, {"name": "Olemic Thommessen", "attending_percent": "27.0624518119"}, {"name": "Sverre Myrli", "attending_percent": "26.6779949023"}, {"name": "Harald T. Nesvik", "attending_percent": "25.9830377795"}, {"name": "Jan Arild Ellingsen", "attending_percent": "25.8566978193"}, {"name": "Trine Skei Grande", "attending_percent": "23.2074016962"}, {"name": "Kirsti Bergstø", "attending_percent": "22.8730822873"}, {"name": "Bård Vegar Solhjell", "attending_percent": "22.1279876638"}, {"name": "Nikolai Astrup", "attending_percent": "20.5329153605"}, {"name": "Per Sandberg", "attending_percent": "17.3478655767"}, {"name": "Trond Helleland", "attending_percent": "12.7216653816"}, {"name": "Jonas Gahr Støre", "attending_percent": "7.7101002313"}];

    var data = {
        top: all.slice(0, 20),
        bottom: all.slice(all.length - 20)
    };

    Object.keys(data).forEach(function(key) {
        var cols = [];

        var list = data[key];

        cols.push(['x'].concat(list.map(function(d) { return d.name; })));
        cols.push(['Oppmøte prosent'].concat(list.map(function(d) { return +d.attending_percent; })));

        c3.generate({
            bindto: document.getElementById('upresist-om-oppmoete-' + key),
            data: {
                x: 'x',
                columns: cols,
                type: 'line'
            },
            axis: {
                x: {
                    type: 'category',
                    tick: {
                        multiline: false
                    }
                },
                y: {
                    tick: {
                        format: function (x) { return x + '%'; }
                    }
                },
                rotated: true
            },
            legend: { show: false },
            transition: { duration: 0 },
            point: { show: true },
            tooltip: {
                format: {
                    title: function (idx) { return (idx + 1) + '. ' + cols[0][idx + 1]; }
                }
            }
        });
    });


    c3.generate({
        bindto: document.getElementById('upresist-om-oppmoete-rajh'),
        data: {
            columns: [
                ['Fravær i prosent', 47, 26]
            ],
            type: 'bar'
        },
        axis: {
            x: {
                type: 'category',
                categories: ['2013-2014', '2014-2015'],
                tick: { multiline: false }
            },
            rotated: false
        },
        legend: { show: false },
        transition: { duration: 0 },
        point: { show: true }
    });

})();
