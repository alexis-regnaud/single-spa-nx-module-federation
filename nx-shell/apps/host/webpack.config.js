// @ts-check
/*const { withModuleFederation } = require('@nrwl/react/module-federation');
const baseConfig = require('./module-federation.config');*/
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('../../package.json').dependencies;

module.exports = async (config, context) => {
  //const federatedModules = await withModuleFederation(baseConfig);

  const finalConfig = merge(config, {
    output: {
      uniqueName: 'host',
      //publicPath: 'auto',
    },
    optimization: {
      /*      nodeEnv: 'development',
      emitOnErrors: false,
      moduleIds: 'deterministic',*/
      runtimeChunk: false,
    },
    experiments: {
      outputModule: true,
    },
    /*   node: { __dirname: true, __filename: true },*/
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          exclude: /node_modules/,
          loader: 'html-loader',
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'host',
        library: { type: 'module' },
        filename: 'remoteEntry.js',
        remotes: {
          layout: 'http://localhost:3001/remoteEntry.js',
          hostreact: 'http://localhost:3010/remoteEntry.js',
          hostangular: 'http://localhost:3020/remoteEntry.mjs',
        },
        /*        shared: {
          react: {
            singleton: true,
            strictVersion: true,
            requiredVersion: deps['react'],
          },
          'react-dom': {
            singleton: true,
            strictVersion: true,
            requiredVersion: deps['react-dom'],
          },
          'single-spa': {
            singleton: true,
            strictVersion: true,
            requiredVersion: deps['single-spa'],
          },
          'single-spa-react': {
            singleton: true,
            strictVersion: true,
            requiredVersion: deps['single-spa-react'],
          },
        },*/
      }),
    ],
  });

  /*  console.log('finalConfig', finalConfig);
  console.log('ModuleFederation', finalConfig.plugins[6]);*/

  console.log('finalConfig', finalConfig);

  return finalConfig;
};
