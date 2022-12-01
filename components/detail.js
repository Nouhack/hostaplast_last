import React from "react";
import { attributes } from "../content/metadata.md";
import { attributes as solution_attributes } from "../content/solution.md";

export default function Detail() {
  let { theme } = attributes;
  let { image, title, description } = solution_attributes;
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              alt="hero"
              src={image}
              class="object-cover object-center rounded"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {title}
            </h1>
            <p class="mb-8 leading-relaxed">{description}</p>
            <div class="flex justify-center">
              <button
                type="button"
                className={`inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg`}
                style={{
                  backgroundColor: theme,
                }}
              >
                Détails
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
