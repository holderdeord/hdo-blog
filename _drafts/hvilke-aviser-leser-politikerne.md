---
layout: post
title: Hvilke aviser leser politikerne?
date: '2014-12-31T23:59:59.000+01:00'
authors:
- Jari Bakken
tags:
- presse
- media
- journalistikk
- aviser
- stortinget
- referat
---

Vi har undersøkt hvilke medieaktører som oftest siteres på Stortinget. Basert på referater fra de siste seks årene kan vi lære noe om hvem som setter politisk dagsorden i Norge. 

Vi tok utgangspunkt i de 30 største avisene i Norge, basert på [opplagstall fra 2013][1]. I tillegg ble [Stortingets datatjeneste][2] i høst oppdatert med referater på et format som er egnet for maskinell behandling. Referatene går fra høsten 2008 til dagens dato. Ikke overraskende er det avisene med størst opplag som kommer best ut i absolutte tall:

<pre>
|---------------------------+---------+---------|
|  Avis                     | Sitert  | Opplag  |
|---------------------------+---------+---------|
|  Aftenposten              | 872     | 214026  |
|  VG                       | 493     | 164430  |
|  Dagens Næringsliv        | 414     | 80595   |
|  Dagbladet                | 297     | 80028   |
|  Dagsavisen               | 240     | 23065   |
|  Bergens Tidende          | 164     | 73470   |
|  Klassekampen             | 108     | 17648   |
|  Vårt Land                | 85      | 23682   |
|  Adresseavisen            | 84      | 67325   |
|  Stavanger Aftenblad      | 84      | 59262   |
|  Nordlys                  | 49      | 21902   |
|  Finansavisen             | 48      | 24742   |
|  Sunnmørsposten           | 34      | 27460   |
|  Trønder-Avisa            | 34      | 20681   |
|  Fædrelandsvennen         | 24      | 34845   |
|  Romerikes Blad           | 22      | 27951   |
|  Drammens Tidende         | 16      | 29124   |
|  Telemarksavisa           | 16      | 19173   |
|  Haugesunds Avis          | 15      | 24073   |
|  Hamar Arbeiderblad       | 14      | 23231   |
|  Tønsbergs Blad           | 13      | 24544   |
|  Budstikka                | 12      | 22299   |
|  Fredriksstad Blad        | 10      | 18801   |
|  Morgenbladet             | 9       | 29337   |
|  Agderposten              | 9       | 19853   |
|  Avisa Nordland           | 8       | 19894   |
|  Oppland Arbeiderblad     | 6       | 23645   |
|  Varden                   | 6       | 21476   |
|  Gudbrandsdølen Dagningen | 1       | 23077   |
|---------------------------+---------+---------|
</pre>

Hvis vi i stedet normaliserer for opplagstall, blir resultatet ganske annerledes. Mens VG må trykke 333 aviser for hver gang de nevnes i stortingssalen, må Dagsavisen kun trykke 96 aviser.

<pre>
|---------------------------+---------+--------+----------|
|  Avis                     | Sitert  | Opplag | Ratio    |
|---------------------------+---------+--------+----------|
|  Dagsavisen               | 240     | 23065  | 1:96     |
|  Klassekampen             | 108     | 17648  | 1:163    |
|  Dagens Næringsliv        | 414     | 80595  | 1:194    |
|  Aftenposten              | 872     | 214026 | 1:245    |
|  Dagbladet                | 297     | 80028  | 1:269    |
|  Vårt Land                | 85      | 23682  | 1:278    |
|  VG                       | 493     | 164430 | 1:333    |
|  Nordlys                  | 49      | 21902  | 1:446    |
|  Bergens Tidende          | 164     | 73470  | 1:447    |
|  Finansavisen             | 48      | 24742  | 1:515    |
|  Trønder-Avisa            | 34      | 20681  | 1:608    |
|  Stavanger Aftenblad      | 84      | 59262  | 1:705    |
|  Adresseavisen            | 84      | 67325  | 1:801    |
|  Sunnmørsposten           | 34      | 27460  | 1:807    |
|  Telemarksavisa           | 16      | 19173  | 1:1198   |
|  Romerikes Blad           | 22      | 27951  | 1:1270   |
|  Fædrelandsvennen         | 24      | 34845  | 1:1451   |
|  Haugesunds Avis          | 15      | 24073  | 1:1604   |
|  Hamar Arbeiderblad       | 14      | 23231  | 1:1659   |
|  Drammens Tidende         | 16      | 29124  | 1:1820   |
|  Budstikka                | 12      | 22299  | 1:1858   |
|  Fredriksstad Blad        | 10      | 18801  | 1:1880   |
|  Tønsbergs Blad           | 13      | 24544  | 1:1888   |
|  Agderposten              | 9       | 19853  | 1:2205   |
|  Avisa Nordland           | 8       | 19894  | 1:2486   |
|  Morgenbladet             | 9       | 29337  | 1:3259   |
|  Varden                   | 6       | 21476  | 1:3579   |
|  Oppland Arbeiderblad     | 6       | 23645  | 1:3940   |
|  Gudbrandsdølen Dagningen | 1       | 23077  | 1:23077  |
|---------------------------+---------+--------+----------|
</pre>

I en lignende undersøkelse av TV-kanalene er NRK en ubestridt vinner. Dette bildet er sannsynligvis noe skjevt siden statskanalen ofte debatteres på Stortinget som et tema i seg selv, noe vi ikke har undersøkt i detalj. I stedet for opplagstall, har vi vurdert dette opp mot [gjennomsnittelig seertid per døgn i 2013][3]:

<pre>
|----------+---------+-------+------------------|
|  Kanal    | Sitert | Tid   | Ratio            |
|----------+---------+-------+------------------|
|  NRK     | 1345    | 69    | 01:0.05          |
|  TV2     | 19      | 43    | 01:2.26          |
|  TVNorge | 3       | 13    | 01:4.33          |
|-----------------------------------------------|
</pre>


[1]: http://medienorge.uib.no/?cat=statistikk&page=avis&queryID=190
[2]: http://data.stortinget.no/
[3]: http://www.medienorge.uib.no/statistikk/medium/tv/219
