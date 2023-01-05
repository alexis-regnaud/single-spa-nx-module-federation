// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'modulereact1',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  remotes: [
    'modulereact2',
    ['moduleangular', 'http://localhost:3013/remoteEntry.mjs'],
  ],
};

module.exports = moduleFederationConfig;
