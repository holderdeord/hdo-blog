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
comments: false
twitter_card: summary_large_image
published: true
thumbnail: "http://files.holderdeord.no/images/stortingssalen.jpg"
---

**I dag lanserer vi [en tjeneste](http://tale.holderdeord.no/) som gjør at du enkelt kan grave i hva som sies i stortingssalen. Dette er et helt nytt verktøy som gjør politisk tekstanalyse til noe alle kan drive med.**

Da vi i oktober 2013 skrev vår [ønskeliste til Stortinget](http://blog.holderdeord.no/2013/10/24/nskeliste-til-stortinget/), sto maskinlesbare utgaver av Stortingets referater øverst på lista. Ønsket ble innfridd med en oppdatering av [datatjenesten](http://data.stortinget.no/) et år senere.

<div class="fact-box right-box" style='margin-right: -3rem; padding: .5rem;'>
    <h5>Om tjenesten</h5>
    <ul style="margin: 0;">
        <li>Tilgjengelig på <a href="http://tale.holderdeord.no/" target="_blank">tale.holderdeord.no</a></li>
        <li>Inneholder alle referater fra oktober 1998 til dags dato</li>
        <li>Oppdateres kontinuerlig med nye referater fra <a href="http://data.stortinget.no/" target="_blank">Stortingets datatjeneste</a></li>
        <li>Inneholder i skrivende stund <strong>229284</strong> innlegg fra <strong>862</strong> talere.</li>
        <li>Støtter wildcard-søk som <a href="http://tale.holderdeord.no/search/pct/skole*/0"><strong>skole*</strong></a></li>
        <li>Viser resultatene både som prosentandel og absolutte tall.</li>
        <li>Kan sammenligne flere søkeord ved bruk av komma.</li>
        <li>Støtter CSV-eksport av hele resultatsettet for import i Excel el.l.</li>
    </ul>
</div>


Stortinget har lenge laget fantastiske referater, men det er en vesensforskjell at de nå blir publisert ikke bare som tekst, men som strukturerte data. Det åpner for å bygge tjenester som på få sekunder gjør analyser av den politiske debatten som det tidligere ville tatt år å utarbeide.

Vi kastet oss over datasettet for å finne ut hva som kunne være interessant å analysere, først ved å se på [hvilke aviser politikerne leser](http://blog.holderdeord.no/2014/12/10/hvilke-aviser-leser-politikerne/). Vi omtalte da referatene som en «gullgruve av data om norsk politikk».

Senere har vi fulgt opp med [hvem som får Stortinget til å le](http://blog.holderdeord.no/2015/03/16/dette-er-stortingets-morsomste/) og hvilke representanter som oftest blir klubbet for [uparlamentarisk språk](http://blog.holderdeord.no/2015/03/25/dette-b-r-du-ikke-si-p-stortinget/).

Uansett hvilke analyser vi gjorde, kom vi tilbake til de samme spørsmålene: Hvilket parti har snakket mest om et tema eller brukt et spesifikt ord? Hvilken representant? Hvordan har bruken endret seg over tid? Hva sies i innleggene, og hvilken kontekst står de i?

[Sagt i salen](http://tale.holdedeord.no) er et verktøy for å besvare disse spørsmålene på få sekunder.

Inspirert av [Google NGram Viewer](https://books.google.com/ngrams) og [NYT Chronicle](http://chronicle.nytlabs.com/), kan man undersøke i hvor stor andel av innlegg et gitt ord har blitt brukt:

<div class="sagt-i-salen-breakout">
    <a href="http://tale.holderdeord.no/search/pct/finanskrise/0">
        <img class="img-responsive" src="http://files.holderdeord.no/images/sagt-i-salen/timeline-finanskrise.png" />
    </a>
</div>

Eller hvilket parti som har nevnt et ord i størst andel av sine innlegg:

<div class="sagt-i-salen-breakout">
    <a href="http://tale.holderdeord.no/search/pct/skole/0">
        <img class="img-responsive" src="http://files.holderdeord.no/images/sagt-i-salen/top-party-skole.png" />
    </a>
</div>

Eller hvilke representanter:

<div class="sagt-i-salen-breakout">
    <a href="http://tale.holderdeord.no/search/pct/bergen/0">
        <img class="img-responsive" src="http://files.holderdeord.no/images/sagt-i-salen/top-person-bergen.png" />
    </a>
</div>

<style>
    .sagt-i-salen-breakout {
        margin-left: -50%;
        margin-right: -50%;
    }

    @media screen and (max-width: 768px) {
        .sagt-i-salen-breakout {
            margin-left: 0;
            margin-right: 0;
        }
    }
</style>
