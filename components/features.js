import React from "react";
import { Accordion } from "flowbite-react";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
import { attributes, react as HomeContent } from "../content/metadata.md";
import { attributes as features_attributes } from "../content/features.md";

export default function Features() {
  let { logo, logolabel, theme } = attributes;
  let { features } = features_attributes;
  return (
    <div>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
        Nos fonctionnalités
      </h1>
      <Accordion arrowIcon={HiOutlineArrowCircleDown} alwaysOpen={true}>
        {features.map((item, index) => {
          return (
            <Accordion.Panel key={index}>
              <Accordion.Title>{item.title}</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          );
        })}
      </Accordion>
    </div>
  );
}

/* 

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
            Nos fonctionnalités
          </h1>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {our_features.map((item, index) => {
              return (
                <div className="p-4 flex md:w-1/2" key={index}>
                  <div
                    className=" w-5 h-5 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-4 flex-shrink-0"
                    style={{
                      backgroundColor: theme,
                    }}
                  >
                    <img className="w-6 w-6" src={item.icon} alt="icon" />
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                      {item.title}
                    </h2>
                    <p className="leading-relaxed text-base">
                      {item.description}
                    </p>
                    <a
                      className="mt-3 cursor-pointer inline-flex items-center"
                      style={{
                        color: theme,
                      }}
                    >
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 ml-2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

*/
