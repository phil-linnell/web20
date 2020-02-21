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