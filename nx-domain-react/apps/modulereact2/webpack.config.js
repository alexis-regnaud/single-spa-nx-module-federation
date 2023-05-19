//const webpack = require('webpack');
const { withModuleFederation } = require('@nrwl/react/module-federation');

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

  parsedConfig.devServer = {
    ...parsedConfig.devServer,
    //historyApiFallback: true,
    /*   static: {
      directory: path.join(__dirname, 'dist'),
    },*/
  };

  parsedConfig.infrastructureLogging = {
    level: 'verbose',
    colors: true,
  };

  console.log('parsedConfig', parsedConfig);

  return parsedConfig;
};
