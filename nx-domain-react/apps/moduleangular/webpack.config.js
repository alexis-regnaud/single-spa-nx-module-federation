//const webpack = require('webpack');
const { withModuleFederation } = require('@nrwl/angular/module-federation');
const { FederatedTypesPlugin } = require('@module-federation/typescript');
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

  let moduleFederationPlugin;

  const plugins = parsedConfig.plugins?.filter((p) => {
    if (p.constructor.name === 'ModuleFederationPlugin') {
      moduleFederationPlugin = p;
      return false;
    }
    return true;
  });

  parsedConfig.context = path.resolve(__dirname, '.');

  parsedConfig.plugins = [
    ...(plugins || []),
    new FederatedTypesPlugin({
      federationConfig: moduleFederationPlugin._options,
    }),
  ];

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
