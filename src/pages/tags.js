import React from 'react';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';

class TagsPage extends React.PureComponent {
  indexTags() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges');
    const tags = {};
    posts.forEach((post) => {
      const postTags = post.node.frontmatter.tags || [];
      postTags.forEach((tag) => {
        if (tag in tags) {
          tags[tag].push(post.node);
        } else {
          tags[tag] = [post.node];
        }
      });
    });

    return tags;
  }

  render() {
    const { location } = this.props;
    const tagIndex = this.indexTags();
    return (
      <Layout location={location}>
        <div className="page-tags">
          <Helmet title="Tags" />
          <h2>Tags</h2>
          {Object.entries(tagIndex)
            .sort()
            .map(([tag, posts]) => (
              <div>
                <h3>{tag}</h3>
                <ul>
                  {posts.map((post) => (
                    <li>
                      <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                      {' '}
                      <small>
                        <time dateTime={post.frontmatter.date}>{post.frontmatter.dateFormatted}</time>
                      </small>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </Layout>
    );
  }
}

export default TagsPage;

export const pageQuery = graphql`
  query TagsQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            dateFormatted: date(formatString: "LL", locale: "nb")
            date
            tags
            title
          }
        }
      }
    }
  }
`;
