const path = require("path");
const SizePlugin = require("size-plugin");

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === "build-javascript") {
    actions.setWebpackConfig({
      plugins: [
        new SizePlugin()
      ]
    })
  }
}

exports.createPages = async function ({ actions, graphql }) {
  await graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    const posts = result.data.allContentfulPost.edges;

    posts.forEach(edge => {
      actions.createPage({
        path: `/${edge.node.slug}`,
        component: path.resolve("./src/templates/post.js"),
        context: {
          slug: edge.node.slug
        }
      });
    });
  })
};