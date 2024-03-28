//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const { FederatedTypesPlugin } = require('@module-federation/typescript');

const federationConfig = {
  exposes: {
    './login': './components/login',
    './go-back': './components/go-back',
  },
  extraOptions: {},
  filename: 'static/chunks/remoteEntry.js',
  name: 'components',
};

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        ...federationConfig,
        remotes: {},
      })
    );

    config.plugins.push(
      new FederatedTypesPlugin({
        federationConfig,
      })
    );

    return config;
  },
};

module.exports = withNx(nextConfig);
