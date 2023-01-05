// @ts-check

const { merge } = require('webpack-merge');
const { withModuleFederation } = require('@nrwl/react/module-federation');
const mfConfig = require('./module-federation.config');
//const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
//const {dependencies: deps} = require("../../package.json");

module.exports = async (config, context) => {
  const federatedModules = await withModuleFederation({
    ...mfConfig,
  });

  const finalConfig = merge(federatedModules(config, context), {
    // overwrite values here
  });

  console.log('finalConfig', finalConfig);
  console.log('ModuleFederation', finalConfig.plugins[7]._options);

  return finalConfig;
};
