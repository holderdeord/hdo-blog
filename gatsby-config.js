module.exports = {
  siteMetadata: require('./src/siteMetadata.js'),
  // pathPrefix: '/hdo-blog',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/pages`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        // Ref: https://github.com/jonschlinkert/gray-matter#optionsexcerpt
        excerpt: file => {
          file.excerpt = file.content
            .split('**')
            .slice(1, 2)
            .join('');
        },
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 512,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-19569290-6',
        anonymize: true,
        respectDNT: true,
      },
    },
    'gatsby-plugin-feed',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Roboto Slab:400,700,300,100'],
      },
    },
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    'gatsby-plugin-sitemap',
  ],
};
