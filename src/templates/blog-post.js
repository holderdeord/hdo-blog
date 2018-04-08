import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Byline from "../components/Byline";
import LoadScripts from "../components/LoadScripts";
import HeadMeta from "../components/HeadMeta";

class BlogPostTemplate extends React.Component {
    getAuthors(names=[], authorData) {
        let authors = [];
        names.map((name) => {
            authorData.map((author) => {
                if (author.node.name === name) {
                    authors.push(author.node);
                }
            });
        });
        return authors;
    }
    render() {
        const post = this.props.data.markdownRemark;
        const authorData = get(this, 'props.data.allAuthorsYaml.edges');
        const site = get(this, 'props.data.site.siteMetadata');
        const { previous, next } = this.props.pathContext;
        const { title, thumbnail, thumbnail_credit, date, dateFormatted, authors, scripts} = post.frontmatter;

        return (
            <div className="post">
                <HeadMeta articleTitle={title} site={site} />
                <img src={thumbnail} className="top img-responsive" alt={title} />
                {
                    thumbnail_credit &&
                    <figcaption className="thumbnail-credit">{thumbnail_credit}</figcaption>
                }
                    <h1>{post.frontmatter.title}</h1>
                <Byline date={date} dateFormatted={dateFormatted} authors={this.getAuthors(authors, authorData)} />
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
                <LoadScripts scripts={scripts} slug={post.fields.slugTitle} />
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
            fields {
                slugTitle
            }
            frontmatter {
                title
                dateFormatted: date(formatString: "DD. MMMM YYYY")
                date
                thumbnail
                thumbnail_credit
                authors
                scripts
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
