// @ts-check
//const webpack = require('webpack');
//const { merge } = require('webpack-merge');
const { withModuleFederation } = require('@nrwl/react/module-federation');
const mfConfig = require('./module-federation.config');
//const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
//const {dependencies: deps} = require("../../package.json");

module.exports = async (config, context) => {
  const mf = await withModuleFederation({
    ...mfConfig,
  });

  /** @type {import('webpack').Configuration} */
  const parsedConfig = mf(config, context);

  parsedConfig.devServer = {
    ...parsedConfig.devServer,
    historyApiFallback: true,
  };

  parsedConfig.infrastructureLogging = {
    level: 'verbose',
    colors: true,
  };

  console.log('parsedConfig', parsedConfig);

  return parsedConfig;

  /*  return merge(parsedConfig, {
    // overwrite values here
  });*/
};
