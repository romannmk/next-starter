module.exports = {
  stories: ["../**/*.stories.tsx"],
  webpackFinal: async (config) => {
    const nextConfig = require("../next.config.js")
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [require.resolve("babel-preset-react-app")],
      },
    })
    config.resolve.extensions.push(".ts", ".tsx")
    return { ...config, ...nextConfig }
  },
}
