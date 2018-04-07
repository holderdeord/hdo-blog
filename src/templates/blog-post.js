import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Byline from "../components/Byline";

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark;
        const siteTitle = get(this.props, 'data.site.siteMetadata.title');
        const { previous, next } = this.props.pathContext;
        const { title, thumbnail, thumbnail_credit, date, dateFormatted, authors } = post.frontmatter;

        return (
            <div className="post">
                <Helmet title={`${title} &middot; ${siteTitle}`} />
                <img src={thumbnail} className="top img-responsive" alt={title} />
                {
                    thumbnail_credit &&
                    <figcaption className="thumbnail-credit">{thumbnail_credit}</figcaption>
                }
                    <h1>{post.frontmatter.title}</h1>
                <Byline date={date} dateFormatted={dateFormatted} authors={authors} />
                <div className='post-content' dangerouslySetInnerHTML={{ __html: post.html }} />
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
            </div>
        )
    }
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            html
            frontmatter {
                title
                dateFormatted: date(formatString: "DD. MMMM YYYY")
                date
                thumbnail
                thumbnail_credit
                authors
            }
        }
    }
`;
