# Oversikt over hvordan bidra til [hdo-blog](https://github.com/holderdeord/hdo-blog)

NB! Alt som gjøres på Github er åpent for alle å se.  
Det kreves en [Github](https://github.com/) konto for å jobbe med bloggen. Følg instrukser [her](https://github.com/join).  
Vi bruker [Jekyll](jekyllrb.com) på denne bloggen.  

[A. Jeg ønsker å publisere](#a-jeg-%C3%B8nsker-%C3%A5-publisere)  
[B. Jeg ønsker å forhåndsvise uten å publisere](#b-jeg-%C3%B8nsker-%C3%A5-forh%C3%A5ndsvise-uten-%C3%A5-publisere)  
[C. Jeg ønsker å bruke Prose.io til å skrive](#c-jeg-%C3%B8nsker-%C3%A5-bruke-proseio-til-%C3%A5-skrive)  
[D. Jeg trenger hjelp med bilder, lenker, lister og annet Markdown](#d-jeg-trenger-hjelp-med-bilder-lenker-lister-og-annet-markdown)  
[E. Metadata på hdo-blog](#e-metadata-p%C3%A5-hdo-blog)  


## A. Jeg ønsker å publisere

1. For å lage en ny artikkel må du lage en ny fil i mappen som heter [_posts](https://github.com/holderdeord/hdo-blog/tree/gh-pages/_posts).
Trykk på "+" for å lage en ny fil.
Filen skal hete følgende: YYYY-MM-DD-title-of-post.md
2. På toppen av filen må det puttes inn noe metadata [(Les E.)](#e-metadata-p%C3%A5-hdo-blog)
3. Deretter skriver du teksten eventuelt med [Markdown](#d-jeg-trenger-hjelp-med-bilder-lenker-lister-og-annet-markdown).
4. Til slutt skriver du en liten beskrivelse i Commit changes boksen og trykker på grønn "Commit changes" knapp.
Deretter gå til [bloggen](blog.holderdeord.no). Artikkelen skal komme innen 10 minutter.

## B. Jeg ønsker å forhåndsvise uten å publisere

1. For å lage en ny artikkel du ønsker å forhåndsvise må du lage en ny fil i mappen som heter [_drafts](https://github.com/holderdeord/hdo-blog/tree/gh-pages/_drafts).
Trykk på "+" for å lage en ny fil.
Filen skal hete følgende: YYYY-MM-DD-title-of-post.md
2. På toppen av filen må det puttes inn noe metadata [(Les E.)](#e-metadata-p%C3%A5-hdo-blog)
3. Deretter skriver du teksten eventuelt med [Markdown](#d-jeg-trenger-hjelp-med-bilder-lenker-lister-og-annet-markdown).
4. Til slutt skriver du en liten beskrivelse i Commit changes boksen og trykker på grønn "Commit changes" knapp.
Deretter gå til draft [bloggen](drafts.holderdeord.no). Artikkelen skal komme innen 10 minutter.

## C. Jeg ønsker å bruke Prose.io til å skrive

Prose guide vil komme

## D. Jeg trenger hjelp med bilder, lenker, lister og annet Markdown

Det vil komme en Markdown beskrivelse snart

## E. Metadata på hdo-blog

Siden vi bruker Jekyll må vi skrive noe metadata på toppen av hver fil.
Her kommer en liten beskrivelse av hvilke metadata vi bruker og hva det betyr.

```YAML
---
layout: post
title: Ny artikkel
date: 2015-12-31T23:59:59.000+01:00
authors: Navnet ditt
comments: true
thumbnail: https://files.holderdeord.no/images/bilde.png
tags:
- nyheter
- data
- avstemninger
- stortinget
---

Enter text in Markdown.

```

## layout
Denne forteller hvilket utseende som skal brukes. Du vil som regel bruker `post`.

## titel
Her skriver du titelen på artikkelen din.

## date
Her skriver du inn publiseringsdato og tidspunktet du ønsker.

## authors
Her skriver du navnet til forfatteren. Dersom det er flere enn en forfatter skriver du det slik:
```YAML
authors:
- Nasse Nøff
- Ole Brumm
```

## comments
Her skriver du enten `true` eller `false` 

## thumbnail
Legg her ved en URL til et bilde som kan brukes om artikkelen i sosiale medier og andre plasser på bloggen.

## tags
Dersom du ønsker å gruppere artikkelen kan du legge ved relevante ord her. Finn en oversikt over hva andre har brukt [her](http://blog.holderdeord.no/tags/).
