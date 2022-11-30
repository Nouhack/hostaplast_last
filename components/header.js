import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function header() {
  const [moved, setmoved] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position != 0) {
      setmoved(true);
    } else {
      setmoved(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //<nav className={`${moved ? "fixed" : "flex"} text-gray-600 body-font`}></nav>
  return (
    <nav
      className={`${
        moved ? "sticky" : "fixed"
      } top-0 z-50 text-gray-600 body-font bg-white drop-shadow-2xl w-full`}
    >
      <div class="relative container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl">Tailblocks</span>
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" class="mr-5 hover:text-gray-900 cursor-pointer">
            Accueil
          </Link>
          <div className="group">
            <a class="mr-5 hover:text-gray-900 cursor-pointer">
              Notre compagnie ↓
            </a>
            <div
              className={`hidden z-50 bg-white px-10 py-6  rounded-lg group-hover:block absolute
              `}
            >
              <div className="hover:border-b-2 hover:border-black hover:border-solid cursor-pointer mt-5">
                À propos de nous
              </div>
              <div className="hover:border-b-2 hover:border-black hover:border-solid cursor-pointer mt-5">
                Valeurs
              </div>
            </div>
          </div>

          <div className="group">
            <a class="mr-5 hover:text-gray-900 cursor-pointer">Solutions ↓</a>
            <div
              className="hidden z-50 bg-white px-10 py-6  rounded-lg group-hover:block absolute
            "
            >
              <div className="hover:border-b-2 hover:border-black hover:border-solid cursor-pointer mt-5">
                Fonctionnalités
              </div>
              <div className="hover:border-b-2 hover:border-black hover:border-solid cursor-pointer mt-5">
                Avantages
              </div>
            </div>
          </div>
          <a class="mr-5 hover:text-gray-900 cursor-pointer">Nouvelles</a>
          <a class="mr-5 hover:text-gray-900 cursor-pointer">Contactez nous</a>
        </nav>
        <button
          type="button"
          class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          Espace client
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-4 h-4 ml-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}