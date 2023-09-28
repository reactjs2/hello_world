/** @type {import('next').NextConfig} */

const webpack = require("webpack");

const nextConfig = {
  reactStrictMode: false,
};

module.exports = {
  ...nextConfig,
  // output: "export",
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
};
