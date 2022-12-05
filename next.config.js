const fs = require("fs");
//const blogPostsFolder = "./content/blogPosts";
const blogPostsFolder = path.join(process.cwd(), "content/blogPosts");

const getPathsForPosts = () => {
  return fs
    .readdirSync(blogPostsFolder)
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
