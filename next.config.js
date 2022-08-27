/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {},
  publicRuntimeConfig: {
    // Will be available on both server and client
  },
  compress: true,
  async rewrites() {
    return [
      {
        source: "/*",
        destination: "/",
      },
    ];
  },
  swcMinify: true,
  experimental: {
    reactRemoveProperties: true,
    removeConsole: {
      exclude: ["error"],
    },
    images: {
      allowFutureImage: true,
    },
  },
  images: {
    formats: ["image/jpeg"],
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  // This is just your regular next.config.js options. For example:
  images: {
    domains: [
      "images.pexels.com",
      "i.ibb.co",
      "avatars.githubusercontent.com",
      "images.chesscomfiles.com",
      "i.imgur.com",
    ],
  },
});
