/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path:`.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata:{
    title: "Gatsby Project",
    description: "Some random description",
    author: "jynadal",
    data: ["item 1", "item 2"],
    person: { name: "peter", age: 32},
  },
  plugins: [ 
   `gatsby-transformer-sharp`,
   `gatsby-plugin-sharp`,
   {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/src/posts/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: process.env.MY_SPACE_ID,
      accessToken: process.env.MY_ACCESS_TOKEN,
    },
  },
],
}
