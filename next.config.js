/** @type {import('next').NextConfig} */

const webpack = require("webpack");

const nextConfig = {
  reactStrictMode: false,
};

module.exports = {
  ...nextConfig,
  // output: "export",
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      })
    );
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.moontechnolabs.com',
      },
      {
        protocol: 'https',
        hostname: 'mtplcdn.s3.amazonaws.com',
      },
    ],
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    NEXT_PUBLIC_IMAGE_URL: process.env.NEXT_PUBLIC_IMAGE_URL,
    NEXT_PUBLIC_IMAGE_MAIN: process.env.NEXT_PUBLIC_IMAGE_MAIN,
    NEXT_PUBLIC_IMAGE_MEGA: process.env.NEXT_PUBLIC_IMAGE_MEGA,
    NEXT_PUBLIC_IMAGE_SVG: process.env.NEXT_PUBLIC_IMAGE_SVG,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
  },
};
