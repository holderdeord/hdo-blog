---
layout: post
title: Dette bør du ikke si på Stortinget
date: "2015-03-25T17:32:59.000+01:00"
authors:
  - Hanna Tranås
  - Jari Bakken
tags:
  - parlamentarisk språk
  - stortinget
  - presidenten
scripts:
  - d3
  - c3
  - jquery
  - turnjs
  - __title__
comments: true
published: true
thumbnail: https://files.holderdeord.no/images/stortingssalen.jpg
twitter_card: summary_large_image
---

**Det er mye som skiller det norske Stortinget fra det britiske underhuset. En av de tydeligste skillene er nok hva som anses som akseptabel oppførsel og akseptabel språkbruk.**

<iframe
     src="https://www.youtube-nocookie.com/embed/PWeaLGealHQ?rel=0&amp;controls=0&amp;showinfo=0"
     frameborder="0"
     class="embedded-video"
     allowfullscreen>
</iframe><figcaption class="text-center">Litt andre tilstander enn på Stortinget</figcaption>

I [Stortingets forretningsorden § 55](https://www.stortinget.no/Global/pdf/stortingetsforretningsordenbokmal.pdf?epslanguage=no) heter det at «upassende eller fornærmelig atferd eller tale ikke er tillatt. Slik atferd eller tale skal påtales av presidenten.» I § 56 utdypes hva som menes med upassende eller fornærmelig *adferd*, der det heter at «det er ikke tillatt å gi støyende uttrykk for misnøye eller bifall under forhandlingene». Det mangler imidlertid en definisjon på upassende tale, til tross for at Øyvind Korsberg, som var 1. visepresident i perioden 2009-2013, i en [debatt 22. mars 2010](https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Referater/Stortinget/2009-2010/100322/1/#a16) uttalte at

<blockquote>Presidenten vil bare minne om at man ikke skal bruke uparlamentariske uttrykk i denne salen. Presidenten har en viss mistanke om at det går an å skaffe seg informasjon om hvilke uttrykk man ikke skal bruke i denne salen
<cite>President Korsberg</cite>
</blockquote>

Presidenten, eller den av visepresidentene som har presidentplassen i debatten, står nemlig fritt til å klubbe ned de ord og uttrykk han eller hun mener er upassende. Dette illustreres tydelig av en diskusjon i Stortinget 19. desember 2013 hvor President Olemic Thommessen klubbet Snorre Valens (SV) omtale av et forslag som «corny». På [motsvar til Heikki Holmås (SV)](https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Referater/Stortinget/2013-2014/131219/2/#a10), som innvendte at han synes dette burde være et godkjent uttrykk, svarte Thommessen:

<blockquote>Presidenten vil for ordens skyld bemerke at vurderingen av hva som er et parlamentarisk uttrykk, er et anliggende for presidenten alene, og at hva representantene måtte mene om det, er av underordnet betydning.
<cite>President Thommessen</cite>
</blockquote>

Det finnes altså ikke noen offisiell parlamentarisk ordliste. Vi har derfor søkt gjennom alle referatene fra debattene i Stortinget siden 2008, funnet fram alle klubbinger og laget en huskeliste for representantene over hvilke ord og uttrykk presidentskapet ikke setter pris på. Bruk pilene nederst for å bla i ordlista:


<style>
#uparlamanterisk-sprakbruk-wordlist-container {
    box-shadow: 0 -1px 0 #e5e5e5,0 0 2px rgba(0,0,0,.12),0 2px 4px rgba(0,0,0,.24);
    margin: 2rem 0;
    width: 100%;
}

#uparlamanterisk-sprakbruk-wordlist-container .prev:hover, .next:hover {
    background-color: #eee;
}

#uparlamanterisk-sprakbruk-wordlists {
    height: 360px;
}

#uparlamanterisk-sprakbruk-wordlists .turn-page {
    padding: 0.8rem;
    font-size: 0.8rem;
    background-color: #BFC6D5;
    width: 100%;
}

#uparlamanterisk-sprakbruk-wordlists ul {
    padding-top: 0.5rem;
}
</style>


<div id="uparlamanterisk-sprakbruk-wordlist-container">
    <div id="uparlamanterisk-sprakbruk-wordlists">
        <div>
            <h3>Parlamentarisk ordliste</h3>
            til glede for gamle og nye representanter
        </div>
        <div>
            <h4>Man skal <strong>unngå</strong> ord som:</h4>
            <ul>
                <li>tull</li>
                <li>tøys</li>
                <li>bløff</li>
                <li>juks</li>
                <li>lureri</li>
                <li>bedrag</li>
                <li>tøv</li>
                <li>corny</li>
                <li>frekt/frekk/frekkas/frekkis</li>
            </ul>
        </div>
        <div>
            <h4>&nbsp;</h4>
            <ul>
                <li>galskap</li>
                <li>jaggu meg</li>
                <li>bombeangrep</li>
                <li>rushelvete</li>
                <li>svinebinding</li>
                <li>visvas</li>
                <li>løgn</li>
                <li>pinadø</li>
                <li>møkk</li>
                <li>dritt</li>
                <li>blottet</li>
            </ul>
        </div>
        <div>
            <h4>Man skal ikke bruke billedspråk som:</h4>
            <ul>
                <li>å slenge ut av seg</li>
                <li>å drite på draget</li>
                <li>å lire av seg</li>
                <li>å bry seg katten</li>
                <li>å sause sammen</li>
                <li>å spytte ut</li>
                <li>å få døren midt i fleisen</li>
            </ul>
        </div>
        <div>
            <h4>&nbsp;</h4>
            <ul>
                <li>å bite seg selv i halen</li>
                <li>å ta noe for god fisk</li>
                <li>å overkjøre noen</li>
                <li>å sable ned</li>
                <li>ideologisk fyllekjøring</li>
                <li>pedagogisk fyllekjøring</li>
                <li>henger ikke på greip</li>
                <li>like forbaska</li>
            </ul>
        </div>
        <div>
            <h4>Man skal ikke kalle motstandere:</h4>
            <ul>
                <li>frekke</li>
                <li>frekkaser</li>
                <li>hoverende</li>
                <li>forvirret</li>
                <li>sleipe</li>
                <li>hyklerske</li>
                <li>mindre sympatiske</li>
            </ul>
        </div>
        <div>
            <h4>&nbsp;</h4>
            <ul>
                <li>sleivet</li>
                <li>sutrete</li>
                <li>ved navn på tegneseriefigurer</li>
                <li>tullete</li>
                <li>tåpelige</li>
                <li>rabiate</li>
                <li>breiflabb (heller ikke indirekte)</li>
                <li>døve og blinde</li>
            </ul>
        </div>
        <div>
            <h4>Man skal ikke beskylde motstandere for å:</h4>
            <ul>
                <li>lyve</li>
                <li>snakke dritt</li>
                <li>være betalte lobbyister</li>
                <li>drive med tullebudsjettering</li>
                <li>ikke har giddet å lese det de skulle ha lest</li>
                <li>ikke utvise edruelighet eller sannferdighet</li>
                <li>ha «frekkhetens nådegave»</li>
            </ul>
        </div>
        <div>
            <h4>&nbsp;</h4>
            <ul>
              <li>ikke ha peiling</li>
              <li>ha en sløv holdning</li>
              <li>latterliggjøre</li>
              <li>gi blaffen</li>
              <li>bløffe</li>
              <li>tøve</li>
              <li>mene at 70 % av befolkningen er idioter</li>
              <li>ha et parasittaktig forhold til regjeringen</li>
            </ul>
        </div>
        <div>
            <h4>Man skal ikke si om andres politikk at de:</h4>
            <ul>
                <li>raner bilister</li>
                <li>driver med landeveisrøveri</li>
                <li>driver hushaivirksomhet</li>
                <li>tisser på seg selv for å holde varmen</li>
                <li>har en molbopolitikk</li>
                <li>driver statlig utpressing</li>
                <li>driver med politisk utpressing</li>
                <li>driver målebåndstyranni</li>
                <li>driver med bistandspornografi</li>
                <li>driver med overgrep fra det offentlige</li>
            </ul>
        </div>
        <div>
            <h4>&nbsp;</h4>
            <ul>
                <li>driver med forsøpling av debatten</li>
                <li>forfekter «voodoo-økonomi»</li>
                <li>har et like kortsiktig perspektiv som et «one-night-stand»</li>
                <li>biter seg selv i halen</li>
                <li>ballesparker befolkningen</li>
                <li>bevilger summer som kan sammenlignes med musepiss i havet</li>
                <li>fremstår som kastrerte</li>
            </ul>
        </div>
        <div>
            <h4>Man skal ikke kalle motstandernes innlegg eller forslag for:</h4>
            <ul>
                <li>hånlige</li>
                <li>i tåkeheimen</li>
                <li>floskler</li>
                <li>hykleri</li>
                <li>bare tull</li>
                <li>dårlige</li>
                <li>dumme</li>
            </ul>
        </div>
        <div>
            <h4>&nbsp;</h4>
            <ul>
                <li>meningsløse</li>
                <li>fordummende</li>
                <li>en tragedie</li>
                <li>tåketale</li>
                <li>ganske tullete</li>
                <li>på jordet</li>
                <li>løgnaktige </li>
            </ul>
        </div>
        <div>
            <h4>Man skal som hovedregel holde seg religiøst nøytral og ikke si:</h4>
            <ul>
                <li>«for Guds skyld»</li>
                <li>«gudskjelov»</li>
                <li>«Gud forby»</li>
                <li>«i Herrens navn»</li>
                <li>«som fanden leser Bibelen»</li>
                <li>«å se fanden på høylys dag» (her ville for øvrig President Andersen godtatt «spøkelser på høylys dag» eller «en viss mann på høylys dag»).</li>
            </ul>
        </div>
        <div>
            <h4>Selv om det er på kanten er det derimot <strong>lov</strong> å:</h4>
            <ul>
              <li>omtale motstanderens politikk og uttalelser som et dobbeltspill</li>
              <li>sammenligne en motstander med en struts som stikker hodet i jorden</li>
              <li>si at en motstander er «på bærtur»</li>
              <li>si at noe er «sabla kostbart», så lenge det skjer i en debatt om forsvaret</li>
              <li>si at motstanderne løp rundt under hele valgkampen og narret folk</li>
            </ul>
        </div>
        <div>
            <ul>
              <li> si at de som sitter i FNs menneskerettighetsråd, består av «mordere og voldtektsforbrytere»</li>
              <li>kalle en motstander et råskinn, så lenge det er godt ment</li>
              <li>si at noe er «noe svineri», så lenge det skjer i en debatt om dyrevelferd</li>
              <li>å påpeke at man ikke har tenkt å kalle en motstander for ei ku</li>
              <li>sammenligne situasjonen på Island etter finanskrisen med situasjonen i Danmark etter det Østerrisk-Preussiske angrepet i 1864</li>
            </ul>
        </div>
    </div>
    <div class="text-center">
        <div style="width: 50%; float: left;" class="prev">&larr;</div>
        <div style="width: 50%; float: left;" class="next">&rarr;</div>
        <div style="clear: both;"></div>
    </div>
</div>

Totalt har Presidenten funnet det nødvendig å klubbe 145 ganger de siste seks årene. Diagrammet under viser hvilke partier som irettesettes oftest, og det er fløypartiene som utmerker seg som mest rebelske.

<div
    class="uparlamanterisk-sprakbruk-party-chart"
    data-type="bar"
    data-value-title="Antall klubbinger"
    data-values='{
      "FrP": 55,
      "SV": 34,
      "A": 25,
      "H": 20,
      "KrF": 4,
      "Sp": 3,
      "V": 4,
      "MDG": 0
  }'>
</div>
<figcaption class="text-center">Antall innlegg klubbet per parti, oktober 2008 - januar 2015 </figcaption>

Dette inntrykket endrer seg ikke dramatisk om vi tar høyde for at noen partier har flere innlegg enn andre, og heller ser på prosentandel som klubbes:

<div
    class="uparlamanterisk-sprakbruk-party-percent-chart"
    data-type="bar"
    data-postfix="%"
    data-value-title="Andel innlegg klubbet"
    data-values='{
        "SV":  0.48009037,
        "FrP": 0.4520424098,
        "H":   0.1571462246,
        "A":   0.1463443189,
        "V":   0.1101018442,
        "KrF": 0.07045974987,
        "Sp":  0.04173042148,
        "MDG": 0
  }'>
</div>
<figcaption class="text-center">Andel av partiets innlegg som ble klubbet, oktober 2008 - januar 2015</figcaption>


### Sladrehank

Selv om det er opp til Presidenten å avgjøre hva som er greit å si, hender det at representantene sladrer på hverandre, som i denne ikke-navngitte sladringen [10. februar 2011](https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Referater/Stortinget/2008-2009/081022/muntligsporretime/#a4.10):

<blockquote>Presidenten er blitt gjort oppmerksom på at statsråd Navarsete i et innlegg skal ha brukt karakteristikken «tåpelig» om en representants resonnement. Presidenten mente å høre at uttrykket var «dårlig», men det kan skyldes at min hørsel er dårlig. Men faktum er at hvis uttrykket var «tåpelig», er det langt utover parlamentarisk språkbruk.
<cite>President Jagland</cite>
</blockquote>

Bård Hoksrud (FrP) sladret imidlertid åpent fra talerstolen [11. februar 2011](https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Referater/Stortinget/2009-2010/100211/4/#a17)

<blockquote>Jeg oppfatter at vi kanskje har fått et nytt parlamentarisk uttrykk i denne forsamlingen, for jeg registrerer at presidenten ikke klubbet da representanten Langeland brukte ordet «ræva». Jeg synes ikke det er et parlamentarisk uttrykk om politikk som andre fører, i hvert fall ikke fra denne talerstol
<cite>Bård Hoksrud</cite>
</blockquote>

Hoksrud har riktignok aldri brukt uttrykket «ræva», men han deler andreplassen på lista over å bli klubbet flest ganger med nettopp Langeland, sammen med Snorre Valen (SV). Hoksrud har blitt irettesatt for blant annet å anklage vår forrige regjering for å drive med [røveri av bilistene](https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Referater/Stortinget/2009-2010/100610/6/#a10) og [statlig utpressing](https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Referater/Stortinget/2010-2011/110210/13/#a15). Han har også blitt klubbet for å [kalle tidligere finansminister Sigbjørn Johnsen (Ap) Onkel Skrue.](https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Referater/Stortinget/2009-2010/100615/2/#a17)

Her er alle representanter som har blitt klubbet mer enn 2 ganger:

<div
    class="uparlamanterisk-sprakbruk-person-chart"
    data-type="line"
    data-rotated
    data-value-title="Antall klubbinger"
    data-values='{
        "Ketil Solvik-Olsen, FrP": 10,
        "Bård Hoksrud, FrP": 6,
        "Snorre Valen, SV": 6,
        "Hallgeir H. Langeland, SV": 6,
        "Erik Solheim, SV": 4,
        "Karin Andersen, SV": 4,
        "Morten Ørsal Johansen, FrP": 4,
        "Jan-Henrik Fredriken, FrP": 4,
        "Per Sandberg, FrP": 4,
        "Heikki Holmås, SV": 3,
        "Tord Lien, FrP": 3
    }'></div>
<figcaption class="text-center">Antall innlegg klubbet per representant, oktober 2008 - januar 2015</figcaption>

Om vi ser på de samme tallene relativt til antall innlegg representanten har holdt, ender vi opp med følgende topp 10-liste:

<div
    class="uparlamanterisk-sprakbruk-person-percent-chart"
    data-type="line"
    data-rotated
    data-postfix="%"
    data-value-title="Andel innlegg klubbet"
    data-values='{
        "Åse Michaelsen, FrP": 8.333333333,
        "Rolf Terje Klungland, Ap": 2.857142857,
        "Hårek Elvenes, H": 2.777777778,
        "Hallgeir H. Langeland, SV": 2.371541502,
        "Fredric Holen Bjørdal, Ap": 2.222222222,
        "Arild Grande, Ap": 2.150537634,
        "Morten Ørsal Johansen, FrP": 2.040816327,
        "Olav Gunnar Ballo, SV": 2.0,
        "Anne Marit Bjørnflaten, Ap": 1.98019802,
        "Jan-Henrik Fredriksen, FrP": 1.877934272
    }'></div>
<figcaption class="text-center">Andel innlegg klubbet per representant, oktober 2008 - januar 2015</figcaption>

### Kan slippe unna

Lista med «på kanten-ord» over er naturligvis ikke komplett, og man kan ofte slippe unna med et ord eller uttrykk én gang, men som man en annen gang vil bli klubbet på. Et eksempel på dette er Arne Sortevik (FrP) som etter å ha blitt klubbet av President Dag Terje Andersen [uttalte](https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Referater/Stortinget/2009-2010/100512/ordinarsporretime/4/#a2.3):

<blockquote>
La meg bemerke at denne representanten har brukt uttrykket «politisk utpressing» mange ganger fra denne talerstolen, med andre presidenter, og da pleier det å gå ganske så bra.
<cite>Arne Sortevik</cite>
</blockquote>

Dette har Sortevik rett i. Han har brukt dette uttrykket syv ganger fra Stortingets talerstol, men bare blitt klubbet én gang. Presidentene har ofte ganske forskjellige oppfatninger av hva som er akseptabel språkbruk. Eksempelvis har  tidligere visepresident Carl I. Hagen [klubbet både Sylvia Brustad](https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Referater/Stortinget/2008-2009/090312/1/#a8.8) (Ap) og [Erik Solheim](https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Referater/Stortinget/2008-2009/090514/1/#a8.10) (SV) for å si at noe ikke henger på greip, mens Dag Terje Andersen eksplisitt har [uttalt fra presidentplassen](https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Referater/Stortinget/2009-2010/100430/1/#a10) at «å henge på greip» er innafor.

Andersen er imidlertid opptatt av at [man ikke skal påkalle høyere makter](https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Referater/Stortinget/2010-2011/110309/muntligsporretime/#a9.1), og har klubbet uttrykk som «for Guds skyld» og «gudskjelov». Knut Arild Hareide (KrF) slapp [20. mars 2013](https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Referater/Stortinget/2012-2013/130320/muntligsporretime/#a6.1) likevel unna med følgende:

<blockquote>Eg er litt usikker på om det er eit parlamentarisk uttrykk – eg trur eg må seie det likevel: Halleluja! (Latter i salen)
<cite>Knut Arild Hareide</cite>
</blockquote>

<blockquote>Presidenten kan berolige representanten Hareide med at «halleluja» absolutt ikke er et uparlamentarisk uttrykk. (Munterhet i salen)
<cite>President Andersen</cite>
</blockquote>

En grei regel for å snike til seg noen sleivspark uten å bli klubbet synes imidlertid å være å påpeke at man er klar over at det er uparlamentarisk, som FrPs Erlend Wiborg [nylig gjorde](https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Referater/Stortinget/2014-2015/150217/2/#a12):

<blockquote>Jeg vil anta det er uparlamentarisk, og derfor skal jeg ikke hevde at Arbeiderpartiet er for diskriminering (…)
<cite>Erlend Wiborg</cite>
</blockquote>

Eller som Arbeiderpartiets Freddy de Ruiter [03. mai 2011](https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Referater/Stortinget/2010-2011/110503/7/#a5):

<blockquote>Kanskje jeg skulle starte med Jan Eggums sang «På 'an igjen», for det er jo det som er realitetene når Fremskrittspartiet masseproduserer representantforslag. Forslagene har stort sett dét til felles at alt er galt, og at ingenting fungerer. Denne gjentagende triste fortellingen får vi presentert både på samferdselsområdet og på en rekke andre samfunnsområder. Det får meg til å tenke på tittelen til debutboken til Ari Behn, men det er neppe innenfor parlamentarisk godkjent ordbruk å nevne bokens tittel
<cite>Freddy de Ruiter</cite>
</blockquote>



Bakgrunnsdata for denne artikkelen finner du [her](https://docs.google.com/spreadsheets/d/1FZMnXG9Fg7TEh5WvXbp0T2LNLtu3Ed99cU5HnU27CO8/edit?usp=sharing).
