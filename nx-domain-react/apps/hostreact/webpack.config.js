// @ts-check
//const webpack = require('webpack');
//const { merge } = require('webpack-merge');
const { withModuleFederation } = require('@nrwl/react/module-federation');
const { FederatedTypesPlugin } = require('@module-federation/typescript');

const mfConfig = require('./module-federation.config');
//const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
//const {dependencies: deps} = require("../../package.json");

module.exports = async (config, context) => {
  const mf = await withModuleFederation({
    ...mfConfig,
  });

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

  parsedConfig.plugins = [
    ...(plugins || []),
    new FederatedTypesPlugin({
      federationConfig: moduleFederationPlugin._options,
    }),
  ];

  parsedConfig.devServer = {
    ...parsedConfig.devServer,
    historyApiFallback: true,
  };

  parsedConfig.infrastructureLogging = {
    level: 'verbose',
    colors: true,
  };

  console.log('parsedConfig', parsedConfig.devServer);

  return parsedConfig;

  /*  return merge(parsedConfig, {
    // overwrite values here
  });*/
};
