import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    // Set the workspace root to the current project directory
    // This silences the warning about multiple lockfiles
    root: __dirname,
  },
};

export default nextConfig;
