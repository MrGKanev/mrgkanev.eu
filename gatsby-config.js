require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `mrgkanev`,
    description: `Gabriel's personal website. Here you can find all kind of projects, blog posts and everything you need to know about me.`,
    author: `@mrgkanev`,
    image: `https://raw.githubusercontent.com/gmlunesa/gmlunesa.github.io/development/src/images/ogimage.png`,
    url: `https://mrgkanev.eu`,
    siteUrl: `https://www.mrgkanev.eu`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options:
      {
        id: "GTM-MHMLJZN",
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mrgkanev`,
        short_name: `mrgkanev`,
        start_url: `/`,
        background_color: `#1b1c1e`,
        theme_color: `#1b1c1e`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
