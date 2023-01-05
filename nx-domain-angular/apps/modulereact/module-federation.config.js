// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'modulereact',
  exposes: {
    './Module': './src/remote-entry.tsx',
    './Parcel': './src/app/parcel.tsx',
  },
};

module.exports = moduleFederationConfig;
