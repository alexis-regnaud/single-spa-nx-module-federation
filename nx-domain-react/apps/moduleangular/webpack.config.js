//const webpack = require('webpack');
const { withModuleFederation } = require('@nrwl/angular/module-federation');
const path = require('path');

const baseConfig = require('./module-federation.config');

/**
 * @type {import('@nrwl/react/module-federation').ModuleFederationConfig}
 **/
const defaultConfig = {
  ...baseConfig,
};

module.exports = async (config, context) => {
  const mf = await withModuleFederation(defaultConfig);

  /** @type {import('webpack').Configuration} */
  const parsedConfig = mf(config, context);

  parsedConfig.context = path.resolve(__dirname, '.');

  parsedConfig.devServer = {
    ...parsedConfig.devServer,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: true,
  };

  parsedConfig.infrastructureLogging = {
    level: 'verbose',
    colors: true,
  };

  console.log('parsedConfig', parsedConfig);

  return parsedConfig;
};
