---
layout: post
title: Kløn og samvittighet på Stortinget
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
comments: true
thumbnail: "http://files.holderdeord.no/images/partipisken.jpg"
twitter_card: summary_large_image
---

**Til tross for at vi i Norge formelt sett har direkte valg på stortingsrepresentanter fra de ulike valgkretsene, stemmer folk i liten grad på representantene. De som kommer inn er representanter for et partiprogram som det forventes at de både stiller seg bak, fronter og stemmer i tråd med. Men dette skjer ikke alltid.**

I det norske systemet har vi en tradisjon for streng partidisplin.  Programmet utformes av grasrota i partiet, og hvilke saker som kommer med i programmet avhenger av de ulike blokkene i partiet. Partiets politikk vedtas på landsmøtet og dette er det stortingsgruppen skal forholde seg til. I de sakene hvor partiene ikke har vedtatt politikk diskuterer stortingsgruppen seg frem til et felles bindende standpunkt før voteringen finner sted.

Streng partidisiplin gjør livet enklere for ledere i både posisjon og opposisjon. Innpiskerne i de ulike partiene har derfor en relativt enkel jobb, da de ikke er nødt til å overtale og overbevise hvert enkelt medlem av sitt parti til å stemme i tråd med partilinja. Innpiskernes jobb er hovedsakelig å sørge for at det er nok folk til stede under avstemningene, slik at forholdet mellom partiene er likt selv når ikke alle representantene er til stede. 

Streng partidisiplin betyr imidlertid ikke at representantene aldri stemmer mot flertallet i sitt parti. Tabellen under viser antall såkalte utbryterstemmer, altså antall ganger en representant fra et parti har stemt mot flertallet i partiet.

<div id="{{ page.title | slugify }}-parties"></div>
<figcaption>Antall utbryterstemmer per parti, okt. 2009 - des. 2014</figcaption>

Man trenger minst tre representanter for at noen skal kunne bryte med flertallet. Venstre hadde med sine to representanter derfor ingen utbryterstemmer i 2009-2013, og MDG vil med sin ene representant ikke ha noen i denne perioden.

Siden det er forskjell i størrelse på partiene, kan absolutte tall være misvisende. Tabellen under viser utbrytere kontrollert for partistørrelse.

<div id="{{ page.title | slugify }}-parties-normalized"></div>
<figcaption>Antall utbryterstemmer per gjennomsnitt innvalgte representant parti, okt. 2009 - des. 2014</figcaption>

#### Sjelden med vilje

Dessverre virker det som at det ikke er snakk om partikonflikter som kommer til syne i disse tallene. I november i fjor laget vi [@partipisken](https://twitter.com/partipisken), en Twitter-konto som tvitrer hver gang noen stemmer mot flertallet i sitt eget parti på Stortinget. Tilbakemeldingene vi har fått antyder at de tilsynelatende rebelske stemmene ofte kun er et resultat av sløvhet.

<blockquote class="twitter-tweet" data-dnt="true" data-conversation="none" data-cards="hidden" lang="no"><p><a href="https://twitter.com/partipisken">@partipisken</a> denne gangen var det rett og slett fingeren, ikke pisken som svang <a href="https://twitter.com/hashtag/feiltrykking?src=hash">#feiltrykking</a></p>&mdash; kari henriksen (@karhenr) <a href="https://twitter.com/karhenr/status/541917331820404736">December 8, 2014</a></blockquote>

<blockquote class="twitter-tweet" data-dnt="true" data-conversation="none" data-cards="hidden" lang="no"><p><a href="https://twitter.com/partipisken">@partipisken</a> ooops did it again! Inni en trend nå!</p>&mdash; kari henriksen (@karhenr) <a href="https://twitter.com/karhenr/status/542074899838554112">December 8, 2014</a></blockquote>

<blockquote class="twitter-tweet" data-dnt="true" data-conversation="none" data-cards="hidden" lang="no"><p><a href="https://twitter.com/partipisken">@partipisken</a> det hele var nok en stemmefeil sent på kvelden. Er <a href="https://twitter.com/hashtag/partitro?src=hash">#partitro</a> :-)</p>&mdash; AnetteTrettebergst. (@Trettebergstuen) <a href="https://twitter.com/Trettebergstuen/status/542586383869960193">December 10, 2014</a></blockquote>

<blockquote class="twitter-tweet" data-dnt="true" data-conversation="none" data-cards="hidden" lang="no"><p><a href="https://twitter.com/partipisken">@partipisken</a> Vel, eg stemte nok feil, men takk for at du kringkasta det ;-)</p>&mdash; Jenny Klinge (@jennyklinge) <a href="https://twitter.com/jennyklinge/status/543329449069260801">December 12, 2014</a></blockquote>

<blockquote class="twitter-tweet" data-dnt="true" data-conversation="none" data-cards="hidden" lang="no" lang="no"><p><a href="https://twitter.com/partipisken">@partipisken</a> Dette var en teknisk feil :-)</p>&mdash; Elin Agdestein (@ElinAgdestein) <a href="https://twitter.com/ElinAgdestein/status/563596522705940480">February 6, 2015</a></blockquote>

<blockquote class="twitter-tweet" data-dnt="true" data-conversation="none" data-cards="hidden" lang="no" lang="no"><p><a href="https://twitter.com/partipisken">@partipisken</a> det ble en lang natt</p>&mdash; Sveinung Stensland (@sveinungen) <a href="https://twitter.com/sveinungen/status/580645226865430528">March 25, 2015</a></blockquote>


Det var også det [Aslak Borgersrud](https://twitter.com/aslak_gatas) fant da han i desember brukte topplister fra vår database til [å konfrontere](http://enslask.no/2014/12/sa-ofte-stemmer-politikerne-mot-sitt-eget-parti/) to politikere med tallene, og det var dette inntrykket vi satt igjen med etter vår egen konfrontasjon med politikere vedrørende saker med overraskende mange utbrytere, deriblant [lovfesting av minstelønn](https://www.holderdeord.no/votes/1418069544ne), [endringer i barneloven](https://www.holderdeord.no/votes/1268171572ne), [endringer i abortloven](https://www.holderdeord.no/votes/1360701677ne).

<div id="{{ page.title | slugify }}-top-20"></div>
<figcaption>Representanter med flest utbryterstemmer, oktober 2009 - desember 2014</figcaption>

Det viser seg likevel at det ikke finnes noen sammenheng mellom stemmetidspunkt på døgnet og antall utbryterstemmer/feilstemmer. Politikere stemmer ikke oftere feil eller mer i tråd med sin samvittighet senere enn tidligere på døgnet, da de kanskje er trettere og dermed litt sløvere enn ellers. Spekulasjoner om hva som kan være årsaken, det være seg språktekniske aspekter ved voteringsspørsmålet, eller uoppmerksomhet fra tid til annen, blir heller ikke så viktig når vi vet at en feilstemme aldri har endret et resultat av en votering på Stortinget. Stemmegivingen meldes nemlig inn på forhånd, med unntak av noen få spørsmål som fremmes i salen, og dersom Presidenten oppdager at utfallet av saken er annerledes enn det som var meldt inn vil han eller hun opplyse om dette og voteringen tas på nytt. 

Noen ganger oppdager representantene at de har stemt feil, og gir beskjed om dette ved å rope ut til Presidenten. Dette har vi imidlertid kun funnet 59 eksempler på i alle referatene fra perioden oktober 2009 til i dag, mens antallet utbryterstemmer er 2083. Så lenge feilstemmingen ikke påvirker utfallet i saken, har nemlig ikke representantene noen grunn til å få dem rettet. Som Robert Erikssons svar til Aslak Borgersrud:

<blockquote>Det er selvfølgelig beklagelig. […] Heldigvis har disse feilene ikke hatt betydning for flertallet.
<cite>Robert Eriksson, FrP</cite>
</blockquote>

Og som Høyres Sveinung Stensland svarte til oss:

<blockquote>Eg stemte dessverre feil, opplyste innpiskeren om det, men vi fant det ikke nødvendig å korrigere protokollen.
<cite>Sveinung Stensland, H</cite>
</blockquote>

Faren for at en feilstemme kan påvirke resultatet av en avstemming er med andre ord svært liten, og vi kan ikke annet enn å konkludere med at dette ikke utgjør noen forskjell for vedtak av lover, ei heller er dette derfor en trussel mot vårt representative demokrati. Partienes politikk gjenspeiles rett som det er, og velgerne trenger ikke å frykte at deres mann/kvinne på tinget gjesper ens hjertesak over den partiideologiske linja.


#### Noen ganger med vilje

Det interessante er imidlertid dette med «samvittighetssaker». Vi har vært i kontakt med representanter fra Høyre, FrP, Arbeiderpartiet og Senterpartiet, og alle forteller oss at de i samvittighetsspørsmål lar representantene stemme fritt.

<blockquote>Vi er fristilt i saker som ikke er bestemt av landsmøtet, eller som er hjemlet i partiprogram eller regjeringsplattform.
<cite>Sveinung Stensland, H</cite>
</blockquote>

<blockquote>I Arbeiderpartiet har vi tradisjon for å diskutere oss fram til et standpunkt i en sak for så å stemme sammen. I enkelte saker, for eksempel saker som berører samvittighetsspørsmål eller saker som betyr mye for den enkelte kan gruppa stille medlemmene fritt. Dette syns jeg er en grei ordning.
<cite>Sonja Mandt, Ap</cite>
</blockquote>

«Samvittighetsspørsmål» er et uklart begrep, da eksempler på at representanter med viten og vilje har stemt mot eget parti spenner fra forslag om å [hindre legers rett til å nekte henvisning til abort](https://www.holderdeord.no/votes/1393504041ne), [innføre datalagringsdirektivet](https://www.holderdeord.no/votes/1301946411e), [styrke det lokale selvstyret over motorferdsel i utmark](https://www.holderdeord.no/votes/1302039912ne) og [avvikle monarkiet](https://www.holderdeord.no/votes/1363721273ne). 

Det som er tydelig er uansett at partiene i mye større grad tillater selvstendig stemmegiving når de er i opposisjon, sammenlignet med når de er i posisjon. Dette er ikke veldig merkelig, særlig ikke for perioden 2009-2013, der opposisjonen ikke hadde noe å vinne på å svinge pisken.

<div id="{{ page.title | slugify }}-parties-timeline"></div>
<figcaption>Andel utbryterstemmer per parti, oktober 2009 - desember 2014</figcaption>

Totalt har også enhetlig stemmegiving blitt styrket det siste året, noe som muligens indikerer større uenigheter innad i regjeringen med støttepartier enn blant de rødgrønne.

<div id="{{ page.title | slugify }}-timeline"></div>
<figcaption>Totalt antall utbryterstemmer over tid</figcaption>


I 2013-2014 er det første gang at Sp og SV har høyere andel utbrytere enn FrP og Høyre. Ap holder seg jevnt lavt, og har faktisk marginalt færre utbrytere enn Høyre også i 2013-2014. Venstre dukker ikke opp i grafen før i 2013-2014 siden de i foregående periode kun hadde 2 representanter og det dermed er vanskelig å anklage noen for å bryte ut. MDG mangler selvsagt, siden Rasmus Hansson ikke kan stemme mot seg selv.


#### Bør representantene innvilges større frihet?

Det er forståelig at representantene ikke kan fristilles der det finnes landsmøtevedtak. Representantene er som sagt representanter nettopp for partiprogrammet, og demokratiet internt i partiene er viktig. Man kan imidlertid argumentere for at større frihet for representantene burde være regelen i saker der partiet mangler formulert politikk, eller partiprogrammets ordlyd er så uklar at det ikke er mulig å utlede hva partiet skal mene. Dette bør da også gjelde dersom det kan bety at utfallet i voteringen blir annerledes enn hva majoriteten i partigruppen mener. Det bør altså være som Høyres Sveinung Stensland i sitatet over mener politikken er i Høyre. 

<img src="{{ page.thumbnail }}" />

Hva som er en samvittighetssak og ikke er som sagt litt uklart. Det som imidlertid ikke var en samvittighetssak i Høyre var striden om reservasjonsrett. Avtalen med støttepartiene gjorde at han var klar for å bruke pisken, siden samvittigheten til legene trumfet samvittigheten til representantene:

> Når det gjelder å stille representantene fritt, har Høyre hatt en tradisjon for det når det gjelder spørsmålet om selvbestemt abort. Da har det vært en sak for den enkeltes personlige samvittighet. Men her snakker vi altså om noen leger som ønsker å utøve sin samvittighet ved å kunne reservere seg. - Trond Helleland, [Trontaledebatten 22.10.2013](https://www.stortinget.no/globalassets/pdf/referater/stortinget/2013-2014/s131022-ny-des-2014.pdf)

Dette til tross for at Høyres Michael Tetschner i en e-post til oss bedyret at de aldri hadde hatt spørsmål om fristilling i andre saker enn datalagringsdirektivetsaken.  

> I samvittighetsspørsmål har Høyre en fin tradisjon med å "stille representantene fritt". Formuleringen tyder på at man har hjemmel til å binde, men det har man ikke juridisk. Så realiteten er at man ikke vil bruke sosialt press på de som utgjør mindretallet. Der man såkalt binder, er det snakk om overtalelse og argumentasjon.


Han avviser altså at partipisken kan svinges i Høyre, men skriver senere at 

> Hvis det gjelder saker som kan få betydning for regjeringens overlevelse eller anseelse, vil det å tviholde på egne primærstandpunkter ikke bli forstått med mindre det dreier seg om grunnleggende menneskerettighetsprinsipper. Selv den mest ranke idealist må kunne være i stand til å prioritere sine slag.

I Arbeiderpartiet var saken om [rituell omskjæring av guttebarn](https://www.holderdeord.no/votes/1402951833e)ikke en tydelig samvittighetssak. Dette er ikke omtalt i Arbeiderpartiets program, ei heller vært oppe til behandling på et landsmøte, og er således en sak representantene ikke har lovet noe som helst i, eller en sak der velgerne forventer noe spesielt, annet enn utfra velgerens oppfatning av hva partiet står for. Saken ble diskutert internt, men representantene fikk ikke tillatelse til å stemme slik de ville, til tross for at Sonja Mandt i Arbeiderpartiet har sagt at de har tradisjon for å la folk stemme fritt i samvittighetssaker. I stedet for å tvinge folk til å stemme for en sak de i utgangspunktet var mot fant Arbeiderpartiets Freddy de Ruiter en fiffig løsning på problemet: Han ba om å bli byttet ut så han ikke måtte møte i salen.

> Det var mest renhårig. Jeg kunne ikke stemme for dette av samvittighetsgrunner, 
 Freddy de Ruiter til [Dagsavisen, 03.01.2015](http://www.dagsavisen.no/innenriks/slaget-om-ny-omskj%C3%A6ringslov-1.308487)

Utbyttingsordningen gjør det mulig å slippe å møte til avstemning med den opprinnelige hensikt å ta hensyn til at representantene har mange andre oppgaver enn å møte i Stortingssalen. Det er imidlertid problematisk hvis denne ordningen benyttes til å avstå fra å stemme når de faktisk har mulighet til å delta. At man ikke er enig med eget parti bør ikke være gyldig grunn til å avstå fra en avstemning. 
Det store problemet med dette er at man i flere saker vil kunne ha falske flertall, noe som utfordrer kjernen i parlamentarismen. 

At ordningen kan benyttes på denne måten gjør det i tillegg vanskelig å ettergå representantene. Vi kan ikke vite hva representantene fra våre valgkretser faktisk mener i ulike saker (med mindre de går ut i media med det), bare hva partigruppen på Stortinget mener, noe som er en svakhet ved partidemokratiet. Hvis representanter skal bindes bør det skje ved landsmøtevedtak, ikke ved at et flertall i stortingsgruppen bestemmer det.

Det er derfor behov for mer åpenhet og større aksept for samvittighetstemmer innad i partiene. Med større åpenhet, også utenfor partienes lukkede dører, ville representantene ikke bare stått fast ved sine prinsipper, men også følt på hva menneskene de representerer mener. Debatten ville også blitt langt mer spennende, og de ulike regionale interessene ville kunnet komme frem, slik hensikten med valgkretser jo er. Det er heller presset derifra som burde få en individuell representant eller et helt parti til å snu.