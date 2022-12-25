import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";
import React from "react";
import { Card, Button } from "flowbite-react";
import { attributes as meta_attributes } from "../../content/metadata.md";

export default function Nouh({ blogs }) {
  let { theme } = meta_attributes;

  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
          From the blog
        </h1>

        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {blogs.map((item, index) => {
            return (
              <div key={index} class="lg:flex">
                <img
                  class="object-cover w-full h-56 rounded-lg lg:w-64"
                  src={item.thumbnail}
                  alt=""
                />

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                  <Link
                    href={`/posts/${item.slug}`}
                    class="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                  >
                    {item.title}
                  </Link>

                  <span class="text-sm text-gray-500 dark:text-gray-300">
                    On: 20 October 2019
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  // List of files in blgos folder
  const filesInBlogs = fs.readdirSync("./content/posts");

  // Get the front matter and slug (the filename without .md) of all files
  const blogs = filesInBlogs.map((filename) => {
    const file = fs.readFileSync(`./content/posts/${filename}`, "utf8");
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
