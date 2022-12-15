import React from "react";
import { attributes, react as HomeContent } from "../content/metadata.md";

export default function contactus() {
  let { theme } = attributes;
  return (
    <section className="w-screen text-gray-600 body-font relative ">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          frameborder="0"
          width="100%"
          height="100%"
          marginheight="0"
          marginwidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?&q=algiers sebala&z=14&t=q&output=embed"
          id="iwjv"
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <form
            method="POST"
            name="contact-form"
            action="contact/?success=true"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact-form" />

            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              vous pouvez nous contacter à tout moment, nous sommes disponibles
              24/24h.
            </p>

            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600" htmlFor="name">
                Name
              </label>
              <input
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                id="name"
                name="name"
                required
                type="text"
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlfor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlfor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              style={{
                backgroundColor: theme,
              }}
            >
              Envoyer
            </button>
            <p className="text-xs text-gray-500 mt-3">
              envoyez-nous votre message et nous serons plus qu'heureux de vous
              répondre
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
