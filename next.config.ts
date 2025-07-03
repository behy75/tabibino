import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {},
    turbo: {},
  },

  modularizeImports: {
    "@next/font/google": {
      transform: "@next/font/google/target.css",
    },
  },

  output: 'standalone',
};

export default createNextIntlPlugin()(nextConfig);
