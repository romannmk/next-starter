const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript({
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: 'scoped',
          },
        },
        'sass-loader',
      ],
    })

    return config
  },
})
