import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // O núcleo é entregue como TypeScript, sem passo de build: o Next compila junto com o app.
  transpilePackages: ["@dexplica/nucleo"],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
