//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';

  return {
    template: `template@${process.env.NEXT_PUBLIC_TEMPLATE_URL}/_next/static/${location}/remoteEntry.js`,
    components: `components@${process.env.NEXT_PUBLIC_COMPONENTS_URL}/_next/static/${location}/remoteEntry.js`,
  };
};

const federationConfig = {
  extraOptions: {},
  filename: 'static/chunks/remoteEntry.js',
  name: 'shell',
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

    return config;
  },
};

module.exports = withNx(nextConfig);
