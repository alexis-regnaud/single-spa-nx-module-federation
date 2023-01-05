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

  return merge(federatedModules(config, context), {
    // overwrite values here
  });
};
