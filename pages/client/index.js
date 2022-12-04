import React from "react";

export default function index() {
  return (
    <div className="h-full">
      <section className="text-gray-600 body-font h-full">
        <div className="bg-no-repeat bg-cover container px-5 py-24 mx-auto bg-[url('https://images.unsplash.com/photo-1594935975218-a3596da034a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] h-5/6">
          <div className=" flex flex-col text-center  w-full mb-12 backdrop-blur-lg">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Bienvenue dans l&#039;espace client LIVE TRACKING PLUS
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              <span id="i5wjr">
                L&#039;espace client est un tableau de bord qui vous aide à
                suivre votre flux de géolocalisation
              </span>
            </p>
          </div>
          <form method="get" id="iynx">
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
              <div className="relative flex-grow w-full">
                <label
                  for="full-name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative flex-grow w-full">
                <label
                  for="password"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Connexion
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
