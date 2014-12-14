# [hdo-blog](http://blog.holderdeord.no/) [![Build Status](https://travis-ci.org/holderdeord/hdo-blog.svg?branch=gh-pages)](https://travis-ci.org/holderdeord/hdo-blog)

## Bidra

Les om hvordan du kan bidra til bloggen i [bidra.md](https://github.com/holderdeord/hdo-blog/blob/gh-pages/bidra.md)

## Kjøre lokalt

For å kjøre lokalt trenger du [Ruby](https://www.ruby-lang.org/en/).
Les mer om avhengighetene her http://jekyllrb.com/docs/installation/.

```bash
$ gem install bundler # only needed once
$ bundle install
$ bundle exec jekyll serve
```

Om alt har gått bra besøker du http://localhost:4000 i nettleseren og kan se bloggen.

## Testing

Dersom du ønsker å teste htmlen kan du kjøre følgende kommando:

```bash
bundle exec htmlproof ./_site
```
