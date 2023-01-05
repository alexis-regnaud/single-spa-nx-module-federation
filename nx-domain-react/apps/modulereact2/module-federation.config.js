// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'modulereact2',
  exposes: {
    './Module': './src/remote-entry.ts',
    './Parcel': './src/app/parcel.tsx',
  },
};

module.exports = moduleFederationConfig;
