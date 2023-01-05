// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'hostreact',
  exposes: {
    './App': './src/app/app.single-spa.tsx',
  },
  remotes: [
    'modulereact1',
    'modulereact2',
    ['moduleangular', 'http://localhost:3013/remoteEntry.mjs'],
  ],
};

module.exports = moduleFederationConfig;
