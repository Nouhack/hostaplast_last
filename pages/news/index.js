import React from "react";
import { attributes, react as HomeContent } from "../../content/metadata.md";

export default function index() {
  let { logo, logolabel, theme } = attributes;
  const news = [
    {
      id: 1,
      title: "first event",
      description: "This is the short description for this event",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    },
    {
      id: 2,
      title: "second event",
      description: "This is the short description for this event",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    },
    {
      id: 3,
      title: "third event",
      description: "This is the short description for this event",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    },
    {
      id: 4,
      title: "fourth event",
      description: "This is the short description for this event",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    },
  ];
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -mx-4 -mb-10 text-center">
            {news.map((item, index) => {
              return (
                <div class="sm:w-1/2 mb-10 px-4" key={index}>
                  <div class="rounded-lg h-64 overflow-hidden">
                    <img
                      alt="content"
                      src="https://dummyimage.com/1201x501"
                      class="object-cover object-center h-full w-full"
                    />
                  </div>
                  <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                    {item.title}
                  </h2>
                  <p class="leading-relaxed text-base">{item.description}</p>
                  <button
                    type="button"
                    className="flex mx-auto mt-6 text-white border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"
                    style={{
                      backgroundColor: theme,
                    }}
                  >
                    Lire...
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
