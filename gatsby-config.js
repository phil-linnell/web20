require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

let contentfulOptions = {}
if (process.env.CONTEXT === "production") {
  contentfulOptions = {
    spaceId: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_TOKEN,
    host: process.env.CONTENTFUL_HOST,
  }
} else {
  contentfulOptions = {
    spaceId: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
    host: process.env.CONTENTFUL_PREVIEW_HOST,
  }
}

module.exports = {
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-linaria`,
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulOptions
    }
  ]
};
