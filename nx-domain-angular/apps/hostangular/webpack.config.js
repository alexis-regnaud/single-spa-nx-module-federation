const { withModuleFederation } = require('@nrwl/angular/module-federation');
const configMF = require('./module-federation.config');
const { merge } = require('webpack-merge');
// or `const withModuleFederation = require('@nrwl/angular/module-federation');`

module.exports = async (config, context) => {
  const federatedModules = await withModuleFederation(configMF);

  const finalConfig = merge(federatedModules(config, context), {
    // overwrite values here
  });

  /*  console.log('finalConfig', finalConfig);
  console.log('ModuleFederation', finalConfig.plugins[14]);*/

  return finalConfig;
};
