import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby-link';
import striptags from 'striptags';
import he from 'he';

function toSentence(arr) {
  return arr.join(', ').replace(/,\s([^,]+)$/, ' and $1');
}

function stripNewLines(someText) {
  return someText.replace(/\r?\n|\r/gm, '');
}

function encodeHTMLEntities(someText) {
  return he.encode(someText, { useNamedReferences: true });
}

export default class HeadMeta extends React.PureComponent {
  /** Site meta for Faceebook, Twitter, etc
   * Ref: https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started
   * */
  render() {
    const { site, post } = this.props;
    const title = post
      ? `${post.frontmatter.title} · ${site.title}`
      : site.title;
    const ogTitle = post ? post.frontmatter.title : site.title;

    let ogDescription = striptags(stripNewLines(site.description));
    if (post && post.excerpt) {
      ogDescription = encodeHTMLEntities(
        striptags(stripNewLines(post.excerpt))
      );
    } else if (post && post.description) {
      ogDescription = stripNewLines(post.description);
    }

    const author =
      post && post.frontmatter.authors
        ? toSentence(post.frontmatter.authors)
        : site.author;

    const ogType = post ? 'article' : 'website';

    const twitterCard =
      post && post.frontmatter.twitter_card
        ? post.frontmatter.twitter_card
        : 'summary';

    let ogImage = withPrefix('/images/logo.jpg');
    if (post && post.graphic) {
      ogImage = post.graphic.url;
    } else if (post && post.frontmatter.thumbnail) {
      ogImage = post.frontmatter.thumbnail;
    }

    const canonicalURL = post
      ? `${site.siteUrl}${post.fields.slug}`
      : site.siteUrl;

    const hasScripts = post && post.frontmatter.scripts;
    const scripts = hasScripts ? post.frontmatter.scripts : null;

    return (
      <Helmet title={title}>
        <meta property="fb:app_id" content={site.facebookAppId} />

        <meta property="og:title" content={ogTitle} />
        <meta name="twitter:title" content={ogTitle} />

        <meta property="og:site_name" content={site.title} />

        <meta name="description" content={ogDescription} />
        <meta property="og:description" content={ogDescription} />
        <meta name="twitter:description" content={ogDescription} />

        <meta name="author" content={author} />

        <meta name="twitter:site" content={`@${site.twitter}`} />
        <meta name="twitter:creator" content={`@${site.twitter}`} />

        <meta content={ogType} property="og:type" />

        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:widgets:theme" content="light" />
        <meta name="twitter:widgets:link-color" content="#333" />
        <meta name="twitter:widgets:border-color" content="#b8bfcc" />

        {post && (
          <meta
            content={`${site.siteUrl}${post.fields.slug}`}
            property="og:url"
          />
        )}
        {post && (
          <meta
            content={`${site.siteUrl}${post.fields.slug}`}
            property="twitter:url"
          />
        )}

        {post &&
          post.frontmatter.date && (
            <meta
              content={post.frontmatter.date}
              property="article:published_time"
            />
          )}

        <meta property="og:image" content={ogImage} />
        <meta name="twitter:image:src" content={ogImage} />
        <meta name="twitter:image" content={ogImage} />

        {post &&
          post.frontmatter.tags &&
          post.frontmatter.tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}

        {/* Per post stylesheets */}
        {hasScripts &&
          scripts.includes('c3') && (
            <link
              rel="stylesheet"
              href="https://files.holderdeord.no/code/c3js/c3-0.4.10-rc5/c3.min.css"
            />
          )}
        {hasScripts &&
          scripts.includes('c3') && (
            <style>{'.c3-tooltip th { color: #111; }'}</style>
          )}
        {hasScripts &&
          scripts.includes('cal-heatmap') && (
            <link
              rel="stylesheet"
              href="//cdn.jsdelivr.net/cal-heatmap/3.3.10/cal-heatmap.css"
            />
          )}

        <link rel="shortcut icon" href={withPrefix('/favicon.ico')} />
        <link href={canonicalURL} rel="canonical" />
      </Helmet>
    );
  }
}
HeadMeta.propTypes = {
  site: PropTypes.shape({}).isRequired,
  post: PropTypes.shape({}),
};
HeadMeta.defaultProps = {
  post: null,
};
