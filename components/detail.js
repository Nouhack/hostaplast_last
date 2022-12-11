import React from "react";
import Link from "next/link";
import { attributes } from "../content/metadata.md";
import { attributes as solution_attributes } from "../content/solution.md";

export default function Detail() {
  let { theme } = attributes;
  let { image, title, description } = solution_attributes;
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              alt="hero"
              src={image}
              className="object-cover object-center rounded"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {title}
            </h1>
            <p className="mb-8 leading-relaxed">{description}</p>
            <div className="flex justify-center">
              <Link href="/solution">
                <button
                  type="button"
                  className={`inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg`}
                  style={{
                    backgroundColor: theme,
                  }}
                >
                  Détails
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
