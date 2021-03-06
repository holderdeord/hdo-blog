---
layout: post
title: 'Hackathon: Ny saksmodell og saksside '
date: '2013-10-07T16:04:00.002+02:00'
authors:
- Daniel Rees
tags:
- holder de ord
- hackaton
modified_time: '2013-10-07T16:05:51.772+02:00'
thumbnail: https://files.holderdeord.no/images/old-blog/Skjermbilde+2013-10-07+kl.+11.57.35.png
blogger_id: tag:blogger.com,1999:blog-8322637263735564386.post-4253189278163901297
blogger_orig_url: http://blog.holderdeord.no/2013/10/hackathon-ny-saksmodell-og-saksside.html
redirect_from: "/2013/10/hackathon-ny-saksmodell-og-saksside.html"

---

**Målet på helgens hackathon var å gjøre Holder de ord klar til ny stortingsperiode, gjennom å oppdatere saksmodellen og forbedre sakssiden.**

Etter mye tankearbeid og diskusjon landet vi på en forenkling av dagens saksmodell. I den nye modellen knyttes forslag til saken uten å si om forslaget er for/mot saken. Oppsummeringer og løftevurderinger gjøres manuelt som i dagens valenssaker, og hvert parti har én vurdering per stortingsperiode. Hvis stemmegivningen endres, vil kommentaren oppdateres.<br /><br />Ved å koble forslag til sakene i stedet for avstemninger som i dag, blir a) modellen riktigere, og b) vi får muligheten til å holde en oppdatert nyhetsstrøm av forslag som har blitt stemt over på Stortinget - som feks kan legges på forsiden.<br /><br />

<img border="0" src="//files.holderdeord.no/images/old-blog/Skjermbilde+2013-10-07+kl.+11.57.35.png" alt="Bilde fra hackathon" width="100%" />
<figcaption>Fra hackathon i kafeen på MESH.</figcaption>

<b>Forenkling fra dagens modell</b><br />Samlet sett innebærer dette en vesentlig forenkling i forhold til dagens modell, både fra brukerens perspektiv og når det gjelder laging av saker. I&nbsp;helga eksperimenterte vi med å lage systemer for å la applikasjonen hjelpe til med å finne frem partienes posisjoner, for å supplere og forenkle de manuelle vurderingene. Dette arbeidet vil vi fortsette med.<br /><br />I tilegg ble det startet et arbeid med å planlegge gangen i saksredigering. Når Stortinget åpner denne uken, vil det fortløpende komme forslag inn etter hvert som de stemmes over. Planen er å lage et adminsystem som gjør det enkelt å 1) endre titler og tekst på forslagene slik at de kan inngå i nyhetsstrømmen over hva som skjer på Stortinget, og 2) fortløpende koble de til eksisterende eller nye saker.<br /><br /><b>Ny saksside</b><br />Dagens saksside har ikke mulighet for å vise frem to tidsperioder. I tillegg er oppsummeringene av hvordan partier har stemt visuelt sett frikoblet fra avstemningene, som er selve grunnlaget for oppsummeringene.<br /><br />I helga har vi derfor jobbet videre med en ny saksside basert på en tidslinje-logikk. En av inspirasjonskildene har vært <a href="http://www.nrk.no/nyheter" target="_blank">NRK nyheter (beta)</a>. Avstemningene plasseres etter hverandre på en tidslinje. De siste oppsummeringene ligger øverst. Hvis man blar seg nedover og kommer over i forrige periode (2009-13) vil oppsummeringene endres til de fra forrige periode.<br /><br />Diskusjoner og skisser ligger her: <a href="https://github.com/holderdeord/hdo-site/issues/613">https://github.com/holderdeord/hdo-site/issues/613</a><br /><br /><b>Besøk fra Stortinget:&nbsp;</b><br />I tillegg fikk vi på lørdag besøk av Magnus Eide, Stortingets nye åpne data-ansvarlige. Han kunne fortelle at de hadde store ambisjoner rundt videreutvikling av datatjenesten og API-et, og vi hadde en diskusjon rundt hvilke data vi har mest lyst på, hvor vi blant annet trakk frem referater, register over økonomiske interesser, og komitéinnstillinger.<br /><br /><b>Planen videre er som følger:</b><br />
<ol>
  <li>Konvertere dagens posisjonssaker til valenssaker</li>
  <li>Endre kobling fra avstemning til forslag --&gt; sak</li>
  <li>Fjerne funksjonalitet på saker som vi ikke lenger har bruk for</li>
  <li>Publisere ny saksside</li>
  <li>Stegvis forbedring av admin-systemet, inkl. eksperimentere med koblinger som hjelper til i sakslaging</li>
  <li>Gå videre til endringer på parti-, representant-, spørsmål- og forside</li>
</ol>
