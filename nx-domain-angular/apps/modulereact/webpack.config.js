// @ts-check

const { withModuleFederation } = require('@nrwl/react/module-federation');
const configMF = require('./module-federation.config');
const { merge } = require('webpack-merge');
// or `const withModuleFederation = require('@nrwl/angular/module-federation');`

module.exports = async (config, context) => {
  const federatedModules = await withModuleFederation(configMF);

  return merge(federatedModules(config, context), {
    // overwrite values here
  });
};
