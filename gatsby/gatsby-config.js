require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: `까치당`,
    description: `까치당의 작업을 소개하고 기록을 보관하는 사이트`,
    twitter: `@kkachidang`,
    siteUrl: 'https://kkachidang.com',
  },
  trailingSlash: `always`,
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        watchMode: true,
        dataset: 'production',
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
