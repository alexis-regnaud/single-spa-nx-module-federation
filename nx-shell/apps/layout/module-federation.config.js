// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'layout',
  exposes: {
    './Module': './src/remote-entry.ts',
    './Header': './src/components/Header.js',
    './Navigation': './src/components/Navigation.js',
    './Viewport': './src/components/Viewport.js',
  },
};

module.exports = moduleFederationConfig;
