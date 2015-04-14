---
layout: post
title: Samvittighetsfulle utbrytere eller trøtte
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
  - "twitter-wjs"
published: true
---

**Det norske systemet legger opp til en streng partidisiplin. Representantene er ikke primært valgt på grunn av sin person, men som representanter for et partiprogram som det forventes at de både stiller seg bak, fronter og stemmer i tråd med. Men dette skjer ikke alltid.**

I motsetning til for eksempel den tyske Bundestagen, der medlemmene representerer hele folket, og ifølge grunnloven “ikke skal være bundet av ordrer eller instrukser fra eget parti, men av egen samvittighet”, åpner ikke det norske systemet for at uenigheter innad i partiene skal påvirke stemmeresultatene. Her i Norge diskuterer partienes representanter seg frem til et felles bindende standpunkt før voteringen finner sted og sikrer slik enklere gjennomslag for sine saker, spesielt der det er snakk om skjøre flertall.


Tabellen under viser antall såkalte utbryterstemmer per parti, altså hvor mange ganger representanter har stemt mot flertallet i eget parti.

<div id="{{ page.title | slugify }}-top-20"></div>

Her er partiene, etter antall utbryterstemmer. Man trenger minst tre representanter for at noen skal kunne bryte med flertallet. Venstre hadde med sine to representanter derfor ingen utbryterstemmer i 2009-2013, og MDG med sin vil ene representant ikke ha noen i denne perioden.

<div id="{{ page.title | slugify }}-parties"></div>
<figcaption>Antall utbryterstemmer per parti, okt. 2009 - des. 2014</figcaption>

Men det er forskjell i størrelse på partiene, så absolutte tall kan være misvisende. Hva om vi ser på antall utbryterstemmer per innvalgte representant?

<div id="{{ page.title | slugify }}-parties-normalized"></div>
<figcaption>Antall utbryterstemmer per gjennomsnitt innvalgte representant parti, okt. 2009 - des. 2014</figcaption>


#### Sjelden med vilje

I november i fjor laget vi [@partipisken][partipisken], en Twitter-konto som tvitrer hver gang noen stemmer mot flertallet i sitt eget parti på Stortinget. Tilbakemeldingene vi har fått antyder dog at de tilsynelatende rebelske stemmene ofte kun er et resultat av sløvhet.


<blockquote class="twitter-tweet" data-dnt="true" data-conversation="none" data-cards="hidden" lang="no"><p><a href="https://twitter.com/partipisken">@partipisken</a> denne gangen var det rett og slett fingeren, ikke pisken som svang <a href="https://twitter.com/hashtag/feiltrykking?src=hash">#feiltrykking</a></p>&mdash; kari henriksen (@karhenr) <a href="https://twitter.com/karhenr/status/541917331820404736">December 8, 2014</a></blockquote>

<blockquote class="twitter-tweet" data-dnt="true" data-conversation="none" data-cards="hidden" lang="no"><p><a href="https://twitter.com/partipisken">@partipisken</a> ooops did it again! Inni en trend nå!</p>&mdash; kari henriksen (@karhenr) <a href="https://twitter.com/karhenr/status/542074899838554112">December 8, 2014</a></blockquote>

<blockquote class="twitter-tweet" data-dnt="true" data-conversation="none" data-cards="hidden" lang="no"><p><a href="https://twitter.com/partipisken">@partipisken</a> det hele var nok en stemmefeil sent på kvelden. Er <a href="https://twitter.com/hashtag/partitro?src=hash">#partitro</a> :-)</p>&mdash; AnetteTrettebergst. (@Trettebergstuen) <a href="https://twitter.com/Trettebergstuen/status/542586383869960193">December 10, 2014</a></blockquote>

<blockquote class="twitter-tweet" data-dnt="true" data-conversation="none" data-cards="hidden" lang="no"><p><a href="https://twitter.com/partipisken">@partipisken</a> Vel, eg stemte nok feil, men takk for at du kringkasta det ;-)</p>&mdash; Jenny Klinge (@jennyklinge) <a href="https://twitter.com/jennyklinge/status/543329449069260801">December 12, 2014</a></blockquote>

<blockquote class="twitter-tweet" data-dnt="true" data-conversation="none" data-cards="hidden" lang="no" lang="no"><p><a href="https://twitter.com/partipisken">@partipisken</a> Dette var en teknisk feil :-)</p>&mdash; Elin Agdestein (@ElinAgdestein) <a href="https://twitter.com/ElinAgdestein/status/563596522705940480">February 6, 2015</a></blockquote>

<blockquote class="twitter-tweet" data-dnt="true" data-conversation="none" data-cards="hidden" lang="no" lang="no"><p><a href="https://twitter.com/partipisken">@partipisken</a> det ble en lang natt</p>&mdash; Sveinung Stensland (@sveinungen) <a href="https://twitter.com/sveinungen/status/580645226865430528">March 25, 2015</a></blockquote>


Det var også det [Aslak Borgersrud](https://twitter.com/aslak_gatas) fant da han i desember brukte topplister fra vår database til [å konfrontere](http://enslask.no/2014/12/sa-ofte-stemmer-politikerne-mot-sitt-eget-parti/) to politikere med tallene, og det var dette inntrykket vi satt igjen med etter vår egen konfrontasjon med politikere vedrørende saker med overraskende mange utbrytere. For å nevne noen: [lovfesting av minstelønn](https://www.holderdeord.no/votes/1418069544ne), [endringer i barneloven](https://www.holderdeord.no/votes/1268171572ne), [endringer i abortloven](https://www.holderdeord.no/votes/1360701677ne).

Det viste seg likevel at det ikke fantes noen sammenheng mellom stemmetidspunkt på døgnet og antall utbryterstemmer/feilstemmer. Politikere stemmer ikke oftere feil eller mer i tråd med sin samvittighet senere enn tidligere på døgnet, da de kanskje er trettere og dermed litt sløvere enn ellers. Spekulasjoner om hva som kan være årsaken, det være seg språktekniske aspekter ved voteringsspørsmålet, eller uoppmerksomhet fra tid til annen, blir heller ikke så viktig når vi vet at en feilstemme aldri har endret et resultat av en votering på Stortinget. Og så lenge feilstemmingen ikke påvirker utfallet i saken, har heller ikke representantene noen grunn til å få dem rettet. Som Robert Erikssons svar til Aslak Borgersrud:

> Det er selvfølgelig beklagelig. […] Heldigvis har disse feilene ikke hatt betydning for flertallet
									     Aslak Borgersrud

Og som Høyres Sveinung Stensland svarte til oss:

> eg stemte dessverre feil, opplyste innpiskeren om det, men vi fant det ikke nødvendig å korrigere protokollen.							
										Sveinung Stensland, H

####Spiller det noen rolle?
Overnevnte sitat henviser til stortingspraksisen med å melde inn standpunktene på forhånd. Presidenten vet ved hver anledning hva utfallet av en avstemming vil bli, og skulle utfallet av voteringen bli annerledes enn det som var meldt inn på forhånd, vil Presidenten si ifra og voteringen tas på nytt. Hvis utfallet ikke endres, gjør det ingenting å stemme feil og få gidder derfor å si i fra om de uheldigvis skulle stemme feil, hvis de da i det hele tatt fikk med seg at de trykket på feil knapp. Av i alt 2083 stemmer mot eget parti i perioden 2009 til i dag har representanter kun oppdaget, eller brydd seg med å si fra om, at de stemte feil 59 ganger. 
Faren for at en feilstemme kan påvirke resultatet av en avstemming er med andre ord svært liten, og vi kan ikke annet enn å konkludere med at dette ikke utgjør noen forskjell for vedtak av lover, ei heller er dette derfor en trussel mot vårt representative demokrati. Partienes politikk gjenspeiles rett som det er, og velgerene trenger ikke å frykte at deres mann/kvinne på tinget gjesper ens hjertesak over den partiideologiske linja.

####Noen ganger med vilje
I noen tilfeller tillater imidlertid de politiske partiene at representantene fristilles, særlig i såkalte samvittighetssaker. I slike saker får representantene tillatelse fra resten av partigruppen til å stemme imot flertallet av gruppen. Vi har ikke klart å få tak i noen offisielle reglementer, men har fått følgende sitat:

> Vi er fristilt i saker som ikke er bestemt av landsmøtet, eller som er hjemlet i partiprogram eller regjeringsplattform.
											Sveinung Stensland, H

> I Arbeiderpartiet har vi tradisjon for å diskutere oss fram til et standpunkt i en sak for så å stemme sammen. I enkelte saker, for eksempel saker som berører samvittighetsspørsmål eller saker som betyr mye for den enkelte kan gruppa stille medlemmene fritt. Dette syns jeg er en grei ordning.

											Sonja Mandt, Ap

Et kroneksempel på en slik sak var striden om datalagringsdirektivet (vedtatt 2011). Høyre støttet Arbeiderpartiet og sikret flertall på Stortinget for den nye loven, men, til tross for at lovforslaget ikke var eksplisitt omtalt i Høyres partiprogram, gikk flere fremtredende stortingsrepresentanter fra Høyre, blant annet Nikolai Astrup og Michael Tetzschner, offentlig ut mot lovforslaget. Langt flere høyrefolk mente datalagringsdirektivet brøt med Høyres liberale prinsipper og partiprogrampunkter omhandlende personvern. Der heter det at:

> For å sikre personvern og ytringsfrihet vil Høyre stille seg kritisk til innføringen av nye lover som øker adgangen til, eller omfanget av, overvåkning i samfunnet.

I opposisjon er det også mindre problematisk å fristille, særlig hvis vi har en flertallsregjering. Grafen under viser at enhetlig stemmegiving i partigruppene har blitt styrket det siste året.

<div id="{{ page.title | slugify }}-timeline"></div>

Den neste grafen viser utbrytere per parti over tid, og vi ser at representantene i mye større grad stemmer mot flertallet i sitt parti når de er i opposisjon enn i posisjon. Dette gjelder både for Høyre og FrP, som har færre utbrytere nå enn i perioden 2009-2013, og for SV og Sp som har flere utbrytere nå enn da de satt i regjering.

inn her med utbrytere per parti over tid

I 2013-2014 er det første gang at Sp og SV har høyere andel utbrytere enn FrP og Høyre. Ap holder seg jevnt lavt, og har faktisk marginalt færre utbrytere enn Høyre også i 2013-2014. Venstre dukker ikke opp i grafen før i 2013-2014 siden de i foregående periode kun hadde 2 representanter og det dermed er vanskelig å anklage noen for å bryte ut. MDG mangler selvsagt, siden Rasmus Hansson ikke kan stemme mot seg selv.


####Den enkle veien ut

Utbyttingssystemet er en enkel utvei om man helst vil slippe å vise at man er uenig med partiets standpunkt eller ikke ønsker å stemme for noe man egentlig er i mot. Ordningen gjør det mulig å slippe å møte til avstemning med den opprinnelige hensikt å ta hensyn til at representantene har mange andre oppgaver i tillegg til å møte i Stortingssalen. Det problematiske ved dette er at representanter så enkelt skal kunne avstå fra å stemme når de faktisk har mulighet til å delta. At man ikke er enig med eget parti bør ikke være gyldig grunn til å avstå fra en avstemning. 
At ordningen kan benyttes på denne måten gjør det i tillegg vanskelig å ettergå representantene. Vi kan ikke vite hva representantene fra våre valgkretser faktisk mener i ulike saker (med mindre de går ut i media med det), bare hva partigruppen på Stortinget mener, noe som er en svakhet ved partidemokratiet. Hvis representanter skal bindes bør det skje ved landsmøtevedtak, ikke ved at et flertall i stortingsgruppen bestemmer det.

####Bør representantene innvilges større frihet?
Det er forståelig at representantene ikke kan fristilles der det finnes landsmøtevedtak eller avtaler med andre partier, som i samarbeidsavtalen dagens regjering har med Venstre og KrF. Man kan imidlertid argumentere for at større frihet for representantene burde være regelen i saker der partiet mangler formulert politikk, eller partiprogrammets ordlyd er så uklar at det ikke er mulig å utlede hva partiet skal mene. Dette bør da også gjelde dersom det kan bety at utfallet i voteringen blir annerledes enn hva majoriteten i partigruppen mener. Det bør altså være som Høyres Sveinung Stensland i sitatet over mener politikken er i Høyre.
I en mail til oss forklarer Micheal Tetzchner videre at det ikke er mulig å “juridisk” binde representanter, men at det er hjemmel for å binde via overtalelse og argumentasjon. Vissnok for at det ikke skal utøves “sosialt press mot mindretallet”. Vi kan dog forestille oss at det nettopp er sosialt press mindretallet møter ved overtalelese og argumentasjon fra flertallet, og at dette er noe av grunnen til at representanter benytter seg av utbyttersystemet for å unngå å stemme imot flertallet. Det er helt klart en fin balansegang mellom det å overtale og argumentere seg frem til oppslutning om et standpunkt, og det å yte sosialt press mot et mindretall. 
Et eksempel for å illustrere det problematiske med partipisk er avstemningen om hvorvidt norske sykehus skal tilby omskjæring av guttebarn. Dette er ikke omtalt i Arbeiderpartiets program, ei heller vært oppe til behandling på et landsmøte, og er således en sak representantene ikke har lovet noe som helst i, eller en sak der velgerne forventer noe spesielt, annet enn utfra velgerens oppfatning av hva partiet står for. Saken ble diskutert internt, men representantene fikk ikke tillatelse til å stemme slik de ville, til tross for at Sonja Mandt i Arbeiderpartiet har sagt at de har tradisjon for å la folk stemme fritt i samvittighetssaker.
Dette viser at det fortsatt er behov for mer åpenhet og større aksept for samvittighetstemmer innad i partiene. Med større åpenhet, også utenfor partienes lukkede dører, ville representantene ikke bare stått fast ved sine prinsipper, men også følt på hva menneskene de representerer mener. Det er heller presset derifra som burde få en individuell representant eller et helt parti til å snu.
