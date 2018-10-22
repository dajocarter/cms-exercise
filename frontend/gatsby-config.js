module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'localhost:8888',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: false,
        acfOptionPageIds: [],
        verboseOutput: true,
        perPage: 100,
        searchAndReplaceContentUrls: {
          sourceUrl: 'http://localhost:8888',
          replacementUrl: 'http://localhost:8888',
        },
        concurrentRequests: 10,
        includedRoutes: [
          '/*/*/categories',
          '/*/*/comments',
          '/*/*/posts',
          '/*/*/pages',
          '/*/*/media',
          '/*/*/tags',
          '/*/*/taxonomies',
          '/*/*/users',
        ],
        excludedRoutes: [],
        normalizer: function({ entities }) {
          return entities
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
