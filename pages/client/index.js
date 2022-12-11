import React from "react";
import { attributes, react as HomeContent } from "../../content/metadata.md";

export default function index() {
  let { logo, logolabel, theme } = attributes;
  return (
    <section class="text-gray-600 body-font">
      <div
        class="container px-5 py-24 mx-auto flex flex-wrap items-center
      
   bg-[url('https://images.unsplash.com/photo-1625217527288-93919c99650a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80')] 
   bg-no-repeat	
      "
      >
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 bg-sky-500/50 text-center">
          <h1 class="title-font font-medium text-3xl text-gray-900 tracking-wide">
            Bienvenus dans l&#039;Espace client de LIVE TRACKING PLUS
          </h1>
          <p class="leading-relaxed mt-4 text-white">
            Surveillez tout ce que vous faites via un magnifique tableau de bord
          </p>
        </div>
        <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <form method="get" id="i06c">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
              Connexion
            </h2>
            <div class="relative mb-4">
              <label for="full-name" class="leading-7 text-sm text-gray-600">
                Username
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                required
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                mot de pass
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              class="text-white  border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              style={{
                backgroundColor: theme,
              }}
            >
              Connect
            </button>
            <p class="text-xs text-gray-500 mt-3">
              si vous n&#039;avez pas de compte, veuillez nous contacter pour
              plus de détails
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
