---
layout: post
title: Om utbryterstemmer og å trykke på riktig knapp
date: "2015-12-31T23:59:59.000+01:00"
authors: 
  - Hanna Tranås
  - Alexander Habash Eide
tags: 
  - avstemninger
  - stortinget
  - utbrytere
scripts: 
  - d3
  - c3
  - __title__
  - twitter-wjs
published: true
---

**Det norske systemet legger opp til en streng partidisiplin. Representantene er ikke primært valgt på grunn av sin person, men som representanter for et partiprogram som det forventes at de både stiller seg bak, fronter og stemmer i tråd med. Men dette skjer ikke alltid.**

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

<blockquote class="twitter-tweet" data-dnt="true" data-conversation="none" data-cards="hidden" lang="no" lang="no"><p><a href="https://twitter.com/partipisken">@partipisken</a> Da stemte jeg i så fall stemt feil i natt.</p>&mdash; Anne T Wøien (@AnneTWh) <a href="https://twitter.com/AnneTWh/status/580645734078382080">March 25, 2015</a></blockquote>

<blockquote class="twitter-tweet" data-dnt="true" data-conversation="none" data-cards="hidden" lang="no" lang="no"><p><a href="https://twitter.com/partipisken">@partipisken</a> det ble en lang natt</p>&mdash; Sveinung Stensland (@sveinungen) <a href="https://twitter.com/sveinungen/status/580645226865430528">March 25, 2015</a></blockquote>


Det var også det [Aslak Borgersrud][aslak] fant da han i desember brukte topplister fra vår database til [å konfrontere](http://enslask.no/2014/12/sa-ofte-stemmer-politikerne-mot-sitt-eget-parti/) to politikere med tallene, og det vi fikk da vi bestemte oss for å konfrontere andre politikere i saker med overraskende mange utbrytere, som i en avstemning om å [lovfeste minstelønn](https://www.holderdeord.no/votes/1418069544ne), en avstemning om [endringer i barneloven](https://www.holderdeord.no/votes/1268171572ne), en avstemning om å [gi kommunene økt myndighet over motorferdsel i utmark](https://www.holderdeord.no/votes/1273513544ne) og i en avstemning om [endringer i abortloven:](https://www.holderdeord.no/votes/1360701677ne)


> Sansynligvis feilstemming.
										Oskar Grimstad, FrP

> Jeg husker ikke denne avstemningen spesielt, og antar derfor at det må ha vært en feilstemme for mitt vedkommende. 							
										Henning Warloe, H


> Jeg støttet Høyre sitt forslag til motorferdsel i utmark. Når det gjelder abortsaken så har jeg stemt feil.
										Bente Thorsen, FrP


Så lenge feilstemmingen ikke påvirker utfallet i saken har nemlig ikke representantene noen grunn til å få dem rettet. Som Robert Erikssons svar til Aslak Borgersrud:

> Det er selvfølgelig beklagelig. […] Heldigvis har disse feilene ikke hatt betydning for flertallet.

Og som Høyres Sveinung Stensland svarte til oss:

> Jeg stemte dessverre feil, opplyste innpiskeren om det, men vi fant det ikke nødvendig å korrigere protokollen. 

Dette siste henviser til stortingspraksisen med å melde inn standpunktene på forhånd. Presidenten vet derfor hva utfallet av avstemningen skal bli. Skulle utfallet av voteringen bli annerledes enn det som var meldt inn på forhånd vil Presidenten si fra, og så må de ta hele voteringen på nytt. Hvis det ikke tipper utfallet gjør det ingenting, så det er få som orker å si fra, hvis de i det hele tatt fikk med seg at de trykka på feil knapp. Av i alt 2083 stemmer mot eget parti i perioden 2009 til i dag har representanter kun oppdaget, eller brydd seg med å si fra om, at de stemte feil 59 ganger. 


#### Noen ganger med vilje

I noen tilfeller tillater imidlertid også norske politiske partier at representantene fristilles, særlig i såkalte samvittighetssaker. De får altså tillatelse fra resten av partigruppen til å stemme mot flertallet i gruppen. Vi har ikke klart å få tak i noen offisielle reglementer, men har fått følgende sitat:

> Vi er fristilt i saker som ikke er bestemt av landsmøtet, eller som er hjemlet i partiprogram eller regjeringsplattform.
										Sveinung Stensland, H

> I Arbeiderpartiet har vi tradisjon for å diskutere oss fram til et standpunkt i en sak for så å stemme sammen. I enkelte saker, for eksempel saker som berører samvittighetsspørsmål eller saker som betyr mye for den enkelte kan gruppa stille medlemmene fritt. Dette syns jeg er en grei ordning.
										Sonja Mandt, Ap

> Når det gjelder samvittighetsspørsmål så synes jeg det er viktig at representantene får stå fritt til å stemme etter egen overbevisning, så lenge programmet vi er innvalgt på ikke sier noe om den konkrete saken. Dette er forøvrig en regel som vi har følgt i saker som går på samvittighet. 
										Bente Thorsen, FrP


Et kroneksempel på slike samvittighetsstemmer er striden om datalagringsdirektivet, som ikke var eksplisitt omtalt i Høyres partiprogram. Høyre støttet Arbeiderpartiet og sikret flertall på Stortinget for den nye loven. Flere fremtredende stortingsrepresentanter fra Høyre, blant annet Nikolai Astrup og Michael Tetzschner, gikk offentlig ut mot lovforslaget. Flere andre Høyrefolk mente datalagringsdirektivet brøt med Høyres prinsipper og partiprogram, som understreker viktigheten av personvern. Der heter det at: 

> For å sikre personvern og ytringsfrihet vil Høyre stille seg kritisk til innføringen av nye lover som øker adgangen til, eller omfanget av, overvåkning i samfunnet.

I opposisjon er det også mindre problematisk å fristille, særlig hvis vi har en flertallsregjering. Grafen under viser at enhetlig stemmegiving i partigruppene har blitt styrket det siste året. 

<div id="{{ page.title | slugify }}-timeline"></div>

Den neste grafen viser utbrytere per parti over tid, og vi ser at representantene i mye større grad stemmer mot flertallet i sitt parti når de er i opposisjon enn i posisjon. Dette gjelder både for Høyre og FrP, som har færre utbrytere nå enn i perioden 2009-2013, og for SV og Sp som har flere utbrytere nå enn da de satt i regjering. 

- inn her med utbrytere per parti over tid

I 2013-2014 er det første gang at Sp og SV har høyere andel utbrytere enn FrP og Høyre. Ap holder seg jevnt lavt, og har faktisk marginalt færre utbrytere enn Høyre også i 2013-2014. Venstre dukker ikke opp i grafen før i 2013-2014 siden de i foregående periode kun hadde 2 representanter og det dermed er vanskelig å anklage noen for å bryte ut. MDG mangler selvsagt, siden Rasmus Hansson ikke kan stemme mot seg selv. Det finnes naturligvis også tilfeller der han trolig har stemt "mot eget parti", som i [denne avstemningen](https://www.holderdeord.no/votes/1403271166ne), der han stemte for SVs alternative statsbudsjett.


#### Er samvittighetsstemmer en god ting?

Det er forståelig at representantene ikke kan fristilles der det finnes landsmøtevedtak eller avtaler med andre partier, som i samarbeidsavtalen dagens regjering har med Venstre og KrF. Man kan imidlertid argumentere for at større frihet for representantene burde være regelen i saker der partiet mangler formulert politikk, eller partiprogrammets ordlyd er så uklar at det ikke er mulig å utlede hva partiet skal mene. Dette bør da også gjelde dersom det kan bety at utfallet i voteringen blir annerledes enn hva majoriteten i partigruppen mener. Det bør altså være som Høyres Sveining Stensland i sitatet over mener politikken er i Høyre. 

Et eksempel for å illustrere det problematiske med partipisk er avstemningen om hvorvidt norske sykehus skal tilby omskjæring av guttebarn. Dette er ikke omtalt i Arbeiderpartiets program, ei heller vært oppe til behandling på et landsmøte, og er således en sak representantene ikke har lovet noe som helst i, eller en sak der velgerne forventer noe spesielt, annet enn utfra velgerens oppfatning av hva partiet står for. Saken ble diskutert internt, men representantene fikk ikke tillatelse til å stemme slik de ville, til tross for at Sonja Mandt i Arbeiderpartiet har sagt at de har tradisjon for å la folk stemme fritt i samvittighetssaker. 

I slike saker finnes «løsningen» i Stortingets utbyttersystem, der innpiskerne for de ulike partiene sørger for at den politiske balansen opprettholdes når ikke alle er til stede i salen. Freddy de Ruiter i Ap fortalte til Dagsavisen at han benyttet seg av denne ordningen og ba om å få bli byttet ut for å slippe å stemme for loven:

> Det var mest renhårig. Jeg kunne ikke stemme for dette av samvittighetsgrunner 

Hensikten med utbyttingssystemet er imidlertid å ta hensyn til at representantene har mange andre oppgaver enn å møte i Stortingssalen, og ikke alle har mulighet til å møte hver gang. Hvordan utbyttingssystemet praktiseres er i stor grad opp til hvert enkelt parti; det er en såkalt gentleman agreement mellom partiene, og er basert på tillit. Representantene plikter imidlertid i følge ansvarlighetsloven å møte i Stortinget såfremt de har gyldig fravær. Det er derfor problematisk at dette systemet kan brukes som en enkel utvei for å slippe å vise at man er uenig med partiets standpunkt, eller å måtte stemme for noe man egentlig er mot, når man faktisk har mulighet til å møte. At man ikke er enig med eget parti bør ikke være gyldig grunn til å avstå fra en avstemning. 

At ordningen kan benyttes på denne måten gjør det vanskelig å ettergå representantene. Vi kan ikke vite hva representantene fra våre valgkretser faktisk mener i ulike saker (med mindre de går ut i media med det), bare hva partigruppen på Stortinget mener, noe som er en svakhet ved partidemokratiet. Hvis representanter skal bindes bør det skje ved landsmøtevedtak, ikke ved at et flertall i stortingsgruppen bestemmer det. 

I følge Michael Tetzschner i Høyre har de når det er snakk om samvittighetsspørsmål
> en fin tradisjon med å "stille representantene fritt". Formuleringen tyder på at man har hjemmel til å binde, men det har man ikke juridisk. Så realiteten er at man ikke vil bruke sosialt press på de som utgjør mindretallet. Der man såkalt binder, er det snakk om overtalelse og argumentasjon. 

Videre skriver han til Holder de ord at 

> Jeg gjør også oppmerksom på at hvis partiet har vedtatt et program, og en valgt representant uttrykkelig og offentlig har reservert seg før han blir nominert, har han muligheten til å stå fritt. Men set sier seg selv at det må være så viktig sak at den er konkret omtalt i programmet.
I tillegg er de fleste representanter gode til å skille mellom sterkt prinsipielle saker og "annen orden"s saker.  Man vil neppe møte forståelse for å stemme mot partiet i praktiske saker, eller valg mellom utpreget tekniske løsninger. 
OL saken er et godt eksempel på at man ikke skulle kunne utøve noe særlig press mot representantene i en sak som ikke en gang stod omtalt i programmet og ville koste 35 mrd x 1 eller x2 eller x3.

Vampus og reservasjonsrett?

[partipisken]: https://twitter.com/partipisken
[aslak]: https://twitter.com/aslak_gatas
