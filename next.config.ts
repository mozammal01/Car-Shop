import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "upload.wikimedia.org" // ✅ allow Wikimedia logos
    ],
  },
};

export default nextConfig;
