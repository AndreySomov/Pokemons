const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  webpack(config) {
    if (process.env.ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true,
      }));
    }

    // eslint-disable-next-line no-param-reassign
    config.resolve.plugins = [
      ...config.resolve.plugins || [],
      new TsConfigPathsPlugin(),
    ];
    return config;
  },
};
