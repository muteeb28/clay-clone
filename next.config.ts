import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  turbopack: {
    // node_modules is a junction into the main template checkout, and this
    // worktree lives outside that checkout's directory tree. Turbopack needs
    // an explicit root that is a common ancestor of both so it can resolve
    // the linked node_modules.
    root: path.join(__dirname, "..", ".."),
  },
};

export default nextConfig;
