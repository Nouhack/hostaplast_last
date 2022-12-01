import React from "react";
import { attributes, react as HomeContent } from "../content/aboutus.md";

export default function aboutus() {
  let { aboutus } = attributes;

  return (
    <div>
      <footer class="text-gray-600 body-font">
        <div class="bg-gray-100"></div>
      </footer>
      <footer class="text-gray-600 body-font"></footer>
      <footer class="text-gray-600 body-font"></footer>
      <section class="text-gray-600 body-font"></section>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <img
            alt="hero"
            src={aboutus.thumbnail}
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          />
          <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {aboutus.title}
            </h1>
            <p class="mb-8 leading-relaxed">{aboutus.body}</p>
            <form method="get" id="ip4w4"></form>
            <div class="flex"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
