import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';

import Byline from '../components/Byline';
import LoadScripts from '../components/LoadScripts';
import HeadMeta from '../components/HeadMeta';
import { getAuthors } from '../utils';

class BlogPostTemplate extends React.Component {
  render() {
    const site = get(this, 'props.data.site.siteMetadata');
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
    } = post.frontmatter;

    return (
      <div className="post">
        <HeadMeta post={post} site={site} />
        <img src={thumbnail} className="top img-responsive" alt={title} />
        {thumbnailCredit && (
          <figcaption className="thumbnail-credit">
            {thumbnailCredit}
          </figcaption>
        )}
        <h1>{title}</h1>
        <Byline
          date={date}
          dateFormatted={dateFormatted}
          authors={getAuthors(authors, authorData)}
        />
        {/* eslint-disable react/no-danger */}
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        {/* eslint-enable react/no-danger */}
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
    site {
      siteMetadata {
        author
        description
        facebookAppId
        title
        twitter
        siteUrl
      }
    }
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
        dateFormatted: date(formatString: "DD. MMMM YYYY")
        date
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
