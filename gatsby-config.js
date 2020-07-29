module.exports = {
  siteMetadata: {
    title: 'IBM Db2 dsmtop Wiki',
    description: 'A wiki for the Db2 command "dsmtop"',
    keywords: 'dsmtop,db2,ibm',
    lang: 'en',
    navigationStyle: 'sidebar',
    isSearchEnabled: false
  },
  pathPrefix: `/IBM/db2-dsmtop-wiki`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
        navigationStyle: 'sidebar',
        isSearchEnabled: false
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      // disabled edit on github link
      // options: {
      //   mediumAccount: 'carbondesign',
      //   repository: {
      //     baseUrl:
      //       'https://github.com/carbon-design-system/gatsby-theme-carbon',
      //     subDirectory: '/packages/example',
      //   },
      // },
    },
  ],
};
