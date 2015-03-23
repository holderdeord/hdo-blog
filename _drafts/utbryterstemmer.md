---
layout: post
title: Om utbryterstemmer og å trykke på riktig knapp
date: "2015-12-31T23:59:59.000+01:00"
authors: 
  - Jari Bakken
tags: 
  - avstemninger
  - stortinget
  - utbrytere
scripts: 
  - d3
  - c3
  - __title__
  - "twitter-wjs"
published: true
---

**på grunn av sin person, men som representanter for et partiprogram som det forventes at de både stiller seg bak, fronter og stemmer i tråd med. Men dette skjer ikke alltid.**

I det norske systemet tas uenigheter om saker hvor det ikke finnes landsmøtevedtak innad i partienes stortingsgrupper, der man diskuterer seg fram til et felles standpunkt som binder representantene. Dette sikrer at partiet fremstår som enhetlig og at man får gjennomslag for sine saker der det er snakk om skjøre flertall. Dette er i motsetning til for eksempel i den tyske Bundestagen. Der representerer medlemmene hele folket og skal i følge grunnloven “ikke være bundet av ordrer eller instrukser fra eget parti, men av egen samvittighet”. I det norske systemet får representantene kun følge samvittigheten i spesielle tilfeller.  

Tabellen under viser imidlertid at å bryte med partiet skjer ganske ofte. Tabellen under viser antall såkalte utbryterstemmer per parti, altså hvor mange ganger representanter har stemt mot flertallet i eget parti.

<div id="{{ page.title | slugify }}-top-20"></div>

Her er partiene, etter antall utbryterstemmer. Man trenger minst tre representanter for at noen skal kunne bryte med flertallet. Venstre hadde med sine to representanter derfor ingen utbryterstemmer i 2009-2013, og MDG med sin vil ene representant ikke ha noen i denne perioden.

<div id="{{ page.title | slugify }}-parties"></div>
<figcaption>Antall utbryterstemmer per parti, okt. 2009 - des. 2014</figcaption>

Men det er forskjell i størrelse på partiene, så absolutte tall kan være misvisende. Hva om vi ser på antall utbryterstemmer per innvalgte representant?

<div id="{{ page.title | slugify }}-parties-normalized"></div>
<figcaption>Antall utbryterstemmer per gjennomsnitt innvalgte representant parti, okt. 2009 - des. 2014</figcaption>


#### Sjelden med vilje

I november i fjor laget vi [@partipisken][partipisken], en Twitter-konto som tvitrer hver gang noen stemmer mot flertallet i sitt eget parti på Stortinget. Tilsvarene vi har fått antyder at de tilsynelatende rebelske stemmene dessverre ofte kun er resultat av sløvhet:

<blockquote class="twitter-tweet" data-dnt="true" data-conversation="none" data-cards="hidden" lang="no"><p><a href="https://twitter.com/partipisken">@partipisken</a> Hm, det tror jeg må ha vært en feil! Må prøve å rydde opp i det med sekretariatet.</p>&mdash; Snorre Valen (@snorrevalen) <a href="https://twitter.com/snorrevalen/status/533232690859102209">November 14, 2014</a></blockquote>

<blockquote class="twitter-tweet" data-dnt="true" data-conversation="none" data-cards="hidden" lang="no"><p><a href="https://twitter.com/partipisken">@partipisken</a> denne gangen var det rett og slett fingeren, ikke pisken som svang <a href="https://twitter.com/hashtag/feiltrykking?src=hash">#feiltrykking</a></p>&mdash; kari henriksen (@karhenr) <a href="https://twitter.com/karhenr/status/541917331820404736">December 8, 2014</a></blockquote>

<blockquote class="twitter-tweet" data-dnt="true" data-conversation="none" data-cards="hidden" lang="no"><p><a href="https://twitter.com/partipisken">@partipisken</a> ooops did it again! Inni en trend nå!</p>&mdash; kari henriksen (@karhenr) <a href="https://twitter.com/karhenr/status/542074899838554112">December 8, 2014</a></blockquote>

<blockquote class="twitter-tweet" data-dnt="true" data-conversation="none" data-cards="hidden" lang="no"><p><a href="https://twitter.com/partipisken">@partipisken</a> det hele var nok en stemmefeil sent på kvelden. Er <a href="https://twitter.com/hashtag/partitro?src=hash">#partitro</a> :-)</p>&mdash; AnetteTrettebergst. (@Trettebergstuen) <a href="https://twitter.com/Trettebergstuen/status/542586383869960193">December 10, 2014</a></blockquote>

<blockquote class="twitter-tweet" data-dnt="true" data-conversation="none" data-cards="hidden" lang="no"><p><a href="https://twitter.com/partipisken">@partipisken</a> Vel, eg stemte nok feil, men takk for at du kringkasta det ;-)</p>&mdash; Jenny Klinge (@jennyklinge) <a href="https://twitter.com/jennyklinge/status/543329449069260801">December 12, 2014</a></blockquote>

<blockquote class="twitter-tweet" data-dnt="true" data-conversation="none" data-cards="hidden" lang="no" lang="no"><p><a href="https://twitter.com/partipisken">@partipisken</a> Må ha stemt feil der, gitt.</p>&mdash; Geir S. Toskedal (@Toskedal) <a href="https://twitter.com/Toskedal/status/543753856497496065">December 13, 2014</a></blockquote>

<blockquote class="twitter-tweet" data-dnt="true" data-conversation="none" data-cards="hidden" lang="no" lang="no"><p><a href="https://twitter.com/partipisken">@partipisken</a> Dette var en teknisk feil :-)</p>&mdash; Elin Agdestein (@ElinAgdestein) <a href="https://twitter.com/ElinAgdestein/status/563596522705940480">February 6, 2015</a></blockquote>


Det var også det [Aslak Borgersrud][aslak] fant da han i desember brukte topplister fra vår database til [å konfrontere](http://enslask.no/2014/12/sa-ofte-stemmer-politikerne-mot-sitt-eget-parti/) to politikere med tallene, og det vi fikk da vi bestemte oss for å konfrontere andre politikere i saker med overraskende mange utbrytere, som i en avstemning om å [lovfeste minstelønn](https://www.holderdeord.no/votes/1418069544ne), en avstemning om [endringer i barneloven](https://www.holderdeord.no/votes/1268171572ne), en avstemning om å [gi kommunene økt myndighet over motorferdsel i utmark](https://www.holderdeord.no/votes/1273513544ne) og i en avstemning om [endringer i abortloven:](https://www.holderdeord.no/votes/1360701677ne)



Som Aslak nevner er mange av utbryterstemmene rett og slett et resultat av at representantene trykker feil. Det bekreftes ikke minst av reaksjonene [@partipisken][partipisken] har fått fra representantene på Twitter:


og vi fikk da vi bestemte oss for å konfrontere andre politikere i saker med overraskende mange utbrytere, som i en avstemning om å utrede og lovfeste minstelønn, en avstemning om endringer i barneloven, en avstemning om å gi kommunene økt myndighet når det gjelder motorferdsel i utmark og i en avstemning om endringer i abortloven:

Sansynligvis feilstemming.
Mvh O.Grimstad

Jeg husker ikke denne avstemningen spesielt, og antar derfor at det må ha vært en feilstemme for mitt vedkommende. 							Henning Warloe


Jeg støttet Høyre sitt forslag til motorferdsel i utmark. 
Når det gjelder abortsaken så har jeg stemt feil.
Bente Thorsen




Så lenge feilstemmingen ikke påvirker utfallet i saken har ikke representantene noen grunn til å få dem rettet. Som Robert Erikssons svar til Aslak Borgersrud:

Det er selvfølgelig beklagelig. […] Heldigvis har disse feilene ikke hatt betydning for flertallet.

Og som Høyres Sveinung Stensland svarte til oss:

Jeg stemte dessverre feil, opplyste innpiskeren om det, men vi fant det ikke nødvendig å korrigere protokollen. 
Sveinung Stensland




Sannsynligvis gjelder dette en skuffende høy prosentandel av utbryterstemmene. Dessverre er det vanskelig å skille uten å faktisk spørre representantene. Men det er liten grunn til å tro at X stemte mot Y og A for B av samvittighetsgrunner. Så lenge feilstemmingen ikke påvirker utfallet i saken har ikke representantene noen grunn til å få dem rettet. Som Robert Erikssons svar til Aslak Borgersrud:

> Det er selvfølgelig beklagelig. [...] Heldigvis har disse feilene ikke hatt betydning for flertallet.

#### Litt statistikk


Hvor mange prosent av avstemningene har en eller flere utbrytere?

<div id="{{ page.title | slugify }}-timeline"></div>

#### Noen ganger med vilje

... her trengs litt mer analyse av det politiske innholdet ...

- abortlov, ekteskapslov, DLD (Tetzschner),
- pelsdyr?
- finne noen saker hvor utbrytere har endret utfallet
- bruk bilder av representanter

#### Er samvittighetsstemmer en god ting?

Det kan fremstå som om en styrke at enkeltrepresentanter mener så sterkt om en sak at hun prinsippfast trosser partipisken og bryter med flertallet. Men hvordan hadde systemet fungert om alle skulle følge sin egen overbevisning? ... her trengs noen statsvitere, intervju med parlamentariske ledere ...

[partipisken]: https://twitter.com/partipisken
[aslak]: https://twitter.com/aslak_gatas