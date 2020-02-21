require("dotenv").config();

module.exports = {
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-linaria`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || "",
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ""
      }
    }
  ]
};
