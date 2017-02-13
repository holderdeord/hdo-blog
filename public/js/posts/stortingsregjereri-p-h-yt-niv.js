!(function() {
    var vedtakPerSesjon = [{"vedtak":127,"sesjon":"1999–2000"},{"vedtak":183,"sesjon":"2000–2001"},{"vedtak":141,"sesjon":"2001–2002"},{"vedtak":247,"sesjon":"2002–2003"},{"vedtak":181,"sesjon":"2003–2004"},{"vedtak":171,"sesjon":"2004–2005"},{"vedtak":9,"sesjon":"2005–2006"},{"vedtak":20,"sesjon":"2006–2007"},{"vedtak":24,"sesjon":"2007–2008"},{"vedtak":35,"sesjon":"2008–2009"},{"vedtak":8,"sesjon":"2009-2010"},{"vedtak":7,"sesjon":"2010–2011"},{"vedtak":33,"sesjon":"2011–2012"},{"vedtak":25,"sesjon":"2012–2013"},{"vedtak":82,"sesjon":"2013–2014"},{"vedtak":192,"sesjon":"2014–2015"},{"vedtak":477,"sesjon":"2015-2016"}]

    var chart = new Highcharts.Chart({
        chart: {
            type: 'line',
            renderTo: document.getElementById('antall-vedtak-vs-sesjon')
        },

        title: {
            text: 'Antall anmodningsvedtak per sesjon'
        },

        legend: {
            enabled: false
        },

        xAxis: {
            type: 'category',
            categories: vedtakPerSesjon.map(function(d) { return d.sesjon; })
        },

        series: [{
            name: 'Antall vedtak',
            color: 'rgb(209, 185, 0)',
            data: vedtakPerSesjon.map(function(d) { return d.vedtak; })
        }]
    })

    window.addEventListener('resize', function() { chart.reflow(); })
}());
