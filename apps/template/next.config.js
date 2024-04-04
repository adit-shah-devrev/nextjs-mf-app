//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const { FederatedTypesPlugin } = require('@module-federation/typescript');

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';

  return {
    components: `components@${process.env.NEXT_PUBLIC_COMPONENTS_URL}/_next/static/${location}/remoteEntry.js`,
  };
};

const typeRemotes = {
  components: `components@${process.env.NEXT_PUBLIC_COMPONENTS_URL}/_next/static/chunks//remoteEntry.js`,
};

const federationConfig = {
  exposes: {
    './home': './components/home',
    './counter-display': './components/counter-display',
    './components-map': './components/components-map',
  },
  extraOptions: {},
  filename: 'static/chunks/remoteEntry.js',
  name: 'template',
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
        remotes: remotes(options.isServer),
      })
    );

    config.plugins.push(
      new FederatedTypesPlugin({
        federationConfig: {
          ...federationConfig,
          remotes: typeRemotes,
        },
      })
    );

    return config;
  },
};

module.exports = withNx(nextConfig);
