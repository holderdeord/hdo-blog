---
layout: post
title: "Ny tjeneste: «Sagt i salen»"
date: "2015-06-17T08:00:00+02:00"
authors:
  - Jari Bakken
tags:
  - referater
  - stortinget
  - tjeneste
  - søk
  - referatsøk
  - sagt i salen
comments: true
twitter_card: summary_large_image
published: true
thumbnail: "http://files.holderdeord.no/images/stortingssalen.jpg"
---

**I dag lanserer vi [en tjeneste](http://tale.holderdeord.no/) som gjør at du enkelt kan grave i hva som sies i stortingssalen. Dette er en helt ny tjeneste i Norge – noe tilsvarende eksisterer ikke på Stortingets egne nettsider.**

Da vi i oktober 2013 skrev vår [ønskeliste til Stortinget](http://blog.holderdeord.no/2013/10/24/nskeliste-til-stortinget/), sto maskinlesbare utgaver av Stortingets referater øverst på lista. Ønsket ble innfridd med en oppdatering av [datatjenesten](http://data.stortinget.no/) et år senere.

Stortinget har lenge laget fantastiske referater, men det er en vesensforskjell at de nå blir publisert ikke bare som tekst, men som strukturerte data. Det åpner opp for å bygge tjenester som på få sekunder gjør analyser av den politiske debatten som det tidligere ville tatt år å utarbeide.

Vi kastet oss over datasettet for å finne ut hva som kunne være interessant å analysere. Det første vi gjorde var å se på [hvilke aviser politikerne leser](http://blog.holderdeord.no/2014/12/10/hvilke-aviser-leser-politikerne/), og vi omtalte da referatene som en «gullgruve av data om norsk politikk». Senere har vi fulgt opp med [hvem som får Stortinget til å le](http://blog.holderdeord.no/2015/03/16/dette-er-stortingets-morsomste/) og hvilke representanter som oftest blir klubbet for [uparlamentarisk språk](http://blog.holderdeord.no/2015/03/25/dette-b-r-du-ikke-si-p-stortinget/).

Uansett hvilke analyser vi gjorde, kom vi tilbake til de samme spørsmålene: Hvilket parti har snakket mest om et tema eller brukt et spesifikt ord? Hvilken representant? Hvordan har bruken endret seg over tid? Hva sies i innleggene, og hvilken kontekst står de i?

[Sagt i salen](http://tale.holdedeord.no) er et verktøy for å besvare disse spørsmålene på få sekunder.

Inspirert av [Google NGram Viewer](https://books.google.com/ngrams) og [NYT Chronicle](http://chronicle.nytlabs.com/), kan man undersøke i hvor stor andel av innlegg et gitt ord har blitt brukt:

<div style="margin-left: -50%; margin-right: -50%;">
    <img class="img-responsive" src="http://files.holderdeord.no/images/sagt-i-salen/timeline-finanskrise.png" />
</div>

Eller hvilket parti som har nevnt et ord i størst andel av sine innlegg:

<div style="margin-left: -50%; margin-right: -50%;">
    <a href="http://tale.holderdeord.no/search/pct/skole/0">
        <img class="img-responsive" src="http://files.holderdeord.no/images/sagt-i-salen/top-party-skole.png" />
    </a>
</div>

Eller hvilke representanter:

<div style="margin-left: -50%; margin-right: -50%;">
    <a href="http://tale.holderdeord.no/search/pct/bergen/0">
        <img class="img-responsive" src="http://files.holderdeord.no/images/sagt-i-salen/top-person-bergen.png" />
    </a>
</div>

Tjenesten:

* Er tilgjengelig på [tale.holderdeord.no](http://tale.holderdeord.no/)
* Inneholder alle referater fra oktober 1998 til dags dato.
* Oppdateres kontinuerlig med nye referater fra [Stortingets datatjeneste](http://data.stortinget.no/).
* Har 229 284 innlegg fra 862 talere.
* Støtter wildcard-søk, f.eks. <em>finans*</em>
* Kan velge mellom å se resultater i prosentandel og absolutte tall.
* Kan sammenligne flere søkeord med komma.
* Støtter CSV-eksport av hele resultatsettet for import i Excel el.l.
