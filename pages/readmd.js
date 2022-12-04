import React, { Component, udeEffect, useState } from "react";

import Link from "next/link";

const BLOG_POSTS_PATH = "../content/blogPosts";

const importBlogPosts = async () => {
  // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
  // second flag in require.context function is if subdirectories should be searched
  const markdownFiles = require
    .context(BLOG_POSTS_PATH, false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`${BLOG_POSTS_PATH}/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

export default function Readmd() {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    importBlogPosts()
      .then((res) => {
        setposts(res);
      })
      .catch((err) => {
        console.log("err");
      });
  }, []);

  return (
    <div className="blog-list">
      {posts.map((post, index) => {
        return (
          <Link key={index} href={`blog/post/${post.slug}`}>
            <a>
              <img src={post.attributes.thumbnail} />
              <h2>{post.attributes.title}</h2>
            </a>
          </Link>
        );
      })}
    </div>
  );
}
