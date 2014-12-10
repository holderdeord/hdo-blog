---
layout: post
title: Hvilke aviser leser politikerne?
date: '2015-01-01T23:59:59.000+01:00'
authors:
- Jari Bakken
visualization: true
comments: true
tags:
- presse
- media
- journalistikk
- aviser
- stortinget
- referater
---

**Vi har undersøkt hvilke medieaktører som oftest siteres på Stortinget. Basert på referater fra de siste seks årene kan vi lære noe om hvem som setter politisk dagsorden i Norge.**

<small>Sorter etter: <select class="order"><option value="name">Navn</option><option value="prints">Opplag</option><option value="quotes">Antall sitater</option></select></small>

<div class="matrix"></div>

<figcaption class="matrix-caption"></figcaption>

#### Medienes dagsordenfunksjon

Når mediene styrer hvilket utsnitt av verden vi ser, definerer de også hva både befolkning og politikere skal bry seg om – og hva de ikke skal bry oss om. For dagens politikere er det umulig å neglisjere pressens dagsorden uten at det straffer seg. Godt medietekke er helt nødvendig for å posisjonere seg politisk.

Pressens evne til å sette dagsorden får ikke minst utslag i Stortingets spørretime, hvor statsrådene jevnlig konfronteres med aktuelle medieoppslag. VGs [sak om Odin](http://www.vg.no/spesial/2014/odin/) ble i spørretimen [12. november](https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Referater/Stortinget/2014-2015/141112/muntligsporretime/) brukt av [Anders Tyvand](https://www.holderdeord.no/representatives/aty) (KrF) for å spørre [Erna Solberg](http://www.holderdeord.no/representatives/es) hva hun tenker om mobbing.

> Jeg tror vi alle er dypt berørt over oppslagene i VG knyttet til Odin, svarte statsministeren.

Sånn har det ikke alltid vært. I etterkrigstiden var det norske pressekorpset ekstremt politisert, ofte med en helt utilslørt partipolitisk tilknytning. En sjefsredaktør kunne gjerne sitte i sentralstyret til i et politisk parti. Journalistene identifiserte seg med makten, og utfordret i liten grad den dagsorden som de politiske institusjonene hadde satt.

Selv om mediene ikke lenger har en direkte kobling til partier og politiske institusjoner, er den redaksjonelle friheten under press fra kommersielle eiere med strenge krav til inntjening. Medieproduktene innrettes mot eiernes forventninger, som har overtatt partienes rolle i valg av redaktører og journalistiske rammebetingelser. Løsrivelsen kan føre til en mer maktkritisk presse, men med en blindsone for egne eieres makt og interesser.

#### Referater

Tidligere i høst ble [Stortingets datatjeneste][2] oppdatert med referater på et format som er egnet for maskinell behandling, noe som lenge har vært på [vår ønskeliste]({% post_url 2013-10-24-nskeliste-til-stortinget %}). Her finner vi i skrivende stund referater fra alle plenumsmøter tilbake til høsten 2008. Kombinert med noen verktøy for tekstanalyse er dette en gullgruve av data om norsk politikk.

Vi har begynt i det små. Med utgangspunkt i de 30 største avisene basert på [opplagstall fra 2013][1], har vi søkt gjennom referatene for å finne ut hvor ofte hver avis nevnes. Ikke overraskende er det i stor grad avisene med størst opplag som kommer best ut i absolutte tall:

<figure id="hvilke-aviser-leser-politikerne-totals"></figure>
<figcaption>Aviser nevnt i stortingsdebatter, oktober 2008 - november 2014</figcaption>

Men om vi normaliserer for opplag og heller sorterer listen etter antall sitater per trykte avis, endrer bildet seg:

<div id="hvilke-aviser-leser-politikerne-normalized"></div>
<figcaption>Aviser nevnt i stortingsdebatter per trykte avis i 2013, oktober 2008 - november 2014</figcaption>

Her er det påfallende klatring på listen blant de topp tre mottakerne av mediestøtte: Vårt Land fra 10. til 6. plass, Klassekampen fra 7. til 2. plass, Dagsavisen fra 5. til 1. plass. Mens VG må trykke 341 aviser for hver gang de nevnes i stortingssalen, må Dagsavisen kun trykke 96. Kan det være et tegn på at skattebetalerne faktisk får valuta for pengene sine, og at mottakerne av pressestøtte i større grad informerer den parlamentariske debatten?

#### Topp 10 avislesende representanter

Noen representanter er mer ivrige på å sitere aviser enn andre. Her er de topp 10 avisleserne i følge Stortingets referater siden 2008.

|---------------------+----------------+--------------------|
|  Representant       | Avisreferanser | Favorittavis       |
|---------------------+----------------+--------------------|
|  [Ketil Solvik-Olsen](https://www.holderdeord.no/representatives/kets) (FrP) | 107            | Aftenposten        |
|  [Robert Eriksson](https://www.holderdeord.no/representatives/re) (FrP)    | 67             | Aftenposten        |
|  [Trine Skei Grande](https://www.holderdeord.no/representatives/tsg) (V) | 63             | Aftenposten        |
|  [Borghild Tenden](https://www.holderdeord.no/representatives/bt) (V)   | 58             | Aftenposten        |
|  [Gunnar Gundersen](https://www.holderdeord.no/representatives/gag) (H)   | 51             | Dagens Næringsliv  |
|  [Jan Tore Sanner](https://www.holderdeord.no/representatives/jts) (H)    | 51             | Dagens Næringsliv  |
|  [Bent Høie](https://www.holderdeord.no/representatives/benh) (H)         | 50             | Aftenposten        |
|  [Arne Sortevik](https://www.holderdeord.no/representatives/aeso) (FrP)      | 45             | Aftenposten        |
|  [Kjersti Toppe](https://www.holderdeord.no/representatives/kjt) (Sp)     | 44             | Bergens Tidende    |
|  [Anders Anundsen](https://www.holderdeord.no/representatives/ana) (FrP)   | 42             | Aftenposten        |
|---------------------+----------------+--------------------|

Nedenfor kan du utforske datasettet brutt på tid og parti.

<select id="hvilke-aviser-leser-politikerne-party-selector">
<option>Adresseavisen</option><option>Aftenposten</option><option>Agderposten</option><option>Avisa Nordland</option><option>Bergens Tidende</option><option>Budstikka</option><option>Dagbladet</option><option>Dagens Næringsliv</option><option>Dagsavisen</option><option>Drammens Tidende</option><option>Finansavisen</option><option>Fredriksstad Blad</option><option>Fædrelandsvennen</option><option>Gudbrandsdølen Dagn.</option><option>Hamar Arbeiderblad</option><option>Haugesunds Avis</option><option>Klassekampen</option><option>Morgenbladet</option><option>Nordlys</option><option>Oppland Arbeiderblad</option><option>Romerikes Blad</option><option>Stavanger Aftenblad</option><option>Sunnmørsposten</option><option>Telemarksavisa</option><option>Trønder-Avisa</option><option>Tønsbergs Blad</option><option>VG</option><option>Varden</option><option>Vårt Land</option></select>

<div id="hvilke-aviser-leser-politikerne-by-party"></div>
<div id="hvilke-aviser-leser-politikerne-by-year"></div>

Vi ønsker å grave mer i referatene framover, og innspill og ideer er hjertelig velkommen på [epost](mailto:kontakt@holderdeord.no), [Twitter](https://twitter.com/holderdeord) eller [Facebook](https://facebook.com/holderdeord). Data brukt i denne artikkelen kan lastes ned [her](https://docs.google.com/spreadsheets/d/1sl62o9ybeeclJ_8RXQOG9CXU-L7-XiYfDSkEQ-hG9ng/edit?usp=sharing).

[1]: http://medienorge.uib.no/?cat=statistikk&page=avis&queryID=190
[2]: http://data.stortinget.no/

<style>
.hvilke-aviser-leser-politikerne .c3-tooltip th { color: #111; }
.hvilke-aviser-leser-politikerne .matrix svg { font: 9px sans-serif;}
.hvilke-aviser-leser-politikerne .matrix svg .background { fill: #efefef; }
.hvilke-aviser-leser-politikerne .matrix svg line { stroke: #fff; }
.hvilke-aviser-leser-politikerne .matrix svg text { font-size: 12; }
.hvilke-aviser-leser-politikerne .matrix svg text.active { fill: red; }
.hvilke-aviser-leser-politikerne .matrix svg .axis path, .hvilke-aviser-leser-politikerne .matrix svg .axis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
}
</style>
