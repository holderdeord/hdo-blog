import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';

import Byline from '../components/Byline';
import LoadScripts from '../components/LoadScripts';
import HeadMeta from '../components/HeadMeta';
import { getAuthors } from '../utils';
import Comments from '../components/Comments';
import siteMetadata from '../siteMetadata';

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this, 'props.data.markdownRemark');
    const authorData = get(this, 'props.data.allAuthorsYaml.edges');
    const pathContext = get(this, 'props.pathContext');
    const { previous, next } = pathContext;
    const {
      title,
      thumbnail,
      thumbnailCredit,
      date,
      dateFormatted,
      authors,
      scripts,
      comments,
    } = post.frontmatter;

    return (
      <div>
        <article className={`post ${post.fields.slugTitle}`}>
          <HeadMeta post={post} site={siteMetadata} />
          {thumbnail && <img src={thumbnail} className="top img-responsive" alt={title} />}
          {thumbnailCredit && (
            <figcaption className="thumbnail-credit">{thumbnailCredit}</figcaption>
          )}
          <h1>{title}</h1>
          <Byline
            date={date}
            dateFormatted={dateFormatted}
            authors={getAuthors(authors, authorData)}
          />
          {/* eslint-disable react/no-danger */}
          <div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
          {/* eslint-enable react/no-danger */}
        </article>
        {comments && (
          <Comments
            shortname={siteMetadata.disqusShortname}
            url={`${siteMetadata.siteUrl}${post.fields.slug}`}
          />
        )}
        <hr />
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {previous && (
            <li>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}

          {next && (
            <li>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </ul>
        <LoadScripts scripts={scripts} slug={post.fields.slugTitle} />
      </div>
    );
  }
}

export default BlogPostTemplate;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt
      fields {
        slug
        slugTitle
      }
      frontmatter {
        authors
        dateFormatted: date(formatString: "LL", locale: "nb")
        date
        comments
        title
        thumbnail
        thumbnailCredit: thumbnail_credit
        twitter_card
        scripts
        tags
      }
    }
    allAuthorsYaml {
      edges {
        node {
          name
          email
          twitter
        }
      }
    }
  }
`;
