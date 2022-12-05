const fs = require("fs");
var path = require("path");
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

//const blogPostsFolder = "./content/blogPosts";
//const blogPostsFolder = path.join(process.cwd(), ".next/content/blogPosts");
const dir = path.join(serverRuntimeConfig.PROJECT_ROOT, "./content/blogPosts");

const getPathsForPosts = () => {
  return fs
    .readdirSync(dir)
    .map((blogName) => {
      const trimmedName = blogName.substring(0, blogName.length - 3);
      return {
        [`/blog/post/${trimmedName}`]: {
          page: "/blog/post/[slug]",
          query: {
            slug: trimmedName,
          },
        },
      };
    })
    .reduce((acc, curr) => {
      return { ...acc, ...curr };
    }, {});
};

module.exports = {
  images: {
    unoptimized: true,
  },
  experimental: {
    nftTracing: true,
  },

  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader",
    });
    return configuration;
  },
  async exportPathMap(defaultPathMap) {
    return {
      ...defaultPathMap,
      ...getPathsForPosts(),
    };
  },
};
