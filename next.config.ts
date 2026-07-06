import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? (process.env.BASE_PATH ?? "") : "";

const nextConfig: NextConfig = {
  experimental: {
    devtoolSegmentExplorer: false,
  },
  output: isGithubPages ? "export" : undefined,
  trailingSlash: isGithubPages,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
