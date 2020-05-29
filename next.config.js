module.exports = {
  experimental: {
    modern: true,
    polyfillsOptimization: true,
    reactRefresh: false, // Current version preact does not support react refresh
  },
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    })
    return cfg
  },
}
