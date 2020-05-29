module.exports = {
  experimental: {
    modern: true,
    polyfillsOptimization: true,
    reactRefresh: false, // Current version preact does not support react refresh
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
    })
    return config
  },
}
