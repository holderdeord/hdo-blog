---
layout: post
title: "Når stemmes det på Stortinget?"
date: "2015-01-28T23:59:59.000+01:00"
authors: 
  - Hanna Tranås
  - Jari Bakken
tags: 
  - avstemninger
  - stortinget
  - utbrytere
scripts: 
  - d3
  - c3
  - "cal-heatmap"
  - __title__
published: true
---

**Voteringer i stortinget skjer når en sak er ferdigbehandlet, gjerne mot slutten av dagens møter og gjerne på tampen av vår- og høstsesjonene. Men kan stemmetidspunkt påvirke stemmegivningen til den enkelte representant? Og hva skyldes det at antall voteringer falt markant etter valget i 2013? Her er en liten oversikt over stemmegivning på tinget i perioden 2009 til 2014.**

#### Når på året stemmes det?

Vi har data om alle avstemninger på Stortinget fra høsten 2009 til dagens dato. Til sammen har det blir stemt 5561 ganger. Under kan du se hvordan disse er fordelt utover årene.

Velg: <select id="nar-stemmes-det-pa-stortinget-calendar-select"><option>Avstemninger</option><option>Utbryterstemmer</option></select>

<div id="nar-stemmes-det-pa-stortinget-calendar"></div>
<hr>

|------------------------------------------------------------------
| År        | Antall dager med avstemninger | Antall avstemninger |
|-----------------------------------------------------------------|
| 2009-2010 | 67                            | 947                 |
| 2010-2011 | 72                            | 1196                |
| 2011-2012 | 71                            | 1032                |
| 2012-2013 | 65                            | 1453                |
| 2013-2014 | 57                            | 657                 |
|-----------------------------------------------------------------|

<div id="nar-stemmes-det-pa-stortinget-day-counts"></div>

#### Når på døgnet stemmes det?

Alle avstemninger:

<div id="nar-stemmes-det-pa-stortinget-hours"></div>

Når forekommer utbryterstemmer?

<div id="nar-stemmes-det-pa-stortinget-rebel-hours"></div>

#### Stemmes det mer feil på lange dager?

Her er forholdet mellom antall voteringer og utbryterstemmer.

<div id="nar-stemmes-det-pa-stortinget-scatter"></div>
