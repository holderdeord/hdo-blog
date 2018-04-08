import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';

import Byline from '../components/Byline';
import HeadMeta from '../components/HeadMeta';
import { getAuthors } from '../utils';

class BlogIndex extends React.PureComponent {
  render() {
    const site = get(this, 'props.data.site.siteMetadata');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');
    const authorData = get(this, 'props.data.allAuthorsYaml.edges');

    const numFeatured = 5;
    const latestPosts = posts.slice(0, numFeatured);
    const archivedPosts = posts.slice(numFeatured);

    return (
      <div className="posts">
        <HeadMeta site={site} />
        {latestPosts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug;
          const { thumbnail, date, dateFormatted, authors } = node.frontmatter;
          return (
            <article className="post" key={node.fields.slug}>
              <Link className="post-link" to={node.fields.slug}>
                {thumbnail && (
                  <div
                    className="post-image"
                    style={{ backgroundImage: `url('${thumbnail}')` }}
                  />
                )}
                <h2 className="post-title">{title}</h2>
              </Link>
              <Byline
                date={date}
                dateFormatted={dateFormatted}
                authors={getAuthors(authors, authorData)}
              />
              <div className="post-content">
                <p>
                  {/* eslint-disable-next-line react/no-danger */}
                  <strong dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </p>
                <Link to={node.fields.slug}>Les mer</Link>
              </div>
            </article>
          );
        })}
        <div className="postarchive">
          <h2>Arkiv</h2>
          {archivedPosts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug;
            const { date, dateFormatted } = node.frontmatter;
            return (
              <div className="postarchive-post" key={node.fields.slug}>
                <small>
                  <time dateTime={date}>{dateFormatted}</time>
                </small>
                <Link to={node.fields.slug}>{title}</Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BlogIndex;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query IndexQuery {
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            dateFormatted: date(formatString: "DD MMMM, YYYY")
            date
            title
            thumbnail
            thumbnail_credit
            authors
          }
        }
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
