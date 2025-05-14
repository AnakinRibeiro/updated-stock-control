import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://oncrets-files.s3.amazonaws.com/**")],
  },
};

export default nextConfig;
