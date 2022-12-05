import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { HiOutlineArrowRight } from "react-icons/hi";

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
  return (
    <Navbar
      className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900  fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
      fluid={true}
      rounded={true}
    >
      <Link href="/">
        <Navbar.displayName className="flex flex-row">
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
          <HiOutlineArrowRight className="ml-2 h-5 w-5" />
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
        <Dropdown label="Pourquoi nous ?" inline={true}>
          <Dropdown.Item>
            <Link href="/advantages">Avantages</Link>
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
