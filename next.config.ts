import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  output: "standalone",

  experimental: {
    serverActions: {},
  },

  turbopack: {},

  modularizeImports: {
    "@next/font/google": {
      transform: "@next/font/google/target.css",
    },
  },
};

export default createNextIntlPlugin()(nextConfig);
