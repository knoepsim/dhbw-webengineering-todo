import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath:
    process.env.NODE_ENV === "production" ? "/Template_Next" : undefined,
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/Template_Next/" : undefined,
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
