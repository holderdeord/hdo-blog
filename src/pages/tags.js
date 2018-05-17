import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';

class TagsPage extends React.PureComponent {
  indexTags() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges');
    const tags = {};
    posts.forEach(post => {
      const postTags = post.node.frontmatter.tags || [];
      postTags.forEach(tag => {
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
    const tagIndex = this.indexTags();
    return (
      <div>
        {Object.entries(tagIndex)
          .sort()
          .map(([tag, posts]) => (
            <div>
              <h3>{tag}</h3>
              <ul>
                {posts.map(post => (
                  <li>
                    <Link to={post.fields.slug}>{post.frontmatter.title}</Link>{' '}
                    <small>
                      <time dateTime={post.frontmatter.date}>{post.frontmatter.dateFormatted}</time>
                    </small>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    );
  }
}

export default TagsPage;

// eslint-disable-next-line no-undef
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
