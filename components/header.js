import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Navbar, Button, Dropdown } from "flowbite-react";
import Link from "next/link";
import { attributes, react as HomeContent } from "../content/metadata.md";

export default function Header() {
  const [moved, setmoved] = useState(false);
  let { logo, logolabel, theme } = attributes;
  const router = useRouter();

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
    <Navbar
      className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
      fluid={true}
      rounded={true}
    >
      <Link href="/">
        <Navbar.displayName>
          <img src={logo} className="mr-3 h-10 sm:h-16" alt="Flowbite Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            {logolabel}
          </span>
        </Navbar.displayName>
      </Link>
      <div className="flex md:order-2">
        <Button
          pill
          style={{
            backgroundColor: theme,
          }}
        >
          Espace client
        </Button>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Link href="/">
          <Navbar.displayName
            style={{
              color: router.pathname === "/" && theme,
            }}
          >
            Accueil
          </Navbar.displayName>
        </Link>

        <Dropdown label="Notre compagnie" inline={true}>
          <Dropdown.Item>
            <Link href="/aboutus">À propos de nous</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link href="/value">Valeurs</Link>
          </Dropdown.Item>
        </Dropdown>
        <Dropdown label="Advantages" inline={true}>
          <Dropdown.Item>
            <Link href="/features">Fonctionnalités</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link href="/solution">Solution</Link>
          </Dropdown.Item>
        </Dropdown>

        <Link href="/news">
          <Navbar.displayName
            style={{
              color: router.pathname === "/news" && theme,
            }}
          >
            Nouvelles
          </Navbar.displayName>
        </Link>

        <Link href="/contactus">
          <Navbar.displayName
            style={{
              color: router.pathname === "/contactus" && theme,
            }}
          >
            Contactez Nous
          </Navbar.displayName>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

/* 

    <nav
      className={`${
        moved ? "sticky" : "fixed"
      } top-0 z-50 text-gray-600 body-font bg-white drop-shadow-2xl w-full`}
    >
      <div className="relative container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className={`h-10 text-white  `} src={logo} alt="logo" />
          <span className="ml-3 text-xl">{logolabel}</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className={`mr-5 hover:text-[${theme}]   cursor-pointer`}>
            Accueil
          </Link>
          <div className="group">
            <a className="mr-5 hover:text-gray-900 cursor-pointer">
              Notre compagnie ↓
            </a>
            <div
              className={`hidden z-50 bg-white px-10 py-6  rounded-lg group-hover:block absolute
              `}
            >
              <div
                className="hover:border-b-2 hover:border-solid cursor-pointer mt-5"
                style={{
                  borderColor: theme,
                }}
              >
                <Link href="/aboutus">À propos de nous</Link>
              </div>
              <div
                className="hover:border-b-2  hover:border-solid cursor-pointer mt-5"
                style={{
                  borderColor: theme,
                }}
              >
                <Link href="/value">Valeurs</Link>
              </div>
            </div>
          </div>

          <div className="group">
            <a className="mr-5 hover:text-gray-900 cursor-pointer">Avantages ↓</a>
            <div
              className="hidden z-50 bg-white px-10 py-6  rounded-lg group-hover:block absolute
            "
            >
              <div
                className="hover:border-b-2  hover:border-solid cursor-pointer mt-5"
                style={{
                  borderColor: theme,
                }}
              >
                <Link href="/features">Fonctionnalités</Link>
              </div>

              <div
                className="hover:border-b-2  hover:border-solid cursor-pointer mt-5"
                style={{
                  borderColor: theme,
                }}
              >
                <Link href="/solution">Solution</Link>
              </div>
            </div>
          </div>
          <Link
            href="/news"
            className="mr-5 hover:text-gray-900 cursor-pointer"
          >
            Nouvelles
          </Link>
          <Link
            href="/contactus"
            className="mr-5 hover:text-gray-900 cursor-pointer"
            className=""
          >
            Contactez nous
          </Link>
        </nav>
        <button
          type="button"
          className={`inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0`}
          style={{ backgroundColor: theme, color: "white" }}
        >
          <Link
            href="/client"
            className={`mr-5 hover:text-gray-900 cursor-pointer`}
          >
            Espace client
          </Link>
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            className="w-4 h-4 ml-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </nav>

*/
