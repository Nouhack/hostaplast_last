import React from "react";
import { attributes, react as HomeContent } from "../content/metadata.md";

export default function Detail() {
  let { logo, logolabel, theme } = attributes;
  return (
    <div>
      <header class="text-gray-600 body-font"></header>
      <section class="text-gray-600 body-font overflow-hidden"></section>
      <section class="text-gray-600 body-font"></section>
      <section class="text-gray-600 body-font"></section>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              alt="hero"
              src="https://dummyimage.com/720x600"
              class="object-cover object-center rounded"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Solution
            </h1>
            <p class="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div class="flex justify-center">
              <button
                type="button"
                class={`inline-flex text-white bg-[${theme}] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg`}
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
