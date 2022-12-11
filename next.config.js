/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
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
};
