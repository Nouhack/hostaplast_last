import React from "react";
import Link from "next/link";
import { Card, Button } from "flowbite-react";
import { attributes, react as HomeContent } from "../../content/news.md";
import { attributes as meta_attributes } from "../../content/metadata.md";

export default function Nouh() {
  let { title, news } = attributes;
  let { theme } = meta_attributes;

  return (
    <div>
      {news.map((item, index) => {
        return (
          <Card key={index}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {item.shortdescription}
            </p>
            <Link href={`blog/post/${item.slug}`}>
              <Button
                className="w-1/5"
                style={{
                  backgroundColor: theme,
                }}
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
            </Link>
          </Card>
        );
      })}
    </div>
  );
}
