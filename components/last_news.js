import React from "react";
import { Card } from "flowbite-react";

export default function last_news() {
  const events = [
    {
      title: "test 2",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      title: "test 2",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      title: "test 3",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
  ];
  return (
    <>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-center mt-10 text-gray-900 mb-20">
        Les dernières nouvelles
      </h1>
      <div className="grid grid-col-1 md:grid-cols-3 justify-center gap-4">
        {events.map((item, index) => {
          return (
            <div className="max-w-sm " key={index}>
              <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
                className="object-cover"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
                <p className="font-normal truncate text-gray-700 dark:text-gray-400">
                  {item.description}
                </p>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}
