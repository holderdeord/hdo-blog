const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js');
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                  }
                }
              }
            }
          }
        `,
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges;

        _.each(posts, (post, index) => {
          const previous = index === posts.length - 1 ? null : posts[index + 1].node;
          const next = index === 0 ? null : posts[index - 1].node;

          // Ref: https://www.gatsbyjs.org/docs/bound-action-creators/#createPage
          createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          });
        });
      }),
    );
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const filename = createFilePath({ node, getNode, basePath: 'pages' });

    // get the date and title from the file name
    const [, date, title] = filename.match(/^\/([\d]{4}-[\d]{2}-[\d]{2})-(.+)\/$/);
    // create a new slug like jekyll used to
    const slug = `/${date.split('-').join('/')}/${title}/`;

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    // save the date for later use
    createNodeField({
      node,
      name: 'date',
      value: date,
    });

    // save slugTitle
    createNodeField({
      node,
      name: 'slugTitle',
      value: title,
    });
  }
};
