/*
import React, { Component } from "react";

import Link from "next/link";

const BLOG_POSTS_PATH = "../../content/blogPosts";

const importBlogPosts = async () => {
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

export default class Blog extends Component {
  static async getInitialProps() {
    const postsList = await importBlogPosts();

    return { postsList };
  }
  render() {
    const { postsList } = this.props;
    return (
      <div className="blog-list">
        {postsList.map((post) => {
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
}

*/
import { promises as fs } from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";

export default function Home({ blogs }) {
  return (
    <div>
      <Head>
        <title>Demo Blog</title>
      </Head>
      <h1>Welcome to my blog</h1>
      <p>This is a subtitle idk what to type here</p>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link href={`/blog/${blog.slug}`}>
              <a>
                {blog.date}:{blog.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  // List of files in blgos folder
  const postsPath = path.join(__dirname, "../..", "content/blogPosts");
  const filesInBlogs = fs.readdirSync(postsPath);

  // Get the front matter and slug (the filename without .md) of all files
  const blogs = filesInBlogs.map((filename) => {
    const file = fs.readFileSync(`../../content/blogPosts/${filename}`, "utf8");
    const matterData = matter(file);

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf(".")),
    };
  });

  return {
    props: {
      blogs,
    },
  };
}
