const fs = require("fs");
const path = require("path");
//const blogPostsFolder = "./content/blogPosts";
//const postsPath = path.join(__dirname, ".", "content/blogPosts");

const getPathsForPosts = () => {
  //const postsDirectory = path.join(process.cwd(), "content/blogPosts");
  //const postsDirectory = path.resolve(__dirname, "./content/blogPosts");
  const postsDirectory =
    "/opt/build/repo/node_modules/next/dist/export/content/blogPosts";

  return fs
    .readdirSync(postsDirectory)
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
