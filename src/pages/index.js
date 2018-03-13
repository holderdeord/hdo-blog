import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Byline from "../components/Byline";

class BlogIndex extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title');
        const posts = get(this, 'props.data.allMarkdownRemark.edges');

        return (
            <div className="posts">
                <Helmet title={siteTitle} />
                {posts.map(({ node }) => {
                    const title = get(node, 'frontmatter.title') || node.fields.slug;
                    const {thumbnail, date, dateFormatted, authors} = node.frontmatter;
                    return (
                        <article className="post" key={node.fields.slug}>
                            <Link className="post-link" to={node.fields.slug}>
                                {thumbnail && <div className="post-image" style={{backgroundImage:`url(${thumbnail}`}} />}
                                <h2 className="post-title">
                                    {title}
                                </h2>
                            </Link>
                            <Byline
                                date={date}
                                dateFormatted={dateFormatted}
                                authors={authors}
                            />
                            <div className="post-content">
                                <p>
                                    <strong dangerouslySetInnerHTML={{ __html: node.excerpt }}></strong>
                                </p>
                            </div>
                        </article>
                    )
                })}
            </div>
        )
    }
}

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
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
  }
`;
