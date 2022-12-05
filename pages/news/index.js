import React, { Component } from "react";
import { attributes } from "../../content/metadata.md";
import { Card, Button } from "flowbite-react";
import Link from "next/link";

const BLOG_POSTS_PATH = "../../content/news";

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

export default class News extends Component {
  static async getInitialProps() {
    const postsList = await importBlogPosts();
    return { postsList };
  }
  render() {
    let { logo, logolabel, theme } = attributes;
    const { postsList } = this.props;
    return (
      <div className="mt-32 w-full grow  flex flex-col gap-5">
        {postsList.map((item, index) => {
          return (
            <Card key={index}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.attributes.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {item.attributes.shortdescription}
              </p>
              <Button
                className="w-1/5"
                style={{
                  backgroundColor: theme,
                }}
                //href href={`blog/post/${post.slug}
              >
                Read more
                <svg
                  className="ml-2 -mr-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Card>
          );
        })}
      </div>
    );
  }
}
