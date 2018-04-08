module.exports = {
  siteMetadata: {
    title: 'Holder de ord',
    author: 'Holder de ord',
    description:
      'Holder de ord er en partipolitisk uavhengig organisasjon som jobber for å gi folk større innflytelse over politikken ved hjelp av digitale verktøy.',
    siteUrl: 'https://blog.holderdeord.no',
    twitter: 'holderdeord',
    facebookAppId: '504447209668308',
    disqusShortname: 'holderdeord',
  },
  // pathPrefix: '/hdo-blog',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
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
