import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // This worktree's node_modules is a Windows junction pointing at the main
  // checkout (C:/Users/mutee/Desktop/website-clone-template/node_modules),
  // which lives outside this directory. Turbopack's default root-detection
  // panics on that ("Symlink [project]/node_modules is invalid, it points
  // out of the filesystem root") unless an explicit root covering both
  // paths is provided. Forward slashes are required here — backslashes get
  // mis-parsed by Turbopack's Windows path handling in this Next.js build.
  turbopack: {
    root: "C:/Users/mutee/Desktop",
  },
};

export default nextConfig;
