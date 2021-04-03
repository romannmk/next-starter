/* eslint-disable @typescript-eslint/no-var-requires */
const withPreact = require("next-plugin-preact")

module.exports = withPreact({
  experimental: {
    modern: true,
    polyfillsOptimization: true,
    reactRefresh: false, // Current version preact does not support react refresh
  },
})
