---
layout: post
title: "Ønskeliste til Stortinget"
date: '2013-10-24T15:10:00.000+02:00'
authors:
- Jari Bakken
tags:
- holder de ord
- stortinget
- data
modified_time: '2014-08-06T13:49:24.449+02:00'
blogger_id: tag:blogger.com,1999:blog-8322637263735564386.post-3224172983120800303
blogger_orig_url: http://blog.holderdeord.no/2013/10/nskeliste-til-stortinget.html
redirect_from: "/2013/10/nskeliste-til-stortinget.html"

---

Holder de ord er i stor grad bygget på data fra Stortinget. Hver natt importerer vi informasjon om representanter, komiteer, partier, avstemninger og forslag fra Stortingets datatjeneste, [data.stortinget.no](http://data.stortinget.no/), som ble lansert i mai 2012. Vi kan trygt si at det å ha tilgang på strukturerte, maskinlesbare data om hva som skjer på Stortinget er helt avgjørende for vårt arbeid for å følge opp de folkevalgte.

Stortinget er i så måte del av en internasjonal trend, hvor [stadig flere land](http://blog.openingparliament.org/post/58716965078/availability-of-voting-results-in-parliaments) tilgjengeliggjør parlamentsdata for fritt gjenbruk under åpne lisenser. Våre søsterorgansisasjoner i utlandet, som tidligere måtte bruke mye tid og ressurser på å hente data ut fra nettsidene til landets parlament, kan nå fokusere på å lage gode tjenester basert på dataene, framfor helt enkelt å få tak på dem.

Selv om [data.stortinget.no](http://data.stortinget.no/) allerede tilbyr det som er viktigst for oss - resultat av avstemninger på representantnivå - har vi flere ting på ønskelisten for fremtiden. Her er punktene vi nylig har oversendt Stortinget:

#### Nye data

* <strike>Referater på et strukturert format, hvor det er lett å finne ut hvem som sier hva. Stortinget har fantastiske referater som gjengir alt som skjer i stortingssalen, men de publiseres ikke i APIet.</strike> Referater ble [lagt til][endringslogg] 22. oktober 2014.
* Komitéinnstillinger og merknader på et strukturert format. Disse dokumentene er svært interessante politisk sett, og vi ønsker oss mulighet til å hente de via APIet, koblet til sak, og gjerne på et format hvor det er markert opp hvilke partier som står bak hvilken del av merknaden.
* Liste over saker som er bebudet / varslet fra regjeringen.
* Registeret over stortingsrepresentanters økonomiske interesser publiseres i dag i PDF-format. Vi ønsker oss denne oversikten i et maskinlesbart format og koblet til representant-ID, gjerne gjennom datatjenesten.
* Maskinlesbar informasjon om budsjettforslag, både fra regjering og opposisjon. Her ligger det et enormt potensiale for å lage gode fremstillinger av partiens prioriteringer, forutsatt at budsjettene foreligger på et sammenlignbart format. Stortinget [ser ut til](https://twitter.com/vamraak/status/267028606612553728) å ha et verktøy som kanskje kan brukes til å realisere dette (Storbud).
* Kalender over planlagte møter på Stortinget
* Oversikt over oppmøte i komitéene. Siden oppmøte i stortingssalen er en dårlig indikator på representantenes aktivitetsnivå, ønsker vi oss flere datakilder på dette. Ref. medieoppslag er dette statistikk som føres allerede i dag.

#### Forbedringer

* <strike>Representantenes epostadresser ligger i dag ikke inne i APIet, men ser ut til å vedlikeholdes manuelt <a href="http://www.stortinget.no/no/Stottemeny/Kontakt/Partier-og-representanter/Representantenes-e-postadresser/">på www.stortinget.no</a>. Denne listen har i blant mindre feil. Vi ønsker oss eposter inn representantobjektene i datatjenesten.</strike> Dette ble [lagt til][endringslogg] 20. november 2013.
* Lista over [dagens møtende](http://stortinget.no/no/Representanter-og-komiteer/Representantene/Representantfordeling/) på www.stortinget.no er mer oppdatert enn i APIet. Kortvarige permisjoner oppdateres på nett, men ikke i datatjenesten. Vi har fått klager fra noen partier på at [vår spørsmålstjeneste](http://www.holderdeord.no/questions) lar en stille spørsmål til representanter som er i permisjon, og det er en direkte konsekvens av denne feilen.
* Bedre informasjon om hvem som stiller forslag. I dag ligger dette inne som fritekst, og har forskjellig formatering (avsluttende kolon, blanding av bokmål/nynorsk osv). Vi ønsker oss kobling til riktig representanter eller komité. Dette er ønskelig selv om ikke absolutt alle forslag vil kunne ha slike koblinger.
* Lenker i APIet til relevante dokumenter/API-ressurser for en gitt sak. I dag finner man på nettsiden lenker til grunnlagsdokumenter, komiteinnstillinger og referater under «Følg saken» på [en saksside](http://www.stortinget.no/no/Saker-og-publikasjoner/Saker/Sak/?p=57004). De samme lenkene er ikke tilgjengelig i APIet. I den grad det finnes data-representasjoner av de samme dokumentene (jfr. punkt 3 og 4), bør det lenkes til disse, hvis ikke bør det lenkes til tekst/HTML-versjonen.

[endringslogg]: http://data.stortinget.no/om-tjenesten/endringslogg
