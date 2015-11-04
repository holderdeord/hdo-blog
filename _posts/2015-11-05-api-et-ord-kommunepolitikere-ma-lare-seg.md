---
layout: post
title: API - et ord kommunepolitikere må lære seg
date: "2015-11-05T00:41:59.000+01:00"
authors: 
  - Tiina Ruohonen
  - Øyvind Bugge Solheim
published: true
comments: true
thumbnail: https://files.holderdeord.no/images/coders.png
twitter_card: summary_large_image
---

**I disse dager inntar nyvalgte politikere kommune- og bystyresalene landet rundt. La årets kommunevalg markere starten på revolusjonen i bruk av informasjonsteknologi i norske kommuner. Gjennom moderne dataverktøy kan det bli mer åpenhet om hva som skjer i din kommune. Dette vil styrke lokalpolitikken og gjøre administrasjonen mer effektiv.**

## Åpenhetsvalget

Mer åpenhet har vært et gjennomgangstema de siste årene og særlig i årets kommunevalg. Raymond Johansen (Ap) lovet på mandag at den nye byregjeringen i Oslo vil tilrettelegge for mer åpenhet i hvordan hovedstaden drives. Likevel har både Stortinget og lokale folkevalgte begrenset publikums innsyn i lokalpolitikken. Etter påtrykk fra lokale partikolleger i blant annet Oslo [endret Stortingspolitikere tidligere i år offentlighetsloven](https://blog.holderdeord.no/2015/06/08/offentlighetsloven-anno-2015/) slik at det ble lettere for byråd å holde informasjon borte fra offentligheten. 

Samtidig som vi har fått en mer lukket lokalpolitisk offentlighet, ser vi en kontinuerlig revolusjon innen informasjonsteknologi. Dette er et paradoks fordi mulighetene for åpenhet aldri har vært større. Informasjonsteknologi har gitt oss nye muligheter for åpenhet og involvering av innbyggere, og det er ingenting som tyder på at innbyggere ønsker mer lukkede administrasjoner. [Enkelte lokallag](http://www.venstre.no/artikkel/2015/06/27/lier-venstres-valgprogram-demokrati-apenhet-inkludering/) gikk sågar til valg i høst på mer åpenhet og demokrati. 

Å publisere både hva som skal behandles og hva som blir vedtatt er en god måte å sørge for åpenhet. Den mest fornuftige måten å gjøre dette på er som åpne, strukturerte data. 

## API

En måte å publisere åpne, strukturerte data er gjennom et API. Forkortelsen står for Application Programming Interface, og er et grensesnitt som gjør at andre kan lage programmer som henter informasjon fra kommunen. Et API er altså ikke et dataprogram i form av et grensesnitt mellom menneske og maskin, men et grensesnitt mellom programvarer. 

[Stortinget innførte en slik datatjeneste i 2012](https://data.stortinget.no/). Det er denne tjenesten som har muliggjort mye av det arbeidet Holder de ord gjør i dag når vi som tredjepart gjenbruker dataene. Et eksempel på slik gjenbruk er tjenesten Sagt i salen som kjapt gir folk oversikt over hva som sies fra Stortingets talerstol, noe som før krevde en gedigen innsats i form av en manuell gjennomgang av referat. Dette er en sentral utfordring i dag: offentlige dokumenter er i prinsippet tilgjengelige, men tilgangen til dem er ofte så dårlig at dette ikke gjelder i praksis.

Stortingets API tilbyr uttrekk fra databaser som benyttes i den parlamentariske behandlingen og inkluderer data om avstemninger, saker, referater, skriftlige spørsmål og representanter. Vi mener tiden er kommet for å lage en tilsvarende tjeneste for kommuner. En slik tjeneste kunne også gjort de offentlige elektroniske postjournalene tilgjengelige som strukturerte data.

## Open Oslo?

Helsinki i Finland er et godt eksempel på hvordan det kan gjøres. [I 2013 laget byen et API som fikk navnet Open Ahjo](http://dev.hel.fi/). Alle dokument i Open Ahjo er maskinlesbare slik at tredjepartsutviklere kan bygge tjenester basert på dataene, slik som Holder de ord har gjort basert på Stortingets API.

I Open Ahjo finnes arbeidet til alle byens utvalg og styrer, deres kommende møter og tidligere møtereferater. Allt ligger tilgjengelig på nettet, gratis, og i et format som er søkbart på nøkkelord, komiteer eller geografisk plassering i byen. Det gjør det enkelt for innbyggerne å søke seg frem til vedtak som berører dem direkte. Tredjepartsutviklere har i tillegg utviklet en app som enkelt lar befolkningen følge med på hva kommunen til enhver tid gjør og beslutter, og dette har blitt en yndet app for journalister. 

## Utnytter potensialet

Open Ahjo er interessant av flere grunner. Den gjør beslutningene i Helsinki mer åpne, noe som er med på å øke legitimiteten til beslutningene og interessen blant befolkningen til hva som skjer i deres by. Open Ahjo brukes også av byens egne politikere som et kroneksempel på hvordan de har blitt mer ressurseffektive og miljøvennlige. Byen anslår at de årlig sparer fire millioner A4-ark som ellers skulle blitt til sakspapirer, samtidig som de har klart å redusere byråkratiet i form av personalkostnader.

Det viktigste argumentet som allikevel trekkes frem av Helsinki har å gjøre med åpenhet. [I følge talspersonen Eila Ratasvuori](http://www.tieto.pl/magazines/tieto-times/tieto-times-112-kuinka-tehostaa-liiketoimintaa/ahjo-saastaa-helsingissa-aikaa-ja-paperia) bidrar åpenheten til «forebygging av korrupsjon, som igjen er direkte knyttet til effektivitet og produktivitet i samfunnet.»

## Foredling gir nye verdier

Poenget med et kommune-API er ikke at kommunene selv skal utvikle alle tjenestene innbyggerne kan ha bruk for. Det som trengs er en viss tilrettelegging slik at gründere får en mulighet til å utvikle nye tjenester til samfunnets beste. I dag hvor digitalisering av tjenester er et satsingsområde og hvor regjeringen har satt sin lit til gründere, vil dette kunne gi flere gevinster samtidig. Innbyggerne får bedre informasjon om ting som opptar dem, og tredjepartsutviklere får fritt spillerom til å lage nye tjenester som ingen visste de trengte før de fikk dem, men som er med på å skape nye verdier i både privat og offentlig sektor. 

[I Norge er Trondheim allerede i gang med å utvikle en nettbasert møteportal](https://www.trondheim.kommune.no/content/1117747129/Digitale-politikere---rett-pa-sak) for gjennomføring av politiske møter. Den skal suppleres med en database som gjør det mulig å hente ut statistikk. Det Trondheim gjør er prisverdig og et stort skritt i riktig retning.

Potensialet for å involvere innbyggerne i kommunearbeidet er stort. Det er et demokratisk problem at offentlighetsloven tolkes så forskjellig fra kommune til kommune, og at de reelle innsyns- og involveringsmulighetene derfor spriker. Bruk derfor neste fire årene i kommunestyrene til å finne frem til digitale løsninger som åpner for mer demokrati og involvering. Det kan kommunene til og med spare penger på. Da kan kommunevalget bli åpenhetsvalget, også i handling.

_En versjon av denne kronikken har tidligere blitt publisert på [NRK Ytring](http://www.nrk.no/ytring/apne-radhusene-for-folket-1.12612254)._


