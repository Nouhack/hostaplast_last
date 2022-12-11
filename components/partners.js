import React from "react";
import { attributes, react as HomeContent } from "../content/partners.md";

export default function Partners() {
  let { partners } = attributes;
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
            Nos partenaires
          </h1>
          <div className="flex flex-wrap -m-4">
            {partners.map((item, index) => {
              return (
                <div className="p-4 md:w-1/2 w-full">
                  <div className="h-full bg-gray-100 p-8 rounded">
                    <img src={item.logo} alt="logo" width={15} height={15} />
                    <p className="leading-relaxed mb-6">{item.description}</p>
                    <a className="inline-flex items-center">
                      <img
                        alt="testimonial"
                        src="https://dummyimage.com/107x107"
                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-gray-900">
                          {item.name}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {item.alias}
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
