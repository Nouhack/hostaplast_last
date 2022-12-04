import React from "react";
import { attributes, react as HomeContent } from "../content/aboutus.md";

export default function aboutus() {
  let { title, thumbnail, body } = attributes;

  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="bg-gray-100"></div>
      </footer>
      <footer className="text-gray-600 body-font"></footer>
      <footer className="text-gray-600 body-font"></footer>
      <section className="text-gray-600 body-font"></section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <img
            alt="hero"
            src={thumbnail}
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          />
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {title}
            </h1>
            <p className="mb-8 leading-relaxed">{body}</p>
            <form method="get" id="ip4w4"></form>
            <div className="flex"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
